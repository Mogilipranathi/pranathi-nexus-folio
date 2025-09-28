<<<<<<< Updated upstream
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  gradient: string;
  demoLink?: string;
  githubLink?: string;
}
=======
import { Button } from '@/components/ui/button';
import { Github, Brain, Shield, Navigation, Heart } from 'lucide-react';
>>>>>>> Stashed changes

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
<<<<<<< Updated upstream
      title: 'AI-Powered Exam Preparation Web Application',
      description: 'Intelligent question paper summarization and study assistance platform with advanced ML algorithms for personalized learning experiences.',
      technologies: ['Python', 'Machine Learning', 'NLP', 'React', 'TensorFlow'],
      icon: '🎓',
      gradient: 'from-neon-cyan to-neon-blue',
      demoLink: 'https://github.com/Mogilipranathi/Smart-Prep-Ai',
      githubLink: 'https://github.com/Mogilipranathi/Smart-Prep-Ai'
    },
    {
      title: 'Women Safety IoT System',
      description: 'ESP32-based safety device with GPS tracking, sensors for real-time alerts, and emergency notification system for enhanced personal security.',
      technologies: ['ESP32', 'IoT', 'GPS', 'Sensors', 'Mobile App'],
      icon: '🛡️',
      gradient: 'from-neon-purple to-neon-pink'
    },
    {
      title: 'ATM Management System',
      description: 'Python-based ATM simulation system with secure transaction processing, account management, and banking operations.',
      technologies: ['Python', 'OOP', 'Banking Systems', 'Security'],
      icon: '🏧',
      gradient: 'from-neon-purple to-neon-pink',
      githubLink: 'https://github.com/Mogilipranathi/Atm.py'
    },
    {
      title: 'AlertAura - Emergency Alert System',
      description: 'Real-time emergency notification and alert management system for enhanced public safety and crisis communication.',
      technologies: ['Emergency Systems', 'Real-time Alerts', 'Communication', 'Safety'],
      icon: '🚨',
      gradient: 'from-neon-pink to-neon-cyan',
      githubLink: 'https://github.com/GapDevCourse/AlertAura'
    },
    {
      title: 'Sentiment Analysis Tool',
      description: 'Advanced natural language processing system for analyzing emotional sentiment in text data with machine learning algorithms.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Text Analysis', 'Data Science'],
      icon: '📊',
      gradient: 'from-neon-blue to-neon-purple',
      githubLink: 'https://github.com/Mogilipranathi/sentiment-analysis'
=======
      title: "AI-Powered Exam Preparation Web Application",
      description: "Intelligent question paper summarization and study assistance platform using advanced NLP and machine learning algorithms.",
      tech: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
      icon: Brain,
      color: "primary",
      features: ["Smart Summarization", "Adaptive Learning", "Progress Tracking"],
      github: "https://github.com/Mogilipranathi/Smart-Prep-Ai"
    },
    {
      title: "Women Safety IoT System",
      description: "ESP32-based real-time safety system with GPS tracking, emergency alerts, and sensor integration for enhanced security.",
      tech: ["ESP32", "GPS", "IoT Sensors", "Mobile App", "Real-time Alerts"],
      icon: Shield,
      color: "secondary",
      features: ["GPS Tracking", "Emergency SOS", "Sensor Network"],
      github: "https://github.com/Mogilipranathi/AlertAura"
    },
    {
      title: "ATM Simulation System",
      description: "Python-based ATM simulation with secure transaction processing, user authentication, and account management features.",
      tech: ["Python", "OOP", "File Handling", "Data Structures"],
      icon: Navigation,
      color: "accent",
      features: ["User Authentication", "Transaction Processing", "Balance Management"],
      github: "https://github.com/Mogilipranathi/Atm.py"
    },
    {
      title: "Sentiment Analysis Tool",
      description: "Machine learning application for analyzing and classifying sentiment in text data using natural language processing.",
      tech: ["Python", "NLP", "Machine Learning", "Text Processing"],
      icon: Heart,
      color: "primary",
      features: ["Text Classification", "Emotion Detection", "Data Visualization"],
      github: "https://github.com/Mogilipranathi/sentiment-analysis"
>>>>>>> Stashed changes
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const projectCards = sectionRef.current.querySelectorAll('.project-card');
      projectCards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Featured Projects
          </h2>
<<<<<<< Updated upstream
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card glass-card group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
=======
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions combining AI, IoT, and modern web technologies to solve real-world challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={project.title} 
                className="glass-card group hover:scale-105 transition-all duration-500 reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
>>>>>>> Stashed changes
              >
                {/* Project Icon with Gradient Background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
<<<<<<< Updated upstream
                
                {/* Project Content */}
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-neon-cyan transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-white/10 border border-white/20 rounded-full text-neon-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Actions */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
                    asChild
                  >
                    <a 
                      href={project.demoLink || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Demo
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-foreground/70 hover:text-neon-purple transition-colors duration-300"
                    asChild
                  >
                    <a 
                      href={project.githubLink || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="glass-card neon-border px-8 py-3 hover:neon-glow transition-all duration-300"
            >
              View All Projects
            </Button>
          </div>
=======

                {/* Project content */}
                <div className="space-y-4">
                  <h3 className="font-orbitron text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-primary">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span 
                          key={feature}
                          className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-secondary">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className={`text-xs px-3 py-1 border border-${project.color}/50 rounded-full text-${project.color}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons - Only GitHub button */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`flex-1 border-${project.color}/50 text-${project.color} hover:bg-${project.color}/20`}
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all projects button */}
        <div className="text-center mt-12 reveal">
          <Button 
            variant="outline" 
            size="lg"
            className="glass-card border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground neon-glow"
            onClick={() => window.open('https://github.com/Mogilipranathi', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
>>>>>>> Stashed changes
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
