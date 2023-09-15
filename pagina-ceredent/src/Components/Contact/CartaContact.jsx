import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export const CartaContact = ({
  id,
  cardColor,
  medio,
  contacto,
  linkContacto,
  icono,
}) => {
  return (
    <div className="">
      <Card key={id} className={`max-w-[500px] min-w-[370px] ${cardColor} border-3 border-black/70 shadow-[0_1px_35px_rgba(55,102,255,0.6)]`}>
        <CardHeader className="flex justify-center gap-3 text-2xl font-bold">
          <div className="text-cyan-500 font-bold">{icono}</div>
          <div className="flex flex-col">
            <p className="text-md">{medio}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="items-center text-xl font-medium">
          <p>{contacto}</p>
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-center">
          <Link 
          isExternal 
          showAnchorIcon 
          target="_blank" 
          href={linkContacto} 
          className="text-xl p-1 font-semibold text-sky-600 lg:hover:text-black lg:hover:font-bolder transition-all ease-in duration-400"
          >
            ¡Contáctame!
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
