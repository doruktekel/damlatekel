import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useGetDraws from "../hooks/useGetDraws";
import useGetDrawDetails from "../hooks/useGetDrawDetails";
import Loading from "../components/Loading";

const CardInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const { datas: IllustrationDetails, loading: IllustrationDetailsLoading } =
    useGetDrawDetails(`/api/work/illustrations/${id}`);
  const { datas: allIllustrations, loading: allIllustrationsLoading } =
    useGetDraws("/api/work/illustrations");

  useEffect(() => {
    if (!allIllustrationsLoading && allIllustrations.length > 0) {
      const index = allIllustrations.findIndex((item) => item._id === id);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [id, allIllustrations, allIllustrationsLoading]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        goToNextIllustration();
      } else if (e.key === "ArrowLeft") {
        goToPreviousIllustration();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  const goToNextIllustration = () => {
    if (currentIndex < allIllustrations.length - 1) {
      const nextIllustrationId = allIllustrations[currentIndex + 1]._id;
      navigate(`/illustrations/${nextIllustrationId}`);
    } else {
      // Son karta gelindiğinde, ilk karta dön
      const firstIllustrationId = allIllustrations[0]._id;
      navigate(`/illustrations/${firstIllustrationId}`);
    }
  };

  const goToPreviousIllustration = () => {
    if (currentIndex > 0) {
      const previousIllustrationsId = allIllustrations[currentIndex - 1]._id;
      navigate(`/illustrations/${previousIllustrationsId}`);
    } else {
      // İlk karta gelindiğinde, son karta dön
      const lastIllustrationId =
        allIllustrations[allIllustrations.length - 1]._id;
      navigate(`/illustrations/${lastIllustrationId}`);
    }
  };

  if (!IllustrationDetails) return <p>Illustrasyon bulunamadi</p>;

  return (
    <div className="max-w-7xl mx-auto  py-5">
      {IllustrationDetailsLoading && allIllustrationsLoading ? (
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-wrap justify-between gap-10">
          <FaChevronLeft
            className="self-center text-4xl cursor-pointer"
            onClick={goToPreviousIllustration}
          />
          <div className="max-w-3xl">
            <img
              src={IllustrationDetails.imageUrl}
              alt={IllustrationDetails.title}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-semibold">
              {IllustrationDetails.title}
            </p>
            <p>{IllustrationDetails.description}</p>
          </div>
          <FaChevronRight
            className="self-center text-4xl cursor-pointer"
            onClick={goToNextIllustration}
          />
        </div>
      )}
    </div>
  );
};

export default CardInfo;
