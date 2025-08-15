import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span>and</span>
            <Code className="w-4 h-4 text-primary" />
            <span>by Nikhitha R S</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2024 Nikhitha R S. Crafting digital experiences that inspire.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;