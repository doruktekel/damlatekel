import free1 from "../assets/free1.webp";
import free2 from "../assets/free2.webp";
import { IoWarningOutline } from "react-icons/io5";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "motion/react";

const Free = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="w-8/12 mx-auto flex flex-col items-center flex-wrap py-8 gap-10 min-h-screen ">
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <IoWarningOutline className=" text-3xl md:text-2xl  text-red-600" />
        <p className="text-red-600">Uyarı </p>{" "}
        <p className="text-center">
          Bu ücretsiz hediyeler yalnızca kişisel kullanım içindir !
        </p>
      </div>

      <motion.img
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
        className="w-full"
        src={free1}
        alt="ucretsiz indirilebilir cizim"
      />
      <p className="text-gray-400 text-sm">
        Bu A6 boyutundaki katlanmış tebrik kartının yazdırılabilir PDF'ini ve
        ayrıca renklendirmeye hazır A5 baskısını burada bulabilirsiniz:{" "}
      </p>
      <a
        href="https://www.dropbox.com/scl/fo/67bk3gzhomda4onuad36n/ADTRkmFTsgqiFPJ_lkLkvT8?rlkey=yogt73qhxux8z28i5o1rc9xrl&st=b5ai20cn&dl=0"
        target="_blank"
        rel="noopener noreferrer"
        className={`shadow-xl ease-in-out duration-300 px-5 py-1 flex justify-between items-center gap-2 rounded-full bg-opacity-90 border border-gray-200 ${
          theme === "light"
            ? " bg-gray-200 text-gray-600 hover:bg-blue-400 hover:text-gray-200 "
            : "bg-gray-50 text-gray-800  hover:bg-transparent  hover:text-gray-200 "
        } `}
      >
        <FaCloudDownloadAlt className="text-3xl" />
        <span>İndir</span>
      </a>
      <div className="w-full h-0.5 bg-slate-300"></div>
      <motion.img
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
        }}
        className="w-full"
        src={free2}
        alt="ucretsiz indirilebilir cizim"
      />
      <p className="text-gray-400 text-sm">
        Bu A6 boyutundaki katlanmış tebrik kartının yazdırılabilir PDF'ini ve
        ayrıca renklendirmeye hazır A5 baskısını burada bulabilirsiniz:{" "}
      </p>
      <a
        href="https://www.dropbox.com/scl/fo/67bk3gzhomda4onuad36n/ADTRkmFTsgqiFPJ_lkLkvT8?rlkey=yogt73qhxux8z28i5o1rc9xrl&st=b5ai20cn&dl=0"
        target="_blank"
        rel="noopener noreferrer"
        className={`shadow-xl ease-in-out duration-300 px-5 py-1 flex justify-between items-center gap-2 rounded-full bg-opacity-90 border border-gray-200 ${
          theme === "light"
            ? " bg-gray-200 text-gray-600 hover:bg-blue-400 hover:text-gray-200 "
            : "bg-gray-50 text-gray-800  hover:bg-transparent  hover:text-gray-200 "
        } `}
      >
        <FaCloudDownloadAlt className="text-3xl" />
        <span>İndir</span>
      </a>
    </div>
  );
};

export default Free;
