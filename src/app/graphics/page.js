import fetchCryptoPrices from "../dashboard/Action";
import LineGraphic from "@/components/ui/LineGraphic";
import CryptoComparisonChart from "@/components/ui/Chart";

export default async function Graphics() {
    const cryptocurrencies = await fetchCryptoPrices(); // Fetch the data

    // Ensure that cryptocurrencies are fetched correctly
    if (!cryptocurrencies || cryptocurrencies.length === 0) {
        return <div>Error fetching cryptocurrency data</div>;
    }

    return (
        <>
        <h1 className="text-2xl text-center py-6 text-black font-bold">Visualise cryptocurrency data in charts</h1>
        <div className="flex flex-col items-center justify-center h-screen gap-6">
            <div className="w-full flex-col flex">
            <LineGraphic coins={cryptocurrencies} /> {/* Pass the coins prop */}
            <p className="py-[3.5%] px-2 italic text-sm">{`The above chart shows the market prices of cryptocurrencies currently, it's displayed the 8 most popular cryptocurrencies in the USD currency conversion`}</p>
            </div>
            <div className="w-full flex-col flex">
            <CryptoComparisonChart coins={cryptocurrencies} />
            <p className="py-[3.5%] px-2 italic text-sm">{`The above chart shows the prices of cryptocurrencies over time, it's displayed the 8 most popular cryptocurrencies in the USD currency conversion`}</p>
            </div>
        </div>
        </>
    );
}


export const dynamic = "force-dynamic";
