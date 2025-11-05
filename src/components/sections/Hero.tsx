import { Button } from "@/components/ui/button";
import { ChevronDown, Code2, Cpu, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground">Hi, I'm</p>
            <h1 className="text-6xl md:text-7xl font-bold gradient-text leading-tight font-serif tracking-wide">
              N. Umayal
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Curious mind. Code lover. Problem solver.
            </p>

            <div className="flex gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-hover"
              >
                View Projects
              </Button>
              <Button
                onClick={() => window.open("/Umayal_N_Resume.pdf", "_blank")}
                variant="outline"
                size="lg"
                className="glow-hover"
              >
                Resume
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
              
              <div className="relative z-10 grid grid-cols-3 gap-8">
                <div className="col-span-3 flex justify-center">
                  <div className="p-6 glass rounded-2xl glow-card animate-float">
                    <Code2 className="w-16 h-16 text-primary" />
                  </div>
                </div>
                <div className="p-6 glass rounded-2xl glow-card animate-float" style={{ animationDelay: "0.2s" }}>
                  <Cpu className="w-12 h-12 text-primary" />
                </div>
                <div className="p-6 glass rounded-2xl glow-card animate-float" style={{ animationDelay: "0.4s" }}>
                  <Sparkles className="w-12 h-12 text-primary" />
                </div>
                <div className="p-6 glass rounded-2xl glow-card animate-float" style={{ animationDelay: "0.6s" }}>
                  <Code2 className="w-12 h-12 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
