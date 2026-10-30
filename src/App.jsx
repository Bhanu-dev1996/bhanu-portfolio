import { MotionConfig } from "framer-motion";
import { useTheme } from "./hooks/useTheme";
import ScrollProgress, { BackToTop } from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ProjectShowcase from "./components/ProjectShowcase";
import DesignShowcase from "./components/DesignShowcase";
import DesignProcess from "./components/DesignProcess";
import AIWorkflow from "./components/AIWorkflow";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <CustomCursor />
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main id="content">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <ProjectShowcase />
          <DesignShowcase />
          <DesignProcess />
          <AIWorkflow />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </MotionConfig>
  );
}