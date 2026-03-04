import { useTheme } from "@/hooks/useTheme";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function App() {
  const { toggle } = useTheme();
  useScrollReveal();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <div className="grid-bg" aria-hidden="true" />

      <Navigation onToggleTheme={toggle} />

      <main id="main">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
