import Image from "next/image"
import Link from "next/link"

import Title from "./Title"

export default function Techs() {
    return(
        <div className="flex flex-col items-center justify-start gap-[50px]">
            <Link href='#' id='techs'>
                <Title title="Tecnologias"/>
            </Link>
            <div className="flex items-center justify-center gap-[100px] flex-wrap w-[820px]">
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" className="flex flex-col items-center justify-center gap-3">
                    <Image
                        src="/html.png"
                        alt="HTML"
                        width={130}
                        height={130}
                    />
                    <span>HTML</span>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" className="flex flex-col items-center justify-center gap-3">
                    <Image
                        src="/css.png"
                        alt="CSS"
                        width={130}
                        height={130}
                    />
                    <span>CSS</span>
                </a>
                <a href="https://react.dev/" target="_blank" className="flex flex-col items-center justify-center gap-3">
                    <Image
                        src="/react.png"
                        alt="React.js"
                        width={130}
                        height={130}
                    />
                    <span>React.js</span>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className="flex flex-col items-center justify-center gap-3">
                    <Image
                        src="/js.png"
                        alt="Javascript"
                        width={130}
                        height={130}
                    />
                    <span>Javascript</span>
                </a>
                <a href="https://tailwindcss.com/" target="_blank" className="flex flex-col items-center justify-center gap-3">
                    <Image
                        src="/tailwindCss.png"
                        alt="Tailwind Css"
                        width={130}
                        height={130}
                    />
                    <span>Tailwind Css</span>
                </a>
                <a href="https://www.figma.com/" target="_blank" className="flex flex-col items-center justify-center gap-3">
                    <Image
                        src="/figma.png"
                        alt="Figma"
                        width={130}
                        height={130}
                    />
                    <span>Figma</span>
                </a>
                <a href="https://git-scm.com/" target="_blank" className="flex flex-col items-center justify-center gap-3">
                    <Image
                        src="/git.png"
                        alt="GIT"
                        width={130}
                        height={130}
                    />
                    <span>GIT</span>
                </a>
            </div>
        </div>
    )
}