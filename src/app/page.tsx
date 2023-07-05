import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-between px-20 py-8">

      <header className='flex flex-col intems-center justify-start gap-[100px] px-10' >
        <div className='flex items-center justify-center gap-[25%]'>
          <Image
            src="/mel.png"
            alt="Mel Logo"
            width={200}
            height={68}
            priority
          />
          <div className="flex justify-center items-center gap-[30px]">
            <div className="font-normal text-[30px]">Sobre</div>
            <div className="font-normal text-[30px]">Tecnologias</div>
            <div className="font-normal text-[30px]">Projectos</div>
            <div className="font-normal text-[30px]">Contacto</div>
          </div>
        </div>

        <div className='flex gap-10'>
          <div>
            <h1 className='text-[100px] font-bold'>Melissa Costa</h1>
            <div>
              <h2 className='text-[50px]'>Frontend Developer</h2>
              <Image
                  src="/line.png"
                  alt="Mel Logo"
                  width={200}
                  height={68}
                  priority
                />
              </div>
            </div>
        <Image
              src="/pc.png"
              alt="Mel Logo"
              width={400}
              height={350}
              priority
            />
        </div>
        <div className="flex items-start justify-start gap-9">
        <Image
              src="/github.png"
              alt="Mel Logo"
              width={32}
              height={32}
              priority
            />
        <Image
              src="/linkedin.png"
              alt="Mel Logo"
              width={32}
              height={32}
              priority
            />
        <Image
              src="/instagram.png"
              alt="Mel Logo"
              width={32}
              height={32}
              priority
            />       
        </div>
      </header>

      <main className="flex">
        
      </main>
    </div>
  )
}
