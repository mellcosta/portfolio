import Image from "next/image";

import Title from "./Title";
import Card from "../components/Cards"

export default function Projects() {
    return(
        <div>
            <Title title="Projectos"/>
            <div className="flex flex-wrap items-center justify-center mt-[50px] gap-[50px]">
                <Card image="/countdown.png" legend="Countdown" />
                <Card image="/loginPage.png" legend="Login Page" />
                <Card image="/spotify.png" legend="Spotify Clone" />
                <Card image="/portfolio.png" legend="Rocketseat Portfolio" />
                <Card image="/ignite-lds.png" legend="Design System" />
                <Card image="/imp-jfr.png" legend="Website Institucional" height="200px" />
            </div>
        </div>
    )
}