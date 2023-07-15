import Image from "next/image"
import Link from "next/link"
import { Link as ScrollLink } from "react-scroll";

import Social from "../components/Social";

export default function Header() {
    return (
        <header className="header flex flex-col intems-center justify-start gap-[100px] px-10">
        <div className="flex items-center justify-between">
          <Link href="#" className="cursor-pointer">
            <Image
              src="/img/me/mel.svg"
              alt="Mel Logo"
              id="logo"
              width={200}
              height={68}
              priority
            />
          </Link>
          <nav className=" menu-nav flex justify-center items-center gap-[30px]">
            <ScrollLink
              to="about"
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
        </div>

        <div className="flex gap-5">
          <div>
            <h1 className="banner-title text-[100px] font-bold">
              Melissa Costa
            </h1>
            <div>
              <h2 className="banner-text text-[50px] font-normal">
                Frontend Developer
              </h2>
              <Image
                src="/img/me/line.svg"
                alt="Line"
                id="line"
                width={200}
                height={68}
                priority
              />
            </div>
          </div>
          <Image
            src="/img/icons/pc.png"
            alt="Computer"
            width={400}
            height={350}
            id="pc"
            priority
          />
        </div>

        <Social />
      </header>
    )
}