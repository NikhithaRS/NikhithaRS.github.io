import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Brain, Activity, Video, Settings } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "BankTalk AI Chatbot UI",
      description: "Sleek, responsive chatbot interface with smooth animations and intuitive conversation flow.",
      icon: <Brain className="w-6 h-6" />,
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "UI/UX"],
      color: "bg-primary/10 border-primary/20"
    },
    {
      title: "AI-Powered Animal Rescue App",
      description: "Connects users to rescue centers and emergency vets with AI-powered pet health checks.",
      icon: <Brain className="w-6 h-6" />,
      tags: ["React", "AI Integration", "Geolocation", "Firebase"],
      color: "bg-accent/10 border-accent/20"
    },
    {
      title: "Modular Yoga Session App",
      description: "Smart yoga mat companion app syncing poses, audio, and images dynamically in Flutter.",
      icon: <Activity className="w-6 h-6" />,
      tags: ["Flutter", "Dart", "Real-time Sync", "Mobile"],
      color: "bg-primary-glow/10 border-primary-glow/20"
    },
    {
      title: "YouTube UI Clone (Flutter)",
      description: "Pixel-perfect replica with Home, Shorts, Search, and Player screens.",
      icon: <Video className="w-6 h-6" />,
      tags: ["Flutter", "Dart", "UI Clone", "Responsive"],
      color: "bg-accent-glow/10 border-accent-glow/20"
    },
    {
      title: "CI/CD DevOps Guide",
      description: "Technical guide on GitHub Actions + ArgoCD for fast, secure deployments.",
      icon: <Settings className="w-6 h-6" />,
      tags: ["DevOps", "CI/CD", "Docker", "Kubernetes"],
      color: "bg-secondary/20 border-secondary/30"
    }
  ];

  return (
    <section className="py-20 relative" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in UI/UX design, frontend development, and AI integration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden ${project.color} border glow-on-hover`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-background/50">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs bg-background/30 hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="teal" size="lg" className="group">
            View All Projects
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;