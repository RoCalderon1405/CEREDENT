import React, { useState } from "react";
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
import LogoCeredentNav from "../../assets/Logo/CEREDENTcorteSinText.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import {
  FaTooth,
  FaUser,
  FaUserMd,
  FaBriefcase,
  FaComments,
} from "react-icons/fa";
import { BiSolidMap } from "react-icons/bi";
import "./navbar.css";

export const NavbarHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para cerrar el Dropdown con un click
  const handleCloseDropdown = () => {
    setIsMenuOpen(false);
  };

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
      ruta: "/servicios/cirugia-bucal",
    },
    {
      icon: <FaTooth className="text-gray-400" />,
      title: "Prótesis dentales",
      ruta: "/servicios/protesis-dentales",
    },
    {
      icon: <FaTooth className="text-gray-400" />,
      title: "Periodoncias",
      ruta: "/servicios/periodoncias",
    },
    {
      icon: <FaTooth className="text-gray-400" />,
      title: "Ortodoncias",
      ruta: "/servicios/ortodoncias",
    },
    {
      icon: <FaTooth className="text-gray-400" />,
      title: "Endodoncias",
      ruta: "/servicios/endodoncias",
    },
    {
      icon: <FaTooth className="text-gray-400" />,
      title: "Bichectomia",
      ruta: "/servicios/endodoncias",
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
                loading="eager"
              />
            </a>
          </NavbarBrand>
        </NavbarContent>

        {/* Medium device */}

        <NavbarContent className="hidden lg:flex p-0" justify="center">
          <NavbarBrand className="p-0">
            <a href="#">
              <img src={LogoCeredentNav} alt="CEREDENT" id="logoCere" loading="auto"/>
            </a>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden lg:flex justify-center gap-4 "
          justify="center"
        >
          <NavbarItem>
            <div className="flex items-center">
              <a
                color="foreground"
                href="#header"
                fontSize="large"
                className="p-1 font-medium transition duration-300 ease-out hover:scale-[1.1] hover:text-sky-400 hover:font-bold"
              >
                Inicio
              </a>
            </div>
          </NavbarItem>
          <NavbarItem>
            <div className="flex items-center">
              <a
                color="foreground"
                href="#aboutUs"
                fontSize="large"
                className="p-1 font-medium transition duration-300 ease-out hover:scale-[1.1] hover:text-sky-400 hover:font-bold"
              >
                ¿Quiénes Somos?
              </a>
            </div>
          </NavbarItem>
          <NavbarItem>
            <div className="flex items-center">
              <a
                href="#historia"
                aria-current="page"
                className="p-1 font-medium transition duration-300 ease-out hover:scale-[1.1] hover:text-sky-400 hover:font-bold"
              >
                Nuestra Historia
              </a>
            </div>
          </NavbarItem>
          <Dropdown backdrop="blur" size="sm">
            <NavbarItem>
              <div className="flex items-center">
                <a
                  color="foreground"
                  href="#servicios"
                  className="p-1 font-medium transition duration-300 ease-out hover:scale-[1.1] hover:text-sky-400 hover:font-bold"
                >
                  Servicios
                </a>
                <DropdownTrigger>
                  <Button
                    size="sm"
                    className="p-0 gap-0 bg-transparent min-w-[10px] h-[18px] data-[hover=true]:bg-transparent overflow-visible justify-start "
                    endContent={
                      <MdOutlineKeyboardArrowDown className="hover:text-blue-600 text-5xl" />
                    }
                  ></Button>
                </DropdownTrigger>
              </div>
            </NavbarItem>
            <DropdownMenu
              className="w-[230px] bg-white/80"
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
                href="#testimonios"
                className="p-1 font-medium transition duration-300 ease-out hover:scale-[1.1] hover:text-sky-400 hover:font-bold"
              >
                Testimonios
              </a>
            </div>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="flex-grow-lg" justify="end">
          <NavbarItem className="">
            <a href="#contacto">
              <Button
                size="md"
                color="blue"
                variant="shadow"
                className="w-auto text-[.65rem] md:text-[.85rem] bg-blue-900 text-white font-extrabold transition duration-300 ease-out lg:hover:scale-105"
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
              onClick={handleCloseDropdown}
              className="bg-transparent my-5 p-1"
              startContent={
                <AiFillHome className="text-5xl text-sky-500 items-bottom" />
              }
            >
              <a className="w-full font-bold text-xl text-blue-600" href="#">
                Inicio
              </a>
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button
              onClick={handleCloseDropdown}
              className="bg-transparent my-5 p-1"
              startContent={<FaUser className="text-3xl text-sky-500" />}
            >
              <a
                className="w-full font-medium text-xl text-black/80"
                href="/#aboutUs"
              >
                ¿Quiénes Somos?
              </a>
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button
              onClick={handleCloseDropdown}
              className="bg- my-5 p-1"
              startContent={<FaUserMd className="text-3xl text-sky-500" />}
            >
              <a
                className="w-full font-medium text-xl text-black/80"
                href="/#historia"
              >
                Historia
              </a>
            </Button>
          </NavbarMenuItem>
          {/* Menú desplegable servicios */}
          <NavbarMenuItem>
            <Button
              onClick={handleCloseDropdown}
              disableRipple
              className="my-5 p-1 data-[hover=true]:bg-transparent overflow-visible "
              radius="sm"
              variant="light"
              startContent={<FaTooth className="text-3xl text-sky-500" />}
            >
              <a
                className="w-full font-medium text-xl text-black/80"
                href="/#servicios"
              >
                Servicios
              </a>
            </Button>
          </NavbarMenuItem>
          <div className="flex flex-col ml-6 text-start md:text-lg">
            {dentalServices.map((service) => (
              <div
                key={service.title}
                className="flex items-center space-x-2 mb-3 p-1"
              >
                <span className="">{service.icon}</span>
                <Link onClick={handleCloseDropdown} to={service.ruta}>
                  {service.title}
                </Link>
              </div>
            ))}
          </div>
          <NavbarMenuItem>
            <Button
              onClick={handleCloseDropdown}
              className="bg-transparent my-5 p-1"
              startContent={<FaBriefcase className="text-3xl text-sky-500" />}
            >
              <a
                className="w-full font-medium text-xl text-black/80"
                href="#trabajos"
              >
                Laboratorio Dental
              </a>
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button
              onClick={handleCloseDropdown}
              className="bg-transparent my-5  p-1 "
              startContent={<FaComments className="text-5xl text-sky-500" />}
            >
              <a
                className="w-full font-medium text-xl text-black/80"
                href="#testimonios"
              >
                Testimonios
              </a>
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button
              onClick={handleCloseDropdown}
              className="bg-transparent my-5  p-1 "
              startContent={<BiSolidMap className="text-5xl text-sky-500" />}
            >
              <a
                className="w-full font-medium text-xl text-black/80"
                href="#ubicacion"
              >
                Ubicación
              </a>
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};
