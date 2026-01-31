import HeroSection from "./components/HeroSection";
import TributeSection from "./components/TributeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import MyExperienceSection from "./components/MyExperience";
import CustomizedTimeline from "./components/MovTimeline";

export default function Home() {
  return (
    <div className="container mt-24 mx-auto px-4 py-4 md:px-12">
      <HeroSection />
      <TributeSection />
      <AboutSection />
      <MyExperienceSection />
      <CustomizedTimeline />
      <ProjectsSection />
      <EmailSection />
    </div>
  );
}
