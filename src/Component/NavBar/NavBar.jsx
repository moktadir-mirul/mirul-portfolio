import React from "react";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink } from "react-router";
import DarkToggle from "../DarkToggle/DarkToggle";
import mirulLogo from "../../assets/mirul-logo.png";
import { FaFileDownload } from "react-icons/fa";

const NavBar = () => {
  const myLinks = (
    <div className="flex gap-5 merri font-bold">
      <Link>Home</Link>
      <a href="#about">About Me</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact Me</a>
    </div>
  );
  return (
    <div className="sticky top-0 z-50 bg-base-100 dark:bg-gray-800">
      <div className="navbar h-12 shadow-sm px-5 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FiMenu></FiMenu>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow dark:text-gray-100"
            >
              {myLinks}
            </ul>
          </div>
          <div>
            <img className="w-16 h-16" src={mirulLogo} alt="Mirul Moktadir" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 dark:text-gray-100">
            {myLinks}
          </ul>
        </div>

        <div className="navbar-end flex gap-3">
          <div>
            <DarkToggle></DarkToggle>
          </div>
          <div>
            <a href="/Mirul's Resume.pdf" download>
              <button className="px-7 py-2 rounded-lg text-white font-bold bg-orange-500 hover:bg-orange-700 duration-200 cursor-pointer flex items-center gap-2">
                <FaFileDownload /> Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
