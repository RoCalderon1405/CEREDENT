import React from "react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { MyButton } from "../../Hooks/MyButton";
import { Button } from "@nextui-org/react";

export const FormContactUs = () => {
  return (
    <div className="mt-8 bg-slate-200 p-3 rounded-lg border-1 border-black min-w-[370px] lg:h-fit lg:my-aut">
      <div>
        <h2>Déjanos un mensaje.</h2>
      </div>
      <Input
        type="email"
        variant="underlined"
        isRequired
        label="Email"
        color="secondary"
        isClearable
        size="lg"
        // <AiOutlineUser className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        // }
        className="text-md"
      />
      <Input
        type="name"
        variant="underlined"
        isRequired
        label="Nombre"
        color="secondary"
        isClearable
        size="lg"

        // startContent= {
        // <AiOutlineMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        // }
      />
      <Textarea
        variant="underlined"
        radius="lg"
        // label="Description"
        labelPlacement="outside"
        color="secondary"
        placeholder="Ingrese su mensaje"
        description="Atenderemos su mensaje lo más pronto posible."
        size="lg"
        className="max-w-xs mt-5"

      />
      <Button color="primary" variant="bordered"
      className="mt-8 hover:bg-black hover:text-white">
        Enviar
      </Button>
    </div>
  );
};
