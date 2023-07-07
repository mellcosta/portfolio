import Image from "next/image";

const Title = (props) => {
    return (
        <div className="flex flex-col items-center justify-center gap-0 mb-[100px]">
            <h2 className="text-[60px] font-semibold">{props.title}</h2>
            <Image
                src="/line.svg"
                alt="Line"
                width={205}
                height={20}
            />
        </div>
    )
}
export default Title