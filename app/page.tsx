import { badges } from "../data/badges";

export default function Home() {
  const categories = Array.from(new Set(badges.map(b => b.category)));

  const levelStyles = {
    Master: "bg-red-100 text-red-600",
    Expert: "bg-blue-100 text-blue-600",
    Associate: "bg-green-100 text-green-600",
    Professional: "bg-purple-100 text-purple-600",
    Fundamental: "bg-gray-100 text-gray-600",
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-7xl mx-auto">

        {/* 🔥 HEADER WITH PHOTO */}
        <div className="flex items-center gap-6 mb-12">
          <img
            src="/images/profile.jpg"
            className="w-20 h-20 rounded-full object-cover border"
          />

          <div>
            <h1 className="text-3xl font-bold">
              Sudesh Bhadouria
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Enterprise Architect specializing in AI, AEM, and Digital Platforms.
              Driving scalable banking and GenAI solutions.
            </p>
          </div>
        </div>

        {/* 🔥 SECTIONS */}
        {categories.map(category => (
          <div key={category} className="mb-10">

            {/* TITLE */}
            <h2 className="text-lg font-semibold mb-4">
              {category} Certifications
            </h2>

            {/* GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {badges
                .filter(b => b.category === category)
                .map((b, i) => (
                  <a
                    key={i}
                    href={b.link}
                    target="_blank"
                    className="block bg-white border rounded-lg p-4 hover:shadow-md transition"
                  >
                    {/* TOP */}
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-sm leading-tight">
                        {b.title}
                      </h3>
                      <img src={b.image} className="h-8" />
                    </div>

                    {/* ISSUER */}
                    <p className="text-xs text-gray-500 mt-1">
                      {b.issuer}
                    </p>

                    {/* LEVEL */}
                    <span className={`inline-block mt-2 px-2 py-0.5 text-xs rounded ${levelStyles[b.level]}`}>
                      {b.level}
                    </span>

                    {/* META */}
                    <div className="text-xs text-gray-500 mt-2">
                      <p>Issued: {b.issued}</p>
                      {b.expiry && <p>Expires: {b.expiry}</p>}
                    </div>

                    {/* SKILLS */}
                    <div className="flex flex-wrap gap-1 mt-2">
                      {b.skills?.map(skill => (
                        <span
                          key={skill}
                          className="text-[10px] bg-gray-100 px-2 py-0.5 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
            </div>

          </div>
        ))}

      </div>
    </main>
  );
}