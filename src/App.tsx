import { useTheme } from "@/hooks/useTheme";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Homelab } from "@/components/Homelab";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function App() {
  const { theme, toggle } = useTheme();
  useScrollReveal();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <div className="grid-bg" aria-hidden="true" />

      <Navigation theme={theme} onToggleTheme={toggle} />

      <main id="main">
        <Hero />
        <Skills />
        <Homelab />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
