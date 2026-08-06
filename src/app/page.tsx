import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import EducationSection from "@/components/education/EducationSection";
import AchievementsSection from "@/components/achievements/AchievementsSection";
import CertificatesSection from "@/components/certificates/CertificatesSection";
import TechOrbitSection from "@/components/tech-stack/TechOrbitSection";
import GithubSection from "@/components/github/GithubSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#030712] min-h-screen text-slate-100 selection:bg-primary/30 selection:text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <AchievementsSection />
      <CertificatesSection />
      <TechOrbitSection />
      <GithubSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
