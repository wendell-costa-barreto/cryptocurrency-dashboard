'use client'
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
});

import React, { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Search, BarChart3, Coins, DollarSign, Volume, Activity } from 'lucide-react';
import Image from 'next/image';

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
        throw new Error('Failed to fetch crypto prices');
    }
};

const DataCard = ({ type, cryptoData, image, imageAlt, percentage }) => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: value > 1000000000 ? 'compact' : 'standard',
      maximumFractionDigits: 2
    }).format(value);
  };

  const getIcon = (type) => {
    switch(type) {
      case 'Price': return <DollarSign className="w-5 h-5" />;
      case 'Market Cap': return <BarChart3 className="w-5 h-5" />;
      case 'Volume': return <Volume className="w-5 h-5" />;
      case 'High 24h': return <Activity className="w-5 h-5" />;
      case 'Low 24h': return <Activity className="w-5 h-5 transform rotate-180" />;
      default: return <Coins className="w-5 h-5" />;
    }
  };

  return (
    <>
    <div className="bg-gradient-to-br from-gray-800/50 via-black/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-sm p-6 hover:border-purple-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-500/10 rounded-sm text-purple-400">
            {getIcon(type)}
          </div>
          <span className="text-slate-300 font-medium">{type}</span>
        </div>
        {image && (
          <Image width={40} height={40} src={image} alt={imageAlt} className="w-8 h-8 rounded-full" />
        )}
      </div>
      
      <div className="space-y-2">
        <div className="text-2xl font-bold text-white">
          {formatCurrency(cryptoData)}
        </div>
        {percentage !== undefined && (
          <div className={`flex items-center gap-1 text-sm ${
            percentage >= 0 ? 'text-green-400' : 'text-red-400'
          }`}>
            {percentage >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            {Math.abs(percentage).toFixed(2)}%
          </div>
        )}
      </div>
    </div>
    </>

  );
};

const CryptoTable = ({ cryptos }) => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: value > 1000000000 ? 'compact' : 'standard',
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <div className="bg-gradient-to-br from-gray-800/30 via-black/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-sm overflow-hidden">
      <div className="p-6 border-b border-gray-700/30">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-purple-400" />
          Market Overview
        </h2>
        <p className="text-slate-400 mt-2">Real-time cryptocurrency market data</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700/30">
              <th className="text-left py-4 px-6 text-slate-300 font-medium">Rank</th>
              <th className="text-left py-4 px-6 text-slate-300 font-medium">Name</th>
              <th className="text-left py-4 px-6 text-slate-300 font-medium">Price</th>
              <th className="text-left py-4 px-6 text-slate-300 font-medium">24h Change</th>
              <th className="text-left py-4 px-6 text-slate-300 font-medium">Market Cap</th>
              <th className="text-left py-4 px-6 text-slate-300 font-medium">Volume</th>
            </tr>
          </thead>
          <tbody>
            {cryptos.map((crypto) => (
              <tr key={crypto.id} className="border-b border-gray-700/20 hover:bg-gray-800/20 transition-colors">
                <td className="py-4 px-6">
                  <span className="bg-purple-500/10 text-purple-400 px-2 py-1 rounded-sm text-sm font-medium">
                    #{crypto.market_cap_rank}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <Image width={40} height={40} src={crypto.image} alt={crypto.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="text-white font-medium">{crypto.name}</div>
                      <div className="text-slate-400 text-sm uppercase">{crypto.symbol}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-white font-medium">
                  {formatCurrency(crypto.current_price)}
                </td>
                <td className="py-4 px-6">
                  <div className={`flex items-center gap-1 ${
                    crypto.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {crypto.price_change_percentage_24h >= 0 ? 
                      <TrendingUp className="w-4 h-4" /> : 
                      <TrendingDown className="w-4 h-4" />
                    }
                    {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                  </div>
                </td>
                <td className="py-4 px-6 text-slate-300">
                  {formatCurrency(crypto.market_cap)}
                </td>
                <td className="py-4 px-6 text-slate-300">
                  {formatCurrency(crypto.total_volume)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [cryptoPrices, setCryptoPrices] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [inputValue, setInputValue] = useState('btc');
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCryptoPrices()
      .then(data => {
        setCryptoPrices(data);
        setIsLoaded(true);
        const defaultCrypto = data.find(crypto => crypto.symbol.toLowerCase() === 'btc');
        if (defaultCrypto) {
          setSelectedCrypto(defaultCrypto);
        }
      })
      .catch(error => {
        setError(error);
        setIsLoaded(true);
      });
  }, []);

  const handleQuickSelect = (symbol) => {
    const foundCrypto = cryptoPrices.find(crypto => crypto.symbol.toLowerCase() === symbol.toLowerCase());
    if (foundCrypto) {
      setSelectedCrypto(foundCrypto);
      setInputValue(symbol.toLowerCase());
    }
  };

  const handleInputChange = (e) => {
    const userInput = e.target.value.toLowerCase();
    setInputValue(userInput);
    
    const foundCrypto = cryptoPrices.find(crypto => crypto.symbol.toLowerCase() === userInput);
    if (foundCrypto) {
      setSelectedCrypto(foundCrypto);
    }
  };

  if (error) {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center font-inter ` }>
        <div className="text-center">
          <div className="bg-red-500/10 border border-red-500/20 rounded-sm p-8 max-w-md">
            <div className="text-red-400 text-6xl mb-4">⚠️</div>
            <h1 className="text-red-400 text-2xl font-bold mb-2">Something went wrong</h1>
            <p className="text-slate-400">Please try again later</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 px-6 py-2 rounded-sm transition-all"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center font-inter">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-400/30 border-t-purple-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-400">Loading market data...</p>
        </div>
      </div>
    );
  }

  const quickSelectCoins = ['BTC', 'ETH', 'USDT', 'XRP', 'BNB'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 font-inter">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-800/50 via-black/50 to-gray-800/50 backdrop-blur-sm border-b border-gray-700/30 font-inter">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 font-inter">
            {/* Quick Select Buttons */}
            <div className={`${inter.className}hidden xl:flex flex-wrap gap-3`}
          >
              {quickSelectCoins.map(coin => (
                <button
                  key={coin}
                  onClick={() => handleQuickSelect(coin)}
                  className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 hover:from-purple-600/20 hover:to-purple-700/20 text-white px-6 py-3 rounded-sm font-medium transition-all duration-300 border border-gray-600/30 hover:border-purple-400/30"
                >
                  {coin}
                </button>
              ))}
            </div>

            {/* Search Section */}
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Search crypto symbol..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-sm text-white placeholder-slate-400 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all"
                  maxLength={10}
                />
              </div>
              
              <select 
                value={selectedCrypto?.symbol || ''}
                onChange={(e) => {
                  const crypto = cryptoPrices.find(c => c.symbol === e.target.value);
                  if (crypto) setSelectedCrypto(crypto);
                }}
                className="bg-gray-800/50 border border-gray-600/30 rounded-sm px-4 py-3 text-white font-medium focus:outline-none focus:border-purple-400/50 cursor-pointer"
              >
                {cryptoPrices.map(crypto => (
                  <option key={crypto.id} value={crypto.symbol} className="bg-gray-800">
                    {crypto.symbol.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {selectedCrypto && (
          <>
            {/* Selected Crypto Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Image
                  width={64}
                  height={64}
                  src={selectedCrypto.image}
                  alt={selectedCrypto.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h1 className="text-4xl font-bold text-white">{selectedCrypto.name}</h1>
                  <p className="text-xl text-slate-400 uppercase tracking-wider">{selectedCrypto.symbol}</p>
                </div>
              </div>
            </div>

            {/* Data Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
              <DataCard 
                type="Price" 
                cryptoData={selectedCrypto.current_price} 
                image={selectedCrypto.image} 
                imageAlt={`${selectedCrypto.name} logo`}
                percentage={selectedCrypto.price_change_percentage_24h}
              />
              <DataCard 
                type="Market Cap" 
                cryptoData={selectedCrypto.market_cap} 
                image={selectedCrypto.image} 
                imageAlt={`${selectedCrypto.name} logo`}
              />
              <DataCard 
                type="High 24h" 
                cryptoData={selectedCrypto.high_24h} 
                image={selectedCrypto.image} 
                imageAlt={`${selectedCrypto.name} logo`}
              />
              <DataCard 
                type="Low 24h" 
                cryptoData={selectedCrypto.low_24h} 
                image={selectedCrypto.image} 
                imageAlt={`${selectedCrypto.name} logo`}
              />
              <DataCard 
                type="Volume" 
                cryptoData={selectedCrypto.total_volume} 
                image={selectedCrypto.image} 
                imageAlt={`${selectedCrypto.name} logo`}
              />
            </div>
          </>
        )}

        {/* Market Table */}
        <CryptoTable cryptos={cryptoPrices} />
      </div>

    </div>

  );
};

export default Dashboard;