import { Button } from '@/components/ui/button';
import { Github, Brain, Shield, Cpu, BarChart3, BookOpen } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Exam Preparation Web Application",
      description: "Intelligent question paper summarization and study assistance platform using advanced NLP and machine learning algorithms.",
      tech: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
      icon: Brain,
      color: "primary",
      features: ["Smart Summarization", "Adaptive Learning", "Progress Tracking"],
      github: "https://github.com/Mogilipranathi/AI-Smart-prep-"
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
      icon: Cpu,
      color: "accent",
      features: ["User Authentication", "Transaction Processing", "Balance Management"],
      github: "https://github.com/Mogilipranathi/Atm.py"
    },
    {
      title: "Sentiment Analysis Tool",
      description: "Machine learning application for analyzing and classifying sentiment in text data using natural language processing.",
      tech: ["Python", "NLP", "Machine Learning", "Text Processing"],
      icon: BarChart3,
      color: "primary",
      features: ["Text Classification", "Emotion Detection", "Data Visualization"],
      github: "https://github.com/Mogilipranathi/sentiment-analysis"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 reveal">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions combining AI, IoT, and modern web technologies to solve real-world challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={project.title} 
                className="glass-card group hover:scale-105 transition-all duration-500 reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Icon */}
                <div className={`w-16 h-16 rounded-xl bg-${project.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-8 w-8 text-${project.color}`} />
                </div>

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
                          className="text-xs px-3 py-1 border border-primary/30 rounded-full text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-primary/50 text-primary hover:bg-primary/20"
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
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;