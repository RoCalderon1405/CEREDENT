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
          "animate-ease-in-out"
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
    threshold: 0.5,
  });
  const useAnimateFadeRight = useIntersectionObserver(animateFadeRight, {
    threshold: 0.5,
  });
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.2,
  });

  return (
    <section className="bg-slate-300" id="servicios">
      <div className="container m-auto py-10">
        <div>
          <div>
            <h2 ref={useAnimateFadeRight}>Nuestros Servicios</h2>
            <p className="" ref={useAnimateFadeLeft}>
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
            className="text-center mt-10 grid grid-cols-2 gap-5"
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
