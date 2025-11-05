import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "PrioQ",
      description: "Intelligent Queue Optimization System using AI-powered crowd detection and dynamic wait-time estimation.",
      tech: ["Python", "OpenCV", "Flask", "React", "MongoDB"],
      github: "#",
    },
    {
      title: "CopBot",
      description: "Interactive Police Service Chatbot with LLaMA model for natural language understanding and complaint registration.",
      tech: ["LLaMA", "Flask", "React", "Node.js", "MongoDB"],
      github: "#",
    },
    {
      title: "SafePath",
      description: "Real-Time Safety Wearable that detects distress signals and sends automated alerts to emergency contacts.",
      tech: ["IoT", "Embedded Systems", "Python"],
      github: "#",
    },
    {
      title: "AcciAlert",
      description: "Automated Accident Detection System with real-time SMS/call alerts using motion detection and Twilio API.",
      tech: ["Python", "OpenCV", "Twilio API"],
      github: "#",
    },
    {
      title: "TheDailyPulse",
      description: "Real-time news aggregator with category-based feeds using NewsAPI for staying updated with current events.",
      tech: ["HTML", "CSS", "JavaScript", "NewsAPI"],
      github: "#",
    },
    {
      title: "WeatherCast & PinToProgress",
      description: "Live weather monitor and personal productivity tracker showcasing strong UI and API integration skills.",
      tech: ["HTML", "CSS", "JavaScript", "APIs"],
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 glass rounded-xl space-y-4 animate-fade-in glow-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full group"
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
