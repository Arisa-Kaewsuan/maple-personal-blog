import NavBar from '@/components/NavBar'
import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const SignUpSuccess = () => {
  return (
    <>
        <NavBar />

        <div className='flex flex-col items-center justify-center h-96 bg-brown-200 rounded-md mt-10 mx-4 md:mx-80 '>
            <FaCircleCheck className='text-green text-4xl' />
            
            <h1 className='text-brown-600 text-h2 font-semibold mb-6'>Register Success</h1>

            <button className='bg-brown-600 text-white px-4 py-2 rounded-full'>
                <Link to="/">Continue</Link>
            </button>
        </div>
    </>
  )
}

export default SignUpSuccess