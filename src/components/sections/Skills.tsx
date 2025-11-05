import { Code2, Users } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    "Python", "C++", "HTML", "CSS", "JavaScript", "React",
    "GitHub", "MySQL", "Node.js", "Flask", "MongoDB"
  ];

  const softSkills = [
    "Leadership", "Communication", "Team Management",
    "Problem Solving", "Creativity"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="p-8 glass rounded-xl space-y-6 animate-fade-in glow-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Technical Skills</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 glass rounded-xl space-y-6 animate-fade-in glow-hover" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Soft Skills</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent/10 text-foreground rounded-full font-medium hover:bg-accent/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
