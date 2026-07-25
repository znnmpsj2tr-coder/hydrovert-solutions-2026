import BeforeAfter from "./components/BeforeAfter";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <BeforeAfter />
        <Timeline />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
