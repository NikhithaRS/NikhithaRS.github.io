import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "nikhithan20@gmail.com",
      href: "mailto:nikhithan20@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/nikhitha-rs",
      description: "Professional networking"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/nikhitha-rs",
      description: "Explore my repositories"
    }
  ];

  return (
    <section className="py-20 relative" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Collaborate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Ready to bring your ideas to life? Let's chat over new ideas and create something amazing together.
          </p>
          <div className="flex items-center justify-center gap-2 text-primary">
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">Let's collaborate or chat over new ideas!</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className="p-6 text-center bg-gradient-card border-border/50 hover:border-primary/50 glow-on-hover group transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {method.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{method.label}</h3>
                <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                <Button 
                  variant="glowing" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                  onClick={() => window.open(method.href, '_blank')}
                >
                  {method.value}
                </Button>
              </Card>
            ))}
          </div>

          <Card className="p-8 text-center bg-gradient-hero border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Start a Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Whether it's a UI/UX project, frontend development, or AI integration, I'm here to help bring your vision to reality.
              </p>
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => window.open('mailto:nikhithan20@gmail.com', '_blank')}
                className="group"
              >
                Start a Conversation
                <Mail className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;