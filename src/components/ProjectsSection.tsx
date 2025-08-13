import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Brain, Shield, Eye, Navigation, Heart } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Exam Preparation Web Application",
      description: "Intelligent question paper summarization and study assistance platform using advanced NLP and machine learning algorithms.",
      tech: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
      icon: Brain,
      color: "primary",
      features: ["Smart Summarization", "Adaptive Learning", "Progress Tracking"]
    },
    {
      title: "Women Safety IoT System",
      description: "ESP32-based real-time safety system with GPS tracking, emergency alerts, and sensor integration for enhanced security.",
      tech: ["ESP32", "GPS", "IoT Sensors", "Mobile App", "Real-time Alerts"],
      icon: Shield,
      color: "secondary",
      features: ["GPS Tracking", "Emergency SOS", "Sensor Network"]
    },
    {
      title: "Fake News Recognition System",
      description: "Advanced machine learning model for detecting misinformation in both text and image content using deep learning techniques.",
      tech: ["Python", "PyTorch", "Computer Vision", "NLP", "Web Interface"],
      icon: Eye,
      color: "accent",
      features: ["Text Analysis", "Image Verification", "Real-time Detection"]
    },
    {
      title: "Traffic Sign Recognition Using ML",
      description: "AI-powered system for real-time road sign classification and recognition to enhance autonomous driving capabilities.",
      tech: ["Computer Vision", "CNN", "OpenCV", "Python", "Real-time Processing"],
      icon: Navigation,
      color: "primary",
      features: ["Real-time Recognition", "High Accuracy", "Traffic Integration"]
    },
    {
      title: "AI-Powered Mental Health Chatbot",
      description: "Emotion-aware chatbot with voice, text, and facial recognition capabilities for mental health support and assistance.",
      tech: ["Natural Language Processing", "Emotion AI", "Voice Recognition", "Computer Vision"],
      icon: Heart,
      color: "secondary",
      features: ["Emotion Detection", "Voice Analysis", "24/7 Support"]
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={project.title} 
                className="glass-card group hover:scale-105 transition-all duration-500 reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project icon */}
                <div className={`inline-flex p-4 rounded-xl bg-${project.color}/20 mb-6`}>
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
                          className={`text-xs px-3 py-1 border border-${project.color}/50 rounded-full text-${project.color}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className={`flex-1 bg-${project.color} text-${project.color}-foreground hover:bg-${project.color}-glow neon-glow transition-all duration-300`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`border-${project.color}/50 text-${project.color} hover:bg-${project.color}/20`}
                    >
                      <Github className="h-4 w-4" />
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
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;