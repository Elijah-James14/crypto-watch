import { useEffect, useState } from "react";
import axios from "axios";

const TrendingCoins = () => {
  const [coins, setCoins] = useState([]);

  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    axios.get(url).then((res) => setCoins(res.data.coins));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full max-w-[1200px] h-auto m-auto shadow-xl py-2 px-2 rounded-2xl dark:bg-slate-800 dark:text-gray-300">
      <h1 className="font-bold text-2xl">Trending Coins</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
        {coins.map((coin) => (
          <div
            key={coin?.item?.key}
            className="shadow-xl flex flex-row justify-between items-center p-4 hover:scale-105 ease-in-out duration-300"
          >
            <div className="flex items-center w-full h-full">
              <div>
                <img
                  src={coin?.item.small}
                  alt={coin.name}
                  className="rounded-full mr-2"
                />
              </div>
              <div>
                <p>{coin?.item?.name}</p>
                <p>{coin?.item?.symbol}</p>
              </div>
            </div>
            <div className="flex flex-row justify-end items-center w-full">
              <img
                className="w-8 mr-2"
                src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                alt="Bitcoin"
              />
              <p>{coin?.item?.price_btc.toFixed(6)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
