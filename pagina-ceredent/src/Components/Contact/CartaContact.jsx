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
    <Card
      key={id}
      className={`max-w-[500px] min-w-[370px] ${cardColor} border-2 border-[#43C6AC] shadow-[0_1px_35px_rgba(55,102,255,0.3)]`}
    >
      <CardHeader className="flex justify-center gap-3 text-2xl font-bold">
        <div className="font-bold">{icono}</div>
        <div className="flex flex-col">
          <p className="text-md text-white">{medio}</p>
        </div>
      </CardHeader>
      <Divider className="bg-white/50 w-[80%] mx-auto" />
      <CardBody className="items-center text-xl font-medium">
        <p className="text-white">{contacto}</p>
      </CardBody>
      <Divider className="bg-white/50 w-[80%] mx-auto" />
      <CardFooter className="flex justify-center">
        <Link
          isExternal
          showAnchorIcon
          target="_blank"
          href={linkContacto}
          className="text-xl p-2 font-semibold text-white lg:text-white/50 lg:hover:text-white lg:hover:font-black transition-all ease-in duration-400"
        >
          ¡Contáctame!
        </Link>
      </CardFooter>
    </Card>
  );
};
