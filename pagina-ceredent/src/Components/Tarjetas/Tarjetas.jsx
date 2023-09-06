import React from "react";
import { Parallax } from "react-parallax";
import TarjetasImg from "../../assets/Tarjetas/equipoDental.jpg";

export const Tarjetas = () => {
  const insideStyles = {
    background: "#fff",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // Ajuste en la transformación para centrar horizontalmente y verticalmente
  };

  return (
    <section className="relative h-screen" id="tarjetas">
      <div className="h-full">
        <Parallax
          bgImage={TarjetasImg}
          strength={400}
          className="absolute object-cover object-center w-full h-full"
        >
          <div className="h-screen flex justify-center items-center">
            <div style={insideStyles}>
              <h2>ACEPTAMOS PAGOS</h2>
              <p>con tarjetas de crédito y débito</p>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default Tarjetas;
