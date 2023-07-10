import Image from "next/image";
import Link from "next/link";

import Title from "./Title"


export default function About() {
    return (
        <div className="flex flex-col items-center justify-start gap-[50px]">
            <Link href="#" id="about">
                <Title title="Sobre Mim"/>
            </Link>
            <div className="flex items-center justify-center gap-[50px] px-[50px]">
                <Image
                    src="/pic.svg"
                    alt="Profile pic"
                    width={470}
                    height={470}
                />
                <p>
                    Sou uma Front-end developer apaixonada por tecnologia e design, especializada em desenvolvimento web. 
                    Tenho experiência em HTML, CSS e JavaScript, e estou sempre atualizada com as últimas tendências e ferramentas. 
                    Acredito na importância da colaboração, trabalho em equipe e estou em busca de oportunidades para crescer profissionalmente.
                </p>
            </div>
        </div>
    )
}