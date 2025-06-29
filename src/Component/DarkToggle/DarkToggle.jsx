import React, { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../ThemeProvider/ThemeContext";

const DarkToggle = () => {

    const [checked, setChecked] = useState(false);
    const {darkMode , setDarkMode} = useContext(ThemeContext);
    
      const toggle = () => {
        setChecked(!checked);
        setDarkMode(!darkMode);
      };

  return (
    <div>
      <div
        onClick={toggle}
        className={`relative w-12 h-6 flex items-center cursor-pointer rounded-full transition-colors duration-300 ${
          checked ? "bg-gray-700" : "bg-gray-300"
        }`}
      >
        {/* Toggle knob */}
        <div
          className={`flex justify-center items-center absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            checked ? "translate-x-6" : ""
          }`}
        >
          {/* Icon inside the knob */}
          {checked ? (
            <FaMoon className="text-gray-100 mx-auto my-auto" size={14} />
          ) : (
            <FaSun className="text-yellow-500 mx-auto my-auto" size={14} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DarkToggle;
