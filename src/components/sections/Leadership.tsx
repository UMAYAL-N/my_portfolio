import { Users } from "lucide-react";

const Leadership = () => {
  return (
    <section id="leadership" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Leadership
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="p-8 glass rounded-xl space-y-4 animate-fade-in glow-hover">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-lg">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Organizer – Code Arena, Kratos 2025
                </h3>
                <p className="text-muted-foreground">
                  Easwari Engineering College | National-Level Technical Symposium
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Proud to have been part of the organizing team for{" "}
              <span className="text-primary font-medium">CODE ARENA</span>, a coding event 
              conducted by the Department of Computer Science and Engineering as part of the 
              National-Level Technical Symposium KRATOS 2025 at Easwari Engineering College.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              The event brought together talented coders to solve real-time programming challenges, 
              celebrating teamwork, creativity, and problem-solving. Contributing to its planning 
              and execution was an enriching experience that strengthened my skills in leadership, 
              collaboration, and event coordination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
