import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'nav-glass py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="font-orbitron font-bold text-xl text-gradient">
            MP
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`relative font-inter transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-primary neon-glow'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary neon-glow rounded-full" />
                )}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            className="glass-card border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 neon-glow"
            onClick={() => window.open('https://drive.google.com/file/d/1ws8hobEvupS0fnQir6C_bXGduJuIqSjz/view', '_blank')}
            >
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;