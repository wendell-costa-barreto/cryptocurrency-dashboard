import { useState, useEffect } from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

const CryptoChart = ({ id }) => {
  const [data, setData] = useState([]);
  const [days, setDays] = useState(365); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWithRetry = async (url, retries = 3, delay = 1000) => {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return await response.json();
      } catch (error) {
        if (i === retries - 1) throw error;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  };

  useEffect(() => {
    const loadData = async () => {
      if (!id) return;

      setLoading(true);
      setError(null);
      try {
        const result = await fetchWithRetry(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`
        );
        let formattedData;

        if (days === 365) {
          formattedData = aggregateMonthlyData(result.prices);
        } else if (days === 30) {
          formattedData = result.prices.map(([timestamp, price]) => ({
            date: formatDate(timestamp, days),
            price,
          }));
        } else if (days === 1) {
          formattedData = result.prices.map(([timestamp, price]) => ({
            date: formatDate(timestamp, days),
            price,
          }));
        }

        setData(formattedData);
      } catch (error) {
        setError('Failed to fetch data. Please try again later.');
        return null;
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id, days]);

  const formatDate = (timestamp, days) => {
    const date = new Date(timestamp);
    if (days === 1) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (days === 30) {
      return date.toLocaleDateString('default', { day: 'numeric', month: 'short' });
    } else if (days === 365) {
      return date.toLocaleDateString('default', { month: 'short', year: 'numeric' });
    }
    return date.toLocaleDateString();
  };

  const aggregateMonthlyData = (prices) => {
    const monthlyData = {};

    prices.forEach(([timestamp, price]) => {
      const date = new Date(timestamp);
      const monthKey = `${date.getFullYear()}-${date.getMonth()}`;

      if (!monthlyData[monthKey]) {
        monthlyData[monthKey] = {
          total: 0,
          count: 0,
        };
      }

      monthlyData[monthKey].total += price;
      monthlyData[monthKey].count += 1;
    });

    return Object.keys(monthlyData).map((monthKey) => {
      const averagePrice = monthlyData[monthKey].total / monthlyData[monthKey].count;
      const [year, month] = monthKey.split('-');
      const date = new Date(year, month).toLocaleDateString('default', {
        year: 'numeric',
        month: 'short',
      });

      return {
        date,
        price: averagePrice,
      };
    });
  };

  if (loading) {
    return (
      <>
        <div className='flex justify-center items-start w-full h-screen'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="161" height="161" className='mt-[10rem]'>
  <g>
    <g transform="rotate(0 50 50)">
      <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
        <animate repeatCount="indefinite" begin="-0.925925925925926s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
      </rect>
    </g>
    <g transform="rotate(30 50 50)">
      <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
        <animate repeatCount="indefinite" begin="-0.8417508417508418s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
      </rect>
    </g>
    <g transform="rotate(60 50 50)">
      <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
        <animate repeatCount="indefinite" begin="-0.7575757575757577s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
      </rect>
    </g>
    <g transform="rotate(90 50 50)">
      <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
        <animate repeatCount="indefinite" begin="-0.6734006734006734s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
      </rect>
    </g>
    <g transform="rotate(120 50 50)">
      <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
        <animate repeatCount="indefinite" begin="-0.5892255892255893s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
      </rect>
    </g>
    <g transform="rotate(150 50 50)">
      <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
        <animate repeatCount="indefinite" begin="-0.5050505050505051s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
      </rect>
    </g>
    <g transform="rotate(180 50 50)">
      <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
        <animate repeatCount="indefinite" begin="-0.4208754208754209s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
      </rect>
    </g>
    <g transform="rotate(210 50 50)">
      <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
        <animate repeatCount="indefinite" begin="-0.3367003367003367s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
      </rect>
    </g>
    <g transform="rotate(240 50 50)">
      <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
        <animate repeatCount="indefinite" begin="-0.25252525252525254s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
      </rect>
    </g>
    <g transform="rotate(270 50 50)">
      <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
        <animate repeatCount="indefinite" begin="-0.16835016835016836s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
      </rect>
    </g>
    <g transform="rotate(300 50 50)">
      <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
        <animate repeatCount="indefinite" begin="-0.08417508417508418s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
      </rect>
    </g>
    <g transform="rotate(330 50 50)">
      <rect fill="#2a2728" height="15" width="7" ry="0" rx="0" y="22.5" x="46.5">
        <animate repeatCount="indefinite" begin="0s" dur="1.0101010101010102s" keyTimes="0;1" values="1;0" attributeName="opacity"/>
      </rect>
    </g>
  </g>
</svg>
</div>
      </>
    )
  }

  if (error) {
    return (
      <div className='flex justify-center items-center w-full h-screen'>
        <h1 className='text-2xl text-red-600'>Something went wrong, try again later</h1>
      </div>
    );
  }

  return (
    <div>
      <div className='ml-[5%] 2xl:ml-0 mb-[5%] 2xl:mb-[2%] flex flex-row gap-4'>
        <button
          className={`p-4 text-white rounded-full font-bold transition-all duration-500 ease-in-out ml-[1%] ${
            days === 1 ? 'bg-slate-700' : 'bg-slate-800'
          }`}
          onClick={() => setDays(1)}
        >
          Last 24hr
        </button>
        <button
          className={`p-4 text-white rounded-full font-bold transition-all duration-500 ease-in-out ${
            days === 30 ? 'bg-slate-700' : 'bg-slate-800'
          }`}
          onClick={() => setDays(30)}
        >
          Last month
        </button>
        <button
          className={`p-4 text-white rounded-full font-bold transition-all duration-500 ease-in-out ${
            days === 365 ? 'bg-slate-700' : 'bg-slate-800'
          }`}
          onClick={() => setDays(365)}
        >
          Last year
        </button>
      </div>
      <ResponsiveContainer width="90%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CryptoChart;