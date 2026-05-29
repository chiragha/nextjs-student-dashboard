"use client";

import {
  Home,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

const items = [
  {
    label: "Home",
    icon: Home,
  },
  {
    label: "Courses",
    icon: BookOpen,
  },
  {
    label: "Stats",
    icon: BarChart3,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

export default function MobileBottomNav() {
  return (
    <nav
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        md:hidden
        border-t
        border-zinc-800
        bg-zinc-950/90
        backdrop-blur-lg
      "
    >
      <div className="flex justify-around py-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="
                flex
                flex-col
                items-center
                text-zinc-400
              "
            >
              <Icon size={20} />
            </button>
          );
        })}
      </div>
    </nav>
  );
}