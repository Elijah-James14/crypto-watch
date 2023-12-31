import { useEffect, useState } from "react";
import axios from "axios";
import CoinSearch from "../components/CoinSearch";
import TrendingCoins from "../components/TrendingCoins";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=en";

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => setCoins(res.data))
      .finally(() => setLoading(false));
  }, [url]);
  return (
    <div>
      <CoinSearch coins={coins} loading={loading} />
      <TrendingCoins />
    </div>
  );
};

export default Home;
