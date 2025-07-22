import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiFramer,
  SiNodedotjs,
} from "react-icons/si";
import CC1 from "../../assets/cc-1.jpeg";
import CC2 from "../../assets/cc-2.jpeg";
import CC3 from "../../assets/cc-3.png";

const CareerCom = () => {
  const cImages = [CC1, CC2, CC3];
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-md border border-orange-500 overflow-hidden">
        <div className="p-5 flex flex-col md:flex-row">
          {/* Slideshow Section */}
          <div className="md:w-1/2 w-full">
            <Slider {...sliderSettings}>
              {cImages.map((src, i) => (
                <div key={i}>
                  <img
                    src={src}
                    alt={`Slide ${i + 1}`}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Details Section */}
          <div className="md:w-1/2 w-full p-6 space-y-6">
            {/* Title */}
            <h1 className="text-3xl font-bold text-amber-700 dark:text-amber-400">
              Plant Companion - Plant Care Tracker
            </h1>

            {/* Tech Stack as buttons */}
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-white rounded-full text-sm font-medium">
                <SiReact /> React
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-cyan-100 text-cyan-700 dark:bg-cyan-700 dark:text-white rounded-full text-sm font-medium">
                <SiTailwindcss /> Tailwind CSS
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-black rounded-full text-sm font-medium">
                <SiFirebase /> Firebase
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-pink-100 text-pink-700 dark:bg-pink-700 dark:text-white rounded-full text-sm font-medium">
                <SiFramer /> Framer Motion
              </span>
            </div>

            {/* Description */}
            <p className="text-sm">
              A simple online job portal where users can browse job listings
              from various companies and apply directly. User authentication is
              handled with Firebase, supporting email/password and Google login,
              along with features like password reset, name and photo updates,
              and protected routes. Users can also view and manage their profile
              through a dedicated profile page.
            </p>

            {/* Main features */}
            <div>
              <h2 className="font-semibold mb-1">Main Features</h2>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>
                  View job listings and apply directly via modal-based job
                  details.
                </li>
                <li>
                  Firebase authentication with email/password and Google login
                  options.
                </li>
                <li>
                  Supports name and photo registration with editable user
                  profiles.
                </li>
                <li>
                  Several packages used with proper fallback implementations.
                </li>
                <li>
                  Basic animations implemented using Framer Motion library.
                </li>
                <li>
                  Fully responsive design for all screen sizes and devices.
                </li>
              </ul>
            </div>

            {/* Links */}
            <div className="space-y-1 text-sm">
              <p>
                <span className="font-semibold">Live Site: </span>
                <a
                  href="https://career-compassjobs.netlify.app/"
                  className="text-amber-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://career-compassjobs.netlify.app/
                </a>
              </p>
              <p>
                <span className="font-semibold">GitHub (Client): </span>
                <a
                  href="https://github.com/moktadir-mirul/career-compass"
                  className="text-amber-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/moktadir-mirul/career-compass
                </a>
              </p>
            </div>

            {/* Challenges */}
            <div>
              <h2 className="font-semibold mb-1">Challenges</h2>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>
                  Managing user authentication state across protected routes
                  using Firebase JWT.
                </li>
                <li>
                  Handling modal behavior and data passing for dynamic job
                  detail views.
                </li>
                <li>
                  Ensuring smooth responsiveness and fallback handling across
                  devices and packages.
                </li>
              </ul>
            </div>

            {/* Improvements */}
            <div>
              <h2 className="font-semibold mb-1">Future Plans</h2>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>
                  Implement role-based access for recruiters and job seekers
                  with custom dashboards.
                </li>
                <li>
                  Add filtering and search functionality for job listings by
                  category, company, or location.
                </li>
                <li>
                  Enable application tracking and status updates within user
                  profiles.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCom;
