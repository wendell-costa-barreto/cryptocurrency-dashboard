'use client';
import React from "react";
import ChartAction from "@/app/charts/chartAction";
import { Chart } from "react-google-charts";


export const options = {
  legend: "none",
};

export const data = await ChartAction();


export default function CandlestickChart() {
  return (
    <div className="w-full h-[400px] p-4 bg-white *:py-6">
            <h2 className="text-xl font-bold mb-2">OHLC Visualising daily</h2>
            <Chart
                chartType="CandlestickChart"
                width="100%"
                height="100%"
                data={data}
                options={options}
            />
            </div>

  );
}
