import { IoLogOutOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useEffect } from "react";

const AdminHeader = () => {
  const { loading, logout, error } = useLogout();
  const navigate = useNavigate();
  const { currentUser } = useSelector((store) => store.user);

  const name =
    currentUser.name.charAt(0).toUpperCase() +
    currentUser.name.slice(1).toLowerCase();

  const handleCreate = () => {
    navigate("/create");
  };
  const handleGoDashboard = () => {
    navigate("/dashboard");
  };

  const handleLogout = async () => {
    await logout();
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);
  return (
    <div className="flex fixed w-full z-10 justify-between mx-auto items-center h-12  sm:h-16 px-5 shadow-lg bg-slate-800 text-white  ">
      <div className="flex gap-2">
        <p>Hosgeldin</p> <p className="font-semibold"> {name}</p>
      </div>

      <div className="flex gap-5">
        <button
          onClick={handleGoDashboard}
          className="flex gap-2 bg-white text-green-700 rounded-lg p-2 items-center hover:shadow-lg "
        >
          <FaHome />
        </button>
        <button
          onClick={handleCreate}
          className="flex gap-2 bg-white text-green-700 rounded-lg p-2 items-center hover:shadow-lg  "
        >
          <FaPlus />
          <p className="font-semibold">Resim Ekle</p>
        </button>
        <button
          onClick={handleLogout}
          className="flex  gap-1 sm:gap-2 items-center border border-white rounded-lg p-1   sm:p-2 hover:bg-white hover:text-slate-800 transition-all ease-in-out duration-300 "
        >
          {loading ? (
            "Loading..."
          ) : (
            <>
              <span>Cikis Yap</span> <IoLogOutOutline className=" sm:text-xl" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
