import React from "react";
import { FaTooth } from "react-icons/fa";
import EsteticaDentalImg from "../../../assets/Servicios/Odontologia/odontoEstetica.jpg";
import useIntersectionObserver from "../../../Hooks/InterseccitonObserver";

export const Periodoncias = () => {
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
      }
    });
  };
  const animateFadeUp = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade",
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
      id="odontoPedriatria"
      className="bg-gradient-to-t from-[#191645] to-[#2A2A2A] py-8"
    >
      <div className="w-[95%] md:w-[80%] mx-auto py-[2rem] md:py-[2rem] lg:gap-10">
        <div className="flex flex-col items-center w-[80%] md:w-[70%] lg:w-[55%] mx-auto lg:justify-center">
          <h1
            className="text-3xl text-center md:text-4xl font-black mb-5 text-white opacity-0 mx-auto"
            ref={useAnimateFadeUp}
          >
            Cuida la Salud de tus Encías con <br /> Nuestros Servicios de
            Periodoncia
          </h1>
          <p
            className="text-xl text-center my-[4rem] text-white/80 mx-0 md:text-md op"
            ref={useAnimateFadeLeft}
          >
            Nuestros expertos en periodoncia están dedicados a proporcionar
            tratamientos especializados para prevenir y tratar enfermedades de
            las encías. Desde limpiezas profundas hasta cirugías periodontales,
            estamos comprometidos a mantener la salud de tus encías y preservar
            la integridad de tus dientes. Priorizamos tu bienestar bucal y
            trabajamos para proporcionar soluciones efectivas y duraderas.
          </p>
        </div>

        <div className="mt-[3rem] md:mt-[5rem]">
          <div className="grid w-[80%] mx-auto gap-[2rem] md:grid-cols-2 md:w-[80%]">
            <div
              className="p-4 rounded-lg border-2 border-white/20 bg-[#2A2A2A] shadow-[0_1px_35px_rgba(55,102,255,0.3)] opacity-0"
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
              <h3 className="text-xl text-white text-left font-semibold mb-5">
                Nuestros Servicios de Periodoncia
              </h3>
              <p className="text-white/80 text-left">
                Ofrecemos una amplia gama de tratamientos periodontales para
                abordar diversas condiciones. Esto incluye limpiezas y raspados
                profundos, tratamientos de bolsas periodontales, cirugías de
                colgajos, regeneración de tejidos y más. Nuestro equipo
                altamente capacitado utiliza técnicas avanzadas y equipos
                modernos para proporcionar el mejor cuidado para tus encías.
              </p>
            </div>
          </div>
          <div className="w-[80%] mx-auto mt-[4rem]">
            <h3 className="text-xl text-white font-semibold mb-5">
            La Importancia de la Salud Periodontal
            </h3>
            <p className="text-white/80 text-left ">
              La salud de tus encías es fundamental para mantener una sonrisa
              saludable y funcional. Las enfermedades periodontales pueden
              afectar no solo tus encías, sino también la estructura de soporte
              de tus dientes. Nuestro equipo de expertos en periodoncia se
              enfoca en prevenir y tratar estas condiciones para asegurarse de
              que tengas una base sólida para una boca sana y hermosa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
