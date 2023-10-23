import SavedCoins from "../components/SavedCoins";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logOut();
    navigate("/");
  }
  return (
    <>
      <div className="w-full max-w-[1200px] shadow-xl rounded-2xl dark:bg-slate-800 dark:text-gray-300 px-2 py-5 h-auto mx-auto mt-5 flex flex-col mb-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-between">
            <h1 className="font-bold text-2xl">Account</h1>
            <p className="">Welcome, {user?.email}</p>
          </div>
          <div>
            <button
              className="border px-3 rounded-xl py-2"
              onClick={handleLogout}
            >
              Sign Out
            </button>
          </div>
        </div>
        <div></div>
      </div>

      <SavedCoins />
    </>
  );
};

export default Account;
