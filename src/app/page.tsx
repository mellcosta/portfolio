import Image from 'next/image'

import Social from '../components/Social'

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-between px-20 py-8">

      <header className='flex flex-col intems-center justify-start gap-[100px] px-10' >
        <div className='flex items-center justify-center gap-[25%]'>
          <a href="#" className='cursor-pointer'>
            <Image
              src="/mel.png"
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

        <div className='flex gap-10'>
          <div>
            <h1 className='text-[100px] font-bold'>Melissa Costa</h1>
            <div>
              <h2 className='text-[50px]'>Frontend Developer</h2>
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

      <main className="flex">
        
      </main>
    </div>
  )
}
