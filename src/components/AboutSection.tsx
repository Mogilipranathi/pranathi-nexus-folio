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
                AIML & Full Stack Developer passionate about building intelligent solutions that 
                solve complex problems. I specialize in creating seamless digital experiences 
                through expertise in AI, machine learning, and full-stack development.
              </p>
              
              <p className="text-lg">
                My work spans predictive analytics, NLP, IoT systems, and AI-powered applications, 
                focusing on developing intelligent systems that enhance user experiences and drive innovation.
              </p>
              
              <p className="text-lg">
                I continuously explore emerging technologies, contribute to open-source AI projects, 
                and enjoy collaborating on cutting-edge solutions that push technological boundaries.
              </p>
            </div>

            {/* Tech highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card text-center py-4">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="glass-card text-center py-4">
                <div className="text-2xl font-bold text-secondary">AIML</div>
                <div className="text-sm text-muted-foreground">Specialization</div>
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
                  alt="Mogili Pranathi - AIML & Full Stack Developer"
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