import React from "react";
import { FaTooth } from "react-icons/fa";
import EsteticaDentalImg from "../../../assets/Servicios/Odontologia/odontoEstetica.jpg";
import useIntersectionObserver from "../../../Hooks/InterseccitonObserver";

export const Endodoncias = () => {
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
      id="endodoncias"
      className="bg-gradient-to-t from-[#191645] to-[#2A2A2A] py-8"
    >
      <div className="w-[95%] md:w-[80%] mx-auto py-[2rem] md:py-[2rem] lg:gap-10">
        <div className="flex flex-col items-center w-[80%] md:w-[70%] lg:w-[55%] mx-auto lg:justify-center">
          <h1
            className="text-3xl text-center md:text-4xl font-black mb-5 text-white opacity-0 mx-auto"
            ref={useAnimateFadeUp}
          >
            Recupera la Salud de tus Dientes con <br />
            Nuestros Tratamientos de Endodoncia
          </h1>
          <p
            className="text-xl text-center my-[4rem] text-white/80 mx-0 md:text-md op"
            ref={useAnimateFadeLeft}
          >
            Nuestros expertos en endodoncia están dedicados a salvar dientes
            dañados por infecciones o lesiones en la pulpa dental. A través de
            procedimientos avanzados, removemos la pulpa infectada y restauramos
            la estructura dental, permitiéndote mantener tu diente natural.
            Nuestro objetivo es brindarte alivio del dolor y preservar la
            funcionalidad de tu sonrisa.
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
                Nuestros Tratamientos de Endodoncia
              </h3>
              <p className="text-white/80 text-left">
                Ofrecemos una amplia gama de tratamientos de endodoncia para
                abordar diversas necesidades. Esto incluye tratamientos de
                conducto, retratamientos de conducto y apicectomías. Nuestro
                equipo altamente capacitado utiliza técnicas avanzadas y
                tecnología de vanguardia para proporcionar resultados
                excepcionales y alivio duradero.
              </p>
            </div>
          </div>
          <div className="w-[80%] mx-auto mt-[4rem]">
            <h3 className="text-xl text-white font-semibold mb-5">
              Importancia de la Endodoncia
            </h3>
            <p className="text-white/80 text-left ">
              La endodoncia es crucial para preservar dientes que de otra manera
              tendrían que ser extraídos. Al tratar las infecciones y lesiones
              en la pulpa dental, podemos salvar tu diente natural y evitar
              complicaciones futuras. Nuestro equipo de expertos en endodoncia
              se compromete a brindarte cuidado de alta calidad para restaurar
              la salud y funcionalidad de tus dientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
