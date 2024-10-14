import { useContext } from "react";
import mainImage from "../assets/headerImage.webp";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Minimenu from "./Minimenu";
import { MiniContext } from "../context/MiniMenuContext";
import { MdOutlineWbSunny, MdSunny } from "react-icons/md";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { show } = useContext(MiniContext);
  return (
    <div className="w-full flex align-middle justify-center text-center pt-5 flex-wrap">
      <div className="justify-center align-middle">
        <Link to="/">
          <img src={mainImage} alt="DamlaTekelKivrak" className="w-52 " />
        </Link>
      </div>
      <div className="flex  justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Link to="/">
            <h1
              className={`font-headerName text-6xl  select-none max-sm:text-4xl ${
                theme === "light" ? "text-blue-400" : "text-orange-300"
              }`}
            >
              Damla Tekel Kivrak
            </h1>
          </Link>
          <p
            className={`text-xs font-mono  ${
              theme === "light" ? "text-stone-500" : "text-orange-100"
            } `}
          >
            Illustrator & Concept Artist
          </p>
        </div>
        <div className="content-center">
          <Minimenu />
        </div>
      </div>
      <div>
        {show && (
          <div
            className={`w-80 sm:w-96 shadow-xl z-10 py-2 my-2 bg-opacity-90 block md:hidden rounded-lg ${
              theme === "dark" ? " bg-gray-50  " : "bg-gray-700 "
            }`}
          >
            <ul
              className={`flex flex-col gap-2  ${
                theme === "light" ? "text-gray-100" : " text-gray-400"
              }`}
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link px-2 font-sans align-middle max-sm:text-sm text-lg ${
                      isActive &&
                      (theme === "light" ? "text-orange-200" : "text-gray-800")
                    }`
                  }
                >
                  Anasayfa
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bio"
                  className={({ isActive }) =>
                    `nav-link px-2 font-sans align-middle  max-sm:text-sm text-lg ${
                      isActive &&
                      (theme === "light" ? "text-orange-200" : "text-gray-800")
                    }`
                  }
                >
                  Hakkımda
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/illustrations"
                  className={({ isActive }) =>
                    `nav-link px-2 font-sans align-middle  max-sm:text-sm text-lg ${
                      isActive &&
                      (theme === "light" ? "text-orange-200" : "text-gray-800")
                    }`
                  }
                >
                  Illustasyonlar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cards"
                  className={({ isActive }) =>
                    `nav-link px-2 font-sans align-middle  max-sm:text-sm text-lg ${
                      isActive &&
                      (theme === "light" ? "text-orange-200" : "text-gray-800")
                    }`
                  }
                >
                  Kartlar ve Afisler
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/eskizs"
                  className={({ isActive }) =>
                    `nav-link px-2 font-sans  align-middle  max-sm:text-sm text-lg ${
                      isActive &&
                      (theme === "light" ? "text-orange-200" : "text-gray-800")
                    }`
                  }
                >
                  Eskiz Defteri
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/free"
                  className={({ isActive }) =>
                    `nav-link px-2 font-sans  align-middle  max-sm:text-sm text-lg ${
                      isActive &&
                      (theme === "light" ? "text-orange-200" : "text-gray-800")
                    }`
                  }
                >
                  Ucretsiz Kaynaklar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/secrets"
                  className={({ isActive }) =>
                    `nav-link px-2 font-sans  align-middle  max-sm:text-sm text-lg ${
                      isActive &&
                      (theme === "light" ? "text-orange-200" : "text-gray-800")
                    }`
                  }
                >
                  Gizlilik
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav-link px-2 font-sans  align-middle  max-sm:text-sm text-lg ${
                      isActive &&
                      (theme === "light" ? "text-orange-200" : "text-gray-800")
                    }`
                  }
                >
                  İletişim
                </NavLink>
              </li>

              <li>
                <button
                  className={` max-sm:text-sm text-lg p-1 align-middle border rounded-full   ${
                    theme === "light"
                      ? "text-orange-200 border-orange-200"
                      : "text-gray-500  border-gray-500"
                  }`}
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {theme === "light" ? <MdSunny /> : <MdOutlineWbSunny />}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
