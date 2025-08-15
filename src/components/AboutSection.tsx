import { Card } from "@/components/ui/card";
import { Heart, Code, Palette, Brain } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development", 
      description: "Building responsive, interactive web applications"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Solutions",
      description: "Integrating smart technology to solve real problems"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Open Source Contributor",
      description: "Active contributor to open source projects and hackathon participant"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Passionate about solving real-world challenges through technology"
    }
  ];

  return (
    <section className="py-20 relative" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-primary font-medium mb-4">
            "I believe technology should feel human — intuitive, beautiful, and impactful."
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Computer Science undergraduate specializing in <span className="text-primary font-semibold">frontend development and AI-powered solutions</span>. As an <span className="text-primary font-semibold">active open source contributor</span>, I love collaborating on projects that make a difference and participating in hackathons to solve real-world challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or participating in hackathons. I'm driven by the challenge of building innovative solutions that have a positive impact on people's lives.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="https://tinyurl.com/Nikhitha-R-S" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-glow transition-colors font-medium">
                Resume →
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 glow-on-hover group"
              >
                <div className="text-primary mb-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;