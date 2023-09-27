import React from "react";
import Ceredent from "../../../assets/Logo/CEREDENTcorteSinText.png";
import { Link } from "react-router-dom";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

export const FooterServicio = () => {
  return (
    <section className="bg-gray-900 mb-0 pb-12" id="footer">
      <div className="w-[80%] mx-auto py-8 text-white md:gap-10 md:grid md:grid-cols-4">
        <div className="flex m-auto w-[65%] bg-white/80 rounded-full p-6 md:w-[95%] max-w-[280px] min-w-[167px] md:mx-0">
          <img src={Ceredent} alt="CEREDENT" className="w-full h-full" />
        </div>
        <div className="flex flex-col items-center mt-8 gap-y-4">
          <h2 className="text-xl">CEREDENT</h2>

          <Link
            className="text-cyan-500 hover:scale-105 hover:text-blue-600 transition-all duration-300 ease-in-out"
            to="/servicio/odontopediatria"
          >
            Odontopediatria
          </Link>
          <Link
            className="text-cyan-500 hover:scale-105 hover:text-blue-600 transition-all duration-300 ease-in-out"
            to="/servicio/cirugia-bucal"
          >
            Cirugía Bucal
          </Link>
          <Link
            className="text-cyan-500 hover:scale-105 hover:text-blue-600 transition-all duration-300 ease-in-out"
            to="/servicio/protesis-dentales"
          >
            Prótesis Dentales
          </Link>
          <Link
            className="text-cyan-500 hover:scale-105 hover:text-blue-600 transition-all duration-300 ease-in-out"
            to="/servicio/periodoncias"
          >
            Periodóncias
          </Link>
          <Link
            className="text-cyan-500 hover:scale-105 hover:text-blue-600 transition-all duration-300 ease-in-out"
            to="/servicio/ortodoncias"
          >
            Ortodoncias
          </Link>
          <Link
            className="text-cyan-500 hover:scale-105 hover:text-blue-600 transition-all duration-300 ease-in-out"
            to="/servicio/endodoncias"
          >
            Endodoncias
          </Link>
          <Link
            className="text-cyan-500 hover:scale-105 hover:text-blue-600 transition-all duration-300 ease-in-out"
            to="/servicio/bichectomia"
          >
            Bichectomia
          </Link>
        </div>

        <div className="mt-8">
          <h2 className="flex justify-center text-xl ">Redes Sociales</h2>
          <div className="flex justify-center mt-4 mx-auto gap-8 items-center">
            <AiOutlineFacebook className="text-5xl text-[#4273f8] lg:hover:scale-110 transition-all duration-300 ease-in-out" />
            <BsInstagram className="text-4xl text-[#E4405F] lg:hover:scale-110 transition-all duration-300 ease-in-out" />
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <h2 className="text-xl">Dirección</h2>
          <Link
            to="https://www.google.com/maps/place/CERE+DENT+(Centro+de+Rehabilitaci%C3%B3n+Dental)/@19.4502989,-99.0692346,16z/data=!4m10!1m2!2m1!1sceredent!3m6!1s0x85d1fbd10dc1d907:0xedd46fe64a179ea9!8m2!3d19.4487276!4d-99.0664501!15sCghjZXJlZGVudFoKIghjZXJlZGVudJIBB2RlbnRpc3TgAQA!16s%2Fg%2F11j3m7nwf6?entry=ttu"
            className="text-center mt-4 text-cyan-500 transition-all duration-300 ease-in-out lg:hover:scale-105 lg:hover:text-blue-600"
            target="_blank"
          >
            Av. 613 no. 33-4ta, sección de Aragón, Gustavo A. Madero, 07979
            Ciudad de México, CDMX
          </Link>
        </div>
      </div>
      <div className="w-[80%] horizontal-line"></div>
      <div className="mt-8 text-white">
        <h2 className="flex justify-center text-xs ">
          © CEREDENT 2023. All rights reserved.
        </h2>
        <h2 className="flex justify-center text-md mt-2 ">
          Desarrollado por
          <Link
            className="text-md ml-2 text-cyan-400 hover:scale-105 hover:text-blue-600 transition-all duration-300 ease-in-out"
            to="https://portfoliorocalderon.netlify.app/"
            target="_blank"
          >
            Roberto Calderón
          </Link>
        </h2>
      </div>
    </section>
  );
};
