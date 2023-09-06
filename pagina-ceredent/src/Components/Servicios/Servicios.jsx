import React from "react";
import { CartaServicios } from "./CartaServicios";
import protesico from "../../assets/Servicios/protesico.png";
import cuidadoDental from "../../assets/Servicios/cuidado-dental.png";
import cepilloDiente from "../../assets/Servicios/cepillo-de-dientes.png";
import radiografia from "../../assets/Servicios/radiografia.png";
import corona from "../../assets/Servicios/corona-dental.png";
import extraccion from "../../assets/Servicios/extraccion.png";
import useIntersectionObserver from "../../Hooks/InterseccitonObserver";

export const Servicios = () => {
  const servicios = [
    {
      id: 1,
      title: "Blanquemiento",
      img: cuidadoDental,
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde, tempore hic ea porro",
    },
    {
      id: 2,
      title: "Prótesis Dental",
      img: protesico,
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde, tempore hic ea porro",
    },
    {
      id: 3,
      title: "Prótesis Dental",
      img: cepilloDiente,
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde, tempore hic ea porro",
    },
    {
      id: 4,
      title: "Prótesis Dental",
      img: radiografia,
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde, tempore hic ea porro",
    },
    {
      id: 5,
      title: "Prótesis Dental",
      img: corona,
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde, tempore hic ea porro",
    },
    {
      id: 6,
      title: "Prótesis Dental",
      img: extraccion,
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde, tempore hic ea porro",
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
          "animate-duration-1500",
          "animate-ease-in-out",
          "opacity:100"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade-up",
          "animate-duration-1500",
          "animate-ease-in-out",
          "opacity:100"
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
  const useAnimateFadeLeft = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });
  const useAnimateFadeRight = useIntersectionObserver(animateFadeRight, {
    threshold: 0.1,
  });
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.01,
  });

  return (
    <section className="bg-slate-300" id="servicios">
      <div className="container m-auto py-[6rem]">
        <div>
          <div className="flex flex-col items-center w-full md:w-[60%] mx-auto lg:justify-center">
            <h2
              className="text-3xl md:text-4xl font-black mb-5 text-blue-800 opacity-0 mx-auto"
              ref={useAnimateFadeRight}
            >
              Nuestros Servicios
            </h2>
            <p
              className="text-md text-center mt-1 mb-4 text-black opacity-0 mx-0 md:text-lg"
              ref={useAnimateFadeLeft}
            >
              En nuestro consultorio dental, nos enorgullece ofrecer una amplia
              gama de servicios profesionales diseñados para atender todas tus
              necesidades dentales y de cuidado oral. Nuestro equipo altamente
              calificado está comprometido en brindarte la mejor atención y
              resultados excepcionales. Además de nuestros servicios dentales,
              contamos con un laboratorio dental en sitio para garantizar la
              calidad y eficiencia en la creación de prótesis y soluciones
              personalizadas.
            </p>
          </div>
          <div className="line-animation"></div>

          <div
            className="text-center mt-10 grid place-items-center w-[90%] mx-auto opacity-0 grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5"
            ref={useAnimateFadeUp}
          >
            {servicios.map((servicio) => (
              <CartaServicios
                key={servicio.id}
                id={servicio.id}
                title={servicio.title}
                img={servicio.img}
                descipcion={servicio.descripcion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
