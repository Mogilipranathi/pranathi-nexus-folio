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

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card glass-card group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Icon with Gradient Background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                
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
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
