import React from "react";
import testimonio1 from "../../assets/Testimonios/testimonio1.webp";

export const CartaTestimonios = () => {
  return (
    <div className="bg-[#2A2A2A] border-2 border-[#43C6AC] rounded-[15px] md:shadow-[0px_10px_30px_rgba(55,102,255,0.4)] md:max-w-[400px] h-full m-auto overflow-hidden">
      <div className="justify-between">
        <div className="flex gap-5">
          <div className="ml-3 my-3 border-2 w-[50px] h-[50px] border-[#43C6AC] rounded-full overflow-hidden">
            <img src={testimonio1} alt="Poncho" className="" />
          </div>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-white">
              Poncho Rojas
            </h4>
            <h5 className="text-small tracking-tight text-white/70">
              @Ponchito_Rojas
            </h5>
          </div>
        </div>
      </div>
      <div className="px-3 py-0 text-small text-white/80">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tenetur
          asperiores repellat vel vitae ad sunt veniam totam voluptatem autem?
        </p>
        <span className="py-4 flex mt-auto mx-auto justify-center">⭐⭐⭐⭐⭐</span>
      </div>
    </div>
  );
};
