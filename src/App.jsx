import { ThemeProvider } from "@/components/theme-provider.jsx";
import { Toaster } from "sonner";
import { Navbar } from "@/components/portfolio/Navbar.jsx";
import { Hero } from "@/components/portfolio/Hero.jsx";
import { TechMarquee } from "@/components/portfolio/TechMarquee.jsx";
import { About } from "@/components/portfolio/About.jsx";
import { Stats } from "@/components/portfolio/Stats.jsx";
import { Skills } from "@/components/portfolio/Skills.jsx";
import { Projects } from "@/components/portfolio/Projects.jsx";
import { Journey } from "@/components/portfolio/Journey.jsx";
import { Testimonials } from "@/components/portfolio/Testimonials.jsx";
import { Certifications } from "@/components/portfolio/Certifications.jsx";
import { Contact } from "@/components/portfolio/Contact.jsx";
import { Footer } from "@/components/portfolio/Footer.jsx";
import { Cursor } from "@/components/portfolio/Cursor.jsx";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress.jsx";
import { BackToTop } from "@/components/portfolio/BackToTop.jsx";
import { Loader } from "@/components/portfolio/Loader.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <Loader />
      <ScrollProgress />
      <Cursor />
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <TechMarquee />
          <About />
          <Stats />
          <Skills />
          <Projects />
          <Journey />
          <Testimonials />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
      <Toaster theme="dark" position="bottom-right" />
    </ThemeProvider>
  );
}
