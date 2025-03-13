import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShare } from "react-icons/fa";
import { motion } from "motion/react";

const Card = ({ data }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="mb-4 break-inside-avoid overflow-hidden transition-transform duration-300 ease-in-out transform "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link className="relative block" to={`/cards/${data._id}`}>
        <img
          src={data.imageUrl}
          alt={data.title}
          className={`pointer-events-none select-none w-full h-auto object-cover transition-transform duration-300 ease-in-out ${
            hovered ? "scale-105" : ""
          }`}
        />
        {hovered && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 0.5 }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
            className="  w-full absolute bottom-0 text-slate-800 p-2 bg-gradient-to-t from-slate-50 via-slate-100 to-transparent opacity-50"
          >
            <p className="flex justify-between">
              {data.title} <FaShare />
            </p>
          </motion.div>
        )}
      </Link>
    </div>
  );
};

export default Card;
