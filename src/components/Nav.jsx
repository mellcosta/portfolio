import {Link as ScrollLink } from "react-scroll";

export default function Nav() {
    return (
        <nav className=" menu-nav flex justify-center items-center gap-[30px]">
            <ScrollLink activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}
              
              className="font-normal text-[30px] cursor-pointer"
            >
              Sobre
            </ScrollLink>
            <ScrollLink
              href="#techs"
              className="font-normal text-[30px] cursor-pointer"
            >
              Tecnologias
            </ScrollLink>
            <ScrollLink
              href="#projects"
              className="font-normal text-[30px] cursor-pointer"
            >
              Projectos
            </ScrollLink>
            <ScrollLink
              href="#contact"
              className="font-normal text-[30px] cursor-pointer"
            >
              Contacto
            </ScrollLink>
          </nav>
    )
}