import Image from "next/image";

const Cards = (props) => {
    return(
        <section className="cards flex-col gap-[20px] w-[40%] h-[400px] bg-gray-900 hover:bg-gray-800 rounded-2xl justify-center items-center px-[10px] py-[20px]">
            <div className="flex flex-col  items-center justify-center gap-[-50px]">
                <a href={props.url} target="_blank">
                    <Image
                        src={props.image}
                        alt="Image"
                        id="card-image"
                        width={500}
                        height={300}
                        className="rounded-tl-2xl rounded-tr-2xl  h-[280px] max-h-[310px]"
                    />
                </a>
                <Image
                    src="/line.svg"
                    alt="Line"
                    id="card-line"
                    width={505}
                    height={10}
                    className="relative top-[-10px]"
                />
            </div>
            <span className="text-white font-medium">
                {props.legend}
            </span>
        </section>
    )
}
export default Cards