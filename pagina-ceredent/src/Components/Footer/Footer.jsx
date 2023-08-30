import React from "react";
import Ceredent from "../../assets/Logo/CEREDENTcorteSinText.png";
import { Link } from "@nextui-org/react";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

export const Footer = () => {
  return (
    <section className="bg-gray-900 mb-0" id="footer">
      <div className="container mx-auto py-10 lg:gap-10 text-white">
        <div className="flex m-auto w-[45%]">
          <img src={Ceredent} alt="CEREDENT" className="w-full h-full" />
        </div>
        <div className="flex flex-col items-center mt-8 gap-y-4">
          <Link className="text-cyan-500" href="#">
            Inicio
          </Link>
          <Link className="text-cyan-500" href="#aboutUs">
            ¿Quiénes Somos?
          </Link>
          <Link className="text-cyan-500" href="#doctores">
            Doctores
          </Link>
          <Link className="text-cyan-500" href="#servicios">
            Servicios
          </Link>
          <Link className="text-cyan-500" href="#trabajos">
            Trabajos
          </Link>
          <Link className="text-cyan-500" href="#contacto">
            Contacto
          </Link>
        </div>
        <div className="mt-8">
          <h2 className="flex justify-center text-xl ">Redes Sociales</h2>
          <div className="flex justify-center mt-4 mx-auto gap-8 items-center">
            <AiOutlineFacebook className="text-5xl text-[#4273f8] " />
            <BsInstagram className="text-4xl text-[#E4405F]" />
          </div>
        </div>
        <div className="horizontal-line"></div>
        <div className="mt-8">
          <h2 className="flex justify-center text-xs ">
            © CEREDENT 2023. All rights reserved.
          </h2>
          <h2 className="flex justify-center text-md mt-2">
            Desarrollado por
            <Link 
            className="text-md ml-1 underline text-cyan-400"
            href="https://portfoliorocalderon.netlify.app/">
              Roberto Calderón
            </Link>
          </h2>
        </div>
      </div>
    </section>
  );
};
