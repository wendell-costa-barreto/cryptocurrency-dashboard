import { fromUnixTime, format } from 'date-fns';

export default async function ChartAction() {
  try {
    const response = await fetch('https://data-api.coindesk.com/index/cc/v1/historical/days?market=cadli&limit=30&aggregate=1&fill=true&apply_mapping=true&response_format=JSON&groups=OHLC&to_ts=1741617085&instrument=BTC-USD&api_key=cc914367a0cacec63c94c1fa413e80e09984b224e2831baf8e4b64c44249cae3');
    const data = await response.json();

    // Map the data into an array of arrays for chart
    const chartData = data.Data.map(item => {
      const date = fromUnixTime(item.TIMESTAMP);
      const dateFormatted = format(date, 'dd/MM/yyyy');

      return [
        dateFormatted,  
        item.OPEN,     
        item.HIGH,      
        item.LOW,       
        item.CLOSE       
      ];
    });

    chartData.unshift(['day', 'open', 'high', 'low', 'close']);

    console.log(chartData); 
    return chartData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
