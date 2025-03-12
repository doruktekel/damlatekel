import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const useSendMail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = async (formData) => {
    setLoading(true);
    try {
      const res = await axios.post("/api/mail", formData);
      const data = res.data;

      if (data.success === false) {
        throw new Error(data.errorMessage);
      }
      toast.success("Mail gönderildi");
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

  return { sendEmail, loading, error };
};

export default useSendMail;
