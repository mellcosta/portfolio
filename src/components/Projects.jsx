import Image from "next/image";

import Title from "./Title";
import Card from "../components/Cards"

export default function Projects() {
    return(
        <div>
            <Title title="Projectos"/>
            <div className="flex flex-wrap items-center justify-center gap-[50px]">
                <Card image="/countdown.png" legend="Countdown" 
                    url="https://mellcosta.github.io/desafiosRocketseat/intermediario/countdown/countdown.html"
                />
                <Card image="/loginPage.png" legend="Login Page" 
                    url="https://mellcosta.github.io/desafiosRocketseat/intermediario/login/login.html"
                />
                <Card image="/spotify.png" legend="Spotify Clone" 
                    url="https://spotify-cyan-chi.vercel.app/"
                />
                <Card image="/portfolio.png" legend="Rocketseat Portfolio" 
                    url="https://mellcosta.github.io/desafiosRocketseat/iniciante/portfolio/portfolio.html"
                />
                <Card image="/ignite-lds.png" legend="Design System" 
                    url="https://mellcosta.github.io/ignite_lab_design_system/?path=/story/components-button--default"
                />
                <Card image="/imp-jfr.png" legend="Website Institucional"
                    url="https://mellcosta.github.io/website/src/home.html"
                />
            </div>
        </div>
    )
}