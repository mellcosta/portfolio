import {Link as ScrollLink } from "react-scroll";

export default function Nav() {
    return (
        <nav className=" menu-nav flex justify-center items-center gap-[30px]">
            <ScrollLink to="about"
              className="font-normal text-[30px] cursor-pointer"
            >
              Sobre
            </ScrollLink>
            <ScrollLink
              to="techs"
              className="font-normal text-[30px] cursor-pointer"
            >
              Tecnologias
            </ScrollLink>
            <ScrollLink
              to="projects"
              className="font-normal text-[30px] cursor-pointer"
            >
              Projectos
            </ScrollLink>
            <ScrollLink
              to="contact"
              className="font-normal text-[30px] cursor-pointer"
            >
              Contacto
            </ScrollLink>
          </nav>
    )
}