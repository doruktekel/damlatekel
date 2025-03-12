import { useState } from "react";
import toast from "react-hot-toast";
import validator from "validator";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const useLogin = () => {
  const { error, loading } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (formData) => {
    const { email, password } = formData;
    const valid = errorLoginHandler({
      email,
      password,
    });

    if (!valid) {
      return;
    }
    dispatch(signInStart());
    try {
      const res = await axios.post("/api/auth/login", formData);
      const data = res.data;
      if (data.success === false) {
        dispatch(signInFailure(data.errorMessage));
        throw new Error(data.errorMessage);
      }
      dispatch(signInSuccess(data));
      toast.success("Giriş başarılı :) ");
      navigate("/dashboard");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.errorMessage
      ) {
        toast.error(error.response.data.errorMessage);
        dispatch(signInFailure(error.response.data.errorMessage));
      } else {
        toast.error(error.message);
        dispatch(signInFailure(error.message));
      }
    }
  };

  return { login, loading };
};
export default useLogin;

const errorLoginHandler = ({ email, password, name, confirmPassword }) => {
  if (!email || !password) {
    toast.error("Bütün form elemanlarını doldurunuz !");
    return false;
  }

  const validEmail = validator.isEmail(email);

  if (!validEmail) {
    toast.error("Email yapınız dogru değil !");
    return false;
  }

  if (password.length < 6) {
    toast.error("Şifreniz minimum 6 karakterli olmalı !");
    return false;
  }

  return true;
};
