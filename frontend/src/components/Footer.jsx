import { useContext } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

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
          <div className="flex-col font-mono text-left">
            <h6 className="text-sm">Contact</h6>
            <p className="text-sm">cicikus@gmail.com</p>
            <p className="text-sm">@cicikus</p>
          </div>
          <div>
            <ul className="text-3xl flex gap-3 ">
              <li>
                <Link
                  to="https://www.instagram.com/kivrak_damla"
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
                <Link to="" target="_blank" rel="noopener noreferrer">
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
          </div>
        </div>
        <div>
          <p className="text-s max-sm:text-xs">
            ​All rights reserved. © copyright 2023 Damla Tekel Kivrak
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
