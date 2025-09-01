export const revalidate = 60; // revalidate every 60 seconds


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
import { CERT_QUERY, PROJECT_QUERY, TECH_QUERY } from "@/sanity/lib/queries";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";


const navItems = [
  { name: "Home", link: "#home", icon: <House /> },
  { name: "Work", link: "#projects", icon: <BriefcaseBusiness />},
  { name: "About", link: "#skills", icon: <UserRound />},
  { name: "Certifications", link: "#certifications", icon: <Award /> },
  { name: "Contact", link: "#contact", icon: <Contact /> },
];

export default async function Page() {

  const rawTechData = await client.fetch(TECH_QUERY);

  const techCardsItems = rawTechData
  .sort((a: { pos: number }, b: { pos: number }) => a.pos - b.pos)
  .map((item: {
    name: string,
    description: string,
    icon: SanityImageSource,
    bgColor: { hex: string };
  }) => ({
    name: item.name,
    description: item.description,
    iconUrl: item.icon ? urlFor(item.icon).width(64).url() : null,
    bgColor: item.bgColor.hex
  }));


  const rawProjectData = await client.fetch(PROJECT_QUERY);

  const portfolioProjects = rawProjectData
  .sort((a: { pos: number }, b: { pos: number }) => a.pos - b.pos)
  .map((item: {
    name: string;
    category: string;
    image: string;
    techStack: string[];
    gitLink: string;
    webLink: string;
  }) => ({
    name: item.name,
    category: item.category,
    image: item.image ? urlFor(item.image).width(1000).url() : null,
    techStack: item.techStack,
    gitLink: item?.gitLink ?? null,
    webLink: item?.webLink ?? null
  }));


  type Certification = {
    name: string;
    company: string;
    icon: SanityImageSource;
    link: string;
    date: string;
  };
  const rawCertData: Certification[] = await client.fetch(CERT_QUERY);

  const certCardsItems = rawCertData
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .map((item: {
    name: string,
    company: string,
    icon: SanityImageSource,
    link: string;
    date: string;
  }) => ({
    name: item.name,
    company: item.company,
    icon: urlFor(item.icon).width(1000).url(),
    link: item?.link ?? null,
    date: item.date,
  })); 


  return (
    <main className="flex flex-col px-5 sm:px-10 relative">
        <div className="max-w-7xl mx-auto w-full">
            <Navbar navItems={navItems} />
            <HeroSection />
            <Skills techCardsItems={techCardsItems}/>
            <ProjectsSection portfolioProjects={portfolioProjects}/>
            <Certifications certCardItems={certCardsItems}/>
            <Footer />
        </div>
    </main>
  )
}