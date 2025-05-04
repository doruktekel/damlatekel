import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const useUpdateBio = () => {
  const [loading, setLoading] = useState(false);
  const updateBio = async (formData) => {
    const { info, imageUrl, imageName } = formData;
    const verify = errorUpdateBioHandler({
      info,
      imageUrl,
      imageName,
    });

    if (!verify) {
      return;
    }

    setLoading(true);

    try {
      const res = await axios.put("/api/bio", formData, {
        withCredentials: true,
      });
      const data = res.data;
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

  return { loading, updateBio };
};

export default useUpdateBio;

const errorUpdateBioHandler = ({ info, imageUrl, imageName }) => {
  if (!info || !imageUrl || !imageName) {
    toast.error("Lütfen zorunlu alanlari doldurunuz");
    return false;
  }

  return true;
};
