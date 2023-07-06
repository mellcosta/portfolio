import Image from "next/image";

const Title = (props) => {
    return (
        <div className="flex flex-col items-center justify-center gap-0">
            <h2 className="text-[60px] font-semibold">{props.titulo}</h2>
            <Image
                src="/line.png"
                alt="Line"
                width={205}
                height={20}
            />
        </div>
    )
}
export default Title