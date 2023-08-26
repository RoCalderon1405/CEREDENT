import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
// https://www.flaticon.es/iconos-gratis/dental

export const CartaServicios = ({id, title, img, descipcion}) => {
  return (
    <div className="flex gap-10 mb-6">
        <Card
          shadow="sm"
          key={id}
          isPressable
        >
          <CardBody className="overflow-visible p-0">
            <div className="m-auto">
            <Image
              shadow="sm"
              radius="lg"
              alt={img}
              className="w-full object-cover h-full"
              src={img}
            />
            </div>
          </CardBody>
          <CardFooter className="text-small flex flex-col">
            <b>{title}</b>
            <p className="text-default-500">{descipcion}</p>
          </CardFooter>
        </Card>
    </div>
  );
};
