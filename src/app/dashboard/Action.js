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
        console.log(e);
        return [];  
    }
};

export default fetchCryptoPrices

