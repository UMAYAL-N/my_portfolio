import { Brain, Code, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in">
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex justify-center gap-6">
                  <div className="p-8 glass rounded-2xl glow-card">
                    <Brain className="w-20 h-20 text-primary" />
                  </div>
                </div>
                <div className="flex justify-center gap-6">
                  <div className="p-6 glass rounded-2xl glow-card">
                    <Code className="w-16 h-16 text-primary" />
                  </div>
                  <div className="p-6 glass rounded-2xl glow-card">
                    <Lightbulb className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-primary font-semibold">N. Umayal</span>, a passionate and detail-driven Computer Science Engineer who enjoys solving real-world problems through technology. I love turning ideas into impactful projects — whether that's designing AI systems, developing web applications, or building prototypes that serve a social purpose.
              </p>
              <p>
                My interests lie in <span className="text-foreground font-medium">artificial intelligence, full-stack web development, and automation systems</span>. I believe in creating technology that's practical, scalable, and user-friendly.
              </p>
              <p>
                Through various hackathons and collaborations, I've developed a mindset of innovation, teamwork, and continuous learning — which guide me in every project I take on.
              </p>
            </div>

            <div className="mt-8 p-6 glass rounded-xl border-l-4 border-primary">
              <p className="text-lg italic text-foreground">
                "Turning ideas into solutions that make life simpler."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
