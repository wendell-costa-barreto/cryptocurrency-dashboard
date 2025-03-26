export const fetchHistoricalData = async (id, days = 365) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`
      );
      const data = await response.json();
      return data.prices;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };