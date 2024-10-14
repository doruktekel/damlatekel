import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const useGetDraws = (url) => {
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState([]);
  const [index, setIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const limit = 10;

  const getDraws = async () => {
    try {
      const res = await axios.get(`${url}?index=${index}&&limit=${limit}`);
      const data = res.data;

      if (data.length < limit) {
        setHasMore(false);
      }
      setDatas((prevData) => [...prevData, ...data]);
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
    setLoading(true);
    if (hasMore) {
      setTimeout(() => {
        getDraws();
      }, 500);
      //   getDraws();
    }
  }, [index]);

  const loadMore = () => {
    if (hasMore) {
      setIndex((prev) => prev + limit);
    }
  };

  return { loading, datas, loadMore, hasMore };
};

export default useGetDraws;
