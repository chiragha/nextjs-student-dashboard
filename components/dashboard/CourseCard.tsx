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

export default function CourseCard({ course }: CourseCardProps) {
  const Icon = iconMap[course.icon_name as keyof typeof iconMap] || Code2;

  return (
    <motion.article
      variants={tileVariants}
      whileHover={{
        scale: 1.02,
        y: -6,
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
        hover:border-zinc-600
        bg-zinc-950
        p-5 md:p-6
      "
    >
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/20 to-transparent pointer-events-none" />

        <div className="absolute top-0 right-0 w-28 h-28 bg-white/5 blur-[80px] rounded-full" />

        <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')]" />
      </>

     <div
  className="
    mb-5
    relative
    z-10
    h-14
    w-14
    rounded-2xl
    border
    border-zinc-800
    bg-white/[0.03]
    flex
    items-center
    justify-center
    backdrop-blur-sm
  "
>
  <Icon size={28} />
</div>

      <h2 className="text-xl font-semibold relative z-10">{course.title}</h2>

      <p className="text-zinc-400 mt-2 relative z-10">
        Progress: {course.progress}%
      </p>

      <div className="mt-5 h-2 bg-zinc-800 rounded-full overflow-hidden relative z-10">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${course.progress}%`,
          }}
          transition={{
            duration: 2.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-zinc-200
            to-zinc-400
          "
        />
      </div>
    </motion.article>
  );
}
