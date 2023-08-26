import React from "react";
import { FaUserMd } from "react-icons/fa";
import { CardDoc } from "./CardDoc";
import Dentista1 from "../../assets/dentista.png";
import Dentista2 from "../../assets/dentista2.png";
import useIntersectionObserver from "../../Hooks/InterseccitonObserver";

export const Doctores = () => {

  const team = [
    {
      id: 1,
      Nombre: "María Calderón",
      NombreCompleto: "María Guadalupe Calderón Carranza",
      About: "Hola soy un about",
      Img1: Dentista1,
      Img2: Dentista2
    },
    {
      id: 2,
      Nombre: "Roberto Rojas",
      NombreCompleto: "Roberto Arturo Rojas Calderón",
      About: "Hola soy un about",
      Img1: Dentista1,
      Img2: Dentista2
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
        entry.target.classList.add("animate-fade-up", "animate-duration-1500", "animate-ease-in-out");
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
      } else {
        entry.target.classList.remove(
          "animate-fade-right",
          "animate-duration-1000",
          "animate-ease-in-out"
        );
      }
    });
  };

  // Crear instancias del hook de Intersection Observer
  const useAnimateFadeLeft = useIntersectionObserver(animateFadeLeft, { threshold: 0.5 });
  const useAnimateFadeRight = useIntersectionObserver(animateFadeRight, { threshold: 0.5 });
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, { threshold: 0.2 });
  return (
    <section id="doctores" className="py-5 bg-blue-600">
      <div className="container m-auto py-10">
        <div className="">
          <h1 
          className="flex justify-center mt-10 text-3xl font-bold text-blue-200"
          ref={useAnimateFadeRight}
          >
            Nuestro Equipo <FaUserMd className="text-white ml-5" />
          </h1>

          <p className="text-center text-white text-lg mt-10"
          ref={useAnimateFadeLeft}>
            En CEREDENT contamos con un equipo de doctores altamente capacitados
            y comprometidos con tu salud bucal. Nuestros profesionales tienen
            años de experiencia en odontología y están aquí para brindarte la
            mejor atención y soluciones personalizadas para tus necesidades
            dentales.
          </p>
          <div className="line-animation"></div>
        </div>
        <div className="flex justify-center">
        <div className="flex flex-col justify-around gap-5 mt-10 lg:flex-row lg:w-[80%]"
        ref={useAnimateFadeUp}>
         {
           team.map((miembro) => (
             <CardDoc
             key={miembro.id}
             id={miembro.id}
             nombre={miembro.Nombre}
             nombreCompleto={miembro.NombreCompleto}
             about = {miembro.About}
             img1 = {miembro.Img1}
             img2 = {miembro.Img2}
             />
             ))
            }
        </div>
        </div>
      </div>
    </section>
  );
};
