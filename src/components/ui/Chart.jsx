"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const formatToUSD = (value) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact",
        compactDisplay: "short",
    }).format(value);
};

const CryptoComparisonChart = ({ coins }) => {
    const slicedCoins = coins.slice(0, 8);

    const chartData = slicedCoins.map((coin) => ({
        name: coin.name,
        marketCap: coin.market_cap,
        currentPrice: coin.current_price,
        priceChange24h: coin.price_change_percentage_24h,
    }));

    return (
        <div className="w-full h-[400px] p-4 bg-white *:py-6">
            <h2 className="text-xl font-bold mb-2">Crypto Market Change Comparison</h2>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                        type="monotone"
                        dataKey="priceChange24h"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        name="Price Change 24h (%)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CryptoComparisonChart;
