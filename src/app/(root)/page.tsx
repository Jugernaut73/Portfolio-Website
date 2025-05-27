import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Skills from '@/components/Skills'
import ProjectsSection from '@/components/ProjectsSection'
import Certifications from '@/components/Certifications'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <main className="flex flex-col px-5 pt-20 sm:px-10 relative">
        <div className="max-w-7xl mx-auto w-full">
            <Navbar />
            <HeroSection />
            <Skills />
            <ProjectsSection />
            <Certifications />
            <Footer />
        </div>
    </main>
  )
}

export default page