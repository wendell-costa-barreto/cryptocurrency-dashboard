import fetchCryptoPrices from "../dashboard/Action";
import LineGraphic from "@/components/ui/LineGraphic";
import CryptoComparisonChart from "@/components/ui/Chart";
import CandlestickChart from "@/components/ui/CandleChart";
import ChartAction from "@/app/charts/chartAction";
import Head from "next/head";

export const metadata = {
    title: "Nexus | Charts",
    description: "Charts to visualise the general cryptocurrency market summarised",
    keywords: "Nexus, cryptocurrency, cryptocurrencies, data, OHLC, charts, USD, popular",
};

export default async function Graphics() {

    const cryptocurrencies = await fetchCryptoPrices();
    const OHLCData = await ChartAction();

    if (!OHLCData || OHLCData.length === 0) {
        return <div>Error fetching OHLC data</div>;
    }

    if (!cryptocurrencies || cryptocurrencies.length === 0) {
        return <div>Error fetching cryptocurrencies data</div>;
    }

    return (
        <>

        <Head>
            <title>Nexus | Charts</title>
        </Head>
        <div className="dashboard">
            <div className="w-full flex justify-center items-start *:px-8 flex-col">
                <h1 className="text-4xl text-center pt-6 text-black font-bold">Nexus Dashboard</h1>
                <p className="text-md text-justify w-full text-black italic mt-5">Use this tool to visualise in charts the cryptocurrencies values, changes as well as the OHLC data generally</p>
            </div>
        </div>
        <main className="flex flex-col items-center justify-center gap-6">
            <div className="w-full flex-col flex">
            <LineGraphic coins={cryptocurrencies} />
            <p className="py-[3.5%] px-2 italic text-sm mt-[1.7rem] lg:mt-0">{`The above chart shows the market prices of cryptocurrencies currently, it's displayed the most popular cryptocurrencies in the USD currency conversion`}</p>
            </div>
            <div className="w-full flex-col flex">
            <CryptoComparisonChart coins={cryptocurrencies} />
            <p className="py-[3.5%] px-2 italic text-sm mt-[1.7rem] lg:mt-0">{`The above chart shows the prices of cryptocurrencies over time, it's displayed the most popular cryptocurrencies in the USD currency conversion`}</p>
            </div>
            <div className="w-full flex-col flex">
            <CandlestickChart data={OHLCData} />
            <p className="py-[3.5%] px-2 italic text-sm mt-[1.7rem] lg:mt-0">{`The above chart shows the changes of Open, High, Low, and Close prices over the past days, hover the mouse or click on top of the chart to see the details`}</p>
            </div>
        </main>
        </>
    );
}


export const dynamic = "force-dynamic";
