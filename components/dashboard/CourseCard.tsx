"use client";

import { motion, type Variants } from "framer-motion";
import { Course } from "@/types/course";
import { Code2, Database, FileCode, Sparkles } from "lucide-react";

type CourseCardProps = {
  course: Course;
};

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

const iconMap = {
  Code2,
  Database,
  FileCode,
  Sparkles,
};

const colorMap = {
  Code2: {
    bg: "bg-violet-500/15",
    border: "border-violet-500/20",
    icon: "text-violet-400",
    progress: "from-violet-500 to-fuchsia-400",
    glow: "bg-violet-500/20",
  },

  Database: {
    bg: "bg-green-500/15",
    border: "border-green-500/20",
    icon: "text-green-400",
    progress: "from-green-500 to-emerald-400",
    glow: "bg-green-500/20",
  },

  FileCode: {
    bg: "bg-blue-500/15",
    border: "border-blue-500/20",
    icon: "text-blue-400",
    progress: "from-blue-500 to-cyan-400",
    glow: "bg-blue-500/20",
  },

  Sparkles: {
    bg: "bg-orange-500/15",
    border: "border-orange-500/20",
    icon: "text-orange-400",
    progress: "from-orange-500 to-amber-400",
    glow: "bg-orange-500/20",
  },
};

export default function CourseCard({ course }: CourseCardProps) {
  const iconName = course.icon_name as keyof typeof iconMap;

  const Icon = iconMap[iconName] || Code2;

  const colors = colorMap[iconName] || colorMap.Code2;

  return (
    <motion.article
      variants={tileVariants}
      whileHover={{
        scale: 1.02,
        y: -6,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 18,
      }}
      className="
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        p-6
        min-h-[240px]
      "
    >
    
      <div
        className={`
          absolute
          top-0
          right-0
          h-28
          w-28
          rounded-full
          blur-[80px]
          ${colors.glow}
        `}
      />

  
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-white/[0.02]
          to-transparent
          pointer-events-none
        "
      />


      <div className="relative z-10">
     
        <div
          className={`
            h-16
            w-16
            rounded-[22px]
            border
            flex
            items-center
            justify-center
            backdrop-blur-xl
            mb-6
            ${colors.bg}
            ${colors.border}
          `}
        >
          <Icon size={28} className={colors.icon} />
        </div>

  
        <h2 className="text-2xl font-semibold tracking-tight">
          {course.title}
        </h2>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-zinc-400">Progress</p>

          <span className="font-medium text-zinc-300">{course.progress}%</span>
        </div>

    
        <div className="mt-4">
          <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${course.progress}%`,
              }}
              transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                h-full
                rounded-full
                bg-gradient-to-r
                ${colors.progress}
              `}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
