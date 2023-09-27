import React from "react";

export const ImgAbout = ({ id, imagen, description }) => {
  return (
    <div className="lg:opacity-80 ease-in duration-300 rounded-xl drop-shadow-2xl hover:opacity-100 hover:scale-110 ">
      <img
      key={id}
      src={imagen}
      alt={description}
      loading="lazy"
      className="rounded-lg w-full"
    />
    </div>
  );
};
