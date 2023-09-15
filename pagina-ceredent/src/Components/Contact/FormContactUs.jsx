import React, { useRef, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiAtSign } from "react-icons/fi";
import { MdPhoneIphone } from "react-icons/md";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import emailjs from "emailjs-com";

export const FormContactUs = () => {
  const [isValid, setIsValid] = useState(false);
  const [textIsValid, settextIsValid] = useState("");
  const [textNoValid, settextNoValid] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    settextIsValid("");
    settextNoValid("");

    if (!name || !phone || !email || !text) {
      settextNoValid("Por favor, complete todos los campos.");
      return;
    }

    // Activar el Loading del botón enviar
    setIsValid(true);

    setTimeout(() => {
      setIsValid(false);
      settextIsValid("¿Alguna otra duda?");
      setText("");
    }, 5500);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_KEY_EMAILJS,
        import.meta.env.VITE_TEMPLATE_KEY_EMAILJS,
        form.current,
        import.meta.env.VITE_API_KEY_EMAILJS
      )
      .then(
        (result) => {
          setIsValid(false);
          settextIsValid("¡Enviado con éxito! ✔️");
          console.log(result.text);
        },
        (error) => {
          settextIsValid("Hubo un error al mandar tu mensaje.");
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="mt-8 mx-auto bg-slate-300 p-3 rounded-lg border-2 border-black/70 min-w-[200px] shadow-[0_1px_35px_rgba(55,102,255,0.6)]  lg:h-fit z-[10]">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-lg text-blue-800">
          Ponte en contácto con nuestros expertos.
        </h2>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <Input
          type="name"
          name="name"
          variant="underlined"
          label="Nombre"
          color="secondary"
          // isClearable
          size="lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
          startContent={
            <AiOutlineUser className="text-2xl text-blue-400 pointer-events-none flex-shrink-0" />
          }
          required
        />
        <Input
          type="phone"
          name="phone"
          variant="underlined"
          label="Teléfono"
          color="secondary"
          // isClearable
          size="lg"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          startContent={
            <MdPhoneIphone className="text-2xl text-blue-400 pointer-events-none flex-shrink-0" />
          }
          required
        />
        <Input
          type="email"
          name="email"
          variant="underlined"
          label="Email"
          color="secondary"
          // isClearable
          size="lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          startContent={
            <FiAtSign className="text-2xl text-blue-400 pointer-events-none flex-shrink-0" />
          }
          required
          className="text-md"
        />
        <Textarea
          name="message"
          variant="underlined"
          radius="lg"
          // label="Description"
          labelPlacement="outside"
          color="secondary"
          placeholder="Ingrese su mensaje"
          description="Atenderemos su mensaje lo más pronto posible."
          size="lg"
          required
          className="max-w-xs mt-5"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex mt-8 gap-5 items-center">
          <Button
            color="primary"
            variant="bordered"
            type="submit"
            isLoading={isValid}
            className="font-bold hover:bg-blue-600 hover:text-white"
          >
            Enviar
          </Button>
          <h2 className="text-green-500 font-bold text-md text-center mx-auto">
            {textIsValid}
          </h2>
          <h2 className="text-red-500 font-bold text-sm text-center mx-auto md:text-lg">
            {textNoValid}
          </h2>
        </div>
      </form>
    </div>
  );
};
