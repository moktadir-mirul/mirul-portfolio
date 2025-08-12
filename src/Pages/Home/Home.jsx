import React from "react";
import NavBar from "../../Component/NavBar/NavBar";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="overflow-hidden">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
