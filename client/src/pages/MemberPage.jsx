import React from 'react'
import { Bars3Icon } from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'
import { GoBell } from "react-icons/go";
import { RiUserLine } from "react-icons/ri";
import { SlReload } from "react-icons/sl";
import { TbLogout2 } from "react-icons/tb";
import HeroSection from '@/components/HeroSection'
import { Footer } from '@/components/Footer';
import ArticleSection from '@/components/ArticleSection';
import { IoIosArrowDown } from "react-icons/io";

const MemberPage = () => {
  return (
    <>
       <header className='w-full h-12 md:h-20 flex justify-between items-center px-6 md:px-[7.5rem] py-3 md:py-[1.125rem] border-b-2 border-b-brown-300'>
            {/* logo Section */}
            <div className='w-6 md:w-11 h-6 md:h-11 flex items-center justify-center'>
              <Link to={"/"}><img src="/logo.png" alt="logo-hh." className='w-[1.4375rem] md:w-[2.625rem] h-3 md:h-[1.375rem]'/></Link>
            </div>

            {/* Menu Section */}
            <div>
                {/* On Mobile */}
                <div className='w-6 h-6 flex items-center justify-center md:hidden'>
                    <Bars3Icon className='text-brown-400 w-[1.125rem] h-3'/>
                </div>

                {/* On Desktop */}
                <div className='hidden md:flex'>
                  <div className='flex justify-center items-center bg-white border border-brown-200 w-12 h-12 rounded-full mr-4'>
                    <GoBell className='text-[1.5rem] text-brown-400' />
                  </div>

                  <div className='flex flex-row items-center justify-center'>
                    <img src="/profile.png" alt="profile image" className='bg-brown-400 w-12 h-12 rounded-full'/>
                    <p className='ml-4 text-brown-500 text-h4'> Moodeng ja </p>
                    <IoIosArrowDown className='ml-2 text-brown-400' />
                  </div>
                </div>
            </div>
      </header> 

      <section>
        {/* On Mobile */}
        <div className='md:hidden text-b1 font-medium bg-brown-100 p-6'>
          <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-row items-center'>
              <img src="/profile.png" alt="profile image" className='bg-brown-400 w-12 h-12 rounded-full'/>
              <p className='ml-4 text-brown-500 text-h4'> Moodeng ja </p>
            </div>

            <div className='bg-white border border-brown-200 rounded-full p-2'>
              <GoBell className='text-[1.5rem] text-brown-400' />
            </div>
          </div>

          <div className='flex flex-col px-4 py-3 my-4'>
            <div className='flex flex-row items-center'>
              <RiUserLine className='text-[1.3rem] text-brown-400'/>  
              <p className='ml-4 text-brown-500 text-lg'> Profile </p>
            </div>

            <div className='flex flex-row my-4 items-center'>
              <SlReload className='text-[1.3rem] text-brown-400' />
              <p className='ml-4 text-brown-500 text-lg'> Reset password </p>
            </div>

            <hr className='border-b-1 border-b-brown-300'/>

            <div className='flex flex-row mt-4 items-center'>
              <TbLogout2 className='text-[1.3rem] text-brown-400' />
              <p className='ml-4 text-brown-500 text-lg'> Logout </p>
            </div>
          </div>
        </div>
      </section>

      <HeroSection/>

      <ArticleSection/>

      <Footer/>
    </>
  )
}

export default MemberPage