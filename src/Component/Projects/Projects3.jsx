import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CC1 from "../../assets/cc-1.jpeg";
import CC2 from "../../assets/cc-2.jpeg";
import CC3 from "../../assets/cc-3.png";
import Slider from "react-slick";
import { Link } from "react-router";

const Projects3 = () => {
  const cImages = [CC1, CC2, CC3];
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
    <div className="bg-white dark:bg-gray-700 border border-orange-500 rounded-xl shadow-md p-4 md:flex gap-4 md:items-center transition-all">
      {/* Image Section */}
      <div className="rounded-md h-48 md:h-auto md:w-1/2 w-full">
        <Slider {...settings}>
          {cImages.map((src, index) => (
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
        <h2 className="text-3xl font-bold mb-2 text-amber-700 dark:text-amber-400 play">
          Career Compass
        </h2>
        <p className="text-sm leading-relaxed">
          An online job portal where users can explore job listings, view
          details, and apply directly. Some routes are protected and require
          Firebase authentication via email/password or Google login.
        </p>

        {/* Features */}
        <ul className="mt-4 space-y-1 text-sm">
          <li>→ Interactive Job Browsing & Application</li>
          <li>→ Secure Authentication & Profile Management</li>
          <li>→ Polished User Experience</li>
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4 text-xs">
          <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded dark:bg-blue-600 dark:text-white">
            React
          </span>
          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded dark:bg-yellow-600 dark:text-white">
            Firebase
          </span>
          <span className="px-2 py-1 bg-cyan-100 text-cyan-700 rounded dark:bg-cyan-700 dark:text-white">
            Tailwind CSS
          </span>
          <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded dark:bg-pink-700 dark:text-white">
            Framer Motion
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-wrap gap-2">
          <Link to={"https://career-compassjobs.netlify.app/"} target="_blank">
            <button className="px-4 py-1 rounded bg-orange-500 text-white hover:bg-orange-700 transition cursor-pointer">
              Live
            </button>
          </Link>
          <Link
            to={"https://github.com/moktadir-mirul/career-compass"}
            target="_blank"
          >
            <button className="px-4 py-1 rounded border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition cursor-pointer">
              GitHub
            </button>
          </Link>
          <Link to={"/career-compass"}>
            <button className="px-4 py-1 rounded border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition cursor-pointer">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects3;
