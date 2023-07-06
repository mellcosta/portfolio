import React from "react";
import Image from "next/image";

export default function Social() {
    return (
        <div className="flex items-start justify-start gap-9">
          <a href="https://github.com/mellcosta" target="_blank" rel="noopener noreferrer">
            <Image
              src="/github.png"
              alt="Github"
              width={32}
              height={32}
              priority
            />
          </a>
          <a href="https://www.linkedin.com/in/melissa-costa-71300a209/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/linkedin.png"
              alt="Linkedin"
              width={32}
              height={32}
              priority
            />
          </a>
          <a href="https://www.instagram.com/m3licosta/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={32}
              height={32}
              priority
            />
          </a>       
        </div>
    )
}