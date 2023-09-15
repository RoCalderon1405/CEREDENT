import React from "react";
import { Header } from "./Components/Header/Header";
import {NavbarHome} from "./Components/Navbar/NavbarHome";
import { About } from "./Components/About/About";
import { Doctores } from "./Components/Doctores/Doctores";
import { Servicios } from "./Components/Servicios/Servicios";
import { Footer } from "./Components/Footer/Footer";
import { Trabajos } from "./Components/Trabajos/Trabajos";
import { ContactUs } from "./Components/Contact/ContactUs";
import { Testimonios } from "./Components/Testimonios/Testimonios";
import { Tarjetas } from "./Components/Tarjetas/Tarjetas";
import { Historia } from "./Components/Historia/Historia";
import { OdontologiaEstetica } from "./Components/Servicios/Routes/OdontoEstetica";

function App() {
  return (
    <>
      <NavbarHome/>
      <Header />
      <About/>
      <Historia/>
      <Doctores/>
      <Servicios/>
      <OdontologiaEstetica/>
      <Tarjetas/>
      <Trabajos/>
      <Testimonios/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default App;
