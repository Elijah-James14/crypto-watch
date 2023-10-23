import { useState } from "react";
import CoinRow from "./CoinRow";

/* eslint-disable react/prop-types */
const CoinSearch = ({ coins }) => {
  const [searchInput, setSearchinput] = useState("");

  return (
    <div className="w-full h-auto max-w-[1200px] mx-auto dark:bg-slate-800 dark:text-gray-300 shadow-xl rounded-lg p-2 flex flex-col my-5">
      {/* Search bar */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl">Search Crypto</h1>
        </div>
        <div className="w-full md:max-w-[300px] mt-2 md:mt-0">
          <input
            onChange={(e) => setSearchinput(e.target.value)}
            type="text"
            placeholder="Search a coin"
            className="w-full rounded-xl dark:bg-slate-800 shadow-xl border border-gray-400 px-1 py-2"
          />
        </div>
      </div>
      {/* Table */}
      <div className="mt-5 w-full h-auto p-2">
        <table className="w-full h-full text-center">
          <thead className="border-b font-bold">
            <tr>
              <th></th>
              <th className="">#</th>
              <th className="text-left">Coin</th>
              <th></th>
              <th>Price</th>
              <th>24h</th>
              <th className="hidden md:table-cell">24h volume</th>
              <th className="hidden sm:table-cell">Mkt</th>
              <th>Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {coins
              .filter((value) => {
                if (searchInput === "") {
                  return value;
                } else if (
                  value.name
                    .toLowerCase()
                    .includes(searchInput.toLocaleLowerCase())
                ) {
                  return value;
                }
              })

              .map((coin) => (
                <CoinRow key={coin.id} coin={coin} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinSearch;
