/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { UserAuth } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { db } from "../firebase";

import "react-toastify/dist/ReactToastify.css";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
const CoinRow = ({ coin }) => {
  const { user } = UserAuth();
  const [coinSaved, setCoinSaved] = useState(false);
  const coinsOnWatchPath = doc(db, "users", `${user?.email}`);
  async function handleSave() {
    if (!user?.email) return alert("Sign in first before saving any coin");
    else {
      setCoinSaved(true);
      await updateDoc(coinsOnWatchPath, {
        coinsOnWatch: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol,
        }),
      });
      toast.success("Successfully added to your list", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
  return (
    <>
      <ToastContainer />
      <tr className="border-b h-[80px] w-full overflow-hidden">
        <td className="cursor-pointer">
          {coinSaved ? (
            <AiFillStar color="yellow" />
          ) : (
            <AiOutlineStar onClick={handleSave} />
          )}
        </td>
        <td>{coin?.market_cap_rank}</td>
        <td>
          <Link to={`/coin/${coin?.id}`}>
            <div className="flex items-center">
              <img
                src={coin?.image}
                alt={coin?.name}
                className="w-6 rounded-full mr-2"
              />
              <p className="hidden sm:table-cell">{coin?.name}</p>
            </div>
          </Link>
        </td>
        <td>{coin?.symbol.toUpperCase()}</td>
        <td>${coin?.current_price.toLocaleString()}</td>
        <td
          className={
            coin?.price_change_percentage_24h > 0
              ? "text-green-600"
              : "text-red-600"
          }
        >
          {coin?.price_change_percentage_24h.toFixed(2)}%
        </td>
        <td className="hidden md:table-cell w-[180px]">
          {coin?.total_volume.toLocaleString()}
        </td>
        <td className="hidden sm:table-cell w-[180px]">
          ${coin?.market_cap.toLocaleString()}
        </td>
        <td>
          <Sparklines data={coin?.sparkline_in_7d.price}>
            <SparklinesLine color="yellow" />
          </Sparklines>
        </td>
      </tr>
    </>
  );
};

export default CoinRow;
