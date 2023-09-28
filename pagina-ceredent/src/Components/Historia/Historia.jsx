import React from "react";
import { FaTooth } from "react-icons/fa";
import CeredentHistoryImg from "../../assets/consultorio.webp";
import useIntersectionObserver from "../../Hooks/InterseccitonObserver";

export const Historia = () => {
  // Definir las funciones de callback para los efectos de animación
  const animateFadeLeft = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-left",
          "animate-duration-1000",
          "animate-ease-in-out",
          "opacity:1"
        );
      } 
    });
  };
  const animateFadeUp = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-up",
          "animate-duration-1200",
          "animate-ease-in-out",
          "opacity:1"
        );
      } 
    });
  };
  const animateFade = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade",
          "animate-duration-1800",
          "animate-ease-in-out",
          "opacity:1"
        );
      } 
    });
  };

  // Crear instancias del hook de Intersection Observer
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.1,
  });
  const useAnimateFadeLeft = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });
  const useAnimateFade = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });

  return (
    <section
      id="historia"
      className="bg-gradient-to-t from-[#191645] to-[#2A2A2A] py-8"
    >
      <div className="w-[95%] md:w-[80%] mx-auto py-[5rem] md:py-[5rem] lg:gap-10">
        <div className="flex flex-col items-center w-full md:w-[70%] lg:w-[55%] mx-auto lg:justify-center">
          <h1
            className="text-3xl md:text-5xl font-black mb-5 text-left text-white opacity-0 mx-auto"
            ref={useAnimateFadeUp}
          >
            Nuestra Historia
          </h1>
          <p
            className="text-md w-[95%] mt-1 mb-4 text-left text-white/80 mx-0 md:text-md opacity-0"
            ref={useAnimateFadeLeft}
          >
            CEREDENT es un negocio familiar con más de 20 años de experiencia en
            el campo de la odontología. Fundado por una madre e hijo apasionados
            por mejorar la salud bucal de nuestros pacientes.
          </p>
        </div>

        <div className="grid mt-[3rem] md:mt-[5rem] mx-auto gap-3 w-full md:w-[80%] md:grid-cols-2">
          <div
            className="p-4 w-[90%] mx-auto rounded-lg border-2 border-white/20 bg-[#2A2A2A] shadow-[0_1px_35px_rgba(55,102,255,0.3)] opacity-0"
            ref={useAnimateFade}
          >
            <img
              src={CeredentHistoryImg}
              alt="CEREDENT History"
              className="object-cover w-full h-full rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="p-4 text-center">
            <FaTooth size={40} className="text-[#43C6AC] mb-8" />
            <h3 className="text-xl font-semibold text-white mb-5 text-left">
              Nuestra Trayectoria
            </h3>
            <p className="text-white/80 text-left">
              Durante más de dos décadas, CEREDENT ha estado brindando atención
              dental de calidad y cuidado personalizado a nuestros pacientes.
              Con un equipo de profesionales apasionados, hemos logrado
              construir una reputación sólida en la comunidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
