import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Let's Connect</h2>
            <p className="text-xl text-muted-foreground">
              Feel free to reach out for collaborations, opportunities, or just to say hi.
            </p>
          </div>

          <div className="flex justify-center gap-6 animate-fade-in">
            <a
              href="https://www.linkedin.com/in/umayal-n-1a606631b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 glass rounded-full glow-hover group"
            >
              <Linkedin className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/UMAYAL-N"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 glass rounded-full glow-hover group"
            >
              <Github className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=numayalnatarajan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 glass rounded-full glow-hover group"
            >
              <Mail className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
