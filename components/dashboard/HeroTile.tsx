"use client";
import { motion, type Variants } from "framer-motion";
import { Flame } from "lucide-react";

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
export default function HeroTile() {
  return (
    <motion.section
      variants={tileVariants}
      whileHover={{
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-zinc-800
        bg-gradient-to-br
        from-zinc-900
        via-zinc-950
        to-black
        p-8
        md:col-span-2
        min-h-[320px]
      "
    >
      <div className="absolute top-0 right-0 w-56 h-56 bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#9333ea,transparent_40%)]" />

      <div className="relative z-10">
        <div
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            border
            border-orange-500/20
            bg-orange-500/10
            mb-6
          "
        >
          <Flame size={16} />
          <span className="text-sm">12 Day Streak</span>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          Welcome back, Learner  👋
        </h1>

        <p className="text-zinc-400 mt-4 max-w-md">
          Keep the momentum going. You’re making consistent progress across your
          active learning paths.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap">
          <div
            className="
      px-5
      py-3
      rounded-2xl
      border
      border-zinc-800
      bg-white/[0.03]
      backdrop-blur-md
    "
          >
            <p className="text-xs text-zinc-500">Courses</p>

            <h3 className="text-xl font-semibold mt-1">4 Active</h3>
          </div>

          <div
            className="
      px-5
      py-3
      rounded-2xl
      border
      border-zinc-800
      bg-white/[0.03]
      backdrop-blur-md
    "
          >
            <p className="text-xs text-zinc-500">Weekly Goal</p>

            <h3 className="text-xl font-semibold mt-1">82%</h3>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
