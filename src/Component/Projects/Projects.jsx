import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RoyalImg1 from "../../assets/royal-2.png";
import RoyalImg2 from "../../assets/royal-3.png";
import RoyalImg3 from "../../assets/royal-5.png";
import RoyalImg4 from "../../assets/royal-6.png";
import Slider from "react-slick";
import { Link } from "react-router";
import Project2 from "./Project2";
import Projects3 from "./Projects3";

const Projects = () => {
  const RoyalImg = [RoyalImg1, RoyalImg2, RoyalImg3, RoyalImg4];
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
  return (
    <div className="w-full dark:bg-gray-900">
      <div className="w-11/12 pt-10 mx-auto">
        <h1 className="md:border-l-4 pl-4 border-orange-500 text-center md:text-left text-6xl font-bold play text-orange-500">
          Projects
        </h1>
        <div className="w-full pt-10">
          <div className="bg-white dark:bg-gray-900 border border-orange-500 rounded-xl shadow-md p-4 md:flex gap-4 md:items-center transition-all">
            {/* Image Section */}
            <div className="rounded-md h-48 md:h-auto md:w-1/2 w-full">
              <Slider {...settings}>
                {RoyalImg.map((src, index) => (
                  <div key={index}>
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="h-48 md:h-full w-full object-cover object-center rounded"
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Content Section */}
            <div className="flex-1 mt-4 md:mt-0 text-gray-800 dark:text-gray-100 space-y-5">
              <h2 className="text-3xl font-bold mb-2 play text-orange-500">
                Royal Bites Restaurant
              </h2>
              <p className="text-sm leading-relaxed">
                A client-side Restaurant Management website where users can add,
                edit, and order food items. Orders update quantity in real-time,
                and a gallery page lets users view and enlarge food images.
              </p>

              {/* Features */}
              <ul className="mt-4 space-y-1 text-sm">
                <li>→ Dynamic Food Management & Ordering</li>
                <li>→ Secure & Smooth User Experience</li>
                <li>→ Easy Search & Responsive Design</li>
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4 text-xs">
                <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded dark:bg-blue-600 dark:text-white">
                  React
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded dark:bg-gray-600 dark:text-white">
                  Express JS
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-600 rounded dark:bg-green-600 dark:text-white">
                  Mongo DB
                </span>
                <span className="px-2 py-1 bg-gray-900  rounded dark:bg-gray-600 text-white">
                  JWT
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  to={"https://royal-bites-restaurant.web.app/"}
                  target="_blank"
                >
                  <button className="px-4 py-1 rounded bg-orange-500 text-white hover:bg-orange-700 transition cursor-pointer">
                    Live
                  </button>
                </Link>
                <Link
                  to={"https://github.com/moktadir-mirul/royal-bites-client"}
                  target="_blank"
                >
                  <button className="px-4 py-1 rounded border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition cursor-pointer">
                    GitHub
                  </button>
                </Link>
                <Link to={"/royal-bites"}>
                  <button className="px-4 py-1 rounded border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition cursor-pointer">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="pt-10">
            <Project2></Project2>
          </div>
          <div className="pt-10">
            <Projects3></Projects3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
