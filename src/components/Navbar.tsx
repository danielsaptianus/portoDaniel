"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ExternalLink, Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // 1. Optimized passive scroll listener for navbar background state
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // 2. High-performance IntersectionObserver for active section (zero layout thrashing)
    const sectionIds = ["home", "subdomains", "experience", "projects", "skills", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { href: "#home", label: "About", id: "home" },
    { href: "#subdomains", label: "Live Subdomains", id: "subdomains" },
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#projects", label: "Portfolio", id: "projects" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-150 ${
        isScrolled
          ? "bg-[#0b0f19] border-b border-white/10 shadow-lg shadow-black/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-200">
            DS
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-base leading-tight group-hover:text-sky-400 transition-colors">
              Daniel Saptianus
            </span>
            <span className="text-xs text-slate-400 font-mono">danielsaptianus.my.id</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/95 p-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-sky-500/20 text-sky-300 border border-sky-500/30 shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Fast Access Subdomains */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://pos.danielsaptianus.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/20 text-sky-400 text-xs font-medium transition-all group"
            title="Subdomain POS System"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span className="font-mono">pos.</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="https://chat.danielsaptianus.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-purple-400 text-xs font-medium transition-all group"
            title="Subdomain ChatSphere"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="font-mono">chat.</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-sky-500/25 transition-all hover:shadow-sky-500/40"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1422] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  activeSection === link.id
                    ? "bg-sky-500/20 text-sky-400"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="https://pos.danielsaptianus.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 rounded-lg bg-sky-500/10 text-sky-400 text-sm font-medium border border-sky-500/20"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                <span>Subdomain POS (pos.danielsaptianus.my.id)</span>
              </div>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="https://chat.danielsaptianus.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 rounded-lg bg-purple-500/10 text-purple-400 text-sm font-medium border border-purple-500/20"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                <span>Subdomain Chat (chat.danielsaptianus.my.id)</span>
              </div>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
