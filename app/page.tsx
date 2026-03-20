'use client';

import { useState } from 'react';

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
    <main className="p-8">
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
          <div key={i} className="border p-4 rounded">
            <h3 className="font-semibold">{b.title}</h3>
            <p className="text-sm text-gray-500">{b.issuer}</p>
            <p className="text-sm mt-2">{b.impact}</p>
          </div>
        ))}
      </div>
    </main>
  );
}