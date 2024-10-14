import expressAsyncHandler from "express-async-handler";
import bcryptjs from "bcryptjs";
import UserModel from "../model/userModel.js";
import validator from "validator";
import jwt from "jsonwebtoken";

const register = expressAsyncHandler(async (req, res) => {
  const { email, password, name } = req.body;

  const existingUser = await UserModel.findOne();
  if (existingUser) {
    res.status(400);
    throw new Error("Sistem Damla disinda kullanici kabul etmiyor !");
  }

  if (!email || !password || !name) {
    res.status(400);
    throw new Error("Butun bos alanlari doldurunuz !");
  }

  const validEmail = validator.isEmail(email);
  if (!validEmail) {
    res.status(400);
    throw new Error("Email hatali formatta !");
  }

  if (password.length < 6) {
    res.status(400);
    throw new Error("Sifre minimum 6 karakterli olmali !");
  }

  const hashedPassword = await bcryptjs.hash(password, 12);

  const admin = await UserModel.create({
    email,
    password: hashedPassword,
    name,
  });

  res.status(201).json("Successful registration ");
});

const login = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("Kullanici bulunamadi !");
  }

  const comparePassword = await bcryptjs.compare(password, user.password);

  if (!comparePassword) {
    res.status(500);
    throw new Error("Yanlis veya hatali bir bilgi girdiniz !");
  }

  const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });

  const { password: _, ...rest } = user._doc;

  res
    .cookie("token", token, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
    })
    .status(200)
    .json(rest);
});

const logout = expressAsyncHandler(async (req, res) => {
  res
    .clearCookie("token")
    .status(200)
    .json("Kullanici basarili bir sekilde cikis yapti !");
});
export { register, login, logout };
