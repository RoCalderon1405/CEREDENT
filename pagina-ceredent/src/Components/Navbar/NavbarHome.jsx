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
  Link,
  Button,
} from "@nextui-org/react";
import LogoCeredentNav from "../../assets/Logo/CEREDENTcorteSinText.png";
import { MyButton } from "../../Hooks/MyButton";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import {
  FaTooth,
  FaUser,
  FaUserMd,
  FaBriefcase,
  FaComments,
} from "react-icons/fa";
import "./navbarHome.css";

const NavbarHome = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const dentalServices = [
    {
      icon: <FaTooth className="text-violet-400" />,
      title: "Ortodoncia",
    },
    {
      icon: <FaTooth className="text-violet-400" />,
      title: "Implantes Dentales",
    },
    {
      icon: <FaTooth className="text-violet-400" />,
      title: "Blanqueamiento Dental",
    },
    {
      icon: <FaTooth className="text-violet-400" />,
      title: "Endodoncia1",
    },
    {
      icon: <FaTooth className="text-violet-400" />,
      title: "Endodoncia2",
    },
    {
      icon: <FaTooth className="text-violet-400" />,
      title: "Endodoncia3",
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
            <img
              src={LogoCeredentNav}
              alt="CEREDENT"
              id="logoCere"
              className=""
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
          className="hidden lg:flex justify-center gap-4 "
          justify="center"
        >
          <NavbarItem>
            <Link
              color="foreground"
              href="#aboutUs"
              fontSize="large"
              className="p-1 font-medium transition duration-300 ease-out hover:scale-[1.1] hover:text-sky-400 hover:font-bold"
            >
              ¿Quiénes Somos?
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              href="#doctores"
              aria-current="page"
              className="p-1 font-medium transition duration-300 ease-out hover:scale-[1.1] hover:text-sky-400 hover:font-bold"
            >
              Nuestros Doctores
            </Link>
          </NavbarItem>
          <Dropdown backdrop="blur">
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 gap-0 bg-transparent data-[hover=true]:bg-transparent overflow-visible "
                  radius="sm"
                  variant="light"
                  endContent={
                    <MdOutlineKeyboardArrowDown className="hover:text-blue-600 text-5xl" />
                  }
                >
                  <Link
                    color="foreground"
                    href="#servicios"
                    className="p-1 font-medium transition duration-300 ease-out hover:scale-[1.1] hover:text-sky-400 hover:font-bold"
                  >
                    Servicios
                  </Link>
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              {dentalServices.map((service) => (
                <DropdownItem
                  key={service.title}
                  description={service.description}
                  startContent={service.icon}
                >
                  {service.title}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <Link
              color="foreground"
              href="#trabajos"
              className="p-1 font-medium transition duration-300 ease-out hover:scale-[1.1] hover:text-sky-400 hover:font-bold"
            >
              Laboratorio Dental
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#testimonios"
              className="p-1 font-medium transition duration-300 ease-out hover:scale-[1.1] hover:text-sky-400 hover:font-bold"
            >
              Testimonios
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="flex-grow-lg" justify="end">
          <NavbarItem className="p-2">
            <MyButton
              as={Link}
              size="md"
              color="blue"
              href="#contacto"
              variant="shadow"
              className="w-auto text-xs transition duration-300 ease-out lg:hover:bg-sky-500 lg:hover:scale-110 lg:hover:text-black lg:hover:font-extrabold	"
            >
              Contáctanos
            </MyButton>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem>
            <Button
              className="bg-transparent my-5 p-1"
              startContent={<AiFillHome className="text-5xl text-sky-500 items-bottom" />}
            >
              <Link className="w-full font-bold text-xl text-blue-600" href="#">
                Inicio
              </Link>
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button
              className="bg-transparent my-5 p-1"
              startContent={<FaUser className="text-4xl text-sky-500" />}
            >
              <Link
                className="w-full font-medium text-xl text-black/80"
                href="#aboutUs"
              >
                ¿Quiénes Somos?
              </Link>
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button
              className="bg- my-5 p-1"
              startContent={<FaUserMd className="text-5xl text-sky-500" />}
            >
              <Link
                className="w-full font-medium text-xl text-black/80"
                href="#doctores"
              >
                Nuestros Doctores
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
              startContent={<FaTooth className="text-5xl text-sky-500" />}
            >
              <Link
                className="w-full font-medium text-xl text-black/80"
                href="#servicios"
              >
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
                <Link>{service.title}</Link>
              </div>
            ))}
          </div>

          <NavbarMenuItem>
            <Button
              className="bg-transparent my-5 p-1"
              startContent={<FaBriefcase className="text-5xl text-sky-500" />}
            >
              <Link
                className="w-full font-medium text-xl text-black/80"
                href="#trabajos"
              >
                Laboratorio Dental
              </Link>
            </Button>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Button
              className="bg-transparent my-5  p-1 "
              startContent={<FaComments className="text-5xl text-sky-500" />}
            >
              <Link
                className="w-full font-medium text-xl text-black/80"
                href="#testimonios"
              >
                Testimonios
              </Link>
            </Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default NavbarHome;
