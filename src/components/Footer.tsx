import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="flex flex-col justify-center antialiased relative border border-neutral-800 rounded-xl mb-5"
      id="contact"
    >
      <div>
        <div className="space-y-8 p-10">
          <h1 className="text-5xl font-bold max-w-2xl leading-[110%] relative z-10">
            Like what you see? Connect with me on{" "}
            <Link
              href="https://www.linkedin.com/in/zachault/"
              className="text-blue-500 hover:text-blue-500/80 border-b-2 border-blue-500 hover:border-blue-500/80 transition-colors duration-200"
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>{" "}
            :)
          </h1>
        </div>

        <div className="mt-16 p-10 border-t border-dark-200 dark:border-white/10 flex flex-col md:flex-row justify-between gap-10 md:gap-0">
          <div className="space-y-2.5">
            <h3 className="text-xl font-bold relative z-10">
              Zachary Ault
            </h3>
            <p className="text-dark-200/70 dark:text-stone-200/70 relative z-10">
              Software Engineer
            </p>
          </div>

          <div className="flex justify-between gap-0 sm:gap-16">
            <ul className="space-y-2.5 relative z-10 text-sm sm:text-base">
              <li className="text-base sm:text-lg font-semibold">Navigate</li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <Link href="/">Home</Link>
              </li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <Link href="#projects">Work</Link>
              </li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <Link href="#skills">About</Link>
              </li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <Link href="#certifications">Certifications</Link>
              </li>
            </ul>

            <ul className="space-y-2.5 relative z-10 text-sm sm:text-base">
              <li className="text-lg font-semibold">Socials</li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <Link
                  href="https://www.linkedin.com/in/zachault/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <Link 
                  href="https://github.com/Jugernaut73" 
                  target="_blank"
                >
                  Github
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;