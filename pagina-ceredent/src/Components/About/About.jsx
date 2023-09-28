import React from "react";
import { FaTooth } from "react-icons/fa";
import {
  Consultorio1,
  Consultorio2,
  Consultorio3,
  Consultorio4,
  Consultorio5,
  Consultorio6,
} from "../../assets/Constultorio/importConsultorio";
import useIntersectionObserver from "../../Hooks/InterseccitonObserver";
import { ImgAbout } from "./ImgAbout";

export const About = () => {
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
          "animate-duration-1000",
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
          "animate-delay-100",
          "animate-ease-in-out",
          "opacity:1"
        );
      }
    });
  };

  // Crear instancias del hook de Intersection Observer
  const useAnimateFadeLeft = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.1,
  });
  const useAnimateFade = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });
  const useAnimateFade1 = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });
  const useAnimateFade2 = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });

  const Imgs = [
    {
      id: 1,
      imagen: Consultorio1,
      description: "Description",
      efecto: "useAnimateFadeUp",
      delay: 100,
    },
    {
      id: 2,
      imagen: Consultorio2,
      description: "Description",
      efecto: "h",
      delay: 200,
    },
    {
      id: 3,
      imagen: Consultorio3,
      description: "Description",
      efecto: "h",
      delay: 300,
    },
    {
      id: 4,
      imagen: Consultorio4,
      description: "Description",
      efecto: "h",
      delay: 400,
    },
    {
      id: 5,
      imagen: Consultorio5,
      description: "Description",
      efecto: "h",
      delay: 500,
    },
    {
      id: 6,
      imagen: Consultorio6,
      description: "Description",
      efecto: "h",
      delay: 600,
    },
  ];

  const sections = [
    {
      id: 1,
      title: "Visión",
      description:
        "Ser líderes en la provisión de soluciones dentales innovadoras y de alta calidad para mejorar la salud oral de nuestros pacientes.",
      animacion: useAnimateFade,
    },
    {
      id: 2,
      title: "Misión",
      description:
        "Proporcionar un enfoque integral en la atención dental, centrado en el bienestar y la satisfacción de nuestros pacientes a través de tratamientos de vanguardia y un equipo comprometido.",
      animacion: useAnimateFade1,
    },
    {
      id: 3,
      title: "Valores",
      description:
        "Nuestros valores se basan en la honestidad, la empatía, la excelencia clínica y la mejora continua para garantizar la confianza y satisfacción de nuestros pacientes.",
      animacion: useAnimateFade2,
    },
  ];

  return (
    <section
      id="aboutUs"
      className="bg-gradient-to-t from-[#2A2A2A] to-[#191645] py-8"
    >
      <div className=" mx-auto py-[5rem] lg:gap-10">
        <div className="flex flex-col items-center w-[80%] md:w-[55%] mx-auto lg:justify-center">
          <h1
            className="text-4xl md:text-5xl font-black mb-5 text-white opacity-0 mx-auto"
            ref={useAnimateFadeUp}
          >
            Conócenos
          </h1>
          <p
            className="text-md text-center mt-1 mb-4 text-white/80 opacity-0 mx-0 md:text-md "
            ref={useAnimateFadeLeft}
          >
            En CEREDENT, estamos comprometidos a brindar atención dental de alta
            calidad y un enfoque en la comodidad y bienestar de nuestros
            pacientes.
          </p>
        </div>

        <div className="mt-[5rem]">
          <div className="grid w-[90%] md:w-[65%] mx-auto gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {Imgs.map((item) => (
              <ImgAbout
                key={item.id}
                imagen={item.imagen}
                description={item.description}
                efecto={item.efecto}
                delay={item.delay}
              />
            ))}
          </div>

          <div className="grid gap-5 grid-cols-1 w-[80%] md:w-[65%] mt-[9rem] mx-auto md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <div
                key={section.id}
                className="p-4 bg-[#2A2A2A] rounded-lg mt-8 text-center ease-in duration-300 border-3 border-[#43C6AC] opacity-0 shadow-[0px_10px_30px_rgba(55,102,255,0.4)] md:ml-5 lg:hover:scale-105"
                ref={section.animacion}
              >
                <FaTooth size={40} className="text-[#43C6AC] mb-2" />
                <h3 className="text-xl font-semibold text-white">
                  {section.title}
                </h3>
                <p className="text-white/80 mt-3">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
