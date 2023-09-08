import React from "react";
import { FaTooth } from "react-icons/fa";
import EsteticaDentalImg from "../../assets/esteticaDental.jpeg";
import useIntersectionObserver from "../../Hooks/InterseccitonObserver";

export const OdontologiaEstetica = () => {
  // Definir las funciones de callback para los efectos de animación
  const animateFadeLeft = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-left",
          "animate-duration-1000",
          "animate-ease-in-out"
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
          "animate-ease-in-out"
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

  return (
    <section
      id="odontologiaEstetica"
      className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 py-8"
    >
      <div className="mx-auto py-[2rem] md:py-[5rem] lg:gap-10">
        <div className="flex flex-col items-center w-[80%] md:w-[70%] lg:w-[55%] mx-auto lg:justify-center">
          <h2
            className="text-3xl md:text-5xl font-black mb-5 text-blue-800 opacity-0 mx-auto"
            ref={useAnimateFadeUp}
          >
            Odontología Estética 🌟
          </h2>
          <p
            className="text-md text-center mt-1 mb-4 text-black mx-0 md:text-md opacity-0"
            ref={useAnimateFadeLeft}
          >
            Mejoramos la apariencia de tu sonrisa con procedimientos como
            blanqueamiento dental, carillas y restauraciones estéticas. Nuestro
            objetivo es brindarte una sonrisa radiante y confianza en ti mismo.
          </p>
          <div className="line-animation"></div>
        </div>

        <div className="mt-[3rem] md:mt-[5rem]">
          <div className="grid w-[80%] mx-auto gap-3 md:grid-cols-2 md:w-[80%]">
            <div
              className="p-4 rounded-lg shadow-md opacity-0"
              ref={useAnimateFadeLeft}
            >
              <img
                src={EsteticaDentalImg}
                alt="Odontología Estética"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 text-center">
              <FaTooth size={40} className="text-green-500 mb-2" />
              <h3 className="text-xl font-semibold">Nuestros Servicios</h3>
              <p className="text-gray-700">
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
