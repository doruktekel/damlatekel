import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const useCreateDraw = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useSelector((store) => store.user);

  const createDraw = async (formData) => {
    const { title, description, imageUrl, category } = formData;
    const verify = errorCreateDrawHandler({
      title,
      description,
      imageUrl,
      category,
    });

    if (!verify) {
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "/api/work/create",
        {
          ...formData,
          user: currentUser._id,
        },
        {
          withCredentials: true,
        }
      );

      const data = res.data;
      if (data.success === false) {
        throw new Error(data.errorMessage);
      }
      toast.success("Yeni is kaydedildi");
      navigate("/dashboard");
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

  return { loading, createDraw };
};

export default useCreateDraw;

const errorCreateDrawHandler = ({ title, imageUrl, category }) => {
  if (!title || !imageUrl || !category) {
    toast.error("lutfen zorunlu alanlari doldurunuz");
    return false;
  }

  return true;
};
