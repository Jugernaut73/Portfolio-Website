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
import { client, urlFor } from "@/lib/sanity";
import { TECH_QUERY } from "@/sanity/lib/queries";

const navItems = [
  { name: "Home", link: "#home", icon: <House /> },
  { name: "Work", link: "#projects", icon: <BriefcaseBusiness />},
  { name: "About", link: "#skills", icon: <UserRound />},
  { name: "Certifications", link: "#certifications", icon: <Award /> },
  { name: "Contact", link: "#contact", icon: <Contact /> },
];

export default async function Page() {
  const rawData = await client.fetch(TECH_QUERY);

  const techCardsItems = rawData.map((item: any) => ({
    name: item.name,
    description: item.description,
    iconUrl: urlFor(item.icon).width(64).url(),
    bgColor: item.bgColor.hex
  }));

  return (
    <main className="flex flex-col px-5 sm:px-10 relative">
        <div className="max-w-7xl mx-auto w-full">
            <Navbar navItems={navItems} />
            <HeroSection />
            <Skills techCardItems={techCardsItems}/>
            <ProjectsSection />
            <Certifications />
            <Footer />
        </div>
    </main>
  )
}