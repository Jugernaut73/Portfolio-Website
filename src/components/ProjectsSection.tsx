"use client"

import Link from "next/link";
import ProjectCard from "./ProjectCard";
import ShinyButton from "./ui/ShinyButton";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Dropdown, DropdownItem } from "flowbite-react";

const ProjectsSection = ({
  portfolioProjects,
}: {
    portfolioProjects: {
      name: string;
      category: string;
      image: string;
      techStack: string[];
      gitLink: string;
      webLink: string;
    }[];
}) => {
  const [category, setCategory] = useState("All");

  return (
    <div className="py-32" id="projects">
      <div className="flex gap-4 sm:flex-row sm:items-center justify-between">
        <div className="flex gap-3 sm:flex-row sm:items-center">
          <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
            My portfolio
          </h2>
          <div className="flex gap-2">
            <div className="lg:hidden">
              <ShinyButton uglyFix="w-20">
                <Dropdown label={category || "All"} dismissOnClick={true} placement="bottom" className="cursor-pointer my-3" >
                  <DropdownItem onClick={() => setCategory("All")} className="pr-10 bg-[#1A1A1A] hover:bg-[#262626]">All</DropdownItem>
                  <DropdownItem onClick={() => setCategory("Work")} className="pr-10 bg-[#1A1A1A] hover:bg-[#262626]">Work</DropdownItem>
                  <DropdownItem onClick={() => setCategory("School")} className="pr-10 bg-[#1A1A1A] hover:bg-[#262626]">School</DropdownItem>
                  <DropdownItem onClick={() => setCategory("Misc")} className="pr-18 float-left bg-[#1A1A1A] hover:bg-[#262626]">Misc</DropdownItem>
                </Dropdown>
              </ShinyButton>
            </div>
            <div className="hidden lg:block">
              <div className="flex gap-2">
                <ShinyButton onClick={() => setCategory(category === "Work" ? "All" : "Work")}>
                  <span className="cursor-pointer">Work</span>
                </ShinyButton>
                <div className = "hidden">
                  <ShinyButton onClick={() => setCategory(category === "Games" ? "All" : "Games")}>
                    <span className="cursor-pointer">Games</span>
                  </ShinyButton>
                </div>
                <ShinyButton onClick={() => setCategory(category === "School" ? "All" : "School")}>
                  <span className="cursor-pointer">School</span>
                </ShinyButton>
                <ShinyButton onClick={() => setCategory(category === "Misc" ? "All" : "Misc")}>
                  <span className="cursor-pointer">Misc</span>
                </ShinyButton>
              </div>
            </div>
          </div>
        </div>

        <ShinyButton icon={<ChevronRight />}>
          <Link href="https://github.com/Jugernaut73" target="_blank">
            <span className="hidden sm:block">All Projects</span>
            <span className="sm:hidden">All</span>
          </Link>
        </ShinyButton>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mt-8">
        {portfolioProjects
        .filter((project) => (
          category === "All" || project.category === category
        ))
        .map((project) => (
          <ProjectCard key={project.name} project={project}/>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;