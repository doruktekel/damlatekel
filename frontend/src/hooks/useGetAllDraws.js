import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const useGetAllDraws = (url) => {
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(null);

  const getAllCards = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
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

  useEffect(() => {
    getAllCards();
  }, []);

  return { loading, error, datas, refetch: getAllCards };
};

export default useGetAllDraws;
