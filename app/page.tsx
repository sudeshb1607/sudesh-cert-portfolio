'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const [dark, setDark] = useState(false);

useEffect(() => {
  document.documentElement.classList.toggle("dark", dark);
}, [dark]);

<button
  onClick={() => setDark(!dark)}
  className="mb-6 px-4 py-2 border rounded-full"
>
  {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
</button>

const badges = [
  {
    title: "Adobe AEM Architect",
    issuer: "Adobe",
    category: "CMS",
    impact: "Enterprise CMS transformation",
  },
  {
    title: "Azure AI Engineer",
    issuer: "Microsoft",
    category: "AI",
    impact: "GenAI solutions",
  }
];

export default function Home() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(badges.map(b => b.category))];

  const filtered = filter === "All"
    ? badges
    : badges.filter(b => b.category === filter);

  return (
    <main className="min-h-screen p-8 
  bg-gradient-to-br from-white to-gray-100 
  dark:from-gray-900 dark:to-gray-800 
  transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-4">
        Sudesh Portfolio 🚀
      </h1>

      <div className="mb-6 flex gap-3">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className="border px-3 py-1 rounded"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {filtered.map((b, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 
rounded-3xl p-6 shadow-premium 
hover:scale-[1.02] transition-all duration-300">
            <h3 className="font-semibold">{b.title}</h3>
            <p className="text-sm text-gray-500">{b.issuer}</p>
            <p className="text-sm mt-2">{b.impact}</p>
          </div>
        ))}
      </div>
    </main>
  );
}