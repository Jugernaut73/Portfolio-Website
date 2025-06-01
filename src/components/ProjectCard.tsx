"use client";

import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import ProjectTechnologiesMini from "./ProjectTechnologiesMini";

import { motion } from "framer-motion";
import { Skeleton } from "./ui/skeleton";

interface ProjectProps {
  name: string;
  image: string;
  techStack: string[];
  gitLink: string;
  webLink: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const { name, image, techStack, gitLink, webLink } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="bg-[#1d1c1c] dark:bg-dark-200 rounded-lg p-4 sm:p-8 space-y-8"
    >
      {image ? (
        webLink ? (
          <a 
          href={`${webLink}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="rounded-lg overflow-hidden block">
              <Image
                src={image}
                width={1000}
                height={1000}
                alt={"Project image"}
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
          </a>
          ) : (
            <div className="rounded-lg overflow-hidden">
              <Image
                src={image}
                width={1000}
                height={1000}
                alt={"Project image"}
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          )
        ) : (
          <Skeleton className="w-full aspec-[1/1] rounded-lg" />
        )}
      <div>
        <h3 className="text-2xl sm:text-3xl font-semibold">{name}</h3>
        <div className="mt-4 flex flex-col sm:flex-row justify-between gap-5">
          <ProjectTechnologiesMini techStack={techStack} />

          {gitLink && (
            <a
              href={`${gitLink}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-blue-500 hover:bg-blue-500/80 transition-colors duration-200 rounded-lg self-start sm:self-end"
            >
              <MoveUpRight className="size-5 sm:size-8 text-[#F3F4F3] dark:text-dark-200" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;