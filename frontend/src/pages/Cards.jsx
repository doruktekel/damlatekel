import { useEffect } from "react";
import Card from "./Card";
import useGetDraws from "../hooks/useGetDraws";
import Loading from "../components/Loading";

const Cards = () => {
  const { loading, datas, loadMore, hasMore } = useGetDraws("/api/work/cards");

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
          document.documentElement.scrollHeight &&
        hasMore &&
        !loading
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading, loadMore]);

  return (
    <div className="w-11/12 mx-auto py-5 flex flex-col justify-center items-center min-h-screen">
      {/* Yükleniyor gösterimi */}

      {/* Kartları render et */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2">
        {datas?.map((data) => (
          <Card key={data._id} data={data} />
        ))}
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default Cards;
