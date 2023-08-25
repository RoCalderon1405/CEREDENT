import React from "react";
import { Header } from "./Components/Header/Header";
import NavbarHome from "./Components/Navbar/NavbarHome";
import { About } from "./Components/About/About";
import { Doctores } from "./Components/Doctores/Doctores";

function App() {
  return (
    <>
      <NavbarHome/>
      <Header />
      <About/>
      <Doctores/>
    </>
  );
}

export default App;
