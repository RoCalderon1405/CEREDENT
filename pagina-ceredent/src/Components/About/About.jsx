import React from "react";
import AtenciónImg from "../../assets/dentistaTrabajando.jpg";
import { MyButton } from "../Button/MyButton";
import { BsCalendar2Date } from "react-icons/bs";
import "./about.css";

export const About = () => {
  return (
    <section id="aboutUs" className="mt-5 py-10 bg-sky-500 ">
      <div className="container mx-auto lg:grid lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col items-center lg:justify-center">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-blue-800 p-8">
            Conócenos 👋
          </h2>
          <p className="text-xl md:text-2xl text-center mb-8 text-indigo-50">
            En CEREDENT, estamos comprometidos a brindar atención dental de alta
            calidad y un enfoque en la comodidad y bienestar de nuestros
            pacientes.
          </p>
        </div>

        <div className="mt-10">
          <img src={AtenciónImg} alt="Consulta" className="rounded-lg" />
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
