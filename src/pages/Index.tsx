import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Skills from "@/components/sections/Skills";
import Volunteering from "@/components/sections/Volunteering";
import Books from "@/components/sections/Books";
import Hobbies from "@/components/sections/Hobbies";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <Skills />
      <Volunteering />
      <Books />
      <Hobbies />
      <Contact />
    </div>
  );
};

export default Index;
