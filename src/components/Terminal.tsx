"use client";

import { useState } from "react";
import { Check, Copy, FileCode, Layers, ShoppingCart, MessageSquare } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Terminal() {
  const [activeTab, setActiveTab] = useState("tab-profile");
  const [copied, setCopied] = useState(false);

  const tabs = portfolioData.terminalTabs;
  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTab.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getTabIcon = (id: string) => {
    switch (id) {
      case "tab-profile":
        return <FileCode className="w-3.5 h-3.5" />;
      case "tab-stack":
        return <Layers className="w-3.5 h-3.5" />;
      case "tab-pos":
        return <ShoppingCart className="w-3.5 h-3.5" />;
      case "tab-chat":
        return <MessageSquare className="w-3.5 h-3.5" />;
      default:
        return <FileCode className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0d131f] shadow-2xl shadow-black/40">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#080d16] border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          <span className="text-xs text-slate-400 font-mono ml-2">daniel@danielsaptianus.my.id: ~</span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
          title="Copy snippet"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-mono">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-mono">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal Tabs */}
      <div className="flex overflow-x-auto bg-[#0a0f1b] border-b border-white/5 px-2 pt-2 scrollbar-none">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-t-lg transition-all duration-200 border-t border-x ${
                isActive
                  ? "bg-[#0d131f] text-sky-400 border-white/10 border-b-transparent -mb-[1px]"
                  : "bg-transparent text-slate-400 hover:text-slate-200 border-transparent"
              }`}
            >
              {getTabIcon(tab.id)}
              <span>{tab.filename}</span>
            </button>
          );
        })}
      </div>

      {/* Terminal Body */}
      <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto max-h-[360px] scrollbar-thin">
        <pre className="whitespace-pre">
          <code>{currentTab.code}</code>
        </pre>
      </div>
    </div>
  );
}
