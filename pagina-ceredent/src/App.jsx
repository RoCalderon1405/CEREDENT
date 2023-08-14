import React from "react";
import { Header } from "./Components/Header/Header";
import NavbarHome from "./Components/Navbar/NavbarHome";
import { About } from "./Components/About/About";

function App() {
  return (
    <>
      <NavbarHome/>
      <Header />
      <About/>
    </>
  );
}

export default App;
