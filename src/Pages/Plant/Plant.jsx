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
import PlantI1 from "../../assets/pt-1.jpeg";
import PlantI2 from "../../assets/pt-2.jpg";
import PlantI3 from "../../assets/pt-3.jpg";

const Plant = () => {
  const plantImages = [PlantI1, PlantI2, PlantI3];
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
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-md border border-orange-500 overflow-hidden">
        <div className="p-5 flex flex-col md:flex-row">
          {/* Slideshow Section */}
          <div className="md:w-1/2 w-full">
            <Slider {...sliderSettings}>
              {plantImages.map((src, i) => (
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
            <h1 className="text-3xl font-bold text-green-700 dark:text-green-400">
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
              <span className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 dark:bg-green-700 dark:text-white rounded-full text-sm font-medium">
                <SiNodedotjs /> Node.js
              </span>
            </div>

            {/* Description */}
            <p className="text-sm">
              This is a full-stack Online Plant Care Tracker that allows users
              to add, edit, and delete plant entries with details like health
              status, watering schedule, and more. Users can view plant details,
              and access to certain routes is restricted to authenticated users.
              Firebase handles authentication via email/password or Google
              login, including features like profile photo upload and password
              reset. The backend is built with Node.js, Express.js, and MongoDB,
              ensuring secure and efficient data handling.
            </p>

            {/* Main features */}
            <div>
              <h2 className="font-semibold mb-1">Main Features</h2>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Users can add, delete, and edit plant details anytime.</li>
                <li>
                  A dedicated page displays only the logged-in user's plants.
                </li>
                <li>Plants can be sorted based on their next watering date.</li>
                <li>
                  Firebase email authentication is implemented for secure login
                  and registration.
                </li>
                <li>
                  Several third-party packages are used with proper fallback
                  handling.
                </li>
                <li>
                  Basic animations are added using the Framer Motion library.
                </li>
                <li>
                  The website is fully responsive and works across all devices.
                </li>
              </ul>
            </div>

            {/* Links */}
            <div className="space-y-1 text-sm">
              <p>
                <span className="font-semibold">Live Site: </span>
                <a
                  href="https://plant-companion-tracker.web.app/"
                  className="text-green-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://plant-companion-tracker.web.app/
                </a>
              </p>
              <p>
                <span className="font-semibold">GitHub (Client): </span>
                <a
                  href="https://github.com/moktadir-mirul/plant-companion-client"
                  className="text-green-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/moktadir-mirul/plant-companion-client
                </a>
              </p>
            </div>

            {/* Challenges */}
            <div>
              <h2 className="font-semibold mb-1">Challenges</h2>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>
                  Managing and sorting plants accurately based on next watering
                  date logic.
                </li>
                <li>
                  Implementing protected routes with Firebase JWT across both
                  client and server.
                </li>
                <li>
                  Ensuring proper fallback behavior and error handling across
                  dynamic form actions.
                </li>
              </ul>
            </div>

            {/* Improvements */}
            <div>
              <h2 className="font-semibold mb-1">Future Plans</h2>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>
                  Add calendar view to visualize plant watering schedules.
                </li>
                <li>
                  Enable push/email notifications for upcoming watering days.
                </li>
                <li>
                  Implement role-based access and admin control for better data
                  management.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plant;
