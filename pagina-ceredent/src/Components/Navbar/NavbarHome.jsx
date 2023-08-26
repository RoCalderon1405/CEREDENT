import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import LogoCeredentNav from "../../assets/CEREDENTcorteSinText.png";
import "./navbarHome.css";
import { MyButton } from "../../Hooks/MyButton";

const NavbarHome = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "¿Quiénes Somos",
    "Nuestros Doctores",
    "Nuestros Servicios",
    "Laboratorio Dental",
    "Testimonios",
  ];

  const menuNav = [
    "#aboutUs",
    "#doctores",
    "#servicios",
    "#trabajos",
    "#testimonios"
  ]

  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="2xl"
        height="5rem"
        className="flex-grow-0 bg-slate-200	"
      >
        <NavbarContent className="lg:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="lg:hidden" justify="center">
          <NavbarBrand>
            <img
              src={LogoCeredentNav}
              alt="CEREDENT"
              id="logoCere"
              className="w-{84}"
            />
          </NavbarBrand>
        </NavbarContent>

        {/* Medium device */}

        <NavbarContent className="hidden lg:flex p-0" justify="center">
          <NavbarBrand className="p-0">
            <img src={LogoCeredentNav} alt="CEREDENT" id="logoCere" />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden lg:flex justify-center gap-4"
          justify="center"
        >
          <NavbarItem>
            <Link color="foreground" href="#aboutUs" fontSize="large">
              ¿Quiénes Somos?
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#doctores" aria-current="page">
              Nuestros Doctores
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#servicios">
              Nuestro servicios
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#trabajos">
            Laboratorio Dental
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#testimonios">
              Testimonios
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="flex-grow-lg" justify="end">
          <NavbarItem className="p-2 ">
              <MyButton
                as={Link}
                size="md"
                color="blue"
                href="#contact"
                variant="shadow"
                className="w-auto text-xs"
              >
                Contáctanos
              </MyButton>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 1
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={menuNav[index]}
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default NavbarHome;
