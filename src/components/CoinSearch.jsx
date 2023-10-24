import { useState } from "react";
import CoinRow from "./CoinRow";

/* eslint-disable react/prop-types */
const CoinSearch = ({ coins, loading }) => {
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
            {loading ? (
              <div>
                <h1 className="font-bold text-3xl text-left">
                  Fetching all coins...
                </h1>

                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              ""
            )}
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
