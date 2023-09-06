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
    <div>
      <Card key={id} className={`max-w-[500px] min-w-[370px] ${cardColor}`}>
        <CardHeader className="flex justify-center gap-3 text-2xl font-bold">
          <div className="text-cyan-500">{icono}</div>
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
          className="text-xl p-1 hover:text-black hover:font-bolder"
          >
            ¡Contáctame!
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
