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

export const CartaContact = ({ id, medio, contacto, linkContacto, icono }) => {
  return (
    <div>
      <Card key={id} className="max-w-[400px]">
        <CardHeader className="flex justify-center gap-3">
          {icono}
          <div className="flex flex-col">
            <p className="text-md">{medio}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="items-center">
          <p>{contacto}</p>
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-center">
          <Link isExternal showAnchorIcon href={linkContacto}>
            ¡Contáctame!
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
