'use client';

import { useState, useEffect } from 'react';

export default function Home() {

  const [filter, setFilter] = useState('All');
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const badges = [
    {
      title: "Adobe AEM Architect",
      issuer: "Adobe",
      category: "CMS",
      image: "/sudesh-cert-portfolio/images/aem.png",
      link: "https://credly.com",
      impact: "Led AEM transformation for enterprise banking platform",
    },
    {
      title: "Azure AI Engineer",
      issuer: "Microsoft",
      category: "AI",
      image: "/sudesh-cert-portfolio/images/azure.png",
      link: "https://credly.com",
      impact: "Built GenAI-powered customer experience solutions",
    }
  ];

  const categories = ['All', ...new Set(badges.map(b => b.category))];

  const filtered = filter === 'All'
    ? badges
    : badges.filter(b => b.category === filter);

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">

        {/* DARK MODE TOGGLE */}
        <button
          onClick={() => setDark(!dark)}
          className="mb-6 px-4 py-2 border rounded-full"
        >
          {dark ? "Light ☀️" : "Dark 🌙"}
        </button>

        {/* HERO */}
        <h1 className="text-5xl font-bold mb-4">
          Sudesh Bhadouria 🚀
        </h1>

        {/* FILTERS */}
        <div className="flex gap-3 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-4 py-2 border rounded-full"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid gap-6">
          {filtered.map((b, i) => (
            <div key={i} className="p-4 border rounded-xl">
              <h3 className="font-semibold">{b.title}</h3>
              <p>{b.issuer}</p>
              <p>{b.impact}</p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}