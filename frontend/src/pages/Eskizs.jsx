import { useEffect } from "react";
import Eskiz from "./Eskiz";
import useGetDraws from "../hooks/useGetDraws";
import Loading from "../components/Loading";
import { motion } from "motion/react";

const Eskizs = () => {
  const { loading, datas, loadMore, hasMore } = useGetDraws("/api/work/eskizs");

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
    <div className="w-11/12 mx-auto py-5 flex justify-center items-center min-h-screen">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2">
        {datas?.map((data, index) => (
          <motion.div
            initial={{ filter: "blur(4px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            transition={{
              delay: index * 0.2,
              duration: 0.5,
            }}
            viewport={{ once: true }}
            key={data._id}
          >
            <Eskiz data={data} />
          </motion.div>
        ))}
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default Eskizs;
