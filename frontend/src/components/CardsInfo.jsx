import { Link } from "react-router-dom";
import useGetAllDraws from "../hooks/useGetAllDraws";

const CardsInfo = () => {
  const { datas: allCards } = useGetAllDraws("/api/work/cards/all-cards");
  const { datas: allIllustrations } = useGetAllDraws(
    "/api/work/illustrations/all-illustrations"
  );
  const { datas: allEskizs } = useGetAllDraws("/api/work/eskizs/all-eskizs");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <div className=" bg-blue-500 text-white max-w-80  rounded-lg p-4 shadow-xl flex flex-col gap-2 relative">
        <h1>Kart & Afişler</h1>
        <hr />
        <Link
          to={"/admincards"}
          className="self-center border rounded-md px-2 py-1 hover:bg-white hover:text-gray-500 transition-all ease-in-out duration-300"
        >
          Göster
        </Link>
        <div className="absolute -top-5 right-2 bg-slate-700 text-white rounded-full  w-10 h-10 p-2 text-center shadow-md">
          <p>{allCards.length}</p>
        </div>
      </div>
      <div className=" bg-yellow-500 text-white  max-w-80 rounded-lg p-4 shadow-xl flex flex-col gap-2 relative">
        <h1>Illustrasyonlar</h1>
        <hr />
        <Link
          to={"/adminillustrations"}
          className="self-center border rounded-md px-2 py-1 hover:bg-white hover:text-gray-500 transition-all ease-in-out duration-300"
        >
          Göster
        </Link>
        <div className="absolute -top-5 right-2 bg-slate-700 text-white rounded-full  w-10 h-10 p-2 text-center shadow-md">
          <p>{allIllustrations.length}</p>
        </div>
      </div>{" "}
      <div className=" bg-red-500 text-white  max-w-80 rounded-lg p-4 shadow-xl flex flex-col gap-2 relative">
        <h1>Eskizler</h1>
        <hr />
        <Link
          to={"/admineskizs"}
          className="self-center border rounded-md px-2 py-1 hover:bg-white hover:text-gray-500 transition-all ease-in-out duration-300"
        >
          Göster
        </Link>
        <div className="absolute -top-5 right-2 bg-slate-700 text-white rounded-full  w-10 h-10 p-2 text-center shadow-md">
          <p>{allEskizs.length}</p>
        </div>
      </div>
    </div>
  );
};

export default CardsInfo;
