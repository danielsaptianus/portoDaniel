"use client";

import { useState } from "react";
import { ExternalLink, ArrowRight, Lock } from "lucide-react";
import { portfolioData, Project } from "@/data/portfolioData";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "backend" | "fullstack" | "enterprise">("all");

  const filterOptions = [
    { label: "All Projects", value: "all" },
    { label: "Backend & API", value: "backend" },
    { label: "Fullstack", value: "fullstack" },
    { label: "Enterprise & Data", value: "enterprise" },
  ] as const;

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-24 bg-[#0a0e17] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-medium text-slate-300">
            <span>🚀 Selected Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects &amp; Systems Showcase
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Kompilasi proyek backend, fullstack application, dan tool otomasi yang pernah saya bangun.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {filterOptions.map((opt) => {
              const isActive = filter === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => setFilter(opt.value)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25 scale-105"
                      : "bg-slate-900/90 text-slate-400 hover:text-white border border-white/5 hover:bg-slate-800"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item) => {
            const isPurple = item.theme === "purple";
            const isCyan = item.theme === "cyan";

            return (
              <div
                key={item.id}
                className={`flex flex-col justify-between p-6 sm:p-7 rounded-2xl transition-all duration-300 border ${
                  isCyan
                    ? "bg-slate-900/80 border-sky-500/30 hover:border-sky-500/60 hover:shadow-xl hover:shadow-sky-950/30"
                    : isPurple
                    ? "bg-slate-900/80 border-purple-500/30 hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-950/30"
                    : "bg-slate-900/50 border-white/5 hover:border-white/15 hover:shadow-xl hover:shadow-black/30"
                }`}
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{item.icon}</span>
                    {item.badge && (
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${
                          isCyan
                            ? "bg-sky-500/10 text-sky-400 border-sky-500/30"
                            : isPurple
                            ? "bg-purple-500/10 text-purple-400 border-purple-500/30"
                            : "bg-slate-800 text-slate-400 border-white/5"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom: Tags & Link */}
                <div className="space-y-4 pt-6 mt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-1">
                    {item.internalOnly ? (
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <Lock className="w-3.5 h-3.5" />
                        <span>{item.linkText}</span>
                      </span>
                    ) : item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                          isPurple
                            ? "text-purple-400 hover:text-purple-300"
                            : "text-sky-400 hover:text-sky-300"
                        }`}
                      >
                        <span>{item.linkText}</span>
                        {item.link.startsWith("http") ? (
                          <ExternalLink className="w-3.5 h-3.5" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5" />
                        )}
                      </a>
                    ) : null}
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
