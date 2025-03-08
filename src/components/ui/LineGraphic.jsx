"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const formatToUSD = (value) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact",
        compactDisplay: "short",
    }).format(value);
};

const LineGraphic = ({ coins }) => {
    // Slice the data to show only the first 8 coins
    const slicedCoins = coins.slice(0, 8);

    // Convert data for Recharts
    const chartData = slicedCoins.map((coin) => ({
        name: coin.name,
        marketCap: coin.market_cap,
        currentPrice: coin.current_price,
        priceChange24h: coin.price_change_percentage_24h,
    }));

    return (
        <div className="w-full h-[400px] p-4 bg-white *:py-6 mt-6">
            <h2 className="text-xl font-bold mb-2">Crypto Market Value Comparison</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    {/* Line for Price Change 24h */}
                    <Line
                        type="monotone"
                        dataKey="currentPrice"
                        stroke="#82ca9d"
                        activeDot={{ r: 8 }}
                        name="Price"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineGraphic;
