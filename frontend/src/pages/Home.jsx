import { useContext } from "react";
import timelapse from "../assets/timelapse.mp4";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="w-10/12 mx-auto flex-col justify-center py-8 ">
      <video
        className={`rounded-md ${theme === "dark" && "brightness-75"} `}
        muted
        autoPlay
        loop
      >
        <source type="video/mp4" src={timelapse} />
      </video>
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quisquam
        esse impedit nostrum tempora, accusamus natus praesentium. Qui quos
        ullam illo amet veritatis alias quaerat repellendus, et minus, fugiat
        aspernatur?
      </h1>
    </div>
  );
};

export default Home;
