import { Heart, Users } from "lucide-react";

const Volunteering = () => {
  const volunteerActivities = [
    {
      title: "Mission Crusader 2024",
      description: "Participated in a cycle rally organized by the Youth Red Cross of Easwari Engineering College, spreading awareness and raising support for cancer patients.",
      quote: "Together, we ride for a cause.",
      icon: Heart,
    },
    {
      title: "Walkathon 2024",
      description: "Volunteered with Gandhi World Foundation and Youth Red Cross at Chennai's Elliot Beach, supporting health, community, and happiness in giving back to society.",
      icon: Users,
    },
  ];

  return (
    <section id="volunteering" className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Volunteering</h2>
            <p className="text-xl text-muted-foreground">
              Active member of the Youth Red Cross, finding joy in contributing towards collective good and uplifting communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {volunteerActivities.map((activity, index) => (
              <div
                key={index}
                className="p-6 glass rounded-xl space-y-4 animate-fade-in glow-hover"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl w-fit">
                  <activity.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{activity.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
                {activity.quote && (
                  <p className="text-primary font-medium italic">"{activity.quote}"</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
