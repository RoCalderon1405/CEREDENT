import React from "react";
import Familia from "../../assets/familia.png";
import Ceredent from "../../assets/CEREDENT.jpeg";
import { LiaToothSolid } from "react-icons/lia";
import { MyButton } from "../Button/MyButton";
import { Link } from "@nextui-org/react";
import "./header.css";

export const Header = () => {
  return (
    <>
      <section id="header" className="h-screen">
        <div className="header__container py-0 pt-4 px-4 h-screen bg-center md:flex lg:flex">
          <div className="m-auto h-[30%] flex flex-col md:w-1/2 md:mt-auto md:ml-0 md:mr-0 md:h-auto lg:m-auto lg:w-1/2">
            <div className="flex w-full mb-3 justify-center p-0 animation-scale">
              <img
                src={Ceredent}
                alt="CEREDENT"
                className="shadow-2xl w-60 md:w-auto lg: "
                id="ceredentHeader"
              />
            </div>
            <div className="text-sm m-auto mt-3 mb-8 text-center md:text-lg md:mt-9">
              <Link href="#aboutUs">
                <MyButton
                  className="font-bold text-black w-full"
                  variant="shadow"
                  size="lg"
                  color="green"
                  endContent={
                    <LiaToothSolid color="white" className="text-4xl" />
                  }
                >
                  😄 Conócenos
                </MyButton>
              </Link>
            </div>
          </div>
          <div className="h-[70%] flex items-center justify-center md:w-1/2 md:m-auto md:h-[90%] lg:w-1/2">
            <img
              src={Familia} 
              alt="Famila"
              id="imgFamilia"
              className="w-auto min-w-[400px] h-full md:w-full md:min-w-[510px] lg:w-max"
            />
          </div>
        </div>
      </section>
    </>
  );
};
