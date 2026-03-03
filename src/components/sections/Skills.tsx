const Skills = () => {
  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "C++", "C"]
    },
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      category: "Database",
      skills: ["MySQL"]
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "PowerBI", "AutoCAD"]
    }
  ];

  const softSkills = [
    "Leadership",
    "Communication",
    "Team Management",
    "Problem Solving",
    "Creativity"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Skills
        </h2>

        <div className="space-y-8 max-w-4xl mx-auto animate-fade-in">
          {/* Technical Skills Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Technical Skills</h3>
            <div className="grid grid-cols-1 gap-6">
              {technicalSkills.map((skillGroup, index) => (
                <div
                  key={index}
                  className="p-6 glass rounded-xl space-y-4 glow-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-lg font-semibold text-foreground">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills Section */}
          <div className="p-8 glass rounded-xl space-y-6 glow-hover" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-2xl font-bold text-primary">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent/10 text-foreground rounded-lg font-medium hover:bg-accent/20 transition-colors cursor-default"
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
