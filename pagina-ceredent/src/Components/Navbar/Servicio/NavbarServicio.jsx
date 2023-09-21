import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import LogoCeredentNav from "../../../assets/Logo/CEREDENTcorteSinText.png";
import { MyButton } from "../../../Hooks/MyButton";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import {
  FaTooth,
  FaUser,
  FaUserMd,
  FaBriefcase,
  FaComments,
} from "react-icons/fa";
import "../navbar.css";

export const NavbarServicio = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const dentalServices = [
    {
      icon: <FaTooth className="text-gray-400" />,
      title: "Odontología estética",
      ruta: "/servicios/odontologia-estetica",
    },
    {
      icon: <FaTooth className="text-gray-400" />,
      title: "Odontopediatría",
      ruta: "/servicios/odontopediatria",
    },
    {
      icon: <FaTooth className="text-gray-400" />,
      title: "Cirugía bucal",
      ruta: "/servicios/odontologia-estetica",
    },
    {
      icon: <FaTooth className="text-gray-400" />,
      title: "Prótesis dentales",
      ruta: "/servicios/odontologia-estetica",
    },
    {
      icon: <FaTooth className="text-gray-400" />,
      title: "Periodoncias",
      ruta: "/servicios/odontologia-estetica",
    },
    {
      icon: <FaTooth className="text-gray-400" />,
      title: "Ortodoncias",
      ruta: "/servicios/odontologia-estetica",
    },
    {
      icon: <FaTooth className="text-gray-400" />,
      title: "Endodoncias",
      ruta: "/servicios/odontologia-estetica",
    },
  ];

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
            <a href="#">
              <img
                src={LogoCeredentNav}
                alt="CEREDENT"
                id="logoCere"
                className=""
              />
            </a>
          </NavbarBrand>
        </NavbarContent>

        {/* Medium device */}

        <NavbarContent className="hidden lg:flex p-0" justify="center">
          <NavbarBrand className="p-0">
            <a href="#">
              <img src={LogoCeredentNav} alt="CEREDENT" id="logoCere" />
            </a>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden lg:flex justify-center gap-4 "
          justify="end"
        >
          <NavbarItem>
            <div className="flex items-center">
              <Link
                color="foreground"
                to="/#"
                fontSize="large"
                className="p-1 font-medium transition duration-300 ease-out hover:scale-[1.1] hover:text-sky-400 hover:font-bold"
              >
                Inicio
              </Link>
            </div>
          </NavbarItem>
          <Dropdown backdrop="blur" size="sm">
            <NavbarItem>
              <div className="flex items-center">
                <DropdownTrigger>
                  <Link
                    color="foreground"
                    className="p-1 font-medium transition duration-300 ease-out hover:scale-[1.1] hover:text-sky-400 hover:font-bold"
                  >
                    Servicios
                  </Link>
                </DropdownTrigger>
              </div>
            </NavbarItem>
            <DropdownMenu
              className="w-[230px]"
              itemClasses={{
                base: "gap-3",
              }}
              variant="shadow"
            >
              {dentalServices.map((service) => (
                <DropdownItem
                  key={service.title}
                  description={service.description}
                  startContent={service.icon}
                >
                  <Link to={service.ruta}>{service.title}</Link>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <div className="flex items-center">
              <a
                color="foreground"
                href="#ubicacion"
                fontSize="large"
                className="p-1 font-medium transition duration-300 ease-out hover:scale-[1.1] hover:text-sky-400 hover:font-bold"
              >
                Ubicación
              </a>
            </div>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="flex-grow-lg" justify="end">
          <NavbarItem className="p-2">
            <a href="#contacto">
              <Button
                size="md"
                color="blue"
                variant="shadow"
                className="w-auto text-[.85rem] bg-blue-900 text-white font-extrabold transition duration-300 ease-out lg:hover:scale-105"
              >
                Contáctanos
              </Button>
            </a>
          </NavbarItem>
        </NavbarContent>

        {/* Dispositivos Móviles */}
        <NavbarMenu className="w-[75%] bg-white/80">
          <NavbarMenuItem>
            <Button
              className="bg-transparent my-5 p-1"
              startContent={
                <AiFillHome className="text-5xl text-sky-500 items-bottom" />
              }
            >
              <Link className="w-full font-bold text-xl text-blue-600" to="/#">
                Inicio
              </Link>
            </Button>
          </NavbarMenuItem>

          {/* Menú desplegable servicios */}
          <NavbarMenuItem>
            <Button
              disableRipple
              className="my-5 p-1 data-[hover=true]:bg-transparent overflow-visible "
              radius="sm"
              variant="light"
              startContent={<FaTooth className="text-3xl text-sky-500" />}
            >
              <Link className="w-full font-medium text-xl text-black/80">
                Servicios
              </Link>
            </Button>
          </NavbarMenuItem>
          <div className="flex flex-col ml-10 text-start md:text-lg">
            {dentalServices.map((service) => (
              <div
                key={service.title}
                className="flex items-center space-x-2 mb-3 p-1"
              >
                <span className="">{service.icon}</span>
                <Link to={service.ruta}>{service.title}</Link>
              </div>
            ))}
          </div>
          <NavbarMenuItem>
            <Button
              className="bg-transparent my-5 p-1"
              startContent={
                <AiFillHome className="text-5xl text-sky-500 items-bottom" />
              }
            >
              <Link className="w-full font-bold text-xl text-blue-600" to="/#">
                Inicio
              </Link>
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};
