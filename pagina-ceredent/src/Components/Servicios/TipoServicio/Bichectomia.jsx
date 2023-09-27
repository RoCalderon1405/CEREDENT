import React from "react";
import { FaTooth } from "react-icons/fa";
import EsteticaDentalImg from "../../../assets/Servicios/Odontologia/odontoEstetica.jpg";
import useIntersectionObserver from "../../../Hooks/InterseccitonObserver";

export const Bichectomia = () => {
  const animateFadeLeft = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-left",
          "animate-duration-[1300ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade-left",
          "animate-duration-[1300ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      }
    });
  };

  const animateFadeUp = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-up",
          "animate-duration-[1300ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade-up",
          "animate-duration-[1300ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      }
    });
  };

  const animateFade = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade",
          "animate-duration-[1300ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade",
          "animate-duration-[1300ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      }
    });
  };

  const useAnimateFadeLeft = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });

  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.1,
  });
  const useAnimateFade = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });

  return (
    <section
      id="bichectomia"
      className="bg-gradient-to-t from-[#191645] to-[#2A2A2A] py-8"
    >
      <div className=" mx-auto py-[2rem] md:py-[2rem] lg:gap-10">
        <div className="flex flex-col items-center w-[90%] md:w-[90%] lg:w-[55%] mx-auto lg:justify-center">
          <div className="opacity-0" ref={useAnimateFadeUp}>
            <h1 className="text-3xl text-center md:text-4xl font-black mb-5 text-white mx-auto">
              Resalta tu Belleza <br /> Bichectomía
            </h1>
          </div>
          <div className="opacity-0" ref={useAnimateFadeLeft}>
            <p className="text-xl text-left my-[4rem] text-white/80 mx-0 md:text-md">
              La bichectomía es un procedimiento quirúrgico que reduce las
              mejillas prominentes, proporcionando un contorno facial más
              definido y estilizado. Nuestro equipo de expertos está dedicado a
              brindarte resultados naturales y armoniosos.
            </p>
          </div>
        </div>

        <div className="mt-[3rem] md:mt-[5rem]">
          <div className="grid w-[95%] mx-auto gap-[2rem] lg:grid-cols-2 md:w-[80%] lg:w-[70%]">
            <div
              className="p-6 w-[95%] mx-auto rounded-lg border-2 border-white/20 bg-[#2A2A2A] shadow-[0_1px_35px_rgba(55,102,255,0.3)] opacity-0"
              ref={useAnimateFade}
            >
              <img
                src={EsteticaDentalImg}
                alt="Bichectomía"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="p-4 text-center">
              <FaTooth size={40} className="text-[#43C6AC] mb-8" />
              <h3 className="text-xl text-white text-left font-semibold mb-8">
                Nuestros Servicios
              </h3>
              <p className="text-white/80 text-left">
                Ofrecemos procedimientos de bichectomía personalizados para
                resaltar tu belleza natural. Nuestro equipo altamente calificado
                te guiará a través de cada paso, asegurando una experiencia
                segura y resultados satisfactorios.
              </p>
            </div>
          </div>
          <div className="w-[80%] mx-auto mt-[4rem]">
            <h3 className="text-xl text-white font-semibold mb-5">
              Beneficios de la Bichectomía
            </h3>
            <p className="text-white/80 text-left ">
              La bichectomía es un procedimiento que ofrece beneficios tanto
              estéticos como funcionales. Al reducir el tamaño de las bolsas de
              Bichat, se logra un contorno facial más definido y armónico. Esto
              no solo mejora tu apariencia, sino que también puede proporcionar
              alivio en casos donde las mejillas prominentes causen molestias al
              morder o hablar. Nuestro equipo de expertos en cirugía plástica
              está comprometido a brindarte los mejores resultados y una
              experiencia segura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
