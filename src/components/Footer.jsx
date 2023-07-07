import Image from "next/image";

import Social from '../components/Social'

export default function Footer() {
    return(
        <div className="bg-gray-900 flex gap-[50px] items-end justify-between h-[130px] w-[100%] py-[30px] px-[100px]">
            <a href="#" className='cursor-pointer'>
                <Image
                src="/mel.svg"
                alt="Mel Logo"
                width={200}
                height={68}
                priority
                />
            </a>
          <Social/>
          <div className="flex flex-col ">
            <div className="flex">
                <Image
                    src="/tel.svg"
                    alt="Telefone"
                    width={30}
                    height={30}
                    priority
                    />
                <span>+244 934 661 671</span>
            </div> 
            <div className="flex">
                <Image
                    src="/email.svg"
                    alt="Email"
                    width={30}
                    height={30}
                    priority
                    />
                <span>mcosta.msl@gmail.com</span>
            </div> 
          </div>
        </div>
    )
}