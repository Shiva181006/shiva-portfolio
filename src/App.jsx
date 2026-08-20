import { ThemeProvider } from "@/components/theme-provider.jsx";
import { Toaster } from "sonner";
import { Loader } from "./features/layout/Loader.jsx";
import { ScrollProgress } from "./features/layout/ScrollProgress.jsx";
import { Navbar } from "./features/layout/Navbar.jsx";
import { Hero } from "./features/hero/Hero.jsx";
import { TechMarquee } from "./features/layout/TechMarquee.jsx";
import { AboutSection } from "./features/about/AboutSection.jsx";
import { SkillsSection } from "./features/skills/SkillsSection.jsx";
import { ProjectsSection } from "./features/projects/ProjectsSection.jsx";
import { JourneySection } from "./features/journey/JourneySection.jsx";
import { CertificationsSection } from "./features/certifications/CertificationsSection.jsx";
import { ContactSection } from "./features/contact/ContactSection.jsx";
import { Footer } from "./features/layout/Footer.jsx";
import { BackToTop } from "./features/layout/BackToTop.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <Loader />
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
        <Navbar />
        <main>
          <Hero />
          <TechMarquee />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <JourneySection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
      <Toaster theme="dark" position="bottom-right" />
    </ThemeProvider>
  );
}
