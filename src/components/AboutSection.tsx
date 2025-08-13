import profileImage from '@/assets/profile.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8 reveal">
            <div className="space-y-4">
              <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-gradient">
                About Me
              </h2>
              <div className="w-20 h-1 bg-primary neon-glow rounded-full" />
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm a passionate Full Stack Developer with a deep fascination for emerging technologies 
                and their potential to solve real-world problems. With expertise spanning from frontend 
                frameworks to backend architectures, I specialize in creating seamless digital experiences 
                that bridge the gap between innovative technology and user needs.
              </p>
              
              <p className="text-lg">
                My journey in technology has led me through diverse domains including Machine Learning, 
                IoT systems, and AI-powered applications. I believe in the power of intelligent systems 
                to transform how we interact with technology, making it more intuitive, accessible, and impactful.
              </p>
              
              <p className="text-lg">
                When I'm not coding, you'll find me exploring the latest tech trends, contributing to 
                open-source projects, or sharing knowledge through technical writing. I'm always excited 
                to collaborate on projects that push the boundaries of what's possible.
              </p>
            </div>

            {/* Tech highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card text-center py-4">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="glass-card text-center py-4">
                <div className="text-2xl font-bold text-secondary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Profile image */}
          <div className="reveal flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl scale-105" />
              <div className="relative glass-card rounded-full p-4">
                <img
                  src={profileImage}
                  alt="Mogili Pranathi"
                  className="w-80 h-80 rounded-full object-cover"
                />
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full neon-glow animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full neon-glow-secondary animate-pulse" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-accent rounded-full neon-glow-accent animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;