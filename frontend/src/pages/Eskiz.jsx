import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import { FaShare } from "react-icons/fa";

const Eskiz = ({ data }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="mb-4 break-inside-avoid overflow-hidden transition-transform duration-300 ease-in-out transform "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link className="relative block" to={`/eskizs/${data._id}`}>
        <img
          src={data.imageUrl}
          alt={data.title}
          className={`w-full h-auto object-cover transition-transform duration-300 ease-in-out ${
            hovered ? "scale-105" : ""
          }`}
        />
        {hovered && (
          <Slide
            className="  w-full absolute bottom-0 text-slate-800 p-2 bg-gradient-to-t from-slate-50 via-slate-100 to-transparent opacity-50"
            direction="up"
            duration={600} // Animasyonun süresini milisaniye cinsinden belirler
            triggerOnce={false} // Hover sonrasında tekrar tetiklenmesini sağlar
          >
            <p className="flex justify-between">
              {data.title} <FaShare />
            </p>
          </Slide>
        )}
      </Link>
    </div>
  );
};

export default Eskiz;
