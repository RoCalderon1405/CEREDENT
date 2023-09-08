import React from "react";
import { FaUserMd } from "react-icons/fa";
import { CardDoc } from "./CardDoc";
import Dentista1 from "../../assets/Dentistas/dentista.png";
import Dentista2 from "../../assets/Dentistas/dentista2.png";
import useIntersectionObserver from "../../Hooks/InterseccitonObserver";

export const Doctores = () => {
  const team = [
    {
      id: 1,
      Nombre: "María Calderón",
      NombreCompleto: "María Guadalupe Calderón Carranza",
      About: "Hola soy un about",
      Img1: Dentista1,
      Img2: Dentista2,
    },
    {
      id: 2,
      Nombre: "Roberto Rojas",
      NombreCompleto: "Roberto Arturo Rojas Calderón",
      About: "Hola soy un about",
      Img1: Dentista1,
      Img2: Dentista2,
    },
  ];

  // Definir las funciones de callback para los efectos de animación
  const animateFadeLeft = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-left");
      } else {
        entry.target.classList.remove("animate-fade-left");
      }
    });
  };
  const animateFadeUp = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-up",
          "animate-duration-1000",
          "animate-delay-[500ms]",
          "animate-ease-in-out",
          "opacity-100"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade-up",
          "animate-duration-1000",
          "animate-delay-[500ms]",
          "animate-ease-in-out",
          "opacity-100"
        );
      }
    });
  };
  const animateFadeRight = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-right",
          "animate-duration-1000",
          "animate-ease-in-out"
        );
      }
    });
  };

  // Crear instancias del hook de Intersection Observer
  const useAnimateFadeLeft = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });
  const useAnimateFadeRight = useIntersectionObserver(animateFadeRight, {
    threshold: 0.1,
  });
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.2,
  });

  return (
    <section
      id="doctores"
      className="py-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100 to-teal-100"
    >
      <div className="container m-auto py-[5rem]">
        <div className="flex flex-col items-center w-full mx-auto md:w-[60%] lg:justify-center">
          <h2
            className="flex justify-center text-3xl md:text-4xl font-black mb-10 text-sky-400 opacity-0 mx-auto"
            ref={useAnimateFadeUp}
          >
            Nuestro Equipo <FaUserMd className="text-sky-600 ml-2" />
          </h2>

          <p
            className="text-md text-center mt-1 mb-6 text-black opacity-0 mx-0 md:text-lg"
            ref={useAnimateFadeLeft}
          >
            En CEREDENT contamos con un equipo de doctores altamente capacitados y comprometidos con tu salud bucal. Nuestros profesionales tienen años de experiencia en odontología y están aquí para brindarte la mejor atención y soluciones personalizadas para tus necesidades dentales.
          </p>
          <div className="line-animation"></div>
        </div>
        <div className="flex justify-center">
          <div
            className="flex flex-col justify-around gap-5 mt-10 opacity-0 lg:flex-row lg:w-[80%]"
            ref={useAnimateFadeRight}
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
