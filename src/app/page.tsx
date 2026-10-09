import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SubdomainsShowcase from "@/components/SubdomainsShowcase";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0b0f19] text-slate-100">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SubdomainsShowcase />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
