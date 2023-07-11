import Image from 'next/image'
import Link from 'next/link'

import Social from '../components/Social'
import About from '../components/About'
import Techs from '../components/Techs'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-between py-8 gap-[100px]">

      <header className='header flex flex-col intems-center justify-start gap-[100px] px-10' >
        <div className='flex items-center justify-between'>
          <a href="#" className='cursor-pointer'>
            <Image
              src="/mel.svg"
              alt="Mel Logo"
              id='logo'
              width={200}
              height={68}
              priority
            />
          </a>
          <div className=" menu-nav flex justify-center items-center gap-[30px]">
            <Link href='#about'className="font-normal text-[30px] cursor-pointer">Sobre</Link>
            <Link href='#techs' className="font-normal text-[30px] cursor-pointer">Tecnologias</Link>
            <Link href='#projects' className="font-normal text-[30px] cursor-pointer">Projectos</Link>
            <Link href='#contact' className="font-normal text-[30px] cursor-pointer">Contacto</Link>
          </div>
        </div>

        <div className='flex gap-5'>
          <div>
            <h1 className='banner-title text-[100px] font-bold'>Melissa Costa</h1>
            <div>
              <h2 className='banner-text text-[50px] font-normal'>Frontend Developer</h2>
              <Image
                src="/line.svg"
                alt="Line"
                id='line'
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
            id='pc'
            priority
          />
        </div>

        <Social />
      </header>

      <main className="flex flex-col items-center justify-center gap-[90px]">
          <About />
          <Techs />
        <Link href='#' id='projects'>
        </Link>
        <Projects />
        <Contact />
      </main>

      <Footer />
      
    </div>
  )
}
