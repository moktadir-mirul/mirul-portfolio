import React, { useEffect, useState } from "react";
import mirulImg from "../../assets/mirul-image.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router";
import { FaXTwitter } from "react-icons/fa6";
import TextTransition, { presets } from "react-text-transition";

const Words = ["Mern-Stack", "Full-Stack", "Front-End"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => index + 1);
    }, 2000);
    return () => clearTimeout(interval);
  }, []);
  return (
    <div className="w-full dark:bg-gray-700">
      <div className="w-11/12 mx-auto py-5 px-2 md:px-0 flex flex-col md:flex-row gap-5 md:gap-0 justify-start items-start md:justify-center md:items-center text-black dark:text-gray-200">
        <div className="flex-1 space-y-7">
          <p className="text-xl">Hi ! I'm</p>
          <h1 className="text-3xl font-semibold play">
            <span className="text-orange-500">Mirul</span> Moktadir Khan.
          </h1>
          <div className="text-5xl font-bold play flex flex-col lg:flex-row gap-2">
            <span className="text-orange-500">
              <TextTransition springConfig={presets.wobbly}>
                {Words[index % Words.length]}
              </TextTransition>
            </span>
            <h1>Developer</h1>
          </div>
          <div className="flex gap-3">
            <Link
              to={"https://www.linkedin.com/in/mirulmoktadirkhan/"}
              target="_blank"
              className="hover:scale-105 transition duration-100"
            >
              <div className="w-16 h-16 rounded-full border-2 border-[#0a66c2] dark:border-blue-500 flex items-center justify-center">
                <FaLinkedinIn className="text-[#0a66c2] dark:text-blue-500" size={40} />
              </div>
            </Link>
            <Link
              to={"https://github.com/moktadir-mirul"}
              target="_blank"
              className="hover:scale-105 transition duration-100"
            >
              <div className="w-16 h-16 rounded-full border-2 border-gray-800 dark:border-gray-200 flex items-center justify-center">
                <FiGithub
                  className="text-gray-800 dark:text-gray-200"
                  size={40}
                />
              </div>
            </Link>
            <Link
              to={"https://x.com/MirulMoktadir"}
              target="_blank"
              className="hover:scale-105 transition duration-100"
            >
              <div className="w-16 h-16 rounded-full border-2 border-gray-800 dark:border-gray-200 flex items-center justify-center">
                <FaXTwitter
                  className="text-gray-800 dark:text-gray-200"
                  size={40}
                />
              </div>
            </Link>
          </div>
          <div>
            <button className="px-10 py-4 text-xl rounded-lg text-white font-bold bg-orange-500 hover:bg-orange-700 duration-200 cursor-pointer">
              Resume
            </button>
          </div>
        </div>
        <div className="flex-1 h-[450px] xl:h-auto flex justify-center items-center border-l-12 border-t-12 rounded-l-4xl rounded-t-4xl bg-orange-50 dark:bg-gray-700 border-orange-500 shadow-2xl dark:shadow-md shadow-orange-500 p-5">
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
