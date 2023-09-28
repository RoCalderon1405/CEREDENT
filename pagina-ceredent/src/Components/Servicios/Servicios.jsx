import React from "react";
import { CartaServicios } from "./CartaServicios";
import {
  Bichectomia,
  CirugiaBucal,
  Endodoncias,
  EsteticaDental,
  OdontoPediatria,
  Ortodoncias,
  Periodoncias,
  ProtesisDental,
} from "./ServiciosImgImport";
import useIntersectionObserver from "../../Hooks/InterseccitonObserver";

export const Servicios = () => {
  const servicios = [
    {
      id: 1,
      title: "Odontología estética",
      img: EsteticaDental,
      descripcion:
        "Mejora la apariencia dental con procedimientos como blanqueamiento y carillas.",
      ruta: "servicios/odontologia-estetica",
    },
    {
      id: 2,
      title: "Odontopediatría",
      img: OdontoPediatria,
      descripcion: "Cuidado dental especializado para niños.",
      ruta: "servicios/odontopediatria",
    },
    {
      id: 3,
      title: "Cirugía bucal",
      img: CirugiaBucal,
      descripcion:
        "Procedimientos quirúrgicos en la boca, incluyendo extracciones y colocación de implantes.",
      ruta: "servicios/cirugia-bucal",
    },
    {
      id: 4,
      title: "Prótesis Dental",
      img: ProtesisDental,
      descripcion:
        "Restauración de dientes perdidos con prótesis removibles o fijas.",
      ruta: "servicios/protesis-dentales",
    },
    {
      id: 5,
      title: "Periodoncia",
      img: Periodoncias,
      descripcion:
        "Tratamiento de enfermedades de las encías y tejidos que sostienen los dientes.",
      ruta: "servicios/periodoncias",
    },
    {
      id: 6,
      title: "Ortodoncia",
      img: Ortodoncias,
      descripcion:
        "Corrección de la posición de los dientes y la mandíbula para mejorar la mordida y estética facial.",
      ruta: "servicios/ortodoncias",
    },
    {
      id: 7,
      title: "Endodoncia",
      img: Endodoncias,
      descripcion:
        "Tratamiento de conductos radiculares para salvar dientes dañados o infectados.",
      ruta: "servicios/endodoncias",
    },
    {
      id: 8,
      title: "Bichectomia",
      img: Bichectomia,
      descripcion:
        "Tratamiento de conductos radiculares para salvar dientes dañados o infectados.",
      ruta: "servicios/endodoncias",
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
    <section
      className="bg-gradient-to-t from-[#2A2A2A] to-[#191645] "
      id="servicios"
    >
      <div className="container m-auto py-[6rem]">
        <div>
          <div className="flex flex-col items-center w-full md:w-[60%] mx-auto lg:justify-center">
            <h1
              className="text-3xl text-white md:text-4xl font-black mb-5 opacity-0 mx-auto"
              ref={useAnimateFadeRight}
            >
              Nuestros Servicios
            </h1>
            <p
              className="text-md text-center mt-1 mb-4 text-white/80 opacity-0 mx-0 md:text-lg"
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

          <div
            className="text-center mt-10 grid place-items-center w-[90%] mx-auto opacity-0 grid-cols-1 gap-5 md:grid-cols-3"
            ref={useAnimateFadeUp}
          >
            {servicios.map((servicio) => (
              <CartaServicios
                key={servicio.id}
                id={servicio.id}
                title={servicio.title}
                img={servicio.img}
                descripcion={servicio.descripcion}
                ruta={servicio.ruta}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
