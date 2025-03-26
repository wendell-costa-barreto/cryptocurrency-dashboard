const fetchCryptoPrices = async () => {
    try{
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',
            {
                revalidate: 25,
                cache: 'no-cache',
                method: 'GET'
            }
        );
        const data = await res.json();
        return data;
    }catch(e){
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <p className="text-red-500 text-3xl font-bold">Something went wrong, try again later</p>
            </div>
        )
    }
};

export default fetchCryptoPrices

