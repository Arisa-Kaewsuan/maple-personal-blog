import React from 'react'

const HeroSection = () => {
  return (
    <>
      <section className='px-4 md:mx-[7.5rem] md:flex md:h-auto md:justify-center'>
        {/* Top-Left Section */}
        <div className='md:w-96 md:mr-14'>
          <h2 className='mt-10 md:mt-[11.65625rem] text-center md:text-end text-brown-600 text-h2 md:text-h1 font-semibold'>Stay Informed, Stay Inspired</h2>
          <p className='mt-4 md:mt-6 text-center md:text-end text-brown-400 text-b1 font-medium'>Discover a World of Knowledge at Your Fingertips. Your Daily Does of Inspiration and Information.</p>
        </div>

        {/* Image-Center Section */}
        <div className='mt-10 md:mt-[3.75rem]'>
          <img src="/hero-img.jpg" alt="black cat on a man's shoulder" className='w-[21.4375rem] md:w-[24.125rem] h-[29.375rem] md:h-[33.0625rem] object-cover rounded-2xl'/>
        </div>

        {/* Bottom-right Section */}
        <div className='md:pl-[3.75rem]'>
          <p className='mt-10 md:mt-[11.40625rem] text-brown-400 text-b3 font-medium'>- Author</p>
          <h3 className='mt-1 text-brown-500 text-h3 font-semibold'>Thompson P.</h3>
          <p className='md:w-[21.6875rem] mt-3 text-brown-400 text-b1 font-medium'>I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.</p>
          <br/>
          <p className='md:w-[21.6875rem] text-brown-400 text-b1 font-medium'>When i’m not writing, I spends time volunteering at my local animal shelter, helping cats find loving homes.</p>
        </div>
      </section>
    </>
  )
}

export default HeroSection
