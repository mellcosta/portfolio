import Image from "next/image";
import Link from "next/link";

import Title from "./Title";
import Cards from "../components/Cards"

export default function Projects() {
    return(
        <div>

            <Link href='#' id='projects'>
                <Title title="Projectos"/>
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-[50px]">
                <Cards image="/countdown.png" legend="Countdown" 
                    url="https://mellcosta.github.io/desafiosRocketseat/intermediario/countdown/countdown.html"
                />
                <Cards image="/loginPage.png" legend="Login Page" 
                    url="https://mellcosta.github.io/desafiosRocketseat/intermediario/login/login.html"
                />
                <Cards image="/spotify.png" legend="Spotify Clone" 
                    url="https://spotify-cyan-chi.vercel.app/"
                />
                <Cards image="/portfolio.png" legend="Rocketseat Portfolio" 
                    url="https://mellcosta.github.io/desafiosRocketseat/iniciante/portfolio/portfolio.html"
                />
                <Cards image="/ignite-lds.png" legend="Design System" 
                    url="https://mellcosta.github.io/ignite_lab_design_system/?path=/story/components-button--default"
                />
                <Cards image="/imp-jfr.png" legend="Website Institucional"
                    url="https://mellcosta.github.io/website/src/home.html"
                />
            </div>
        </div>
    )
}