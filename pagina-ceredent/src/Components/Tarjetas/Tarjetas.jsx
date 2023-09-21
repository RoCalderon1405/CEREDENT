import React from "react";
import { Parallax } from "react-parallax";
import TarjetasImg from "../../assets/Tarjetas/equipoDental.jpg";
import Visa from "../../assets/Tarjetas/Visa.png";
import MasterCard from "../../assets/Tarjetas/MasterCard.png";
import American from "../../assets/Tarjetas/AmericanExpress.png";
import "./tarjetas.css";

export const Tarjetas = () => {
  const insideStyles = {
    background: "#fff",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <section className="tarjetas-container">
      <div
        className="tarjetas-bg"
        style={{ backgroundImage: `url(${TarjetasImg})` }}
      >
        <div className="tarjetas-content font-bold">
          <h1 className="text-3xl md:text-5xl">ACEPTAMOS PAGOS</h1>
          <p className="text-xl mt-5 md:text-2xl">con tarjetas de crédito y débito</p>
          <div className="flex max-w-[80%] mx-auto justify-center gap-6 mt-6 md:mt-[8rem] md:justify-evenly">
            <img src={Visa} alt="" className="w-[90px] md:w-[230px]" />
            <img src={MasterCard} alt="" className="w-[90px] md:w-[230px]" />
            <img src={American} alt="" className="w-[90px] md:w-[230px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tarjetas;
