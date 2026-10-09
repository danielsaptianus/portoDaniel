import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0b0f19",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://danielsaptianus.my.id"),
  title: {
    default: "Daniel Hulio Saptianus | Backend Engineer & Software Developer",
    template: "%s | Daniel Hulio Saptianus",
  },
  description:
    "Portfolio resmi Daniel Hulio Saptianus - Junior Backend Engineer spesialis NestJS, PostgreSQL, Prisma, Laravel, dan Clean Architecture. Live demo di pos.danielsaptianus.my.id dan chat.danielsaptianus.my.id.",
  keywords: [
    "Daniel Hulio Saptianus",
    "Daniel Saptianus",
    "Backend Engineer",
    "NestJS",
    "Prisma",
    "PostgreSQL",
    "Laravel",
    "Software Engineer Indonesia",
    "POS System",
    "ChatSphere",
    "Socket.io",
    "Clean Architecture",
  ],
  authors: [{ name: "Daniel Hulio Saptianus", url: "https://danielsaptianus.my.id" }],
  creator: "Daniel Hulio Saptianus",
  publisher: "Daniel Hulio Saptianus",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://danielsaptianus.my.id",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://danielsaptianus.my.id",
    siteName: "Daniel Saptianus Portfolio",
    title: "Daniel Hulio Saptianus | Backend Engineer Portfolio",
    description:
      "Junior Backend Engineer spesialis NestJS, PostgreSQL, Prisma, dan Clean Architecture. Menampilkan live subdomain POS (pos.) dan ChatSphere (chat.).",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Hulio Saptianus | Backend Engineer",
    description:
      "Portofolio resmi Daniel Hulio Saptianus. Junior Backend Engineer spesialis NestJS, Clean Architecture, & PostgreSQL.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Hulio Saptianus",
    jobTitle: "Junior Backend Engineer",
    url: "https://danielsaptianus.my.id",
    email: "huliosaptianusdaniel@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/daniel-hulio-saptianus-73a764294/",
      "https://github.com/danielsaptianus",
      "https://pos.danielsaptianus.my.id",
      "https://chat.danielsaptianus.my.id",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Universitas Pendidikan Indonesia",
    },
    knowsAbout: [
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
      "Socket.io",
      "Laravel",
      "Clean Architecture",
      "TypeScript",
      "Node.js",
    ],
  };

  return (
    <html lang="id" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans antialiased selection:bg-sky-500/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
