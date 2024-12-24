"use client";

import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light"); // Default theme
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (mounted) {
      const root = window.document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // Avoid hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input 
        onClick={toggleTheme} 
        className="sr-only peer" 
        checked={theme === "dark"} 
        value="" 
        type="checkbox" 
      />
      <div className="w-[50px] h-[25px] rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-[20px] before:w-[20px] before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-[20px] after:h-[20px] after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
    </label>
  );
};

export default ThemeToggle;