import {
  BriefcaseBusiness,
  Contact,
  House,
  UserRound,
  Award,
} from "lucide-react";
import React from 'react'
import { Navbar } from '@/components/ui/Navbar'
import HeroSection from '@/components/HeroSection'
import Skills from '@/components/Skills'
import ProjectsSection from '@/components/ProjectsSection'
import Certifications from '@/components/Certifications'
import Footer from '@/components/Footer'

const navItems = [
  { name: "Home", link: "#home", icon: <House /> },
  { name: "Work", link: "#projects", icon: <BriefcaseBusiness />},
  { name: "About", link: "#skills", icon: <UserRound />},
  { name: "Certifications", link: "#certifications", icon: <Award /> },
  { name: "Contact", link: "#contact", icon: <Contact /> },
];

const page = () => {
  return (
    <main className="flex flex-col px-5 sm:px-10 relative">
        <div className="max-w-7xl mx-auto w-full">
            <Navbar navItems={navItems} />
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