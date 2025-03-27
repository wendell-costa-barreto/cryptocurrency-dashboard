'use client'
import fetchCryptoPrices from "./Action";
import DataCard from "@/components/Card";
import Image from "next/image";
import { useEffect, useState } from "react";
import CryptoChart from "./CryptoChart";
import Head from "next/head";


export const Metadata = {
    title: "Nexus | Dashboard",
    description: "Dashboard to visualise data on each cryptocurrency as it's selected on change, volume, prices, high and low, as well as seeing those values on the selected timeframes",
    keywords: "Nexus, cryptocurrency, market, data, visualisation",
};

export default function Dashboard() {
    const [cryptoPrices, setCryptoPrices] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [inputValue, setInputValue] = useState("btc");
    const [selectedCrypto, setSelectedCrypto] = useState(null);
    const [lastValidCrypto, setLastValidCrypto] = useState(null);

    useEffect(() => {
        fetchCryptoPrices()
            .then(data => {
                setCryptoPrices(data);
                setIsLoaded(true);
                const defaultCrypto = data.find(crypto => crypto.symbol.toLowerCase() === "btc");
                if (defaultCrypto) {
                    setSelectedCrypto(defaultCrypto);
                    setLastValidCrypto(defaultCrypto);
                }
            })
            .catch(error => {
                setError(error);
                setIsLoaded(true);
            });
    }, []);

    function handleTarget(e) {
        const userInput = e.target.value.toLowerCase();

        const foundCrypto = cryptoPrices.find(crypto => crypto.symbol.toLowerCase() === userInput);

        setInputValue(userInput);

        if (foundCrypto) {
            setSelectedCrypto(foundCrypto);
            setLastValidCrypto(foundCrypto); 
        } else {
            setSelectedCrypto(lastValidCrypto);
        }
    }

    if (error) return <div className="flex justify-center items-center h-screen"><h1 className="text-red-500 text-2xl">Something went wrong, try again later</h1></div>;
    if (!isLoaded) return         <div className='flex justify-center items-start w-full h-[80%]'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="161" height="161" className='mt-[10rem]'>
        <g>
        <g transform="rotate(0 50 50)">
        <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
            <animate repeatCount="indefinite" begin="-0.925925925925926s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
        </rect>
        </g>
        <g transform="rotate(30 50 50)">
        <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
            <animate repeatCount="indefinite" begin="-0.8417508417508418s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
        </rect>
        </g>
        <g transform="rotate(60 50 50)">
        <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
            <animate repeatCount="indefinite" begin="-0.7575757575757577s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
        </rect>
        </g>
        <g transform="rotate(90 50 50)">
        <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
            <animate repeatCount="indefinite" begin="-0.6734006734006734s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
        </rect>
        </g>
        <g transform="rotate(120 50 50)">
        <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
            <animate repeatCount="indefinite" begin="-0.5892255892255893s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
        </rect>
        </g>
        <g transform="rotate(150 50 50)">
        <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
            <animate repeatCount="indefinite" begin="-0.5050505050505051s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
        </rect>
        </g>
        <g transform="rotate(180 50 50)">
        <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
            <animate repeatCount="indefinite" begin="-0.4208754208754209s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
        </rect>
        </g>
        <g transform="rotate(210 50 50)">
        <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
            <animate repeatCount="indefinite" begin="-0.3367003367003367s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
        </rect>
        </g>
        <g transform="rotate(240 50 50)">
        <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
            <animate repeatCount="indefinite" begin="-0.25252525252525254s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
        </rect>
        </g>
        <g transform="rotate(270 50 50)">
        <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
            <animate repeatCount="indefinite" begin="-0.16835016835016836s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
        </rect>
        </g>
        <g transform="rotate(300 50 50)">
        <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
            <animate repeatCount="indefinite" begin="-0.08417508417508418s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
        </rect>
        </g>
        <g transform="rotate(330 50 50)">
        <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
            <animate repeatCount="indefinite" begin="0s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
        </rect>
        </g>
        </g>
        </svg>
    </div>;



    function handleQuickSelect(e){
        const userInput = e.target.innerText.toLowerCase();
        const foundCrypto = cryptoPrices.find(crypto => crypto.symbol.toLowerCase() === userInput);
        setSelectedCrypto(foundCrypto);
    }


    const slides = [
        {
            type: 'Price',
            cryptoData: selectedCrypto?.current_price || 0,
            image: selectedCrypto.image,
            imageAlt: `${selectedCrypto.name} logo`,
            percentage: selectedCrypto.price_change_percentage_24h,
        },
        {
            type: 'Market Cap',
            cryptoData: selectedCrypto?.market_cap || 0,
            image: selectedCrypto.image,
            imageAlt: `${selectedCrypto.name} logo`,
        },
        {
            type: 'High 24h',
            cryptoData: selectedCrypto?.high_24h || 0,
            image: selectedCrypto.image,
            imageAlt: `${selectedCrypto.name} logo`,
        },
        {
            type: 'Low 24h',
            cryptoData: selectedCrypto?.low_24h || 0,
            image: selectedCrypto.image,
            imageAlt: `${selectedCrypto.name} logo`,
        },
        {
            type: 'Volume',
            cryptoData: selectedCrypto?.total_volume || 0,
            image: selectedCrypto.image,
            imageAlt: `${selectedCrypto.name} logo`,
        },
    ];


    return (    
        <>

    <Head>
        <title>Nexus | Dashboard</title>
    </Head>

            <div className="bg-slate-900 w-full h-[20vh] mx-auto flex flex-row gap-8" >
                <div className="w-[65%] xl:flex flex-col items-center justify-center gap-8 hidden">
                    <div className="flex gap-4">
                        <button className="text-white bg-slate-600 px-8 py-2 rounded-xl font-bold" onClick={handleQuickSelect} >BTC</button>
                        <button className="text-white bg-slate-600 px-8 py-2 rounded-xl font-bold" onClick={handleQuickSelect}>ETH</button>
                        <button className="text-white bg-slate-600 px-8 py-2 rounded-xl font-bold" onClick={handleQuickSelect}>USDT</button>
                        <button className="text-white bg-slate-600 px-8 py-2 rounded-xl font-bold" onClick={handleQuickSelect}>XRP</button>
                        <button className="text-white bg-slate-600 px-8 py-2 rounded-xl font-bold" onClick={handleQuickSelect}>BNB</button>
                        <button className="text-white bg-slate-600 px-8 py-2 rounded-xl font-bold" onClick={handleQuickSelect}>SOL</button>
                        <button className="text-white bg-slate-600 px-8 py-2 rounded-xl font-bold" onClick={handleQuickSelect}>USDC</button>
                        <button className="text-white bg-slate-600 px-8 py-2 rounded-xl font-bold" onClick={handleQuickSelect}>DOGE</button>
                    </div>

                    <div className="flex gap-4">
                        <button className="text-white bg-slate-600 px-8 py-2 rounded-xl font-bold" onClick={handleQuickSelect}>ADA</button>
                        <button className="text-white bg-slate-600 px-8 py-2 rounded-xl font-bold" onClick={handleQuickSelect}>TRX</button>
                        <button className="text-white bg-slate-600 px-8 py-2 rounded-xl font-bold" onClick={handleQuickSelect}>WBTC</button>
                        <button className="text-white bg-slate-600 px-8 py-2 rounded-xl font-bold" onClick={handleQuickSelect}>LEO</button>
                        <button className="text-white bg-slate-600 px-8 py-2 rounded-xl font-bold" onClick={handleQuickSelect}>LINK</button>
                        <button className="text-white bg-slate-600 px-8 py-2 rounded-xl font-bold" onClick={handleQuickSelect}>TON</button>
                        <button className="text-white bg-slate-600 px-8 py-2 rounded-xl font-bold" onClick={handleQuickSelect}>XLM</button>
                    </div>
                </div>

                <div className="w-[100%] xl:w-[35%] flex flex-row items-center justify-center gap-8">
                    <div className="flex flex-row justify-center items-center w-full">
                        <input 
                                onChange={handleTarget} 
                                className="border-none lg:px-[2em] py-[.8em] h-[5%] w-[80%] text-center rounded-full bg-slate-700 text-white font-bold"
                                value={inputValue}
                                placeholder="Insert a symbol"
                                maxLength={4}
                            />

                    </div>
                        <select className="border-none px-[2em] py-[.8em] text-center rounded-full bg-slate-700 text-white font-bold uppercase flex justify-center cursor-pointer mr-9" onChange={handleTarget}>
                            {cryptoPrices.map(crypto => (
                                <option key={`${crypto.symbol} ${crypto.name}`} value={crypto.symbol} className="uppercase font-bold">{crypto.symbol}</option>
                            ))}
                        </select>
                </div>
            </div>



            {selectedCrypto && (
                <main>
                    <div className="flex gap-[2%] *:mx-6 justify-center items-center w-full my-[4%] xl:flex-row flex-col-reverse ">

                    <div className="flex flex-col">
                        <div className="flex justify-center items-center gap-3">
                            <Image
                            src={selectedCrypto.image}
                            alt={selectedCrypto.name}
                            width={60}
                            height={60}
                            />
                            <h1 className="text-xl lg:text-3xl font-bold">{selectedCrypto.name}</h1>
                        </div>
                        <h2 className="text-md lg:text-2xl italic uppercase text-center mt-2">{selectedCrypto.symbol}</h2>
                    </div>
                        <div className="flex w-full flex-wrap xl:flex-nowrap 2xl:gap-[5%] gap-8 justify-center items-center mb-[15%] xl:mb-0">
                            <DataCard type="Price" cryptoData={selectedCrypto?.current_price || 0} image={selectedCrypto.image} imageAlt={`${selectedCrypto.name} logo `} percentage={selectedCrypto.price_change_percentage_24h}/>
                            <DataCard type="Market Cap" cryptoData={selectedCrypto?.market_cap || 0} image={selectedCrypto.image} imageAlt={`${selectedCrypto.name} logo`}/>
                            <DataCard type="High 24h" cryptoData={selectedCrypto?.high_24h || 0} image={selectedCrypto.image} imageAlt={`${selectedCrypto.name} logo`}/>
                            <DataCard type="Low 24h" cryptoData={selectedCrypto?.low_24h || 0} image={selectedCrypto.image} imageAlt={`${selectedCrypto.name} logo`}/>
                            <DataCard type="Volume" cryptoData={selectedCrypto?.total_volume || 0} image={selectedCrypto.image} imageAlt={`${selectedCrypto.name} logo`}/>
                        </div>    
                    </div>
                </main>
                        )}
            <CryptoChart id={selectedCrypto?.id}/>
        </>
    );
}
