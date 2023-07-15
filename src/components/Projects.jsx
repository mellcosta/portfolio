import Image from "next/image";
import Link from "next/link";

import Title from "./Title";
import Cards from "../components/Cards";

export default function Projects() {
  return (
    <div id="projects">
      <Link href="#" >
        <Title title="Projectos" />
      </Link>
      <div className="projects-content flex flex-wrap items-center justify-center gap-[50px] px-5">
        <Cards
          image="/img/icons/countdown.png"
          legend="Countdown"
          url="https://mellcosta.github.io/desafiosRocketseat/intermediario/countdown/countdown.html"
        />
        <Cards
          image="/img/projects/loginPage.png"
          legend="Login Page"
          url="https://mellcosta.github.io/desafiosRocketseat/intermediario/login/login.html"
        />
        <Cards
          image="/img/projects/spotify.png"
          legend="Spotify Clone"
          url="https://spotify-cyan-chi.vercel.app/"
        />
        <Cards
          image="/img/projects/portfolio.png"
          legend="Rocketseat Portfolio"
          url="https://mellcosta.github.io/desafiosRocketseat/iniciante/portfolio/portfolio.html"
        />
        <Cards
          image="/img/projects/ignite-lds.png"
          legend="Design System"
          url="https://mellcosta.github.io/ignite_lab_design_system/?path=/story/components-button--default"
        />
        <Cards
          image="/img/projects/imp-jfr.png"
          legend="Website Institucional"
          url="https://mellcosta.github.io/website/src/home.html"
        />
      </div>
    </div>
  );
}
