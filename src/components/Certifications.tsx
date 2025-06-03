"use client";

import CertificationCard from "./CertificationCard";
import { motion } from "framer-motion";
import ShinyButton from "./ui/ShinyButton";
import { ChevronRight } from "lucide-react";

const Certifications = ({
  certCardItems,
}: {
  certCardItems: {
    name: string;
    company: string;
    icon: string;
    link: string;
    date: string;
  }[];
}) => {
  return (
    <div className="relative z-10 py-16 sm:py-24" id="certifications">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-10 gap-4">
        <div className="flex flex-col gap-2">
          <motion.h1
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
          >
            Certifications
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 dark:text-stone-200/70"
          >
            {/* I&apos;ve earned certifications that validate my skills 
            and commitment to continuous learning in the tech industry. 
            Here are some of the key certifications I&apos;ve achieved. */}
          </motion.p>
        </div>

          <div className="shrink-0">
            <ShinyButton icon={<ChevronRight />}>
              <a href="https://www.linkedin.com/in/zachault/details/certifications/" target="_blank">
                All Certifications
              </a>
            </ShinyButton>
          </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4"
      >
        {certCardItems.map((cardItem) => (
          <CertificationCard key={cardItem.name} cardInfo={cardItem} />
        ))}
      </motion.div>
    </div>
  );
};

export default Certifications;