import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-24 bg-[#0b0f19] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-medium text-slate-300">
            <span>🛠️ Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Kumpulan framework, database, dan tools yang saya kuasai dan gunakan untuk mengembangkan sistem modern.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-white/15 transition-all duration-300 shadow-xl shadow-black/20 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-bold text-white text-base">{cat.title}</h3>
                </div>

                <div className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-slate-800/40 border border-white/5"
                    >
                      <span className="text-slate-200 font-medium">{skill.name}</span>
                      <span className="text-[10px] font-mono text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/40">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
