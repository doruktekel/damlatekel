import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetAllCategories = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const res = await axios.get("/api/category/getall");
        const data = res.data;
        if (data.success === false) {
          throw new Error(data.errorMessage);
        }
        setAllCategories(data || []);
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
        return [];
      }
    };

    getAllCategories();
  }, []);

  return { allCategories };
};

export default useGetAllCategories;
