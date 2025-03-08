import Image from "next/image"


export default function Cell({ id, name, image, current_price, change, high, low, market_cap, market_cap_rank }) {

    return (
        <>
            <tr className="*:w-full flex *:flex *:justify-start *:items-center *:border-b *:p-1 *:font-bold">
                <td>{name}</td>
                <td className="price">{formatToUSD(current_price)}</td>
                <td className={`    ${change < 0 ? "text-red-500" : "text-green-500"}`}> {formatToUSD(change)}</td>
                <td> {formatToUSD(high)}</td>
                <td> {formatToUSD(low)}</td>
                <td className="market-cap"> {formatToUSD(market_cap)}</td>
                <td> Rank {market_cap_rank}</td>
            </tr >
        </>
    )

}

export const formatToUSD = (value) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
};