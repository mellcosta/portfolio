import Image from 'next/image'

import Social from '../components/Social'
import About from '../components/About'
import Techs from '../components/Techs'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-between px-10 py-8 gap-[100px]">

      <header className='flex flex-col intems-center justify-start gap-[100px] px-10' >
        <div className='flex items-center justify-between'>
          <a href="#" className='cursor-pointer'>
            <Image
              src="/mel.svg"
              alt="Mel Logo"
              width={200}
              height={68}
              priority
            />
          </a>
          <div className="flex justify-center items-center gap-[30px]">
            <a className="font-normal text-[30px] cursor-pointer">Sobre</a>
            <a className="font-normal text-[30px] cursor-pointer">Tecnologias</a>
            <a className="font-normal text-[30px] cursor-pointer">Projectos</a>
            <a className="font-normal text-[30px] cursor-pointer">Contacto</a>
          </div>
        </div>

        <div className='flex gap-5'>
          <div>
            <h1 className='text-[100px] font-bold'>Melissa Costa</h1>
            <div>
              <h2 className='text-[50px] font-normal'>Frontend Developer</h2>
              <Image
                src="/line.png"
                alt="Line"
                width={200}
                height={68}
                priority
                />
            </div>
          </div>
          <Image
            src="/pc.png"
            alt="Computer"
            width={400}
            height={350}
            priority
            />
        </div>
        <Social />
      </header>

      <main className="flex flex-col items-center justify-center gap-[100px]">
        <About />
        <Techs />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
