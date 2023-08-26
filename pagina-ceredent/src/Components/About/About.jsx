import React from "react";
import AtenciónImg from "../../assets/dentistaTrabajando.jpg";
import { MyButton } from "../../Hooks/MyButton";
import { BsCalendar2Date } from "react-icons/bs";
import "./about.css";

export const About = () => {
  return (
    <section id="aboutUs" className="bg-sky-500 py-8">
      <div className="container mx-auto lg:gap-10">
        <div className="flex flex-col items-center lg:justify-center md:w-[80%] m-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-blue-800">
            Conócenos 👋
          </h2>
          <p className="text-sm md:text-2xl md:text-center mt-1 mb-1 text-indigo-50">
            En CEREDENT, estamos comprometidos a brindar atención dental de alta
            calidad y un enfoque en la comodidad y bienestar de nuestros
            pacientes.
          </p>
          <div className=" line-animation"></div>
        </div>

        <div className="mt-8">
          <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <img src={AtenciónImg} alt="Consulta" className="rounded-lg w-full" />
          <img src={AtenciónImg} alt="Consulta" className="rounded-lg w-full" />
          <img src={AtenciónImg} alt="Consulta" className="rounded-lg w-full" />
          <img src={AtenciónImg} alt="Consulta" className="rounded-lg w-full h-full md:row-span-2" />
          <img src={AtenciónImg} alt="Consulta" className="rounded-lg w-full md:col-span-2" />
          <img src={AtenciónImg} alt="Consulta" className="rounded-lg w-full md:col-span-3" />
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
