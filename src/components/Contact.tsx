"use client";

import { useState } from "react";
import { Mail, Check, Copy, ExternalLink, Send, ShoppingCart, MessageSquare } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.81a1.45 1.45 0 0 0-1.45 1.45 1.45 1.45 0 0 0 1.45 1.45 1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0-1.45-1.45Z" />
    </svg>
  );
}

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const email = portfolioData.profile.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0e17] border-t border-white/5 relative">
      {/* Toast Alert */}
      {copiedEmail && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 text-white font-medium text-sm shadow-xl shadow-emerald-500/20 animate-in fade-in slide-in-from-bottom-5">
          <Check className="w-4 h-4" />
          <span>Email {email} berhasil disalin ke clipboard!</span>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Info & Methods */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-xs font-medium text-slate-300">
                <span>📬 Get In Touch</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Let&apos;s Build Something Robust Together
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Tertarik merekrut saya sebagai Backend Engineer atau ingin mendiskusikan arsitektur sistem proyek Anda? Jangan ragu untuk mengirim pesan atau menyalin email langsung.
                </p>
              </div>

              {/* Contact Cards Grid */}
              <div className="space-y-3 pt-2">
                {/* Email Method */}
                <div className="p-4 rounded-xl bg-slate-800/60 border border-white/5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                      <div className="text-sm font-semibold text-white truncate font-mono">
                        {email}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700/80 hover:bg-slate-600 text-slate-200 text-xs font-medium transition-colors shrink-0"
                    title="Salin Email"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>

                {/* LinkedIn */}
                <div className="p-4 rounded-xl bg-slate-800/60 border border-white/5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <LinkedInIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">LinkedIn Profile</div>
                      <div className="text-sm font-semibold text-white">Daniel Hulio Saptianus</div>
                    </div>
                  </div>

                  <a
                    href={portfolioData.profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
                  >
                    <span>Connect</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Subdomains Quick Cards */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href="https://pos.danielsaptianus.my.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-sky-950/40 border border-sky-800/40 hover:border-sky-500/50 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4 text-sky-400" />
                      <span className="text-xs font-medium text-sky-300">Live POS</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                  </a>

                  <a
                    href="https://chat.danielsaptianus.my.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40 hover:border-purple-500/50 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-medium text-purple-300">Live Chat</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Nama Anda
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. John Doe / Tech Recruiter"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="formEmail" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Alamat Email
                  </label>
                  <input
                    id="formEmail"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subjek / Topik
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Backend Engineer Opportunity / Kolaborasi Proyek"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tuliskan pesan atau detail penawaran Anda di sini..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 transition-all hover:shadow-sky-500/40"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan via Email Client</span>
                </button>

                {submitted && (
                  <p className="text-center text-xs text-emerald-400 pt-1">
                    Email client Anda telah dibuka dengan template pesan ini!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
