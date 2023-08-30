import React from "react";
import Familia from "../../assets/familia.png";
import Ceredent from "../../assets/Logo/CEREDENT.jpeg";
import { LiaToothSolid } from "react-icons/lia";
import { MyButton } from "../../Hooks/MyButton";
import { Link } from "@nextui-org/react";
import useIntersectionObserver from "../../Hooks/InterseccitonObserver";
import "./header.css";

export const Header = () => {

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
        entry.target.classList.add("animate-fade-up", "animate-duration-1000", "animate-ease-in-out");
      } 
    });
  };

  // Crear instancias del hook de Intersection Observer
  const useAnimateFadeLeft = useIntersectionObserver(animateFadeLeft, { threshold: 0.8 });
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, { threshold: 0.8 });


  return (
    <>
      <section id="header" className="">
        <div className="header__container py-0 pt-4 px-4 h-screen bg-center md:flex lg:flex">
          <div className="m-auto h-[30%] flex flex-col md:w-1/2 md:mt-auto md:ml-0 md:mr-0 md:h-auto lg:m-auto lg:w-1/2">
            <div className="flex w-fit mx-auto mb-3 justify-center p-0 animation-scale">
              <img
                src={Ceredent}
                alt="CEREDENT"
                className="shadow-2xl w-60 md:w-auto lg: "
                id="ceredentHeader"
              />
            </div>
            <div className="text-sm m-auto mt-3 mb-8 text-center md:text-lg md:mt-9 animate-fade-left animate-duration-1000 animate-ease-linear">
              <Link href="#aboutUs">
                <MyButton
                  className="font-bold text-black w-full"
                  variant="shadow"
                  size="lg"
                  color="green"
                  endContent={
                    <LiaToothSolid color="white" className="text-4xl" />
                  }
                >
                  😄 Conócenos
                </MyButton>
              </Link>
            </div>
          </div>
          <div 
          className="h-[70%] flex items-center justify-center w-full overflow-hidden md:w-1/2 md:m-auto md:h-[90%] lg:w-1/2 lg:mt-0"
          ref={useAnimateFadeUp}
          >
            <img
              src={Familia}
              alt="Famila"
              id="imgFamilia"
              className="w-auto h-full md:w-full md:min-w-[510px] lg:w-max"
            />
          </div>
        </div>
      </section>
    </>
  );
};
