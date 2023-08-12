import React from "react";
import Familia from "../../assets/familia.png";
import Ceredent from '../../assets/CEREDENTcorte.png';
import "./header.css";

export const Header = () => {
  return (
    <>
      <section id="header">
        <div className="header__container">
        <div className="header__container-img">
            <img src={Familia} alt="logo" id="imgFamilia" />
          </div>
          <div className="header__container-text">
            <div className="header__container-logo">
            <img src={Ceredent} alt="CEREDENT" id="ceredentHeader" />
            </div>
            <div className="header__container-text-slogan">
            <h1>Sonrie con confianza somos <br /> tu destino para una sonrisa saludable</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
