import React from "react";
import {
  SiReact,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiReactrouter,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <SiReact />,
    color: "bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-300",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    color: "bg-lime-100 text-lime-700 dark:bg-lime-900 dark:text-lime-300",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300",
  },
  {
    name: "HTML",
    icon: <SiHtml5 />,
    color:
      "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
  },
  {
    name: "CSS",
    icon: <SiCss3 />,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
  },
  {
    name: "React Router",
    icon: <SiReactrouter />,
    color: "bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300",
  },
];

const Skills = () => {
  return (
    <div className="w-full dark:bg-gray-700">
      <div className="pt-10 pb-5 w-11/12 mx-auto text-gray-800 dark:text-gray-200">
        <h1 className="md:border-l-4 pl-4 border-orange-500 text-center md:text-left text-6xl font-bold play text-orange-500">
          Skills
        </h1>
        <div className="pt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              title={skill.name}
              className={`flex items-center gap-2 px-4 py-2 rounded-sm font-medium text-sm shadow-sm ${skill.color} hover:scale-105 hover:ring-2 ring-offset-1 transition duration-200`}
            >
              {skill.icon}
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
