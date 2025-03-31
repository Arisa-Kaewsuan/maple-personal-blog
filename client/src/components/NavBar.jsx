import React from 'react'
import { Bars3Icon } from '@heroicons/react/16/solid'

const NavBar = () => {
  return (
    <>
      <header className='w-full h-12 md:h-20 flex justify-between items-center px-6 md:px-[7.5rem] py-3 md:py-[1.125rem] border-b-2 border-b-brown-300'>
            {/* logo Section */}
            <div className='w-6 md:w-11 h-6 md:h-11 flex items-center justify-center'>
                <img src="/logo.png" alt="logo-hh." className='w-[1.4375rem] md:w-[2.625rem] h-3 md:h-[1.375rem]'/>
            </div>

            {/* Menu Section */}
            <div>
                {/* On Mobile */}
                <div className='w-6 h-6 flex items-center justify-center md:hidden'>
                    <Bars3Icon className='text-brown-400 w-[1.125rem] h-3'/>
                </div>

                {/* On Desktop */}
                <div className='hidden md:flex text-b1 font-medium'>
                    <div className='px-10 py-3 rounded-full border-2 border-brown-400'>Log in</div>
                    <div className='px-10 py-3 ml-2 rounded-full bg-brown-600 text-white'>Sign up</div>
                </div>
            </div>
      </header>
    </>
  )
}

export default NavBar
