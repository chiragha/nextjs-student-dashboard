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
      delayChildren: 0.2,
      staggerChildren: 0.14,
    },
  },
};

export default function BentoGrid({
  children,
}: BentoGridProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-5
        lg:gap-7
        auto-rows-[minmax(240px,auto)]
        items-start
      "
    >
      {children}
    </motion.section>
  );
}