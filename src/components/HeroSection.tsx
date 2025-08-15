import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, ExternalLink, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-primary-glow/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Image */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
              <img 
                src="/lovable-uploads/14f07726-8f1b-4038-8626-83dafe946003.png"
                alt="Nikhitha R S - Computer Science Student and Developer"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-primary/20 shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left animate-fade-in order-1 lg:order-2">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-primary animate-glow-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Building Innovative</span>
              <br />
              <span className="text-foreground">Solutions,</span>
              <br />
              <span className="gradient-text">Contributing to</span>
              <br />
              <span className="text-foreground">Open Source</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Hi, I'm <span className="text-primary font-semibold">Nikhitha R S</span>, a Computer Science undergrad passionate about frontend development, AI solutions, and open source contribution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToProjects}
                className="group"
              >
                View My Work
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="glowing" 
                size="lg" 
                onClick={scrollToContact}
                className="group"
              >
                <Mail className="mr-2 w-4 h-4" />
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;