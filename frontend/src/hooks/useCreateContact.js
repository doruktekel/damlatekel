import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const useCreateContact = () => {
  const [loading, setLoading] = useState(false);
  const createContact = async (formData) => {
    const { info, imageUrl, imageName } = formData;
    const verify = errorCreateContactHandler({
      info,
      imageUrl,
      imageName,
    });

    if (!verify) {
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "/api/contact",

        formData,

        {
          withCredentials: true,
        }
      );

      const data = res.data;
      toast.success("Yeni iletişim kaydedildi");
      return data;
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

  return { loading, createContact };
};

export default useCreateContact;

const errorCreateContactHandler = ({ info, imageUrl, imageName }) => {
  if (!info || !imageUrl || !imageName) {
    toast.error("Lütfen zorunlu alanlari doldurunuz");
    return false;
  }

  return true;
};
