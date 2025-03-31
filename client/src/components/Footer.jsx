import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <div className='mt-[3.25rem] md:mt-[7.9375rem] bg-brown-200 w-full h-[9.5rem] md:h-36 flex flex-col md:flex-row justify-center md:justify-between md:px-[7.5rem] items-center'>
        <div className='flex'>
            <p className='text-b1 text-brown-500 font-medium'>Get in touch</p>
            <FaLinkedin className='ml-4 w-6 h-6  text-brown-500'/>
            <FaGithub className='ml-4 w-6 h-6 text-brown-500'/>
            <AiFillGoogleCircle className='ml-4 w-6 h-6 text-brown-500'/>
        </div>

        <a href="#" className=' mt-6 md:mt-0 text-b1 text-brown-600 font-medium underline'>Home page</a>
      </div>
    </>
  )
}

