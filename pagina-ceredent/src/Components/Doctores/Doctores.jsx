import React from "react";
import { FaUserMd } from "react-icons/fa";
import { CardDoc } from "./CardDoc";
import Dentista1 from "../../assets/dentista.png";
import Dentista2 from "../../assets/dentista2.png";
import "./doctores.css";

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
  console.log(team)
  return (
    <section id="doctores" className=" mt-5 py-10 bg-blue-600">
      <div className="container m-auto ">
        <div className="">
          <h1 className="flex mt-10 text-3xl font-bold text-blue-200 justify-center">
            Nuestro Equipo <FaUserMd className="text-white ml-5" />
          </h1>

          <p className="text-left text-white text-lg mt-10">
            En CEREDENT contamos con un equipo de doctores altamente capacitados
            y comprometidos con tu salud bucal. Nuestros profesionales tienen
            años de experiencia en odontología y están aquí para brindarte la
            mejor atención y soluciones personalizadas para tus necesidades
            dentales.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 mt-10">
         {
          team.map((miembro) => (
            <CardDoc
            key={miembro.id}
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
    </section>
  );
};
