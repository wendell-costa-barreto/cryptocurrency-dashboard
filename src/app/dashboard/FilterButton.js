"use client";

import { useState, useEffect } from "react";
import Cell from "./Cell";

export default function FilterButton({ initialData }) {
    const [cryptocurrencies, setCryptocurrencies] = useState([]);
    const [filteredCryptos, setFilteredCryptos] = useState([]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [loading, setLoading] = useState(true);

    // Ensure initialData is available before filtering
    useEffect(() => {
        if (initialData && initialData.length > 0) {
            setCryptocurrencies(initialData);  // Initialize state with passed data
            setLoading(false);
        }
    }, [initialData]);

    function filterCryptos() {
        if (!initialData || initialData.length === 0) return;  // Safeguard against undefined or empty data

        const filtered = initialData.filter((crypto) => {
            return (
                (!minPrice || crypto.current_price >= parseFloat(minPrice)) &&
                (!maxPrice || crypto.current_price <= parseFloat(maxPrice))
            );
        });
        setFilteredCryptos(filtered);  // Save filtered results
    }

    // Reset the filter
    function resetFilters() {
        setFilteredCryptos([]);  // Clear filtered results
        setMinPrice("");  // Reset minPrice input
        setMaxPrice("");  // Reset maxPrice input
    }

    if (loading) {
        return <div>Loading data...</div>; // Loading state
    }

    return (
        <>
            <div className="flex gap-4 p-4">
                <input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="border p-2 rounded"
                />
                <button
                    onClick={filterCryptos}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Filter
                </button>
                <button
                    onClick={resetFilters}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                >
                    Reset
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full p-4 flex flex-col justify-start min-w-full border border-gray-300">
                    <thead className="flex w-full">
                        <tr className="w-full flex justify-start items-center font-semibold text-gray-500">
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
                        {cryptocurrencies.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="text-center">No data available</td>
                            </tr>
                        ) : (
                            (filteredCryptos.length > 0 ? filteredCryptos : cryptocurrencies).map((crypto) => (
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
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
