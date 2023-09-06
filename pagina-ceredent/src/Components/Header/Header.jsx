import React from "react";
import VideoDiente from "../../assets/Portada/videoDiente1.webm";
import Familia from "../../assets/familia.png";
import Ceredent from "../../assets/Logo/CEREDENT.jpeg";
import { FaTooth } from "react-icons/fa";
import { Button, Link } from "@nextui-org/react";
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
        entry.target.classList.add(
          "animate-fade-up",
          "animate-duration-1000",
          "animate-ease-in-out"
        );
      }
    });
  };

  // Crear instancias del hook de Intersection Observer
  const useAnimateFadeLeft = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.8,
  });
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.8,
  });

  return (
    <>
      <section
        id="header"
        className="relative h-screen text-center overflow-hidden"
      >
        <div className="relative mt-[5rem] pt-5 px-4  my-auto h-full z-[2] justify-center md:flex md:pt-0 md:mt-0">
          <div className="m-auto h-full flex flex-col mt-[3rem] md:justify-center md:mt-auto md:h-auto lg:m-auto lg:w-1/2 lg:ml-0">
            <div className="flex w-fit mx-auto mb-3 justify-center p-0 animation-scale md:w-full">
              <img
                src={Ceredent}
                alt="CEREDENT"
                className="shadow-2xl w-60 md:w-auto"
                id="ceredentHeader"
              />
            </div>
            <div className="text-sm m-auto mt-3 mb-8 text-center md:text-lg md:mt-9 animate-fade-left animate-duration-1000 animate-ease-linear">
              <Link href="#aboutUs">
                <Button
                  variant="ghost"
                  size="lg"
                  color="primary"
                  className="font-semibold text-lg bg-blue-600/70 text-white py-3 px-6 rounded-full hover:bg-blue-700 hover:scale-105 transition-all ease-in-out"
                  endContent={
                    <FaTooth color="white" size={24} className="mr-2" />
                  }
                >
                  Conócenos
                </Button>
              </Link>
            </div>
          </div>
          {/* <div
            className="h-[70%] flex items-center justify-center w-full overflow-hidden md:w-1/2 md:m-auto md:h-[90%] lg:w-1/2 lg:mt-0"
            ref={useAnimateFadeUp}
          >
            <img
              src={Familia}
              alt="Famila"
              id="imgFamilia"
              className="w-auto h-full md:w-full md:min-w-[510px] lg:w-max opacity-0"
            />
          </div> */}
        </div>
        <div className="absolute top-0 bottom-0 object-cover w-screen h-full overflow-hidden z-[1]">
          <video
            className="object-cover object-center w-full h-full"
            autoPlay
            muted
            loop
          >
            <source src={VideoDiente} type="video/mp4"></source>
          </video>
        </div>
      </section>
    </>
  );
};
