"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        relative w-9 h-9 rounded-full flex items-center justify-center
        transition-all duration-300 group
        hover:bg-white/10
        hover:shadow-[0_0_12px_rgba(20,255,236,0.4)]
        active:scale-90
      `}
      aria-label="Toggle theme"
    >
      {/* Spinning ring on hover */}
      <span className="absolute inset-0 rounded-full border border-cyan-400/0 group-hover:border-cyan-400/40 transition-all duration-300 group-hover:scale-110" />

      {/* Icon with rotate animation on switch */}
      <span>
        {isDark ? (
          <Sun className="w-4 h-4 text-yellow-300 group-hover:text-yellow-200" />
        ) : (
          <Moon className="w-4 h-4 text-cyan-300 group-hover:text-cyan-200" />
        )}
      </span>
    </button>
  );
};

export default Theme;