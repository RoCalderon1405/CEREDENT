import React from "react";
import Familia from "../../assets/familia.png";
import Ceredent from "../../assets/CEREDENT.jpeg";
import { Button } from "@nextui-org/react";
import { LiaToothSolid } from "react-icons/lia";
import { MyButton } from "../Button/MyButton";
import "./header.css";

export const Header = () => {
  
  return (
    <>
      <section id="header">
        <div className="col header__container bg-center">
          <div className="mt-12 header__container-text">
            <div className="header__container-logo animation-scale flex m-auto p-0 w-60 md:w-6/12 ">
              <img
                src={Ceredent}
                alt="CEREDENT"
                className="shadow-2xl "
                id="ceredentHeader"
              />
            </div>
            <div className="header__container-text-slogan text-sm m-auto mt-9 mb-8 text-center md:text-lg">
              <MyButton
              className="font-bold xl:w-3/4 sm:w-full"
                variant="shadow"
                size="lg"
                color="green"
                endContent={
                <LiaToothSolid 
                color="white" 
                className="text-4xl"/>}
              >
                😄 Conócenos
              </MyButton>
            </div>
          </div>
          <div className="header__container-img md:w-3/5 m-auto">
            <img src={Familia} alt="logo" id="imgFamilia" />
          </div>
        </div>
      </section>
    </>
  );
};
