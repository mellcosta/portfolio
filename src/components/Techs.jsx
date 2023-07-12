import Image from "next/image";
import Link from "next/link";

import Title from "./Title";

export default function Techs() {
  return (
    <div className="techs flex flex-col items-center justify-start gap-[50px]">
      <Link href="#techs" id="techs">
        <Title title="Tecnologias" />
      </Link>
      <div className="techs-content flex items-center justify-center gap-[100px] flex-wrap w-[820px]">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          target="_blank"
          className="flex flex-col items-center justify-center gap-3"
        >
          <Image
            src="/img/icons/html.png"
            alt="HTML"
            className="techs-icon"
            width={130}
            height={130}
          />
          <span>HTML</span>
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          className="flex flex-col items-center justify-center gap-3"
        >
          <Image
            src="/img/icons/css.png"
            alt="CSS"
            className="techs-icon"
            width={130}
            height={130}
          />
          <span>CSS</span>
        </a>
        <a
          href="https://react.dev/"
          target="_blank"
          className="flex flex-col items-center justify-center gap-3"
        >
          <Image
            src="/img/icons/react.png"
            alt="React.js"
            className="techs-icon"
            width={130}
            height={130}
          />
          <span>React.js</span>
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          className="flex flex-col items-center justify-center gap-3"
        >
          <Image
            src="/img/icons/js.png"
            alt="Javascript"
            className="techs-icon"
            width={130}
            height={130}
          />
          <span>Javascript</span>
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="flex flex-col items-center justify-center gap-3"
        >
          <Image
            src="/img/icons/tailwindCss.png"
            alt="Tailwind Css"
            className="techs-icon"
            width={130}
            height={130}
          />
          <span>Tailwind Css</span>
        </a>
        <a
          href="https://www.figma.com/"
          target="_blank"
          className="flex flex-col items-center justify-center gap-3"
        >
          <Image
            src="/img/icons/figma.png"
            alt="Figma"
            className="techs-icon"
            width={130}
            height={130}
          />
          <span>Figma</span>
        </a>
        <a
          href="https://git-scm.com/"
          target="_blank"
          className="flex flex-col items-center justify-center gap-3"
        >
          <Image
            src="/img/icons/git.png"
            alt="GIT"
            className="techs-icon"
            width={130}
            height={130}
          />
          <span>GIT</span>
        </a>
      </div>
    </div>
  );
}
