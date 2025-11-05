import { Award, Trophy, Medal } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Runner-Up",
      event: "Bit for Code Wars, Kratos 2024",
      institution: "Easwari Engineering College",
      icon: Trophy,
    },
    {
      title: "2nd Prize",
      event: "Mathematical Modelling on Fourier Transform",
      date: "May 2024",
      icon: Medal,
    },
    {
      title: "Top 50 Finalist",
      event: "Shaastra ML Hackathon",
      institution: "IIT Madras",
      icon: Award,
    },
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Achievements
        </h2>

        <div className="flex overflow-x-auto gap-8 pb-8 scrollbar-hide">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="min-w-[350px] p-8 glass rounded-xl space-y-4 animate-fade-in glow-hover"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{achievement.title}</h3>
                  {achievement.date && (
                    <p className="text-sm text-muted-foreground">{achievement.date}</p>
                  )}
                </div>
              </div>

              <p className="text-lg text-foreground font-medium">{achievement.event}</p>
              {achievement.institution && (
                <p className="text-muted-foreground">{achievement.institution}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
