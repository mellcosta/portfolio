import Image from "next/image";

import Title from "../components/Title"

export default function Contact() {
    return(
        <div>
            <Title title="Entre em Contacto"/>
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
                <form className="flex flex-col items-start justify-center gap-[30px] px-[50px]">
                    <div>
                        <label>Nome</label>
                        <input type="text" className=" w-[440px] rounded-lg bg-gray-900 hover:bg-gray-700"/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" 
                            className=" w-[440px] rounded-lg bg-gray-900 hover:bg-gray-700"
                            required
                            pattern="*@*"
                        />
                    </div>
                    <div>
                        <label>Mensagem</label>
                        <textarea cols="10" rows="3" className=" w-[440px] rounded-lg bg-gray-900 hover:bg-gray-700"></textarea>
                    </div>
                    <button className="bg-blue-400 w-[120px] h-[50px] center rounded-3xl text-semibold">Enviar</button>
                </form>
            </div>
        </div>
    )
}