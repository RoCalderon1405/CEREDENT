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

function App() {
  return (
    <>
      <Router>
        <NavbarHome />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <About />
                <Historia />
                {/* <Doctores /> */}
                <Servicios />
                <Tarjetas />
                <Trabajos />
                <Testimonios />
              </>
            }
          />
          
          <Route
            path="/servicios/odontologia-estetica"
            element={<OdontologiaEstetica />}
          />
        </Routes>
        <ContactUs />
        <Footer />
      </Router>
    </>
  );
}

export default App;
