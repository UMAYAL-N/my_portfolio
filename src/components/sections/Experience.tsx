import { Briefcase, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Organizer – Code Arena",
      organization: "Kratos 2025, Department of CSE",
      institution: "Easwari Engineering College",
      description: "Part of the organizing team for CODE ARENA, a coding event conducted as part of the National-Level Technical Symposium KRATOS 2025. The event brought together talented coders to solve real-time programming challenges, celebrating teamwork, creativity, and problem-solving.",
      icon: Users,
    },
    {
      title: "Intern",
      organization: "InterPe",
      period: "Sept 2024 – Oct 2024",
      location: "Chennai",
      description: "Designed and developed Python-based projects such as Connect Four, Snake & Ladders, Tic Tac Toe, and a Digital Clock. Strengthened skills in logic building, GUI development, and problem-solving through hands-on work.",
      icon: Briefcase,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Experience
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 glass rounded-xl space-y-3 animate-fade-in glow-hover"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <exp.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-lg text-primary font-medium">{exp.organization}</p>
                  {exp.institution && (
                    <p className="text-sm text-muted-foreground">{exp.institution}</p>
                  )}
                  {exp.period && (
                    <p className="text-sm text-muted-foreground">
                      {exp.period} {exp.location && `| ${exp.location}`}
                    </p>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
