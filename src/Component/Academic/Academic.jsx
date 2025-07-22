import React from "react";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

const Academic = () => {
  return (
    <div data-aos="fade-up-left" className="w-full overflow-auto dark:bg-gray-900">
      <div className="pt-10 pb-5 w-11/12 mx-auto text-gray-800 dark:text-gray-200">
        <h1 className="md:border-l-4 pl-4 border-orange-500 text-center md:text-left text-6xl font-bold play text-orange-500">
          Academic Background
        </h1>
        <div className="max-w-xl pt-10 mx-auto lg:mx-0 text-gray-800 dark:text-gray-100">

          {/* MBA */}
          <div className="relative bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400">
              MBA – Finance & Banking
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Bangladesh Open University &bull; CGPA: <strong>3.98</strong>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Passing Year: 2019
            </p>
          </div>

          {/* Divide*/}
          <div className="flex justify-center my-4">
            <FaArrowUpLong className="text-orange-500 dark:text-orange-300 text-xl animate-bounce" />
          </div>

          {/* BSc */}
          <div className="relative bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              BSc in Electrical & Electronic Engineering (EEE)
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              IUBAT – Power Concentration &bull; CGPA: <strong>3.79</strong>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Passing Year: 2016
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;
