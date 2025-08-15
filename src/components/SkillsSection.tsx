import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Database, Smartphone } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Next.js", "Framer Motion"],
      color: "bg-primary/10 border-primary/20"
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="w-6 h-6" />,
      skills: ["Figma", "UI/UX Design", "Responsive Design", "Prototyping"],
      color: "bg-accent/10 border-accent/20"
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["Python", "Node.js", "MongoDB", "Firebase", "REST APIs"],
      color: "bg-primary-glow/10 border-primary-glow/20"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["Flutter", "Dart", "Cross-platform", "Mobile UI"],
      color: "bg-accent-glow/10 border-accent-glow/20"
    }
  ];

  return (
    <section className="py-20 relative bg-secondary/20" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`p-6 ${category.color} border glow-on-hover group hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-background/30 text-primary group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="mr-2 mb-2 bg-background/20 hover:bg-primary/20 transition-colors text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-gradient-card border-primary/20 glow-on-hover">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Always Learning</h3>
            <p className="text-muted-foreground max-w-md">
              I'm constantly exploring new technologies, design trends, and development practices to stay at the forefront of innovation.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;