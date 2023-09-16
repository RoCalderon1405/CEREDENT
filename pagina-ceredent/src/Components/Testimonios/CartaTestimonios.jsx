import React from "react";
import {Card, CardHeader, CardBody, Avatar} from "@nextui-org/react";
import testimonio1 from "../../assets/Testimonios/testimonio1.jpg"

export const CartaTestimonios = () => {
  return (
    <div className="block p-5">
      <Card className="bg-[#2A2A2A] border-2 border-[#43C6AC] shadow-[0px_10px_30px_rgba(55,102,255,0.4)] md:max-w-[400px] h-full m-auto overflow-hidden">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              radius="full"
              size="lg"
              src={testimonio1}
              className="border-3 border-[#43C6AC]"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-white">
                Poncho Rojas
              </h4>
              <h5 className="text-small tracking-tight text-white/70">
                @Ponchito_Rojas
              </h5>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-white/80">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tenetur asperiores repellat vel vitae ad sunt veniam totam voluptatem autem?
          </p>
          <span className="py-2 flex mt-auto mx-auto">
          ⭐⭐⭐⭐⭐
          </span>
        </CardBody>
      </Card>
    </div>
  );
};
