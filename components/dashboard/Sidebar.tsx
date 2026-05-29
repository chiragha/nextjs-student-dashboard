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
} from "lucide-react";

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Home,
  },
  {
    id: "courses",
    label: "Courses",
    icon: BookOpen,
  },
  {
    id: "analytics",
    label: "Analytics",
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
        min-h-screen
        border-r
        border-zinc-800
        bg-zinc-950
        p-4
        flex-col
        transition-all
        duration-300
       lg:relative
hidden
md:flex
${collapsed ? "md:w-20" : "lg:w-72 md:w-20"}
      `}
    >
      {/* top section */}
      <div className="flex items-center justify-between mb-8">
        {!collapsed && <h2 className="text-lg font-semibold">LearnHub</h2>}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="
            rounded-xl
            p-2
            hover:bg-zinc-900
            transition
          "
        >
          {collapsed ? (
            <PanelLeftOpen size={20} />
          ) : (
            <PanelLeftClose size={20} />
          )}
        </button>
      </div>

      {/* nav */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className="
                relative
                flex
                items-center
                gap-3
                rounded-2xl
                px-4
                py-3
                text-left
                overflow-hidden
              "
            >
              {/* animated active background */}
              {active === item.id && (
                <motion.div
                  layoutId="sidebar-active"
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    bg-zinc-900
                  "
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}

              <div className="relative z-10 flex items-center gap-3">
                <Icon size={20} />

                {!collapsed && <span>{item.label}</span>}
              </div>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
