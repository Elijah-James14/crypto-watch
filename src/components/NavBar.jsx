import { useState } from "react";
import { Link } from "react-router-dom";
import DarkToggle from "./DarkToggle";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { user, logOut } = UserAuth();

  function handleLogout() {
    logOut();
  }
  return (
    <div className="w-full max-w-[1200px] h-20 mx-auto shadow-xl rounded-lg p-2 dark:bg-slate-800 dark:text-gray-300">
      <div className="flex  justify-between items-center w-full h-full">
        <Link to={"/"}>
          <h1 className="font-bold text-2xl cursor-pointer">Coin Hive</h1>
        </Link>

        <div className="hidden md:block">
          <DarkToggle />
        </div>
        <div className=" items-center justify-between hidden md:flex">
          {user ? (
            <>
              <Link
                to="/account"
                className="mr-2 font-bold text-cyan-200 hover:text-cyan-700"
              >
                Account
              </Link>
              <button onClick={handleLogout} className="font-bold">
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/signin">
                <button className="mr-2 font-bold px-4 py-2 hover:text-cyan-600">
                  Sign In
                </button>
              </Link>
              <Link to="/signup">
                <button className="shadow-xl font-bold px-4 py-2 rounded-xl bg-cyan-500">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Icon */}

        <div className="md:hidden block">
          {nav ? (
            <AiOutlineClose
              size={30}
              className="cursor-pointer font-bold"
              onClick={() => setNav(false)}
            />
          ) : (
            <AiOutlineMenu
              size={30}
              className="cursor-pointer font-bold"
              onClick={() => setNav(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={
          nav
            ? `fixed md:hidden top-20 left-0 flex flex-col w-full h-[90%] items-center justify-between z-10 dark:bg-slate-800 bg-white p-5 ease-in duration-300 rounded-r-2xl`
            : `fixed md:hidden top-20 left-[-100%] flex flex-col w-full h-[90%] items-center justify-between z-10 bg-white p-4 ease-in duration-300`
        }
      >
        <ul className="w-full flex flex-col justify-between font-bold">
          <Link to="/">
            <li
              onClick={() => setNav(!nav)}
              className="py-6 border-b cursor-pointer"
            >
              Home
            </li>
          </Link>
          <Link to="/account">
            <li
              className="py-6 border-b cursor-pointer"
              onClick={() => setNav(!nav)}
            >
              Account
            </li>
          </Link>

          <li className="py-6 border-b cursor-pointer">
            <DarkToggle />
          </li>
        </ul>

        {user ? (
          ""
        ) : (
          <div className="flex flex-col w-full justify-center items-center">
            <Link to="/signin">
              <button
                onClick={() => setNav(!nav)}
                className="border border-black rounded-lg font-bold px-3 py-2"
              >
                Sign In
              </button>
            </Link>

            <Link to="/signup">
              <button
                onClick={() => setNav(!nav)}
                className="shadow-xl font-bold rounded-xl px-3 py-2 bg-cyan-600 mt-2"
              >
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
