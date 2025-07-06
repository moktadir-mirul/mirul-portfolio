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
import RoyalImg1 from "../../assets/royal-2.png";
import RoyalImg2 from "../../assets/royal-3.png";
import RoyalImg3 from "../../assets/royal-5.png";
import RoyalImg4 from "../../assets/royal-6.png";

const Royal = () => {
  const images = [RoyalImg1, RoyalImg2, RoyalImg3, RoyalImg4];
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
        <div className="p-2 flex flex-col md:flex-row">
          {/* Slideshow Section */}
          <div className="md:w-1/2 w-full">
            <Slider {...sliderSettings}>
              {images.map((src, i) => (
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
            <h1 className="text-3xl font-bold text-orange-500">
              Royal Bites Restaurant
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
              This is a simple client-side Restaurant Management website that
              allows users to add, edit, and manage food items with details like
              name, image, quantity, and price. Users can view food details,
              order items added by others—automatically reducing the available
              quantity—and cancel orders anytime. A gallery page showcases a
              collection of food images, which can be enlarged on click for a
              better view.
            </p>

            {/* Main features */}
            <div>
                <h2 className="font-semibold mb-1">Main Features</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>
                Users can add or edit food items with details like name,
                quantity, and image.
              </li>
              <li>
                A dedicated section displays top-selling foods dynamically.
              </li>
              <li>
                A search bar helps users quickly find specific food items.
              </li>
              <li>
                JWT is implemented using Firebase tokens for secure route
                protection.
              </li>
              <li>Users can order and cancel foods with real-time updates.</li>
              <li>
                An image gallery showcases foods as a responsive slideshow.
              </li>
            </ul>
            </div>

            {/* Links */}
            <div className="space-y-1 text-sm">
              <p>
                <span className="font-semibold">Live Site: </span>
                <a
                  href="https://royal-bites-restaurant.web.app/"
                  className="text-orange-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://royal-bites-restaurant.web.app/
                </a>
              </p>
              <p>
                <span className="font-semibold">GitHub (Client): </span>
                <a
                  href="https://github.com/moktadir-mirul/royal-bites-client"
                  className="text-orange-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/moktadir-mirul/royal-bites-client
                </a>
              </p>
            </div>

            {/* Challenges */}
            <div>
              <h2 className="font-semibold mb-1">Challenges</h2>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Real-time quantity handling during order/cancel.</li>
                <li>JWT setup with Firebase Auth.</li>
                <li>Image slider integration with responsiveness.</li>
              </ul>
            </div>

            {/* Improvements */}
            <div>
              <h2 className="font-semibold mb-1">Future Plans</h2>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Add admin dashboard with role-based access.</li>
                <li>Introduce backend API for better control.</li>
                <li>Add rating system and user analytics.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Royal;
