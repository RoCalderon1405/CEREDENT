import React from "react";
import { CartaServicios } from "./CartaServicios";
import protesico from "../../assets/Servicios/protesico.png";
import cuidadoDental from "../../assets/Servicios/cuidado-dental.png";

export const Servicios = () => {
  const servicios = [
    {
      id: 1,
      title: "Blanquemiento",
      img: cuidadoDental,
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde, tempore hic ea porro praesentium error dicta fuga dolor asperiores. At porro natus deleniti, pariatur quidem velit. Unde, odio ipsam!",
    },
    {
      id: 2,
      title: "Prótesis Dental",
      img: protesico,
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde, tempore hic ea porro praesentium error dicta fuga dolor asperiores. At porro natus deleniti, pariatur quidem velit. Unde, odio ipsam!",
    },
    {
      id: 3,
      title: "Prótesis Dental",
      img: protesico,
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde, tempore hic ea porro praesentium error dicta fuga dolor asperiores. At porro natus deleniti, pariatur quidem velit. Unde, odio ipsam!",
    },
    {
      id: 4,
      title: "Prótesis Dental",
      img: protesico,
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde, tempore hic ea porro praesentium error dicta fuga dolor asperiores. At porro natus deleniti, pariatur quidem velit. Unde, odio ipsam!",
    },
    {
      id: 5,
      title: "Prótesis Dental",
      img: protesico,
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde, tempore hic ea porro praesentium error dicta fuga dolor asperiores. At porro natus deleniti, pariatur quidem velit. Unde, odio ipsam!",
    },
    {
      id: 6,
      title: "Prótesis Dental",
      img: protesico,
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde, tempore hic ea porro praesentium error dicta fuga dolor asperiores. At porro natus deleniti, pariatur quidem velit. Unde, odio ipsam!",
    },
  ];

  return (
    <section className="h-screen bg-slate-300" id="#servicios">
      <div className="container m-auto py-5">
        <div>
          <div>
            <h2>Nuestros Servicios</h2>
            <p className="">
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

          <div className="text-center">
            cartas Servicios
            {servicios.map((servicio) => (
              <CartaServicios
                key={servicio.id}
                id= {servicio.id}
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
