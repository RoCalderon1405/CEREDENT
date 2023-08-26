import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
// https://www.flaticon.es/iconos-gratis/dental

export const CartaServicios = ({id, title, img, descipcion}) => {
  return (
    <div>
        <Card
          shadow="sm"
          key={id}
          isPressable
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={img}
              className="w-full object-cover h-[140px]"
              src={img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{title}</b>
            <p className="text-default-500">{descipcion}</p>
          </CardFooter>
        </Card>
    </div>
  );
};
