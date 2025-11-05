import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Easwari Engineering College, Chennai",
      degree: "B.E. Computer Science and Engineering",
      gpa: "9.48",
      year: "Graduating 2027",
      highlight: "Top 50 Finalist – Shaastra ML Hackathon @ IIT Madras",
      icon: GraduationCap,
    },
    {
      institution: "D.A.V. School, Adambakkam",
      degree: "12th CBSE: 93% | 10th CBSE: 96%",
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Education
        </h2>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-20 animate-fade-in glow-hover"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-0 p-4 glass rounded-full glow-card">
                  <edu.icon className="w-8 h-8 text-primary" />
                </div>

                <div className="p-6 glass rounded-xl space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">{edu.institution}</h3>
                  <p className="text-lg text-muted-foreground">{edu.degree}</p>
                  {edu.gpa && (
                    <div className="flex gap-4 text-sm">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                        GPA: {edu.gpa}
                      </span>
                      <span className="px-3 py-1 bg-accent/10 text-foreground rounded-full font-medium">
                        {edu.year}
                      </span>
                    </div>
                  )}
                  {edu.highlight && (
                    <p className="text-sm text-primary font-medium flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      {edu.highlight}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
