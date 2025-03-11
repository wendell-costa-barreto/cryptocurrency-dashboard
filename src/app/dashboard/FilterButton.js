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
        </>
    );
}
