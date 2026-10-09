"use client";

import { useState } from "react";
import { ExternalLink, ShoppingCart, MessageSquare, Zap, Shield, Users, Bell, CheckCircle2, Globe } from "lucide-react";

export default function SubdomainsShowcase() {
  const [activeSubdomain, setActiveSubdomain] = useState<"pos" | "chat">("pos");

  return (
    <section id="subdomains" className="py-24 bg-[#0a0e17] border-y border-white/5 relative">
      {/* Background accents (GPU-optimized radial gradients) */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle, rgba(2, 132, 199, 0.10) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.10) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-medium text-slate-300">
            <span>⭐ Featured Subdomain Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Production Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Dua sistem aplikasi mandiri yang aktif berjalan di subdomain resmi saya. Klik tombol di bawah untuk berganti preview dan arsitektur teknisnya.
          </p>

          {/* Subdomain Switcher Buttons */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <button
              onClick={() => setActiveSubdomain("pos")}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 border ${
                activeSubdomain === "pos"
                  ? "bg-sky-500/20 text-sky-300 border-sky-500/50 shadow-lg shadow-sky-500/20"
                  : "bg-slate-900/60 text-slate-400 border-white/10 hover:text-white hover:bg-slate-800"
              }`}
            >
              <span className="relative flex h-2.5 w-2.5">
                {activeSubdomain === "pos" && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                )}
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
              </span>
              <ShoppingCart className="w-4 h-4 text-sky-400" />
              <span>Point of Sales (pos.danielsaptianus.my.id)</span>
            </button>

            <button
              onClick={() => setActiveSubdomain("chat")}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 border ${
                activeSubdomain === "chat"
                  ? "bg-purple-500/20 text-purple-300 border-purple-500/50 shadow-lg shadow-purple-500/20"
                  : "bg-slate-900/60 text-slate-400 border-white/10 hover:text-white hover:bg-slate-800"
              }`}
            >
              <span className="relative flex h-2.5 w-2.5">
                {activeSubdomain === "chat" && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                )}
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
              </span>
              <MessageSquare className="w-4 h-4 text-purple-400" />
              <span>ChatSphere (chat.danielsaptianus.my.id)</span>
            </button>
          </div>
        </div>

        {/* ===================== SUBDOMAIN 1: POS SYSTEM ===================== */}
        {activeSubdomain === "pos" && (
          <div className="rounded-3xl border border-sky-500/30 bg-gradient-to-b from-slate-900 to-[#0b0f19] p-6 sm:p-10 shadow-xl shadow-black/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Info & Architecture */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                    Live Subdomain Deployment
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full border border-white/5">
                    <Globe className="w-3.5 h-3.5 text-sky-400" />
                    <span>pos.danielsaptianus.my.id</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Point of Sales (POS) Enterprise System
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Solusi kasir modern dengan arsitektur decoupled yang memisahkan client kasir responsif (Vue 3 + Pinia) dan RESTful API backend yang aman (NestJS + Prisma + PostgreSQL). Dilengkapi transaksi atomik database dan pengujian E2E Jest.
                  </p>
                </div>

                {/* Key Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5">
                    <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                      <Zap className="w-4 h-4" />
                      <span>NestJS &amp; Prisma Backend</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      API modular dengan validasi DTO ketat, Prisma ORM transaction lock, dan PostgreSQL.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5">
                    <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                      <ShoppingCart className="w-4 h-4" />
                      <span>Vue 3 &amp; Pinia Client</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      UI kasir responsif berbasis Vite dengan manajemen keranjang belanja reaktif dan state caching.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5">
                    <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>E2E Testing (Jest)</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Uji simulasi menyeluruh untuk Auth, kalkulasi transaksi kasir, dan konsistensi data stok.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5">
                    <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                      <Shield className="w-4 h-4" />
                      <span>Swagger OpenAPI Docs</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Dokumentasi endpoint RESTful interaktif yang siap dikonsumsi oleh tim multi-platform.
                    </p>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["NestJS", "PostgreSQL", "Prisma ORM", "Vue 3", "TypeScript", "Pinia Store", "Jest E2E", "Swagger"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-sky-950/60 text-sky-300 border border-sky-800/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://pos.danielsaptianus.my.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 transition-all hover:shadow-sky-500/40"
                  >
                    <span>Buka Live Demo POS</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setActiveSubdomain("chat")}
                    className="px-4 py-3 rounded-xl bg-slate-800/70 hover:bg-slate-700 text-slate-300 text-sm font-medium transition-colors"
                  >
                    Lihat ChatSphere (chat.) →
                  </button>
                </div>
              </div>

              {/* Right Column: Realistic Browser Mockup POS */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#080c14] shadow-2xl shadow-sky-900/30">
                  {/* Browser Bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#0d1424] border-b border-white/5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    <div className="flex-1 max-w-[260px] mx-auto bg-slate-900/90 rounded-md px-3 py-1 text-[11px] font-mono text-slate-400 text-center truncate border border-white/5">
                      pos.danielsaptianus.my.id/cashier
                    </div>
                  </div>

                  {/* Browser Content */}
                  <div className="p-4 space-y-4 font-sans">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <div className="text-white text-xs font-bold">POS Cashier Terminal</div>
                        <div className="text-[10px] text-slate-400">Shift #1 &bull; Kasir Aktif</div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Online &bull; v1.0
                      </span>
                    </div>

                    {/* POS Grid Preview */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { name: "Kopi Espresso", price: "Rp 24.000", tag: "Beverage" },
                        { name: "Croissant Almond", price: "Rp 28.000", tag: "Bakery" },
                        { name: "Matcha Latte", price: "Rp 32.000", tag: "Beverage" },
                        { name: "Beef Burger Deluxe", price: "Rp 45.000", tag: "Main" },
                      ].map((item, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-slate-900/90 border border-white/5 space-y-1">
                          <div className="text-[11px] font-semibold text-white truncate">{item.name}</div>
                          <div className="text-[10px] text-slate-400">{item.tag}</div>
                          <div className="text-xs font-mono font-bold text-sky-400">{item.price}</div>
                        </div>
                      ))}
                    </div>

                    {/* Cart Summary Bar */}
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-sky-500/30 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-slate-400">Items: 4 &bull; Tax: Included</div>
                        <div className="text-sm font-bold text-white font-mono">Total: Rp 129.000</div>
                      </div>
                      <div className="px-3 py-1.5 rounded-lg bg-sky-500 text-white text-xs font-semibold shadow-sm">
                        Checkout
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================== SUBDOMAIN 2: CHATSPHERE ===================== */}
        {activeSubdomain === "chat" && (
          <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-b from-slate-900 to-[#0b0f19] p-6 sm:p-10 shadow-xl shadow-black/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Info & Architecture */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                    Live Subdomain Deployment
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full border border-white/5">
                    <Globe className="w-3.5 h-3.5 text-purple-400" />
                    <span>chat.danielsaptianus.my.id</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    ChatSphere — Real-Time Chat &amp; Notification App
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Platform komunikasi instan modular monolith berbasis NestJS 11, Prisma 7, PostgreSQL, dan Socket.io. Menghadirkan perpesanan langsung 1-on-1, grup obrolan privat ala WhatsApp dengan alur persetujuan Admin/Owner, dan notifikasi real-time ganda.
                  </p>
                </div>

                {/* Key Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5">
                    <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                      <Zap className="w-4 h-4" />
                      <span>NestJS 11 + Socket.io</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      WebSocket real-time bidirectional event dengan room multiplexing dan status online member.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5">
                    <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                      <Shield className="w-4 h-4" />
                      <span>JWT Auth + RBAC</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Autentikasi token aman dengan pemisahan peran ADMIN/USER dan token reset password.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5">
                    <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                      <Users className="w-4 h-4" />
                      <span>WhatsApp-Style Group Approval</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Grup tertutup dengan tautan unik <code className="text-purple-300 font-mono">inv_xxx</code> dan alur persetujuan join oleh Admin.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5">
                    <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                      <Bell className="w-4 h-4" />
                      <span>Dual Notification System</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Peringatan pop-up toast floating real-time serta persistensi notifikasi di database PostgreSQL.
                    </p>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["NestJS 11", "Socket.io", "PostgreSQL 16+", "Prisma 7", "JWT RBAC", "WebSockets", "TypeScript", "Clean Architecture"].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-purple-950/60 text-purple-300 border border-purple-800/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://chat.danielsaptianus.my.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-purple-500/25 transition-all hover:shadow-purple-500/40"
                  >
                    <span>Buka Live Demo ChatSphere</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setActiveSubdomain("pos")}
                    className="px-4 py-3 rounded-xl bg-slate-800/70 hover:bg-slate-700 text-slate-300 text-sm font-medium transition-colors"
                  >
                    Lihat Proyek POS (pos.) →
                  </button>
                </div>
              </div>

              {/* Right Column: Realistic Browser Mockup Chat */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#080c14] shadow-2xl shadow-purple-900/30">
                  {/* Browser Bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#130f1e] border-b border-white/5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    <div className="flex-1 max-w-[260px] mx-auto bg-slate-900/90 rounded-md px-3 py-1 text-[11px] font-mono text-purple-300 text-center truncate border border-white/5">
                      chat.danielsaptianus.my.id/#chat
                    </div>
                  </div>

                  {/* Browser Content */}
                  <div className="p-4 space-y-3 font-sans">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center font-bold text-white text-[11px]">
                          CS
                        </div>
                        <div>
                          <div className="text-white text-xs font-bold">ChatSphere &bull; Core Group</div>
                          <div className="text-[10px] text-purple-400 font-mono">5 Members &bull; WebSocket Active</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        Live
                      </span>
                    </div>

                    {/* Chat Bubble Stream */}
                    <div className="space-y-2.5 py-2">
                      <div className="p-2.5 rounded-xl rounded-tl-none bg-slate-800/90 border border-white/5 text-[11px] text-slate-200 max-w-[85%] space-y-1">
                        <div className="text-[10px] font-bold text-purple-300">Daniel (Admin)</div>
                        <p>Sistem WebSocket NestJS dan invite link grup sudah online! Silakan coba kirim pesan.</p>
                        <div className="text-[9px] text-slate-400 text-right">10:30 AM &bull; ✓✓</div>
                      </div>

                      <div className="ml-auto p-2.5 rounded-xl rounded-tr-none bg-purple-900/40 border border-purple-500/30 text-[11px] text-white max-w-[85%] space-y-1">
                        <p>Halo Daniel! Notifikasi real-time toast dan pesan pribadi berjalan sangat cepat! 🚀</p>
                        <div className="text-[9px] text-purple-300 text-right">10:31 AM &bull; ✓✓</div>
                      </div>
                    </div>

                    {/* Chat Input Strip */}
                    <div className="p-2 rounded-xl bg-slate-900 border border-white/10 flex items-center gap-2">
                      <div className="flex-1 text-[11px] text-slate-500 px-2 truncate">
                        Ketik pesan pribadi atau pesan grup...
                      </div>
                      <div className="w-6 h-6 rounded-lg bg-purple-600 flex items-center justify-center text-white text-xs">
                        ➤
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
