import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import LogoCeredent from '../../assets/CEREDENTcorteSinText.png'
import "./nav.css";

export const Nav = () => {
  return (
    <>
      <Navbar>
        <NavbarBrand>
          <img src={LogoCeredent} alt="CEREDENT" id="logoCere"/>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="data-justify">
          <NavbarItem>
            <Link color="foreground" href="#">
              ¿Quiénes Somos?
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Nuestros Doctores
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Casos Clínicos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Laboratorio Dental
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Testimonios
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Contáctanos
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};
