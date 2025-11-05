import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Achievements />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
