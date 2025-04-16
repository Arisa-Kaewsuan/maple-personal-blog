import ArticleSection from '@/components/ArticleSection'
import { Footer } from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import NavBar from '@/components/NavBar'
import React from 'react'

const LandingPage = () => {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <ArticleSection/>
      <Footer/>
    </>
  )
}

export default LandingPage
