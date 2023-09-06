import React from "react";
import { FaTooth } from "react-icons/fa";
import CeredentHistoryImg from "../../assets/consultorio.jpeg";
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
      } else {
        entry.target.classList.remove(
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
          "animate-duration-1000",
          "animate-delay-[800ms]",
          "animate-ease-in-out",
          "opacity:1"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade-up",
          "animate-duration-1000",
          "animate-delay-[800ms]",
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
          "animate-duration-1000",
          "animate-ease-in-out",
          "opacity:1"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade",
          "animate-duration-1000",
          "animate-ease-in-out",
          "opacity:1"
        );
      }
    });
  };

  // Crear instancias del hook de Intersection Observer
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.2,
  });
  const useAnimateFadeLeft = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.2,
  });
  const useAnimateButtonFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.2,
  });
  const useAnimateFade = useIntersectionObserver(animateFade, {
    threshold: 0.2,
  });

  return (
    <section id="historia" className="bg-slate-200 py-8">
      <div className="mx-auto py-[2rem] md:py-[5rem] lg:gap-10">
        <div className="flex flex-col items-center w-[80%] md:w-[70%] lg:w-[55%] mx-auto lg:justify-center">
          <h2
            className="text-3xl md:text-5xl font-black mb-5 text-blue-800 opacity-0 mx-auto"
            ref={useAnimateFadeUp}
          >
            Nuestra Historia 🕰️
          </h2>
          <p
            className="text-md text-center mt-1 mb-4 text-black mx-0 md:text-md opacity-0"
            ref={useAnimateFadeLeft}
          >
            CEREDENT es un negocio familiar con más de 20 años de experiencia en
            el campo de la odontología. Fundado por una madre e hijo apasionados
            por mejorar la salud bucal de nuestros pacientes.
          </p>
          <div className="line-animation"></div>
        </div>

        <div className="mt-[3rem] md:mt-[5rem]">
          <div className="grid w-[80%] mx-auto gap-3 md:grid-cols-2 md:w-[80%]">
            <div className="p-4 rounded-lg shadow-md opacity-0" ref={useAnimateFade}>
              <img
                src={CeredentHistoryImg}
                alt="CEREDENT History"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 text-center">
              <FaTooth size={40} className="text-green-500 mb-2" />
              <h3 className="text-xl font-semibold">Nuestra Trayectoria</h3>
              <p className="text-gray-700">
                Durante más de dos décadas, CEREDENT ha estado brindando
                atención dental de calidad y cuidado personalizado a nuestros
                pacientes. Con un equipo de profesionales apasionados, hemos
                logrado construir una reputación sólida en la comunidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
