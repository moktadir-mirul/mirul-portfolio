import React from 'react';
import LogoImage from "../../assets/mirul-logoC.png"
import { FaFileDownload } from 'react-icons/fa';
const MyNav = () => {
    return (
        <div>
           {/* For Smaller Device */}
        <div className='lg:hidden w-11/12 mx-auto'>
            {/* Logo */}
            <div className='flex gap-1 items-center'>
                <div>
                    <img className='' src={LogoImage} alt="Mirul Logo" />
                </div>
                <h1 >Mirul</h1>
            </div>
        </div>

        {/* For Large Device */}
        <div className='hidden lg:flex justify-between items-center w-11/12 mx-auto py-5 text-gray-50'>
            {/* Logo */}
            <div className='flex gap-1 items-center'>
                <div className='py-1'>
                    <img className='w-12 h-12' src={LogoImage} alt="Mirul Logo" />
                </div>
                <h1 className='font-bold merri text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-lime-200'>Mirul</h1>
            </div>

            {/* Nav Links */}
            <div className='flex gap-5 items-center'>
                <div><a href="">Home</a></div>
                <div><a href="#about">About Me</a></div>
                <div><a href="#skills">Skills</a></div>
                <div><a href="#projects">Projects</a></div>
                <div><a href="#contact">Contact Me</a></div>
            </div>

            {/* Resume Doanload */}
            <div>
                <button className='flex gap-2 font-bold items-center py-2 px-10 rounded-full bg-red-600'>
                    <FaFileDownload size={20}></FaFileDownload> 
                    Resume</button>
            </div>
        </div>
        </div>
    );
};

export default MyNav;