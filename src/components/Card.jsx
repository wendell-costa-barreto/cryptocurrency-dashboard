import Image from "next/image";

export default function DataCard({type, cryptoData, image, imageAlt, percentage}) {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <>
            <div className="flex flex-col h-[15vh] 2xl:w-[15%] w-[60%] border border-black items-center justify-center relative bg-slate-900 rounded-2xl text-white shadow-2xl ">
            <h1 className="absolute top-2 left-3 font-bold">{type}</h1>
            <h2 className={`${cryptoData <= 0 ? "text-red-500" : "text-emerald-300"} font-bold`}>{USDollar.format(cryptoData)}</h2>
            <Image 
                src={image}
                alt={imageAlt}
                width={25}
                height={25}
                className="absolute top-2 right-4"
            />
            <p className={`${percentage <= 0 ? "text-red-500" : "text-emerald-300"} font-bold mt-[.8rem] mb-[-1.4rem]`}>{`${percentage != undefined ? percentage + "%" : ""}`}</p>


        </div>
        </>
    )
}