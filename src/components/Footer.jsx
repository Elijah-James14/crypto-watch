import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaGithub, FaTiktok } from "react-icons/fa";
import DarkToggle from "./DarkToggle";
const Footer = () => {
  return (
    <div className="dark:bg-slate-800 dark:text-gray-300 w-full max-w-[1200px] shadow-xl mx-auto mt-5 rounded-xl h-auto pt-20 px-10">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex justify-evenly w-full md:max-w-[300px]">
          <div className="mr-8">
            <h1 className="font-bold">SUPPORT</h1>
            <ul>
              <li>HELP CENTER</li>
              <li>CONTACT US</li>
              <li>API STATUS</li>
              <li>DOCUMENTATION</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold">INFO</h1>
            <ul>
              <li>ABOUT US</li>
              <li>CAREERS</li>
              <li>INVEST</li>
              <li>LEGAL</li>
            </ul>
          </div>
        </div>
        <div className="md:text-right text-center items-center justify-center flex flex-col md:items-end mt-5 md:mt-0">
          <DarkToggle />
          <div className="w-full">
            <p className="py-2">Sign Up for crypto news</p>
            <form className="flex flex-col md:flex-row mt-2">
              <input
                type="email"
                className="dark:bg-slate-800 shadow-xl rounded-2xl border py-2"
              />
              <button className="w-full bg-cyan-500 shadow-xl rounded-2xl text-gray-600 ml-0 md:ml-2 px-2 py-2 mt-4 md:mt-0">
                Sign Up
              </button>
            </form>
          </div>
          <div className="flex justify-between py-6 w-full">
            <AiOutlineInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaGithub />
            <FaTiktok />
          </div>
        </div>
      </div>

      <p className="text-center py-5 ">Powered by Coin Gecko</p>
    </div>
  );
};

export default Footer;
