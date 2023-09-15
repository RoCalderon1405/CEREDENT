import React from "react";
import { ImWhatsapp } from "react-icons/im";
import { LiaFacebookMessenger } from "react-icons/lia";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
// import { BsPinMap } from "react-icons/bs";
import useIntersectionObserver from "../../Hooks/InterseccitonObserver";
import { CartaContact } from "./CartaContact";
import { FormContactUs } from "./FormContactUs";
import { MapaContact } from "./MapaContact";

export const ContactUs = () => {
  const contactos = [
    {
      contactoId: 1,
      cardColorAndHover: "bg-green-300 hover:bg-emerald-400 lg:hover:scale-110",
      medio: "WhatsApp",
      contacto: "+52 55 3029 6592",
      linkContacto:
        "https://wa.me/+525530296592?text=Hola%20Poncho%2C%20este%20es%20un%20link%20para%20tu%20whats",
      icono: <ImWhatsapp className="text-green-500 text-4xl" />,
    },
    {
      contactoId: 2,
      cardColorAndHover: "bg-blue-300 hover:bg-sky-400 lg:hover:scale-110",
      medio: "Messenger",
      contacto: "Roberto Rojas",
      linkContacto: "http://m.me/tonatiuh.calderon.18",
      icono: <LiaFacebookMessenger className="text-[#4273f8] text-5xl " />,
    },
    {
      contactoId: 3,
      cardColorAndHover: "bg-pink-300 hover:bg-rose-400 lg:hover:scale-110",
      medio: "Instagram",
      contacto: "poncho@ceredent.com",
      linkContacto: "https://react-icons.github.io/react-icons/search?q=what",
      icono: <BsInstagram className="text-[#E4405F] text-4xl" />,
    },
    {
      contactoId: 4,
      cardColorAndHover: "bg-blue-300 hover:bg-indigo-400 lg:hover:scale-110",
      medio: "Email",
      contacto: "poncho@ceredent.com",
      linkContacto: "mailto:rocalderon1405@hotmail.com",
      icono: <AiOutlineMail className="text-black text-4xl" />,
    },
  ];

  // Definir las funciones de callback para los efectos de animación
  const animateFadeLeft = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-left",
          "animate-duration-1000",
          "animate-ease-in-out",
          "opacity:1"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade-left",
          "animate-duration-1000",
          "animate-ease-in-out",
          "opacity:1"
        );
      }
    });
  };
  const animateFadeRight = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-right",
          "animate-duration-1000",
          "animate-ease-in-out",
          "opacity:1"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade-right",
          "animate-duration-1000",
          "animate-ease-in-out",
          "opacity:1"
        );
      }
    });
  };
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
  const useAnimateFadeLeft = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });
  const useAnimateFadeRight = useIntersectionObserver(animateFadeRight, {
    threshold: 0.1,
  });
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.1,
  });

  return (
    <section
      className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100 to-teal-100"
      id="contacto"
    >
      <div className="container mx-auto py-[8rem] ">
        <div className="flex flex-col items-center lg:justify-center md:w-[80%] m-auto">
          <h2
            className="flex gap-4 text-3xl md:text-4xl font-black mb-4 text-blue-800 opacity-0"
            ref={useAnimateFadeUp}
          >
            Contáctanos <ImWhatsapp />
          </h2>
          <p
            className="text-sm text-center md:text-xl mt-1 mb-1 text-black opacity-0"
            ref={useAnimateFadeLeft}
          >
            ¿Listo para sonreír con confianza? ¡Contáctanos y conoce cómo
            podemos ayudarte!
          </p>
          <div className="line-animation"></div>
        </div>
        <div className="flex flex-col my-10 lg:grid lg:grid-cols-2">
          <div className="flex flex-col gap-10 items-center mx-auto w-full mt-10">
            {contactos.map((item) => (
              <CartaContact
                key={item.contactoId}
                id={item.contactoId}
                cardColor={item.cardColorAndHover}
                medio={item.medio}
                contacto={item.contacto}
                linkContacto={item.linkContacto}
                icono={item.icono}
              />
            ))}
          </div>
          <div className="w-full mx-auto">
            <FormContactUs />
          </div>
        </div>
        <div className="w-full min-w-[300px] m-auto ">
          <MapaContact />
        </div>
      </div>
    </section>
  );
};
