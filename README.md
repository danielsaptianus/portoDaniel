# Daniel Hulio Saptianus — Official Portfolio Website

Modern, high-performance portfolio website built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

- **Primary Domain:** [danielsaptianus.my.id](https://danielsaptianus.my.id)
- **Subdomain POS:** [pos.danielsaptianus.my.id](https://pos.danielsaptianus.my.id)
- **Subdomain Chat:** [chat.danielsaptianus.my.id](https://chat.danielsaptianus.my.id)

---

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4, Glassmorphism, Custom Theme Tokens
- **Icons:** Lucide React
- **Fonts:** Google Fonts (`Plus Jakarta Sans` & `JetBrains Mono` via `next/font`)
- **SEO & Structured Data:** JSON-LD Person Schema, OpenGraph, Canonical URLs, Sitemap & Robots.txt

---

## 📂 Project Structure

```text
portoDaniel/
├── public/                 # Static assets (robots.txt, sitemap.xml, favicon.svg)
├── src/
│   ├── app/
│   │   ├── globals.css     # Tailwind v4 import & custom glassmorphism styles
│   │   ├── layout.tsx      # RootLayout with SEO metadata & JSON-LD
│   │   └── page.tsx        # Main assembled portfolio page
│   ├── components/         # Modular UI components
│   │   ├── Navbar.tsx      # Glassmorphic header with live subdomain pulses
│   │   ├── Hero.tsx        # Hero headline & metrics
│   │   ├── Terminal.tsx    # Interactive tabbed code terminal
│   │   ├── SubdomainsShowcase.tsx # Tab switcher for POS & ChatSphere
│   │   ├── Experience.tsx  # Career timeline
│   │   ├── Projects.tsx    # Filterable project grid
│   │   ├── Skills.tsx      # Categorized skill badges
│   │   ├── Contact.tsx     # Direct email copy with toast + message form
│   │   └── Footer.tsx      # Footer with back-to-top button
│   └── data/
│       └── portfolioData.ts # Centralized content data (projects, skills, terminal)
├── package.json
└── tsconfig.json
```

---

## 🛠️ Development & Deployment

### 1. Jalankan di Lokal (Dev Mode)
```bash
npm run dev
```
Akses di browser pada: `http://localhost:3000` (atau `http://localhost:3001` jika port 3000 sedang terpakai).

### 2. Build Produksi (Static / Optimized)
```bash
npm run build
```

### 3. Cara Menambahkan Portofolio Baru
Cukup buka file [`src/data/portfolioData.ts`](file:///c:/laragon/www/portoDaniel/src/data/portfolioData.ts) dan tambahkan objek proyek baru ke dalam array `projects`. Halaman akan otomatis memperbarui tampilan dan filter kategorinya!
