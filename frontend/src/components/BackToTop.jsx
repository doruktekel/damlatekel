import { useContext, useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const BackToTop = () => {
  const { theme } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsVisible(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`right-14 bottom-28 z-50 fixed ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <Link
        className={`shadow-xl ease-in-out duration-300 px-2 py-1 flex justify-between items-center gap-2 rounded-full bg-opacity-90 border border-gray-200 ${
          theme === "light"
            ? " bg-gray-200 text-gray-600 hover:bg-blue-400 hover:text-gray-200 "
            : "bg-gray-50 text-gray-800  hover:bg-transparent  hover:text-gray-200 "
        } `}
      >
        <FaArrowCircleUp className="text-3xl" />
        <span>Başa Dön</span>
      </Link>
    </div>
  );
};

export default BackToTop;
