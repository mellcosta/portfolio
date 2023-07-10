import Image from "next/image";
import Link from "next/link";

import Title from "../components/Title"

export default function Contact() {
    return(
        <div>

            <Link href='#' id='contact'>
                <Title title="Entre em Contacto"/>
            </Link>
            <div className="flex gap-10 items-start justify-center px-[100px]">
                <div className="p-[50px]">
                    <p>Entre em contacto para discutir projectos, parcerias e oportunidades futuras.</p>
                    <Image
                        src="/chat.svg"
                        alt="Chat"
                        width={390}
                        height={330}
                    />
                </div>
                <form action="https://formsubmit.co/m3licosta@gmail.com" method="POST"
                    className="flex flex-col items-start justify-center gap-[30px] px-[50px]">
                    <input type="hidden" name="_autoresponse" value="Agradeço por me contactar."/>
                    <input type="hidden" name="_next" value="http://localhost:3000/"/>
                    <input type="hidden" name="_captcha" value="false"/>
                    <div>
                        <label>Nome</label>
                        <input type="text" name="nome"
                            className=" w-[440px] rounded-lg bg-gray-900 hover:bg-gray-700" required/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email"
                            className=" w-[440px] rounded-lg bg-gray-900 hover:bg-gray-700" required
                        />
                    </div>
                    <div>
                        <label>Mensagem</label>
                        <textarea name="mensagem" cols="10" rows="3" className=" w-[440px] rounded-lg bg-gray-900 hover:bg-gray-700"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-400 w-[120px] h-[50px] center rounded-3xl text-semibold">Enviar</button>
                </form>
            </div>
        </div>
    )
}