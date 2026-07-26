import BeforeAfter from "./components/BeforeAfter";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HydroseedingStory from "./components/HydroseedingStory";
import KineticBand from "./components/KineticBand";
import Navbar from "./components/Navbar";
import ProjectExperience from "./components/ProjectExperience";
import ServiceCommitment from "./components/ServiceCommitment";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <KineticBand />
        <HydroseedingStory />
        <WhyUs />
        <ProjectExperience />
        <Services />
        <BeforeAfter />
        <ServiceCommitment />
        <Timeline />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
