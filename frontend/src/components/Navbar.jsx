import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { MdSunny, MdOutlineWbSunny } from "react-icons/md";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      className={`w-full shadow-md sticky top-0 z-10 py-2 bg-opacity-90 hidden md:block ${
        theme === "dark" ? " bg-gray-800  " : "bg-gray-50 "
      }`}
    >
      <div className="w-10/12 mx-auto">
        <ul
          className={`flex justify-between  align-middle py-1 text-center ${
            theme === "light" ? "text-gray-400" : " text-gray-100"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link px-2 font-sans max-sm:text-sm text-lg ${
                  isActive &&
                  (theme === "light" ? "text-blue-500" : "text-orange-200")
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
                `nav-link px-2 font-sans  max-sm:text-sm text-lg ${
                  isActive &&
                  (theme === "light" ? "text-blue-500" : "text-orange-200")
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
                  (theme === "light" ? "text-blue-500" : "text-orange-200")
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
                `nav-link px-2 font-sans  max-sm:text-sm text-lg ${
                  isActive &&
                  (theme === "light" ? "text-blue-500" : "text-orange-200")
                }`
              }
            >
              Kartlar ve Afişler
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/eskizs"
              className={({ isActive }) =>
                `nav-link px-2 font-sans align-middle  max-sm:text-sm text-lg ${
                  isActive &&
                  (theme === "light" ? "text-blue-500" : "text-orange-200")
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
                `nav-link px-2 font-sans align-middle  max-sm:text-sm text-lg ${
                  isActive &&
                  (theme === "light" ? "text-blue-500" : "text-orange-200")
                }`
              }
            >
              Ücretsiz Kaynaklar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/secrets"
              className={({ isActive }) =>
                `nav-link px-2 font-sans align-middle  max-sm:text-sm text-lg ${
                  isActive &&
                  (theme === "light" ? "text-blue-500" : "text-orange-200")
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
                  (theme === "light" ? "text-blue-500" : "text-orange-200")
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
                  ? "text-gray-500  border-gray-500"
                  : "text-orange-200 border-orange-200"
              }`}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <MdSunny /> : <MdOutlineWbSunny />}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
