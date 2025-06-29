import React from "react";
import mirulImg from "../../assets/mirul-image.jpg";
import { Typewriter } from "react-simple-typewriter";
import { CiFacebook } from "react-icons/ci";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="w-full dark:bg-gray-700">
      <div className="w-11/12 mx-auto py-5 px-2 md:px-0 flex flex-col md:flex-row justify-between items-center text-black dark:text-gray-200">
        <div className="flex-2/3 space-y-5">
          <p className="text-xl">Hi ! I'm</p>
          <h1 className="text-4xl font-semibold play">
            <span className="text-orange-500">Mirul</span> Moktadir Khan.
          </h1>
          <h1 className="text-6xl font-bold play">
            <span className="text-orange-500">
              <Typewriter
                words={["Mern-Stack", "Full-Stack", "Front-End"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>{" "}
            Developer
          </h1>
          <div className="flex gap-3">
            <Link to={"https://www.linkedin.com/in/mirulmoktadirkhan/"} target="_blank" className="hover:scale-105 transition duration-200">
              <div className="w-16 h-16 rounded-full border-2 border-[#0a66c2] flex items-center justify-center">
                <FaLinkedinIn className="text-[#0a66c2]" size={40} />
              </div>
            </Link>
            <Link to={"https://github.com/moktadir-mirul"} target="_blank" className="hover:scale-105 transition duration-200">
              <div className="w-16 h-16 rounded-full border-2 border-gray-800 dark:border-gray-200 flex items-center justify-center">
                <FiGithub
                  className="text-gray-800 dark:text-gray-200"
                  size={40}
                />
              </div>
            </Link>
            <Link to={"https://github.com/moktadir-mirul"} target="_blank" className="hover:scale-105 transition duration-200">
              <div className="w-16 h-16 rounded-full border-2 border-gray-800 dark:border-gray-200 flex items-center justify-center">
                <SiNotion
                  className="text-gray-800 dark:text-gray-200"
                  size={40}
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex-1/3 h-[450px] xl:h-auto flex justify-center items-center border-l-12 border-t-12 rounded-l-4xl rounded-t-4xl bg-orange-50 dark:bg-gray-700 border-orange-500 shadow-2xl dark:shadow-md shadow-orange-500 p-5">
          <img
            className="w-[90%] h-[95%] rounded-sm"
            src={mirulImg}
            alt="Mirul's Photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
