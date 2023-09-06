import React from "react";
import {Card, CardHeader, CardBody, Avatar} from "@nextui-org/react";
import testimonio1 from "../../assets/Testimonios/testimonio1.jpg"

export const CartaTestimonios = () => {
  return (
    <div className="block w-full">
      <Card className="md:max-w-[400px] h-full m-auto overflow-hidden">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src={testimonio1}
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Poncho Rojas
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                @Ponchito_Rojas
              </h5>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tenetur asperiores repellat vel vitae ad sunt veniam totam voluptatem autem?
          </p>
          <span className="py-2 flex mx-auto">
          ⭐⭐⭐⭐⭐
          </span>
        </CardBody>
      </Card>
    </div>
  );
};
