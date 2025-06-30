import { createBrowserRouter } from "react-router";
import App from "../App";
import Royal from "../Pages/Royal/Royal";
import Plant from "../Pages/Plant/Plant";
import CareerCom from "../Pages/CareerCom/CareerCOm";
import Home from "../Pages/Home/Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      { index: true, Component: App },
      {
        path: "/royal-bites",
        Component: Royal,
      },
      {
        path: "/plant-companion",
        Component: Plant,
      },
      {
        path: "/career-compass",
        Component: CareerCom,
      },
    ],
  },
]);
