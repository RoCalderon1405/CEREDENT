import React from "react";
import { FaTooth } from "react-icons/fa";
import EsteticaDentalImg from "../../../assets/Servicios/Odontologia/odontoEstetica.jpg";
import useIntersectionObserver from "../../../Hooks/InterseccitonObserver";

export const OdontologiaEstetica = () => {
  // Definir las funciones de callback para los efectos de animación
  const animateFadeLeft = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-left",
          "animate-duration-[1300ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade-left",
          "animate-duration-[1300ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      }
    });
  };
  const animateFadeUp = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-up",
          "animate-duration-[1300ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade-up",
          "animate-duration-[1300ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      }
    });
  };
  const animateFade = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade",
          "animate-duration-[1300ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade",
          "animate-duration-[1300ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      }
    });
  };

  const useAnimateFadeLeft = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.1,
  });
  const useAnimateFade = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });

  return (
    <section
      id="odontologiaEstetica"
      className="bg-gradient-to-t from-[#191645] to-[#2A2A2A] py-8"
    >
      <div className=" mx-auto py-[2rem] md:py-[2rem] lg:gap-10">
        <div className="flex flex-col items-center w-[90%] md:w-[90%] lg:w-[55%] mx-auto lg:justify-center">
          <div className="opacity-0" ref={useAnimateFadeUp}>
            <h1 className="text-3xl text-left md:text-4xl font-black mb-5 text-white mx-auto">
              Transforma tu Sonrisa <br /> Odontología Estética
            </h1>
          </div>
          <div className="opacity-0" ref={useAnimateFadeLeft}>
            <p className="text-xl text-left my-[4rem] text-white/80 mx-0 md:text-md">
              Mejoramos la apariencia de tu sonrisa con procedimientos como
              blanqueamiento dental, carillas y restauraciones estéticas.
              Nuestro objetivo es brindarte una sonrisa radiante y confianza en
              ti mismo.
            </p>
          </div>
        </div>

        <div className="mt-[3rem] md:mt-[5rem]">
          <div className="grid w-[95%] mx-auto gap-[2rem] lg:grid-cols-2 md:w-[80%] lg:w-[70%]">
            <div
              className="p-6 w-[95%] mx-auto rounded-lg border-2 border-white/20 bg-[#2A2A2A] shadow-[0_1px_35px_rgba(55,102,255,0.3)] opacity-0"
              ref={useAnimateFade}
            >
              <img
                src={EsteticaDentalImg}
                alt="Odontología Estética"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="p-4 text-center">
              <FaTooth size={40} className="text-[#43C6AC] mb-8" />
              <h3 className="text-xl text-white text-left font-semibold mb-8">
                Nuestros Servicios
              </h3>
              <p className="text-white/80 text-left">
                Ofrecemos una variedad de tratamientos estéticos para mejorar la
                apariencia de tus dientes y sonrisa. Desde blanqueamiento dental
                hasta carillas y restauraciones personalizadas, estamos aquí
                para ayudarte a lograr la sonrisa que siempre has deseado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
