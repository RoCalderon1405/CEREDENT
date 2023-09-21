import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { NavbarHome } from "./Components/Navbar/NavbarHome";
import { About } from "./Components/About/About";
import { Doctores } from "./Components/Doctores/Doctores";
import { Servicios } from "./Components/Servicios/Servicios";
import { Footer } from "./Components/Footer/Footer";
import { Trabajos } from "./Components/Trabajos/Trabajos";
import { ContactUs } from "./Components/Contact/ContactUs";
import { Testimonios } from "./Components/Testimonios/Testimonios";
import { Tarjetas } from "./Components/Tarjetas/Tarjetas";
import { Historia } from "./Components/Historia/Historia";
import { OdontologiaEstetica } from "./Components/Servicios/TipoServicio/OdontoEstetica";
import { NavbarServicio } from "./Components/Navbar/Servicio/NavbarServicio";
import { FooterServicio } from "./Components/Footer/Servicio/FooterServicio";
import { OdontoPediatria } from "./Components/Servicios/TipoServicio/OdontoPediatria";

function App() {
  // Componente de contenedor para los servicios
  const ServicioContainer = ({ children }) => {
    return (
      <>
        <NavbarServicio />
        {children}
        <ContactUs />
        <FooterServicio />
      </>
    );
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavbarHome />
                <Header />
                <About />
                <Historia />
                {/* <Doctores /> */}
                <Servicios />
                <Tarjetas />
                {/* <Trabajos /> */}
                <Testimonios />
                <ContactUs />
                <Footer />
              </>
            }
          />
        {/* Uso del componente de contenedor en las rutas */}
          <Route
            path="/servicios/odontologia-estetica"
            element={
              <ServicioContainer>
                <OdontologiaEstetica />
              </ServicioContainer>
            }
          />
          <Route
            path="/servicios/odontopediatria"
            element={
              <ServicioContainer>
                <OdontoPediatria />
              </ServicioContainer>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
