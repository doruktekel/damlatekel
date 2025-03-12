import React from "react";
import { Link } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-10 mt-20">
      <p className="text-4xl">Aradığınız Sayfa Bulunamadı</p>
      <Link
        to={"/"}
        className="flex  gap-1 sm:gap-2 items-center  border-2 border-gray-500 rounded-lg p-1   sm:p-2 hover:bg-gray-500 hover:text-white transition-all ease-in-out duration-300 "
      >
        Ana Sayfaya Geri Don <IoReturnUpBack className="text-2xl font-bold" />
      </Link>
    </div>
  );
};

export default NotFound;
