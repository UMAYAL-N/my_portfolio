import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "numayalnatarajan@gmail.com",
      href: "mailto:numayalnatarajan@gmail.com",
    },
    {
      icon: Linkedin,
      label: "linkedin.com/in/umayal-n-1a606631b",
      href: "https://www.linkedin.com/in/umayal-n-1a606631b",
    },
    {
      icon: Github,
      label: "github.com/UMAYAL-N",
      href: "https://github.com/UMAYAL-N",
    },
    {
      icon: MapPin,
      label: "Chennai, India",
      href: "#",
    },
  ];

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

          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="glass"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="glass"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="glass"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-hover">
                Send Message
              </Button>
            </form>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass rounded-xl glow-hover group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {info.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="https://www.linkedin.com/in/umayal-n-1a606631b"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 glass rounded-full glow-hover group"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://github.com/UMAYAL-N"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 glass rounded-full glow-hover group"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:numayalnatarajan@gmail.com"
            className="p-4 glass rounded-full glow-hover group"
          >
            <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
