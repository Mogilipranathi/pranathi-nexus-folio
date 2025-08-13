import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Eye } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Futuristic background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background-secondary/60 to-background/90" />
      </div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="font-orbitron text-6xl md:text-8xl font-bold text-gradient">
              Mogili Pranathi
            </h1>
            <h2 className="font-orbitron text-2xl md:text-4xl font-medium text-primary-glow">
              Full Stack Developer
            </h2>
            <p className="font-inter text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building intelligent, impactful, and future-ready digital solutions 
              with cutting-edge technologies and innovative approaches.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="glass-card bg-primary text-primary-foreground hover:bg-primary-glow border-primary/50 neon-glow group transition-all duration-300"
            >
              <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass-card border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground neon-glow-secondary group transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary opacity-70" />
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl floating" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl floating-delayed" />
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent/20 rounded-full blur-xl floating" />
    </section>
  );
};

export default HeroSection;