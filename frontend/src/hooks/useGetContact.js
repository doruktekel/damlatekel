import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetContact = () => {
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState({});

  useEffect(() => {
    const getContact = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/contact");
        const data = res.data;
        setDatas(data || {});
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

    getContact();
  }, []);

  return { loading, datas };
};

export default useGetContact;
