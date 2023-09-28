import React from "react";
import { CardDoc } from "./CardDoc";
import Dentista1 from "../../assets/Dentistas/dentista.webp";
import Dentista2 from "../../assets/Dentistas/dentista2.webp";
import useIntersectionObserver from "../../Hooks/InterseccitonObserver";

export const Doctores = () => {
  const team = [
    {
      id: 1,
      Nombre: "María García",
      NombreCompleto: "María García López",
      About: "Hola, Soy María García",
      Img1: Dentista1,
      Img2: Dentista2,
    },
    {
      id: 2,
      Nombre: "Laura Martínez",
      NombreCompleto: "Laura Martínez Rodríguez",
      About: "Hola, Laura Martínez",
      Img1: Dentista1,
      Img2: Dentista2,
    },
  ];

  // Definir las funciones de callback para los efectos de animación
  const animateFadeLeft = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-left");
      } 
    });
  };
  const animateFadeUp = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-up",
          "animate-duration-1000",
          "animate-ease-in-out",
          "opacity-100"
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
          "opacity-100"
        );
      }
    });
  };

  // Crear instancias del hook de Intersection Observer
  const useAnimateFadeLeft = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });
  const useAnimateFade = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.2,
  });

  return (
    <section
      id="doctores"
      className="py-8 bg-[#191645]"
    >
      <div className="container m-auto py-[5rem]">
        <div className="flex flex-col items-center w-full mx-auto md:w-[60%] lg:justify-center">
          <h1
            className="flex justify-center text-3xl md:text-4xl font-black mb-10 text-white opacity-0 mx-auto"
            ref={useAnimateFadeUp}
          >
            Nuestro Equipo
          </h1>

          <p
            className="text-md text-center mt-1 mb-6 text-white/80 opacity-0 mx-0 md:text-lg"
            ref={useAnimateFadeLeft}
          >
            En CEREDENT contamos con un equipo de doctores altamente capacitados y comprometidos con tu salud bucal. Nuestros profesionales tienen años de experiencia en odontología y están aquí para brindarte la mejor atención y soluciones personalizadas para tus necesidades dentales.
          </p>
        </div>
        <div className="flex justify-center">
          <div
            className="flex flex-col justify-around gap-5 mt-10 opacity-0 lg:flex-row lg:w-[80%]"
            ref={useAnimateFade}
          >
            {team.map((miembro) => (
              <CardDoc
                key={miembro.id}
                id={miembro.id}
                nombre={miembro.Nombre}
                nombreCompleto={miembro.NombreCompleto}
                about={miembro.About}
                img1={miembro.Img1}
                img2={miembro.Img2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
