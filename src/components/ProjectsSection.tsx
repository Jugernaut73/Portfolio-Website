"use client"

import Link from "next/link";
import ProjectCard from "./ProjectCard";
import ShinyButton from "./ui/ShinyButton";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

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
          <div className="hidden lg:block">
            <div className="flex gap-2">
                <ShinyButton onClick={() => setCategory(category === "Work" ? "All" : "Work")}>
                    Work
                </ShinyButton>
                <div className = "hidden">
                  <ShinyButton onClick={() => setCategory(category === "Games" ? "All" : "Games")}>
                      Games
                  </ShinyButton>
                </div>
                <ShinyButton onClick={() => setCategory(category === "School" ? "All" : "School")}>
                    School
                </ShinyButton>
                <ShinyButton onClick={() => setCategory(category === "Misc" ? "All" : "Misc")}>
                    Misc
                </ShinyButton>
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