import React from "react";
import { Header } from "./Components/Header/Header";
import NavbarHome from "./Components/Navbar/NavbarHome";
import { About } from "./Components/About/About";
import { Doctores } from "./Components/Doctores/Doctores";
import { Servicios } from "./Components/Servicios/Servicios";
import { Footer } from "./Components/Footer/Footer";
import { Trabajos } from "./Components/Trabajos/Trabajos";
import { ContactUs } from "./Components/Contact/ContactUs";
import { Testimonios } from "./Components/Testimonios/Testimonios";

function App() {
  return (
    <>
      <NavbarHome/>
      <Header />
      <About/>
      <Doctores/>
      <Servicios/>
      <Trabajos/>
      <Testimonios/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default App;
