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
import { NavbarServicio } from "./Components/Navbar/NavbarServicio";

function App() {
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
          
          <Route
            path="/servicios/odontologia-estetica"
            element={
            <>
            <NavbarServicio/>
            <OdontologiaEstetica />
            <ContactUs />
            </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
