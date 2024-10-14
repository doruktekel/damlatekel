import { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { HiMinusSmall } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const AdminSidebar = () => {
  const [show, setShow] = useState(false);
  const { loading, error, logout } = useLogout();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <div className="px-5 pt-6 h-full fixed min-w-[220px]  left-0 top-8 sm:top-14 bg-slate-800 text-white  ">
      <div className=" flex flex-col  gap-2">
        <p
          className="font-semibold flex justify-between items-center select-none "
          onClick={() => setShow(!show)}
        >
          <span>Cizimlerim </span>
          {show ? <FaArrowCircleDown /> : <HiMinusSmall />}
        </p>
        {show && (
          <ul className="pl-5 flex flex-col gap-2 mt-2  ">
            <li className="flex gap-2 items-center">
              <Link to={"/admincards"} className="hover:underline ">
                Kartlar & Afisler
              </Link>
            </li>
            <li className="flex gap-2 items-center">
              <Link to={"/adminillustrations"} className="hover:underline ">
                Illustrasyonlar
              </Link>
            </li>
            <li className="flex gap-2 items-center">
              <Link to={"/admineskizs"} className="hover:underline ">
                Eskizler
              </Link>
            </li>
          </ul>
        )}
        <hr />
        <div
          className="flex gap-2 items-center cursor-pointer "
          onClick={handleLogout}
        >
          <p className="font-semibold">Cikis</p>
          <IoLogOutOutline className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
