import { Briefcase, GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-[#0b0f19] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-medium text-slate-300">
            <span>💼 Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Rekam jejak kontribusi teknis dalam pengembangan software backend dan sistem enterprise skala produksi.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 space-y-12">
          {experiences.map((exp, index) => {
            const isEducation = exp.id === "upi-academic";
            return (
              <div key={exp.id} className="relative pl-6 sm:pl-10 group">
                {/* Timeline Bullet */}
                <div
                  className={`absolute -left-3.5 top-1.5 w-7 h-7 rounded-full flex items-center justify-center border-2 transition-transform duration-300 group-hover:scale-110 ${
                    isEducation
                      ? "bg-slate-900 border-indigo-500 text-indigo-400 shadow-md shadow-indigo-500/20"
                      : "bg-slate-900 border-sky-500 text-sky-400 shadow-md shadow-sky-500/20"
                  }`}
                >
                  {isEducation ? (
                    <GraduationCap className="w-3.5 h-3.5" />
                  ) : (
                    <Briefcase className="w-3.5 h-3.5" />
                  )}
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-white/15 transition-all duration-300 shadow-xl shadow-black/20 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-2 border-b border-white/5 pb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sky-400 font-medium text-sm mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 text-slate-300 border border-white/5">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullet description */}
                  <ul className="space-y-2 text-slate-300 text-sm leading-relaxed list-disc list-outside ml-4">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx}>{desc}</li>
                    ))}
                  </ul>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-800/90 text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
