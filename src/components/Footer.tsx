"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 bg-[#080c14] border-t border-white/5 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left space-y-1">
          <p className="text-slate-300">
            &copy; {new Date().getFullYear()} <strong className="text-white">Daniel Hulio Saptianus</strong>. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-500 font-mono">
            Main Domain:{" "}
            <span className="text-sky-400">danielsaptianus.my.id</span> &bull; Subdomains:{" "}
            <a
              href="https://pos.danielsaptianus.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:underline"
            >
              pos.danielsaptianus.my.id
            </a>{" "}
            &amp;{" "}
            <a
              href="https://chat.danielsaptianus.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              chat.danielsaptianus.my.id
            </a>
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Back to Top</span>
        </button>
      </div>
    </footer>
  );
}
