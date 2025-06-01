const ProjectTechnologiesMini = ({ techStack }: { techStack: string[] }) => {
  return (
    <div className="flex flex-wrap items-center gap-2.5 max-w-sm">
      {techStack.map((tech) => (
        <p
          key={tech}
          className="text-xs text-dark-200/60 hover:text-dark-200 dark:text-white/60 dark:hover:text-white font-medium bg-[#292828] hover:bg-[#464444] border border-[#464444] hover:border-[#ffffff]/70 transition-colors duration-200 w-fit rounded-md py-2 px-4"
        >
          {tech}
        </p>
      ))}
    </div>
  );
};

export default ProjectTechnologiesMini;