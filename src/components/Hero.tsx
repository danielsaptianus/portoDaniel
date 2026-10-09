import Link from "next/link";
import { ExternalLink, ChevronDown, ArrowRight } from "lucide-react";
import Terminal from "./Terminal";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { profile, metrics } = portfolioData;

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-glow">
      {/* Background radial glow (GPU-optimized radial gradients) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, rgba(99, 102, 241, 0.04) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 right-4 w-[500px] h-[500px] pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Intro */}
          <div className="lg:col-span-6 space-y-6">
            {/* Status Beacon */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-300 tracking-wide">
                {profile.status}
              </span>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  {profile.name}
                </span>
                <br />
                <span className="text-2xl sm:text-4xl text-slate-300 font-semibold">
                  {profile.role}
                </span>
              </h1>
            </div>

            {/* Lead text */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Spesialis dalam merancang arsitektur backend yang tangguh, modular, dan terukur. Berpengalaman membangun RESTful API &amp; sistem perpesanan real-time bertenaga{" "}
              <strong className="text-sky-300 font-semibold">NestJS</strong>,{" "}
              <strong className="text-sky-300 font-semibold">PostgreSQL</strong>,{" "}
              <strong className="text-sky-300 font-semibold">Prisma ORM</strong>,{" "}
              <strong className="text-purple-300 font-semibold">Socket.io</strong>, dan{" "}
              <strong className="text-slate-200 font-semibold">Laravel</strong> dengan penerapan prinsip{" "}
              <em className="text-slate-200 not-italic font-medium">Clean Architecture</em>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#subdomains"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-medium shadow-lg shadow-sky-500/25 transition-all hover:shadow-sky-500/40 hover:-translate-y-0.5"
              >
                <span>Explore Live Subdomains</span>
                <ChevronDown className="w-4 h-4" />
              </a>

              <a
                href="https://pos.danielsaptianus.my.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-sky-400 border border-sky-500/30 text-sm font-medium transition-all hover:border-sky-400 hover:shadow-md hover:shadow-sky-500/10"
              >
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                <span>Live POS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://chat.danielsaptianus.my.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-purple-400 border border-purple-500/30 text-sm font-medium transition-all hover:border-purple-400 hover:shadow-md hover:shadow-purple-500/10"
              >
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                <span>Live Chat</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 text-sm font-medium border border-white/5 transition-colors"
              >
                <span>Hubungi Saya</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              {metrics.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-sm sm:text-base font-bold text-white font-mono">
                    {m.number}
                  </div>
                  <div className="text-xs text-slate-400">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Terminal Window */}
          <div className="lg:col-span-6">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
