import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetAllWorks = () => {
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getAllWorks = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/work");
        const data = res.data;

        if (data.success === false) {
          throw new Error(data.errorMessage);
        }

        setDatas(data || []);
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

    getAllWorks();
  }, []);

  return { loading, datas };
};

export default useGetAllWorks;
