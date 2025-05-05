import { motion } from "framer-motion";
import useGetBio from "../hooks/useGetBio";
import DOMPurify from "dompurify";

const Bio = () => {
  const { loading, datas } = useGetBio();

  return (
    <div className="w-8/12 mx-auto flex flex-wrap  justify-center py-8 gap-10  ">
      {datas?.imageUrl && (
        <motion.img
          src={datas.imageUrl}
          alt="Biyografi görseli"
          className="w-80 rounded-lg md:min-w-60 md:object-cover flex-1"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
        />
      )}

      {datas?.info && (
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
          className="flex flex-col gap-4  sm:w-3/6 flex-1 "
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(datas.info),
          }}
        />
      )}
    </div>
  );
};

export default Bio;
