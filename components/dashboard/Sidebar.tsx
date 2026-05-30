"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  BookOpen,
  BarChart3,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
  GraduationCap,
  User,
} from "lucide-react";

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Home,
  },
  {
    id: "courses",
    label: "My Courses",
    icon: BookOpen,
  },
  {
    id: "analytics",
    label: "Progress",
    icon: BarChart3,
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        hidden md:flex
        relative
        z-20
        min-h-screen
        flex-col
        border-r
        border-white/10
        bg-black/30
        backdrop-blur-2xl
        transition-all
        duration-300
        overflow-hidden
        ${collapsed ? "w-[88px]" : "md:w-[240px] lg:w-[280px]"}
      `}
    >
      <div className="absolute top-10 left-0 w-40 h-40 bg-purple-500/10 blur-[90px]" />

      <div className="px-5 py-6 border-b border-white/5">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div
                className="
                  h-11
                  w-11
                  rounded-2xl
                  bg-gradient-to-br
                  from-violet-500
                  to-fuchsia-500
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  shadow-violet-500/20
                "
              >
                <GraduationCap size={22} />
              </div>

             <div className="min-w-0">
                <h2 className="font-bold text-lg">LearnHub</h2>

                <p className="text-xs text-zinc-500">Student Dashboard</p>
              </div>
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="
              rounded-xl
              p-2.5
              hover:bg-white/5
              transition
              text-zinc-400
            "
          >
            {collapsed ? (
              <PanelLeftOpen size={20} />
            ) : (
              <PanelLeftClose size={20} />
            )}
          </button>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-3">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className="
                relative
                flex
                w-full
                items-center
                gap-4
                overflow-hidden
                rounded-[22px]
                px-4
                py-4
                transition
                hover:bg-white/[0.03]
              "
            >
              {active === item.id && (
                <motion.div
                  layoutId="sidebar-active"
                  className="
                    absolute
                    inset-0
                    rounded-[22px]
                    bg-gradient-to-r
                    from-violet-500/20
                    to-fuchsia-500/10
                    border
                    border-violet-500/20
                  "
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 28,
                  }}
                />
              )}

              <div className="relative z-10 flex items-center gap-4">
                <Icon
                  size={21}
                  className={
                    active === item.id ? "text-violet-400" : "text-zinc-400"
                  }
                />

                {!collapsed && (
                  <span
                    className={`
    whitespace-nowrap
    transition-all
    duration-300
    font-medium
    ${active === item.id ? "text-white" : "text-zinc-400"}
  `}
                  >
                    {item.label}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </nav>

      {!collapsed && (
        <div className="p-4">
          <div
            className="
              rounded-[28px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-4
            "
          >
          <div className="flex items-center gap-3 min-w-0">
              <div
                className="
                  h-12
                  w-12
                  rounded-full
                  bg-gradient-to-br
                  from-violet-500
                  to-fuchsia-500
                  flex
                  items-center
                  justify-center
                "
              >
                <User size={18} />
              </div>

              <div>
                <h3 className="font-medium">Learner</h3>

                <p className="text-xs text-zinc-500">learner@example.com</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
