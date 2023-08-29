import React from "react";
import { Input } from "@nextui-org/react";
import { ImWhatsapp } from "react-icons/im";
import { LiaFacebookMessenger } from "react-icons/lia";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
// import { AiOutlineUser } from "react-icons/ai";
import useIntersectionObserver from "../../Hooks/InterseccitonObserver";
import { CartaContact } from "./CartaContact";

export const ContactUs = () => {
  const contactos = [
    {
      contactoId: 1,
      medio: "WhatsApp",
      contacto: "+52 55 3029 6592",
      linkContacto:
        "https://wa.me/+525530296592?text=Hola%20Poncho%2C%20este%20es%20un%20link%20para%20tu%20whats",
      icono: <ImWhatsapp className="text-green-500 text-4xl" />,
    },
    {
      contactoId: 2,
      medio: "Messenger",
      contacto: "Roberto Rojas",
      linkContacto: "http://m.me/tonatiuh.calderon.18",
      icono: <LiaFacebookMessenger className="text-black text-5xl" />,
    },
    {
      contactoId: 3,
      medio: "Instagram",
      contacto: "poncho@ceredent.com",
      linkContacto: "https://react-icons.github.io/react-icons/search?q=what",
      icono: <BsInstagram className="text-[#E4405F] text-4xl" />,
    },
    {
      contactoId: 4,
      medio: "Email",
      contacto: "poncho@ceredent.com",
      linkContacto: "Link",
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
    threshold: 0.8,
  });
  const useAnimateFadeRight = useIntersectionObserver(animateFadeRight, {
    threshold: 0.8,
  });
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.8,
  });

  return (
    <section className="" id="contact">
      <div className="container mx-auto py-10 lg:gap-10">
        <div className="flex flex-col items-center lg:justify-center md:w-[80%] m-auto">
          <h2
            className="flex gap-4 text-5xl md:text-6xl font-black mb-4 text-blue-800 opacity-0"
            ref={useAnimateFadeUp}
          >
            Contáctanos <ImWhatsapp />
          </h2>
          <p
            className="text-sm md:text-2xl md:text-center mt-1 mb-1 text-black opacity-0"
            ref={useAnimateFadeLeft}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            nesciunt unde illum illo modi fugit nihil fuga id earum omnis. Eius
            quisquam laboriosam officiis numquam!
          </p>
          <div className="line-animation"></div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-5 mx- mt-10">
            {contactos.map((item) => (
              <CartaContact
                key={item.contactoId}
                id={item.contactoId}
                medio={item.medio}
                contacto={item.contacto}
                linkContacto={item.linkContacto}
                icono={item.icono}
              />
            ))}
          </div>
          <div className="mt-8">
            <div>
              <h2>Déjanos un mensaje.</h2>
            </div>
            <Input
              type="email"
              variant="underlined"
              isRequired
              label="Email"
              color="secondary"
              isClearable
              // startContent= {
              // <AiOutlineUser className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />

              // }
            />
            <Input
              type="name"
              variant="underlined"
              isRequired
              label="Nombre"
              color="secondary"
              isClearable
              // startContent= {
              // <AiOutlineMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              // }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
