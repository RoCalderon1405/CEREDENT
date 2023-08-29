import React from "react";
import AtenciónImg from "../../assets/dentistaTrabajando.jpg";
import { MyButton } from "../../Hooks/MyButton";
import { BsCalendar2Date } from "react-icons/bs";
import useIntersectionObserver from "../../Hooks/InterseccitonObserver";
import { ImgAbout } from "./ImgAbout";

export const About = () => {
  const Imgs = [
    {
      id: 1,
      imagen: AtenciónImg,
      description: "Description",
      ref: "h",
      delay: 100,
    },
    {
      id: 2,
      imagen: AtenciónImg,
      description: "Description",
      ref: "h",
      delay: 200,
    },
    {
      id: 3,
      imagen: AtenciónImg,
      description: "Description",
      ref: "h",
      delay: 300,
    },
    {
      id: 4,
      imagen: AtenciónImg,
      description: "Description",
      ref: "h",
      delay: 400,
    },
    {
      id: 5,
      imagen: AtenciónImg,
      description: "Description",
      ref: "h",
      delay: 500,
    },
    {
      id: 6,
      imagen: AtenciónImg,
      description: "Description",
      ref: "h",
      delay: 600,
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
  const animateFadeRight = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-right",
          "animate-duration-1000",
          "animate-ease-in-out",
          "opacity:1"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade-right",
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

  // Crear instancias del hook de Intersection Observer
  const useAnimateFadeLeft = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.8,
  });
  const useAnimateFadeRight = useIntersectionObserver(animateFadeRight, {
    threshold: 0.8,
  });
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.8,
  });

  return (
    <section id="aboutUs" className="bg-sky-500 py-8">
      <div className="container mx-auto py-10 lg:gap-10">
        <div className="flex flex-col items-center lg:justify-center md:w-[80%] m-auto">
          <h2
            className="text-5xl md:text-6xl font-black mb-4 text-blue-800 opacity-0"
            ref={useAnimateFadeUp}
          >
            Conócenos 👋
          </h2>
          <p
            className="text-sm md:text-2xl md:text-center mt-1 mb-1 text-indigo-50 opacity-0"
            ref={useAnimateFadeLeft}
          >
            En CEREDENT, estamos comprometidos a brindar atención dental de alta
            calidad y un enfoque en la comodidad y bienestar de nuestros
            pacientes.
          </p>
          <div className="line-animation"></div>
        </div>

        <div className="mt-8">
          <div
            className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
            // ref={useAnimateFadeUp}
          >
            {Imgs.map((item) => (
              <ImgAbout
                key={item.id}
                imagen={item.imagen}
                description={item.description}
                efecto={item.ref}
                delay={item.delay}
              />
            ))}
          </div>
          <div className="w-3/4 md:w-1/2 m-auto">
            <MyButton
              className="font-bold w-full mt-8 text-black"
              variant="shadow"
              size="sm"
              color="green"
              endContent={
                <BsCalendar2Date color="white" className="text-4xl " />
              }
            >
              Agenda una cita
            </MyButton>
          </div>
        </div>
      </div>
    </section>
  );
};
