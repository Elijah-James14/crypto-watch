import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from "react-icons/fa";
import DOMPurify from "dompurify";

const Details = () => {
  const [coin, setCoin] = useState({});
  const params = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(url).then((res) => setCoin(res.data));
  }, [url]);

  console.log(coin);

  return (
    <div className="flex flex-col dark:bg-slate-800 dark:text-gray-300 w-full mt-5 max-w-[1200px] mx-auto shadow-xl rounded-lg py-20 px-5 h-auto">
      {/* Bar Heading */}
      <div className="flex items-center justify-between max-w-[150px]">
        <div>
          <h1 className="font-bold text-3xl">{coin?.name}</h1>
          <p className="font-light text-gray-500">
            {coin?.symbol?.toUpperCase()} / USD
          </p>
        </div>
        <img
          src={coin?.image?.small}
          alt={coin?.name}
          className="w-[50px] rounded-full"
        />
      </div>
      <div className="grid md:grid-cols-2 w-full gap-4 my-5">
        <div className="flex flex-col">
          <div className="flex justify-between items-center w-full">
            <p className="font-bold text-3xl">
              $
              {coin?.market_data?.current_price?.usd
                .toFixed(2)
                .toLocaleString()}
            </p>
            <p>7 Day</p>
          </div>
          {/* Sparkline */}
          <div>
            <Sparklines data={coin?.market_data?.sparkline_7d?.price}>
              <SparklinesLine color="yellow" />
            </Sparklines>
          </div>

          <div className="flex justify-between mt-5">
            <div>
              <p className="font-extralight text-gray-500">Market Cap</p>
              <p>${coin?.market_data?.market_cap?.usd?.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="font-extralight text-gray-500">Volume (24h)</p>
              <p>${coin?.market_data?.total_volume?.usd?.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex justify-between my-5">
            <div>
              <p className="font-extralight text-gray-500">24h High</p>
              <p>${coin?.market_data?.high_24h?.usd}</p>
            </div>
            <div className="text-right">
              <p className="font-extralight text-gray-500">24 Low</p>
              <p>${coin?.market_data?.low_24h?.usd}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="font-bold text-xl">Market Stats</p>
          <div className="my-2 flex flex-row justify-between">
            <div>
              <p className="font-extralight text-gray-500">Market Rank</p>
              <p>{coin?.market_data?.market_cap_rank}</p>
            </div>
            <div className="text-center">
              <p className="font-extralight text-gray-500">Hashing Algorithm</p>
              <p>{coin?.hashing_algorithm}</p>
            </div>
            <div className="text-right">
              <p className="font-extralight text-gray-500">Trust Score</p>
              <p>{coin?.developer_score?.toFixed(2)}</p>
            </div>
          </div>
          <div className="my-2 flex flex-row justify-between">
            <div>
              <p className="font-extralight text-gray-500">
                Price Change (24h)
              </p>
              <p>
                {coin?.market_data?.price_change_24h_in_currency?.usd?.toFixed(
                  2
                )}
              </p>
            </div>
            <div className="text-center">
              <p className="font-extralight text-gray-500">Price Change (7d)</p>
              <p>
                {coin?.market_data?.price_change_percentage_7d_in_currency?.usd.toFixed(
                  2
                )}
              </p>
            </div>
            <div className="text-right">
              <p className="font-extralight text-gray-500">
                Price Change (14d)
              </p>
              <p>
                {coin?.market_data?.price_change_percentage_14d_in_currency?.usd.toFixed(
                  2
                )}
              </p>
            </div>
          </div>
          <div className="my-2 flex flex-row justify-between">
            <div>
              <p className="font-extralight text-gray-500">
                Price Change (30d)
              </p>
              <p>
                {coin?.market_data?.price_change_percentage_30d_in_currency?.usd?.toFixed(
                  2
                )}
              </p>
            </div>
            <div className="text-center">
              <p className="font-extralight text-gray-500">
                Price Change (60d)
              </p>
              <p>
                {coin?.market_data?.price_change_percentage_60d_in_currency?.usd.toFixed(
                  2
                )}
              </p>
            </div>
            <div className="text-right">
              <p className="font-extralight text-gray-500">Price Change (1y)</p>
              <p>
                {coin?.market_data?.price_change_percentage_1y_in_currency?.usd.toFixed(
                  2
                )}
              </p>
            </div>
          </div>
          <div className="mt-5 flex justify-around w-full text-cyan-600">
            <FaTwitter />
            <FaFacebook />
            <FaReddit />
            <FaGithub />
          </div>
        </div>
      </div>
      <div>
        <p className="font-bold mb-3">About {coin?.name}</p>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              coin?.description ? coin?.description?.en : ""
            ),
          }}
        ></p>
      </div>
    </div>
  );
};

export default Details;
