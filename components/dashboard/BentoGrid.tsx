"use client";

import { motion } from "framer-motion";

type BentoGridProps = {
  children: React.ReactNode;
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.28,
    },
  },
};

export default function BentoGrid({ children }: BentoGridProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="
        grid
       grid-cols-1
sm:grid-cols-1
md:grid-cols-2
xl:grid-cols-3
        gap-6
       auto-rows-[minmax(220px,auto)]
      "
    >
      {children}
    </motion.section>
  );
}
