import React from "react";

export const ImgAbout = ({ id, imagen, description, efecto }) => {
  return (
    <div className="lg:opacity-80 ease-in duration-300 rounded-xl drop-shadow-2xl hover:opacity-100 hover:scale-110 ">
      <img
      key={id}
      src={imagen}
      alt={description}
      className="rounded-lg w-full"
    />
    </div>
  );
};
