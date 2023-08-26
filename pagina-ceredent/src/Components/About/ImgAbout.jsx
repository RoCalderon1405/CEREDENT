import React from "react";

export const ImgAbout = ({ id, imagen, description }) => {
  return (
    <img
      key={id}
      src={imagen}
      alt={description}
      className="rounded-lg w-full"
    />
  );
};
