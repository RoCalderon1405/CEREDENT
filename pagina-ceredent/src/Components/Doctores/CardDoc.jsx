import React, { useState } from "react";
import {
  Card,
  CardFooter,
  Image,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

export const CardDoc = ({ id, nombre, nombreCompleto, about, img1, img2 }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [size, setSize] = useState("full");

  console.log({nombre})
  console.log("first")
  // const sizes = [
  //   "xs",
  //   "sm",
  //   "md",
  //   "lg",
  //   "xl",
  //   "2xl",
  //   "3xl",
  //   "4xl",
  //   "5xl",
  //   "full",
  // ];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };
  return (
    <>
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none bg-red-700 w-4/5 h-60"
      >
        <Image
          alt="Woman listing to music"
          className="object-cover w-auto h-auto"
          src={img1}
        />
        <CardFooter className="justify-between font-bold before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-lg text-white/80">{nombre}</p>
          <Button
            key={id}
            onPress={() => handleOpen(size)}
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
            className="text-tiny text-white bg-black/20"
          >
            Sobre Mí
          </Button>
          <Modal
            size="5xl"
            backdrop="blur"
            scrollBehavior="inside"
            placement= "center"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            onClose={onClose}
            radius="2xl"
            classNames={{
              body: "py-10",
            //   backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
              base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
              header: "border-b-[1px] border-[#292f46]",
              footer: "border-t-[1px] border-[#292f46]",
              closeButton: "hover:bg-white/5 active:bg-white/10",
            }}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    {nombreCompleto}
                  </ModalHeader>
                  <ModalBody>
                    <p>{about}</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <div>
                      <img src={img2} alt="" />
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="foreground"
                      variant="light"
                      onClick={onClose}
                    >
                      Cerrar
                    </Button>
                    <Button
                      className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20"
                      onPress={onClose}
                    >
                      Contactar
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </CardFooter>
      </Card>
    </>
  );
};
