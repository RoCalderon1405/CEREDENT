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
    <div className="my-5 text-center">
      <div
        className="flex justify-center mb-5 opacity-0"
        ref={useAnimateFadeUp}
      >
        <h2 className="text-3xl text-blue-800 font-black flex items-center">
          Ubicación
          <img src={Mapa} alt="Mapa icon" className="w-8 ml-2" />
        </h2>
      </div>
      <div className="opacity-0" ref={useAnimateFade}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="mb-5">
            <h3 className="text-xl font-semibold text-gray-700">Dirección</h3>
            <p className="text-gray-600"> Av. 613 no. 33-4ta, sección de Aragón, Gustavo A. Madero, 07979
            Ciudad de México, CDMX</p>
          </div>
          <div className="mb-5">
            <h3 className="text-xl font-semibold text-gray-700">Horario</h3>
            <p className="text-gray-600">Lunes a Sábado: 9 AM - 5 PM</p>
          </div>
          <div className="mb-5">
            <h3 className="text-xl font-semibold text-gray-700">Teléfono</h3>
            <p className="text-gray-600">+1 (123) 456-7890</p>
          </div>
          <div className="mb-5">
            <h3 className="text-xl font-semibold text-gray-700">
              Correo Electrónico
            </h3>
            <p className="text-gray-600">ponchito@ceredent.com</p>
          </div>
        </div>
        <div>
          <iframe
            title="Mapa"
            width="100%"
            height="400"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Av%20613%20no.%2033-4ta,%20secci%C3%B3n%20de%20Arag%C3%B3n,%20Gustavo%20A.%20Madero,%20CP%2007979%20Ciudad%20de%20M%C3%A9xico,%20CDMX+(CEREDENT)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </div>
  );
};
