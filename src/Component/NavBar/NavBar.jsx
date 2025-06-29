import React from "react";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router";
import DarkToggle from "../DarkToggle/DarkToggle";
import mirulLogo from "../../../public/mirul-logo.png"

const NavBar = () => {
  const myLinks = (
    <div className="flex gap-5">
      <NavLink>Home</NavLink>
      <NavLink>About Me</NavLink>
      <NavLink>Projects</NavLink>
      <NavLink>Contact Me</NavLink>
    </div>
  );
  return (
    <div className="sticky top-0 z-50 bg-base-100 dark:bg-gray-700">
      <div className="navbar h-12 shadow-sm px-5 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FiMenu></FiMenu>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {myLinks}
            </ul>
          </div>
          <div>
            <img className="w-16 h-16" src={mirulLogo} alt="Mirul Moktadir" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{myLinks}</ul>
        </div>

        <div className="navbar-end flex gap-3">
          <div>
            <DarkToggle></DarkToggle>
          </div>
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
