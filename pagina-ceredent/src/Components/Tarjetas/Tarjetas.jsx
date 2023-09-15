import React from "react";
import { Parallax } from "react-parallax";
import TarjetasImg from "../../assets/Tarjetas/equipoDental.jpg";
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
      <div className="tarjetas-bg" style={{ backgroundImage: `url(${TarjetasImg})` }}>
        <div className="tarjetas-content font-bold">
          <h2>ACEPTAMOS PAGOS</h2>
          <p>con tarjetas de crédito y débito</p>
          <div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tarjetas;
