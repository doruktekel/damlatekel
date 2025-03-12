import { useState } from "react";
import toast from "react-hot-toast";
import validator from "validator";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const register = async (formData) => {
    const { email, password, name, confirmPassword } = formData;
    const valid = errorRegisterHandler({
      email,
      password,
      name,
      confirmPassword,
    });

    if (!valid) {
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/register", formData);
      const data = res.data;
      if (data.success === false) {
        throw new Error(data.errorMessage);
      }
      toast.success("Kayıt başarılı :) ");
      navigate("/login");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.errorMessage
      ) {
        toast.error(error.response.data.errorMessage);
      } else {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { register, loading };
};
export default useRegister;

const errorRegisterHandler = ({ email, password, name, confirmPassword }) => {
  if (!email || !name || !password || !confirmPassword) {
    toast.error("Bütün form elemanlarını doldurunuz !");
    return false;
  }

  const validEmail = validator.isEmail(email);

  if (!validEmail) {
    toast.error("Email yapınız doğru degil !");
    return false;
  }

  if (password.length < 6) {
    toast.error("Şifreniz minimum 6 karakterli olmalı !");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Şifreniz uyumlu değil !");
    return false;
  }

  return true;
};
