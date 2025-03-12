import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  signOutStart,
  signOutFailure,
  signOutSuccess,
} from "../redux/user/userSlice";

const useLogout = () => {
  const { error, loading } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(signOutStart());
    try {
      const res = await axios.post("/api/auth/logout");
      const data = res.data;
      if (data.success === false) {
        dispatch(signOutFailure(data.errorMessage));
        throw new Error(data.errorMessage);
      }
      dispatch(signOutSuccess());
      toast.success("Cıkış başarılı :) ");
      navigate("/");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.errorMessage
      ) {
        toast.error(error.response.data.errorMessage);
        dispatch(signOutFailure(error.response.data.errorMessage));
      } else {
        toast.error(error.message);
        dispatch(signOutFailure(error.message));
      }
    }
  };

  return { loading, logout, error };
};

export default useLogout;
