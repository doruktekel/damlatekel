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

  const { datas: cardDetails, loading: cardDetailsLoading } = useGetDrawDetails(
    `/api/work/cards/${id}`
  );
  const { datas: allCards, loading: allCardsLoading } =
    useGetDraws("/api/work/cards");

  useEffect(() => {
    if (!allCardsLoading && allCards.length > 0) {
      const index = allCards.findIndex((card) => card._id === id);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [id, allCards, allCardsLoading]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        goToNextCard();
      } else if (e.key === "ArrowLeft") {
        goToPreviousCard();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  const goToNextCard = () => {
    if (currentIndex < allCards.length - 1) {
      const nextCardId = allCards[currentIndex + 1]._id;
      navigate(`/cards/${nextCardId}`);
    } else {
      // Son karta gelindiğinde, ilk karta dön
      const firstCardId = allCards[0]._id;
      navigate(`/cards/${firstCardId}`);
    }
  };

  const goToPreviousCard = () => {
    if (currentIndex > 0) {
      const previousCardId = allCards[currentIndex - 1]._id;
      navigate(`/cards/${previousCardId}`);
    } else {
      // İlk karta gelindiğinde, son karta dön
      const lastCardId = allCards[allCards.length - 1]._id;
      navigate(`/cards/${lastCardId}`);
    }
  };

  if (!cardDetails) return <p>Kartlar Bulunamadı</p>;

  return (
    <div className="max-w-7xl mx-auto  py-5">
      {cardDetailsLoading && allCardsLoading ? (
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-wrap justify-between gap-5">
          <FaChevronLeft
            className="self-center text-4xl cursor-pointer"
            onClick={goToPreviousCard}
          />
          <div className="max-w-2xl flex-1">
            <img src={cardDetails.imageUrl} alt={cardDetails.title} />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <p className="text-xl  ">{cardDetails.title}</p>
            <p>{cardDetails.description}</p>
          </div>
          <FaChevronRight
            className="self-center text-4xl cursor-pointer"
            onClick={goToNextCard}
          />
        </div>
      )}
    </div>
  );
};

export default CardInfo;
