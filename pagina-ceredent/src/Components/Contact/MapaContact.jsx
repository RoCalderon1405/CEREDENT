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
          "opacity:1"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade-up",
          "animate-duration-1000",
          "animate-delay-[500ms]",
          "animate-ease-in-out",
          "opacity:1"
        );
      }
    });
  };

  // Crear instancias del hook de Intersection Observer
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.8,
  });
  return (
    <>
      <div className="flex justify-center mb-5">
      <h2 className="text-2xl font-bold flex items-center">
        Ubicación 
      </h2>
      <img src={Mapa} alt="Mapa icon" className="w-[3rem] ml-2" />
      </div>
      <div className="col-span-2">
        <iframe
          title="Mapa"
          width="100%"
          height="600"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Av%20613%20no.%2033-4ta,%20secci%C3%B3n%20de%20Arag%C3%B3n,%20Gustavo%20A.%20Madero,%20CP%2007979%20Ciudad%20de%20M%C3%A9xico,%20CDMX+(CEREDENT)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen=""
        ></iframe>
      </div>
    </>
  );
};
