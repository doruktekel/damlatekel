import { useContext } from "react";
import timelapse from "../assets/timelapse.mp4";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "motion/react";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="w-10/12 mx-auto flex-col justify-center py-8 min-h-screen ">
      <motion.video
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
        className={`rounded-md select-none pointer-events-none ${
          theme === "dark" && "brightness-75"
        } `}
        muted
        autoPlay
        loop
      >
        <source type="video/mp4" src={timelapse} />
      </motion.video>
      {/* <motion.h1
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
        className="my-10"
      >
        Ormandaki müzik şöleni
      </motion.h1> */}
    </div>
  );
};

export default Home;
