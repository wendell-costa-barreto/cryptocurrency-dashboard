import Cell from "./Cell";
import fetchCryptoPrices from "./Action";
import FilterButton from "./FilterButton";

export default async function Dashboard() {
    const cryptocurrencies = await fetchCryptoPrices();
    const dataToPass = cryptocurrencies || [];


    return (
        <>
        <div className="dashboard">
            <div className="w-full flex justify-center items-start *:px-6 flex-col">
                <h1 className="text-4xl text-center pt-6 text-black font-bold">Nexus Dashboard</h1>
                <p className="text-md text-center text-black italic">Use this tool to visualise in a table the cryptocurrencies values and changes</p>
            </div>
        </div>
            <FilterButton initialData={dataToPass} />
            <div className="w-full overflow-x-auto">
                <table className="w-full p-4 flex flex-col justify-start min-w-full border border-gray-300">
                    <thead className="flex w-full">
                        <tr className="w-full *:w-full flex *:flex *:justify-start *:items-center *:font-semibold *:text-gray-500">
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Change</th>
                            <th className="px-4 py-2">High</th>
                            <th className="px-4 py-2">Low</th>
                            <th className="px-4 py-2">Market Cap</th>
                            <th className="px-4 py-2">Market Rank</th>
                        </tr>
                    </thead>
                    <tbody className="flex flex-col w-full m-3">
                        {cryptocurrencies.map((crypto) => (
                            <Cell
                                key={crypto.id}
                                id={crypto.id}
                                name={crypto.name}
                                image={crypto.image}
                                current_price={crypto.current_price}
                                change={crypto.price_change_24h}
                                high={crypto.high_24h}
                                low={crypto.low_24h}
                                market_cap={crypto.market_cap}
                                market_cap_rank={crypto.market_cap_rank}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
