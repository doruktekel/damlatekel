import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const useEditWork = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const editWork = async (formData) => {
    setLoading(true);
    try {
      const res = await axios.put(`/api/work/${formData._id}`, formData);
      const data = res.data;

      if (data.success === false) {
        throw new Error(data.errorMessage);
      }
      toast.success("Kayit degistirildi !");
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
      setLoading(true);
    }
  };

  return { loading, editWork };
};

export default useEditWork;
