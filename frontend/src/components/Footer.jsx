import { useContext } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "motion/react";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`w-full h-32  flex justify-center text-center ${
        theme === "light"
          ? " bg-blue-400 text-gray-100"
          : " bg-gray-900 text-gray-200"
      }   `}
    >
      <div className="w-5/6 p-4 flex flex-col gap-4">
        <div className="flex flex-wrap  justify-between items-center ">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
            }}
            className="flex-col font-mono text-left"
          >
            <h6 className="text-sm">İletişim</h6>
            <p className="text-sm">kivrakdamlatekel@gmail.com</p>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
            }}
          >
            <ul className="text-3xl flex gap-3 ">
              <li>
                <Link
                  to="https://www.instagram.com/damla.illustration"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    className={` ease-in-out duration-300 ${
                      theme === "light"
                        ? "hover:text-blue-500"
                        : "hover:text-orange-300"
                    } `}
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.behance.net/damlatekivrak"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaBehanceSquare
                    className={` ease-in-out duration-300 ${
                      theme === "light"
                        ? "hover:text-blue-500"
                        : "hover:text-orange-300"
                    } `}
                  />
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
        <div>
          <p className="text-s max-sm:text-xs">
            ​All rights reserved. © copyright 2025 Damla Tekel Kivrak
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
