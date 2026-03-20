"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [dark, setDark] = useState(false);

  // Load theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const badges = [
    {
      title: "Adobe AEM Architect",
      issuer: "Adobe",
      category: "CMS",
      impact:
        "Architected enterprise-scale AEM platform enabling multi-brand digital experiences across banking ecosystem",
      tags: ["Enterprise", "AEM", "Architecture"],
    },
    {
      title: "Azure AI Engineer",
      issuer: "Microsoft",
      category: "AI",
      impact:
        "Designed GenAI-powered customer journey solutions using Azure AI and LLM integrations",
      tags: ["AI", "GenAI", "Cloud"],
    },
  ];

  const categories = ["All", ...new Set(badges.map((b) => b.category))];

  const filtered =
    filter === "All"
      ? badges
      : badges.filter((b) => b.category === filter);

  return (
    <main
      className="min-h-screen p-10 
    bg-gradient-to-br 
    from-gray-50 via-white to-gray-100 
    dark:from-gray-900 dark:via-gray-800 dark:to-black 
    text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* DARK MODE */}
        <button
          onClick={() => setDark(!dark)}
          className="mb-6 px-4 py-2 rounded-full border 
          bg-white/60 dark:bg-gray-800/60 backdrop-blur-md"
        >
          {dark ? "Light ☀️" : "Dark 🌙"}
        </button>

        {/* HERO */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold tracking-tight mb-6 
          bg-gradient-to-r from-black to-gray-500 
          dark:from-white dark:to-gray-400 
          bg-clip-text text-transparent"
        >
          Sudesh Bhadouria 🚀
        </motion.h1>

        {/* FILTERS */}
        <div className="flex gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium 
              transition-all duration-200 border backdrop-blur-md
              ${
                filter === cat
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-white/60 dark:bg-gray-800/60 hover:scale-105"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid gap-6">
          {filtered.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative p-6 rounded-3xl 
              bg-white/70 dark:bg-gray-800/70 
              backdrop-blur-xl 
              border border-white/20 
              shadow-lg hover:shadow-2xl 
              transition-all duration-300 
              hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {b.issuer}
              </p>

              <p className="text-sm mt-3">{b.impact}</p>

              {/* TAGS */}
              <div className="flex gap-2 mt-4 flex-wrap">
                {b.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full 
                    bg-black text-white dark:bg-white dark:text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}