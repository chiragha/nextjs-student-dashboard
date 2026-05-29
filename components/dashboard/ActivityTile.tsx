"use client";

import { motion, type Variants } from "framer-motion";
const tileVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};
export default function ActivityTile() {
  const activityData = [
    { day: "M", value: 30 },
    { day: "T", value: 60 },
    { day: "W", value: 80 },
    { day: "T", value: 40 },
    { day: "F", value: 90 },
    { day: "S", value: 50 },
    { day: "S", value: 70 },
  ];

  return (
    <motion.section
      variants={tileVariants}
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 18,
        mass: 1,
      }}
      className="
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-zinc-800
        hover:border-zinc-700
        bg-zinc-950
        p-6
        md:col-span-2"
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 blur-[100px] rounded-full" />
      <h2 className="text-lg font-semibold mb-6 relative z-10">
        Weekly Activity
      </h2>
      <div
        className="
  flex
  justify-between
  items-end
  h-44
  relative
  z-10">
        {activityData.map((item, index) => (
          <div
            key={index}
            className=" flex
           flex-col
          items-center
           justify-end
            h-full">
 
            <motion.div
              initial={{ height: 0 }}
              animate={{
                height: `${item.value}%`,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              className="
  w-10
  md:w-12
  rounded-[999px]
  bg-gradient-to-t
  from-zinc-700
  via-zinc-500
  to-zinc-200
"
            />
            <span className="text-xs text-zinc-500 mt-2">{item.day}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
