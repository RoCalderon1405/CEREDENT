import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { FaTooth } from "react-icons/fa";
import AtenciónImg from "../../assets/dentistaTrabajando.jpg";
import { Button } from "@nextui-org/button";
import useIntersectionObserver from "../../Hooks/InterseccitonObserver";
import { ImgAbout } from "./ImgAbout";

export const About = () => {
  const Imgs = [
    {
      id: 1,
      imagen: AtenciónImg,
      description: "Description",
      efecto: "useAnimateFadeUp",
      delay: 100,
    },
    {
      id: 2,
      imagen: AtenciónImg,
      description: "Description",
      efecto: "h",
      delay: 200,
    },
    {
      id: 3,
      imagen: AtenciónImg,
      description: "Description",
      efecto: "h",
      delay: 300,
    },
    {
      id: 4,
      imagen: AtenciónImg,
      description: "Description",
      efecto: "h",
      delay: 400,
    },
    {
      id: 5,
      imagen: AtenciónImg,
      description: "Description",
      efecto: "h",
      delay: 500,
    },
    {
      id: 6,
      imagen: AtenciónImg,
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
    },
    {
      id: 2,
      title: "Misión",
      description:
        "Proporcionar un enfoque integral en la atención dental, centrado en el bienestar y la satisfacción de nuestros pacientes a través de tratamientos de vanguardia y un equipo comprometido.",
    },
    {
      id: 3,
      title: "Valores",
      description:
        "Nuestros valores se basan en la honestidad, la empatía, la excelencia clínica y la mejora continua para garantizar la confianza y satisfacción de nuestros pacientes.",
    },
  ];

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
          "animate-delay-[500ms]",
          "animate-ease-in-out",
          "opacity:1"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade-up",
          "animate-duration-1000",
          "animate-delay-[500ms]",
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
  const useAnimateFadeLeft = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.2,
  });
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.2,
  });
  const useAnimateButtonFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.2,
  });
  const useAnimateFade = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });

  return (
    <section id="aboutUs" className="bg-slate-200 py-8">
      <div className=" mx-auto py-[5rem] lg:gap-10">
        <div className="flex flex-col items-center w-[80%] md:w-[55%] mx-auto lg:justify-center">
          <h2
            className="text-4xl md:text-5xl font-black mb-5 text-blue-800 opacity-0 mx-auto"
            ref={useAnimateFadeUp}
          >
            Conócenos 👋
          </h2>
          <p
            className="text-md text-center mt-1 mb-4 text-black opacity-0 mx-0 md:text-md "
            ref={useAnimateFadeLeft}
          >
            En CEREDENT, estamos comprometidos a brindar atención dental de alta
            calidad y un enfoque en la comodidad y bienestar de nuestros
            pacientes.
          </p>
          <div className="line-animation"></div>
        </div>

        <div className="mt-[5rem]">
          <div className="grid w-[90%] md:w-[65%] mx-auto gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
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

          <div className="mt-[9rem]">
            <div
              className="grid gap-5 grid-cols-1 w-[80%] md:w-[65%] mx-auto opacity-0 md:grid-cols-2 lg:grid-cols-3"
              ref={useAnimateFade}
            >
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="p-4 bg-blue-200 rounded-lg shadow-md text-center ease-in duration-300 lg:hover:scale-110"
                >
                  <FaTooth size={40} className="text-green-500 mb-2" />
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                  <p className="text-gray-700">{section.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="w-[15rem] m-auto mt-10">
            <Button
              variant="ghost"
              size="lg"
              endContent={<BsCalendar2Date className="text-4xl text-" />}
              className="font-bold text-md text-slate-600 border-blue-700 bg-sky-300  hover:scale-110 hover:bg-blue-800 hover:border-sky-400 hover:text-blue-900 opacity-0"
              ref={useAnimateButtonFadeUp}
            >
              Agenda una cita
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};
