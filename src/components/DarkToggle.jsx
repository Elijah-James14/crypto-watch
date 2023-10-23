import { useEffect, useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

const DarkToggle = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div>
      {darkMode ? (
        <div
          className="flex cursor-pointer items-center "
          onClick={() => setDarkMode(false)}
        >
          <HiSun className="text-2xl mr-2" /> Light Mode
        </div>
      ) : (
        <div
          className="flex cursor-pointer items-center"
          onClick={() => setDarkMode(true)}
        >
          <HiMoon className="text-2xl mr-2" /> Dark Mode
        </div>
      )}
    </div>
  );
};

export default DarkToggle;
