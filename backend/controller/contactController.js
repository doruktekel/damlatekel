import expressAsyncHandler from "express-async-handler";
import ContactModel from "../model/contactModel.js";

const getContact = expressAsyncHandler(async (req, res) => {
  const contact = await ContactModel.findOne({});
  if (!contact) {
    res.status(404);
    throw new Error("Gosterilebilecek biyografi bulunamadi !");
  }

  const { info, imageUrl, imageName } = contact._doc;
  res.status(200).json({ info, imageUrl, imageName });
});

const createContact = expressAsyncHandler(async (req, res) => {
  const { info, imageUrl, imageName } = req.body;

  if (!info || !imageUrl || !imageName) {
    res.status(400);
    throw new Error("Lutfen zorunlu alanlari doldurunuz !");
  }

  const newContact = await ContactModel.create({
    info,
    imageUrl,
    imageName,
  });

  res.status(201).json(newContact);
});

const updateContact = expressAsyncHandler(async (req, res) => {
  const { info, imageUrl, imageName } = req.body;

  if (!info || !imageUrl || !imageName) {
    res.status(400);
    throw new Error("Lutfen zorunlu alanlari doldurunuz !");
  }

  const updatedContact = await ContactModel.findOneAndUpdate(
    {}, // filtre: ilk kaydı bul
    { info, imageUrl, imageName }, // güncellenecek değerler
    { new: true }
  );

  res.status(201).json(updatedContact);
});

export { getContact, createContact, updateContact };
