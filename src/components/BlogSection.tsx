import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=200&fit=crop",
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "Building Secure IoT Systems",
      excerpt: "Best practices and security considerations when developing Internet of Things applications and devices.",
      date: "2024-01-10", 
      readTime: "7 min read",
      category: "IoT & Security",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop",
      gradient: "from-secondary to-secondary-glow"
    },
    {
      title: "Machine Learning Model Deployment",
      excerpt: "A comprehensive guide to deploying ML models in production environments with scalability in mind.",
      date: "2024-01-05",
      readTime: "8 min read", 
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
      gradient: "from-accent to-accent-glow"
    },
    {
      title: "Modern JavaScript Frameworks",
      excerpt: "Comparing React, Vue, and Angular for building modern web applications in 2024.",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop",
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-background-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 reveal">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-gradient mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on modern technology, development practices, and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article 
              key={post.title}
              className="glass-card group hover:scale-105 transition-all duration-500 overflow-hidden reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image header */}
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-primary font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="font-orbitron text-xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>

                <Button 
                  variant="ghost" 
                  className="group/btn text-primary hover:text-primary-glow p-0 h-auto font-medium"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View all posts button */}
        <div className="text-center reveal">
          <Button 
            variant="outline" 
            size="lg"
            className="glass-card border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground neon-glow-secondary"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;