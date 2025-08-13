import { Code2, Database, Brain, Cpu, Globe, Smartphone } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 80 }
      ],
      color: "primary"
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Python", level: 90 },
        { name: "Node.js", level: 75 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "REST APIs", level: 85 }
      ],
      color: "secondary"
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Computer Vision", level: 85 },
        { name: "NLP", level: 78 },
        { name: "Deep Learning", level: 82 }
      ],
      color: "accent"
    },
    {
      title: "IoT & Hardware",
      icon: Cpu,
      skills: [
        { name: "ESP32", level: 88 },
        { name: "Arduino", level: 85 },
        { name: "Sensors", level: 80 },
        { name: "GPS Systems", level: 75 },
        { name: "Circuit Design", level: 70 }
      ],
      color: "primary"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 75 },
        { name: "Flutter", level: 70 },
        { name: "Mobile UI/UX", level: 80 },
        { name: "App Store Deploy", level: 75 },
        { name: "Cross-platform", level: 78 }
      ],
      color: "secondary"
    },
    {
      title: "DevOps & Tools",
      icon: Code2,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 72 },
        { name: "Linux", level: 80 }
      ],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-background-secondary/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 reveal">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-gradient mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building cutting-edge solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={category.title} className="glass-card reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-${category.color}/20 mr-4`}>
                    <IconComponent className={`h-6 w-6 text-${category.color}`} />
                  </div>
                  <h3 className="font-orbitron text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r from-${category.color} to-${category.color}-glow transition-all duration-1000 neon-glow`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;