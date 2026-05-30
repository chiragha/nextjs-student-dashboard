"use client";

import { motion, type Variants } from "framer-motion";
import { TrendingUp } from "lucide-react";

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
    { day: "F", value: 90, active: true },
    { day: "S", value: 50 },
    { day: "S", value: 70 },
  ];

  return (
    <motion.section
      variants={tileVariants}
      whileHover={{
        scale: 1.015,
        y: -5,
      }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 18,
      }}
      className="
        relative
        overflow-hidden
        rounded-[2.5rem]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        p-6
        md:p-8
        md:col-span-2
        min-h-[340px]
      "
    >
    
      <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 left-0 w-[220px] h-[220px] bg-violet-500/10 blur-[120px] rounded-full" />

   
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

      <div className="relative z-10">
   
        <div className="flex items-start justify-between mb-10">
          <div>
            <p className="text-zinc-500 text-sm mb-2">
              Learning Analytics
            </p>

            <h2 className="text-2xl font-semibold">
              Weekly Activity
            </h2>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-2xl
              border
              border-emerald-500/20
              bg-emerald-500/10
              px-4
              py-2
            "
          >
            <TrendingUp
              size={16}
              className="text-emerald-400"
            />

            <span className="text-sm text-emerald-300">
              +12%
            </span>
          </div>
        </div>


        <div className="relative">
       
          <div
            className="
              absolute
              inset-0
              flex
              flex-col
              justify-between
              opacity-20
              pointer-events-none
            "
          >
            <div className="border-t border-white/10" />
            <div className="border-t border-white/10" />
            <div className="border-t border-white/10" />
            <div className="border-t border-white/10" />
          </div>

          <div
            className="
              relative
              flex
              justify-between
              items-end
              h-[220px]
              gap-3
            "
          >
            {activityData.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  flex-col
                  items-center
                  justify-end
                  h-full
                  flex-1
                "
              >
                <motion.div
                  initial={{ height: 0 }}
                  animate={{
                    height: `${item.value}%`,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`
                    relative
                    w-full
                    max-w-[52px]
                    rounded-[30px]
                    ${
                      item.active
                        ? "bg-gradient-to-t from-violet-600 via-fuchsia-500 to-violet-300 shadow-[0_0_35px_rgba(139,92,246,0.45)]"
                        : "bg-gradient-to-t from-zinc-700 via-zinc-500 to-zinc-300"
                    }
                  `}
                >
                  {item.active && (
                    <div className="absolute inset-0 rounded-[30px] bg-violet-400/20 blur-md" />
                  )}
                </motion.div>

                <span className="text-sm text-zinc-500 mt-4">
                  {item.day}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}