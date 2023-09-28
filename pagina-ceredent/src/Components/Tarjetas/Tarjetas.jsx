import React from "react";
import TarjetasImg from "../../assets/Tarjetas/FondoTarjetas.webp";
import Visa from "../../assets/Tarjetas/Visa.png";
import MasterCard from "../../assets/Tarjetas/MasterCard.png";
import American from "../../assets/Tarjetas/AmericanExpress.png";
import useIntersectionObserver from "../../Hooks/InterseccitonObserver";
import "./tarjetas.css";

export const Tarjetas = () => {
  const animateFadeUp = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-up",
          "animate-duration-1500",
          "animate-ease-in-out",
          "opacity:100"
        );
      } 
    });
  };

  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.1,
  });
  const useAnimateFadeUp2 = useIntersectionObserver(animateFadeUp, {
    threshold: 0.1,
  });
  const useAnimateFadeUp3 = useIntersectionObserver(animateFadeUp, {
    threshold: 0.1,
  });
  return (
    <section className="tarjetas-container">
      <div
        className="tarjetas-bg"
        style={{ backgroundImage: `url(${TarjetasImg})` }}
      >
        <div className="tarjetas-content font-bold">
          <h1 className="text-3xl md:text-5xl">ACEPTAMOS PAGOS</h1>
          <p className="text-xl mt-5 md:text-2xl">
            con tarjetas de crédito y débito
          </p>
          <div className="flex flex-col items-center max-w-[80%] mx-auto justify-center gap-[4rem] mt-8 md:mt-[8rem] md:justify-evenly lg:flex-row">
            <div className="opacity-0" ref={useAnimateFadeUp}>
              <img src={Visa} alt="" className="w-[160px] md:w-[230px]" loading="lazy" />
            </div>
            <div className="opacity-0" ref={useAnimateFadeUp2}>
              <img src={MasterCard} alt="" className="w-[160px] md:w-[230px]" loading="lazy" />
            </div>
            <div className="opacity-0" ref={useAnimateFadeUp3}>
              <img src={American} alt="" className="w-[160px] md:w-[230px]" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tarjetas;
