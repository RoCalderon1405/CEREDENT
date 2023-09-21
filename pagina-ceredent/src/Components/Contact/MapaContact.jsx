import React from "react";
import Mapa from "../../assets/Contacto/mapa.png";
import useIntersectionObserver from "../../Hooks/InterseccitonObserver";

export const MapaContact = () => {
  const animateFadeUp = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-up",
          "animate-duration-1000",
          "animate-delay-[500ms]",
          "animate-ease-in-out",
          "opacity-100"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade-up",
          "animate-duration-1000",
          "animate-delay-[500ms]",
          "animate-ease-in-out",
          "opacity-100"
        );
      }
    });
  };
  const animateFade = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade",
          "animate-duration-2500",
          "animate-ease-in-out",
          "opacity-100"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade",
          "animate-duration-2500",
          "animate-ease-in-out",
          "opacity-100"
        );
      }
    });
  };

  // Crear instancias del hook de Intersection Observer
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.8,
  });
  const useAnimateFade = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });

  return (
    <section
      className="text-center min-w-[300px] w-[95%] md:w-[80%] mx-auto"
      id="ubicacion"
    >
      <div
        className="flex justify-center mb-5 pt-[8rem] opacity-0"
        ref={useAnimateFadeUp}
      >
        <h2 className="text-3xl text-white font-black flex items-center">
          Ubicación
        </h2>
      </div>
      <div className="opacity-0" ref={useAnimateFade}>
        <div className="grid grid-cols-1 my-[5rem] md:grid-cols-2 gap-5">
          <div className="">
            <h3 className="text-xl font-semibold text-white/80 mb-5">
              Dirección
            </h3>
            <p className="text-white/60">
              {" "}
              Av. 613 no. 33-4ta, sección de Aragón, Gustavo A. Madero, 07979
              Ciudad de México, CDMX
            </p>
          </div>
          <div className="mb-5">
            <h3 className="text-xl font-semibold text-white/80 mb-5">
              Horario
            </h3>
            <p className="text-white/60">Lunes a Sábado: 9 AM - 5 PM</p>
          </div>
        </div>

        <div className="rounded-full">
          <iframe
            className="rounded-lg"
            width="100%"
            height="600"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Av%20613%20no.%2033-4ta,%20secci%C3%B3n%20de%20Arag%C3%B3n,%20Gustavo%20A.%20Madero,%2007979%20Ciudad%20de%20M%C3%A9xico,%20CDMX+(CERE%20DENT)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">Find Population on Map</a>
          </iframe>
        </div>
      </div>
    </section>
  );
};
