import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const SavedCoins = () => {
  const [coins, setCoins] = useState([]);
  const { user } = UserAuth();
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setCoins(doc.data()?.coinsOnWatch);
    });
  }, [user?.email]);

  const coinsOnWatchPath = doc(db, "users", `${user?.email}`);

  async function handleDelete(id) {
    try {
      const result = coins.filter((coin) => coin.id !== id);
      await updateDoc(coinsOnWatchPath, {
        coinsOnWatch: result,
      });
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <div className="w-full max-w-[1200px] px-2 py-5 my-10 shadow-xl rounded-2xl mx-auto dark:bg-slate-800 dark:text-gray-300">
      <h1 className="font-bold text-xl">Watch List</h1>
      <div className="w-full flex items-center justify-center">
        {coins?.length === 0 ? (
          <p className="">
            You don&apos;t have any coins saved. Please save a coin to add it to
            your watch list.{" "}
            <Link to="/" className="text-cyan-600 hover:text-cyan-800">
              Click here to search coins
            </Link>
          </p>
        ) : (
          <table className="w-full border-collapse text-center">
            <thead className="border-b">
              <th className="px-4">Rank #</th>
              <th className="text-left">Coin</th>
              <th className="text-left">Remove</th>
            </thead>
            <tbody>
              {coins?.map((coin) => (
                <tr key={coin?.name} className="overflow-hidden h-[60px]">
                  <td>{coin?.rank}</td>
                  <td>
                    <div className="flex flex-row justify-normal items-center">
                      <div>
                        <img
                          src={coin?.image}
                          alt={coin?.name}
                          className="w-8 rounded-full mr-4"
                        />
                      </div>

                      <div className="flex flex-col justify-normal text-left">
                        <Link to={`/coin/${coin?.id}`}>
                          <p>{coin?.name}</p>
                          <p className="font-thin">
                            {coin?.symbol.toUpperCase()}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="pl-8">
                    <AiOutlineClose
                      className="cursor-pointer hover:text-cyan-600"
                      onClick={() => handleDelete(coin?.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SavedCoins;
