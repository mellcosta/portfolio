import Image from "next/image";

import Social from '../components/Social'

export default function Footer() {
    return(
        <div className="footer bg-gray-900 flex gap-[50px] items-end justify-between h-[130px] py-[30px] px-[100px]">
            <a href="#" className='cursor-pointer'>
                <Image
                src="/img/me/mel.svg"
                alt="Mel Logo"
                id='logo'
                width={200}
                height={68}
                priority
                />
            </a>
          <Social/>
          <div className="flex flex-col ">
            <div className="flex">
                <Image
                    src="/img/icons/tel.svg"
                    alt="Telefone"
                    width={30}
                    height={30}
                    priority
                    />
                <a href="tel:+244 934 661 671">+244 934 661 671</a>
            </div> 
            <div className="flex">
                <Image
                    src="/img/icons/email.svg"
                    alt="Email"
                    width={30}
                    height={30}
                    priority
                    />
                <a href="mailto:m3licosta@gmail.com">m3licosta@gmail.com</a>
            </div> 
          </div>
        </div>
    )
}