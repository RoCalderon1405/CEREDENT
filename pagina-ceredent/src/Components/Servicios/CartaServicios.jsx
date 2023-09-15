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

export const CartaServicios = ({ id, title, img, descripcion, ruta }) => {
  return (
    <div className="flex gap-10 mb-6 min-w-[200px] max-w-[260px]">
      <Card shadow="" key={id} className="bg-[#191645] h-[450px] border-3 border-[#43C6AC] shadow-[0px_10px_30px_rgba(55,102,255,0.4)] md:shadow-[0px_10px_30px_rgba(55,102,255,0.7)]">
        <CardBody className="overflow-visible p-0">
          <div className="m-auto p-5 md:p-6">
            <Image
              shadow="md"
              radius="lg"
              alt={img}
              className="w-full object-cover h-full bg-white"
              src={img}
            />
          </div>
        </CardBody>
        <CardFooter className="text-small flex flex-col">
          <h5 className="text-lg text-white font-semibold">{title}</h5>
          <p className="text-white/80">{descripcion}</p>
          <Link href={ruta} className="lg:hover:opacity-100">
            <Button className="mt-3 font-semibold text-md bg-[#44b8a0] text-white rounded-full lg:hover:bg-blue-700 lg:hover:scale-105 transition-all ease-in-out">
              Saber más
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
