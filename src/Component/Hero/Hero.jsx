import React from "react";
import mirulImg from "../../assets/mirul-image.jpg";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="w-full dark:bg-gray-700">
      <div className="w-11/12 mx-auto py-10 px-2 md:px-0 flex flex-col md:flex-row justify-between items-center text-black dark:text-gray-200">
        <div className="flex-1 space-y-5">
          <p className="text-xl">Hi! I'm</p>
          <h1 className="text-4xl font-semibold play"><span className="text-orange-500">Mirul</span> Moktadir Khan.</h1>
          <h1 className="text-6xl font-bold play">
            <span className="text-orange-500">
              <Typewriter
                words={["Mern-Stack", "Full-Stack", "Front-End"]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>{" "}
            Developer
          </h1>
          <p>About me</p>
        </div>
        <div className="flex-1 h-[450px] xl:h-auto flex justify-center items-center border-l-12 border-t-12 rounded-l-4xl rounded-t-4xl bg-orange-50 dark:bg-gray-700 border-orange-500 shadow-2xl dark:shadow-md shadow-orange-500 p-5">
          <img
            className="w-10/12 h-11/12 rounded-sm"
            src={mirulImg}
            alt="Mirul's Photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
