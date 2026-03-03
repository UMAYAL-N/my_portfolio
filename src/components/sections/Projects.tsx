import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Shasthra Techathon",
      description: "Predictive analysis that predicts temperature data using real-time data and pattern recognition.",
      tech: ["Python", "Machine Learning", "OpenCV", "Flask"],
      highlight: "Top 50 Finalist – Shaastra Techathon, IIT Madras",
    },
    {
      title: "MapMyMemoir",
      description: "An interactive location-based memory journaling platform with a responsive map interface, enabling users to create, view, and manage geo-tagged memories with real-time storage.",
      tech: ["HTML", "CSS", "JavaScript", "PostgreSQL", "API Keys"],
      github: "https://github.com/UMAYAL-N/mmm",
    },
    {
      title: "CopBot",
      description: "Interactive Police Service Chatbot with LLaMA model for natural language understanding and complaint registration.",
      tech: ["LLaMA", "Flask", "React", "Node.js", "MongoDB"],
      github: "https://github.com/UMAYAL-N/copbot",
    },
    {
      title: "PinToProgress",
      description: "Personal productivity tracker using LocalStorage for goal tracking and daily updates with optimized UI.",
      tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      github: "https://github.com/UMAYAL-N/Pin-To-Progress",
    },
    {
      title: "TheDailyPulse",
      description: "Real-time news aggregator with category-based feeds using NewsAPI for staying updated with current events.",
      tech: ["HTML", "CSS", "JavaScript", "NewsAPI"],
      github: "https://github.com/UMAYAL-N/The-Daily-Pulse",
    },
    {
      title: "WeatherCast",
      description: "Live weather monitor powered by OpenWeather API showing forecast and temperature data with responsive design.",
      tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
      github: "https://github.com/UMAYAL-N/weathercast",
    },
    {
      title: "AcciAlert",
      description: "Automated Accident Detection System with real-time SMS/call alerts using motion detection and Twilio API.",
      tech: ["Python", "OpenCV", "Twilio API"],
      github: "https://github.com/UMAYAL-N/Acci-Alert",
    },
    {
      title: "PrioQ",
      description: "Intelligent Queue Optimization System using AI-powered crowd detection and dynamic wait-time estimation.",
      tech: ["Python", "OpenCV", "Flask", "React", "MongoDB"],
    },
    {
      title: "SafePath",
      description: "Real-Time Safety Wearable that detects distress signals and sends automated alerts to emergency contacts.",
      tech: ["IoT", "Embedded Systems", "Python"],
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
              className="p-6 glass rounded-xl space-y-4 animate-fade-in glow-hover relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                  aria-label="GitHub repository"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}

              <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>

              {project.highlight && (
                <p className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-lg">
                  🏅 {project.highlight}
                </p>
              )}

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
