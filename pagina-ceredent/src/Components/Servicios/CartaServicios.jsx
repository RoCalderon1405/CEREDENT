import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Link,
} from "@nextui-org/react";
// https://www.flaticon.es/iconos-gratis/dental

export const CartaServicios = ({ id, title, img, descripcion }) => {
  return (
    <div className="flex gap-10 mb-6 min-w-[200px] max-w-[260px]">
      <Card shadow="sm" key={id} >
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
          <h5 className="text-lg font-semibold">{title}</h5>
          <p className="text-default-500">{descripcion}</p>
          <Link href="#aboutUs" className="lg:hover:opacity-100">
            <Button className="mt-3 font-semibold text-md bg-blue-600 text-white rounded-full lg:hover:bg-blue-700 lg:hover:scale-105 transition-all ease-in-out">
              Saber más
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
