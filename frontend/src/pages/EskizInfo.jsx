import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useGetDraws from "../hooks/useGetDraws";
import useGetDrawDetails from "../hooks/useGetDrawDetails";
import Loading from "../components/Loading";

const EskizInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const { datas: eskizDetails, loading: eskizDetailsLoading } =
    useGetDrawDetails(`/api/work/eskizs/${id}`);
  const { datas: allEskizs, loading: allEskizsLoading } =
    useGetDraws("/api/work/eskizs");

  useEffect(() => {
    if (!allEskizsLoading && allEskizs.length > 0) {
      const index = allEskizs.findIndex((eskiz) => eskiz._id === id);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [id, allEskizs, allEskizsLoading]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        goToNextEskiz();
      } else if (e.key === "ArrowLeft") {
        goToPreviousEskiz();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  const goToNextEskiz = () => {
    if (currentIndex < allEskizs.length - 1) {
      const nextEskizId = allEskizs[currentIndex + 1]._id;
      navigate(`/eskizs/${nextEskizId}`);
    } else {
      // Son karta gelindiğinde, ilk karta dön
      const firstEskizId = allEskizs[0]._id;
      navigate(`/eskizs/${firstEskizId}`);
    }
  };

  const goToPreviousEskiz = () => {
    if (currentIndex > 0) {
      const previousEskizId = allEskizs[currentIndex - 1]._id;
      navigate(`/eskizs/${previousEskizId}`);
    } else {
      // İlk karta gelindiğinde, son karta dön
      const lastEskizId = allEskizs[allEskizs.length - 1]._id;
      navigate(`/eskizs/${lastEskizId}`);
    }
  };

  if (!eskizDetails) return <p>Eskiz Bulunamadı</p>;

  return (
    <div className="max-w-7xl mx-auto  py-5">
      {eskizDetailsLoading && allEskizsLoading ? (
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-wrap justify-between gap-5">
          <FaChevronLeft
            className="self-center text-4xl cursor-pointer"
            onClick={goToPreviousEskiz}
          />
          <div className="max-w-2xl flex-1">
            <img src={eskizDetails.imageUrl} alt={eskizDetails.title} />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <p className="text-xl  ">{eskizDetails.title}</p>
            <p>{eskizDetails.description}</p>
          </div>
          <FaChevronRight
            className="self-center text-4xl cursor-pointer"
            onClick={goToNextEskiz}
          />
        </div>
      )}
    </div>
  );
};

export default EskizInfo;
