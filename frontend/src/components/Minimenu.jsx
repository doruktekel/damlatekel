import { useContext } from "react";
import { RiMenuFoldLine } from "react-icons/ri";
import { MiniContext } from "../context/MiniMenuContext";

const Minimenu = () => {
  const { show, setShow } = useContext(MiniContext);
  return (
    <button
      className="block md:hidden p-2"
      onClick={() => {
        setShow(!show);
      }}
    >
      <RiMenuFoldLine className="text-3xl" />
    </button>
  );
};

export default Minimenu;
