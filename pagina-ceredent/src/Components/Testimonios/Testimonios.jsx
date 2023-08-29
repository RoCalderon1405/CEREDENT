import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import { FaUsers } from "react-icons/fa";
import useIntersectionObserver from "../../Hooks/InterseccitonObserver";
import { CartaTestimonios } from "./CartaTestimonios";
import testimonio1 from "../../assets/Testimonios/testimonio1.jpg";
import "./testimonios.css";

export const Testimonios = () => {
  const testimonios = [
    {
      id: 1,
      imagen: testimonio1,
      nombre: "Poncho Calderón",
      comentario:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus voluptatem molestiae ad totam voluptatum expedita eum est porro eius.",
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
    <section className="bg-white" id="testimonios">
      <div className="container mx-auto py-10 lg:gap-10">
        <div className="flex flex-col items-center lg:justify-center md:w-[80%] m-auto">
          <h2
            className="flex gap-4 text-5xl md:text-6xl font-black mb-4 text-blue-800 opacity-0"
            ref={useAnimateFadeUp}
          >
            Testimonios <FaUsers/>
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
        <div className="flex flex-col items-center">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <CartaTestimonios />
            </SwiperSlide>
            <SwiperSlide>
              <CartaTestimonios />
            </SwiperSlide>
            <SwiperSlide>
              <CartaTestimonios />
            </SwiperSlide>
            <SwiperSlide>
              <CartaTestimonios />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
