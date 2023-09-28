import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";

import useIntersectionObserver from "../../Hooks/InterseccitonObserver";
import { CartaTestimonios } from "./CartaTestimonios";
import testimonio1 from "../../assets/Testimonios/testimonio1.webp";
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
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.1,
  });

  return (
    <section
      className="bg-gradient-to-t from-[#191645] to-[#2A2A2A]"
      id="testimonios"
    >
      <div className="container mx-auto py-[6rem]">
        <div className="flex flex-col items-center lg:justify-center md:w-[80%] m-auto">
          <h1
            className="flex gap-4 text-3xl md:text-4xl font-black mb-10 text-white opacity-0"
            ref={useAnimateFadeUp}
          >
            Testimonios
          </h1>
          <p
            className="text-sm text-center md:text-lg mt-1 mb-6 text-white/80 opacity-0"
            ref={useAnimateFadeLeft}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            nesciunt unde illum illo modi fugit nihil fuga id earum omnis. Eius
            quisquam laboriosam officiis numquam!
          </p>
        </div>
        <div className="">
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"1"}
            loop
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
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
