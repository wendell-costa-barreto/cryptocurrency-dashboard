import { data } from "@/components/ui/CandleChart";
import fetchCryptoPrices from "../dashboard/Action";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Head from "next/head";


export const Metadata = {
    title: "Nexus | Table",
    description: "Utilise this table to visualise a summarised version of the cryptocurrency market",
    keywords: "Nexus, price, low, high, volume, change, market cap, cryptocurrencies",
};


export default async function DataTable() {
    const cryptocurrencies = await fetchCryptoPrices();
    console.log(cryptocurrencies); // Check what is being returned
    const dataToPass = Array.isArray(cryptocurrencies) ? cryptocurrencies : [];
    
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <>
        <Head>
            <title>Nexus | Table</title>
        </Head>
            <main className="w-full h-full">
                <Table>
                <TableCaption>A list of cryptocurrencies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[2%]">Rank</TableHead>
                        <TableHead className="w-[12%]">Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Market Cap</TableHead>
                        <TableHead>Volume</TableHead>
                        <TableHead className="">High 24h</TableHead>
                        <TableHead className="">Low 24h</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {dataToPass.map((crypto) => (
                        <TableRow key={crypto.id}>
                            <TableCell>{crypto.market_cap_rank}</TableCell>
                            <TableCell className="font-medium">{crypto.name}</TableCell>
                            <TableCell>{USDollar.format(crypto.current_price)}</TableCell>
                            <TableCell>{USDollar.format(crypto.market_cap)}</TableCell>
                            <TableCell>{USDollar.format(crypto.total_volume)}</TableCell>
                            <TableCell>{USDollar.format(crypto.high_24h)}</TableCell>
                            <TableCell>{USDollar.format(crypto.low_24h)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </main>
        </>
    );
}

