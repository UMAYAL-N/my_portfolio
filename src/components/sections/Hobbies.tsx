import { Palette, BookOpen, Sprout } from "lucide-react";

const Hobbies = () => {
  const hobbies = [
    {
      name: "Drawing",
      icon: Palette,
    },
    {
      name: "Reading",
      icon: BookOpen,
    },
    {
      name: "Planting",
      icon: Sprout,
    },
  ];

  return (
    <section id="hobbies" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center animate-fade-in">
            Hobbies
          </h2>

          <div className="flex justify-center gap-8 flex-wrap">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="p-8 glass rounded-2xl flex flex-col items-center gap-4 animate-fade-in glow-hover group min-w-[180px]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="p-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full group-hover:scale-110 transition-transform">
                  <hobby.icon className="w-12 h-12 text-primary" />
                </div>
                <p className="text-xl font-semibold text-foreground">{hobby.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
