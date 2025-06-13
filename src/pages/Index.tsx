import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Github, ExternalLink, Code, Database, Server, Smartphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import FloatingElements from '@/components/FloatingElements';
import AboutSection from '@/components/AboutSection';
import ProjectCard from '@/components/ProjectCard';

const Index = () => {
  const projects = [
    {
      name: "PDF-SaaS Project",
      description: "AI-powered PDF analysis SaaS using advanced language models to review documents and provide intelligent insights and Q&A capabilities.",
      tech: ["Next.js", "MERN", "Firebase", "LangChain", "Pinecone", "OpenAI", "Stripe", "Clerk", "Tailwind"],
      github: "https://github.com/Breanzy/PDF-SaaS-Project",
      demo: "https://pdf-saas-project.vercel.app",
      type: "SaaS",
      featured: true,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
    },
    {
      name: "Peerkada",
      description: "Organization management hub for MSU-IIT SPF with profile registration and QR-based duty tracking system.",
      tech: ["XAMPP", "PHP", "JavaScript", "MySQL"],
      github: "https://github.com/Breanzy/Peerkada",
      demo: "https://peerkada.ct.ws",
      type: "Web App",
      featured: true,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      name: "MERN Tutorial Blog",
      description: "Personal blog platform featuring software engineering insights, daily experiences, and IT industry news with full CRUD functionality.",
      tech: ["MERN", "Redux", "Google OAuth", "DaisyUI", "MongoDB", "Firebase", "JWT"],
      github: "https://github.com/Breanzy/Mern-Tutorial-Project",
      demo: "https://mern-tutorial-project.onrender.com",
      type: "Blog",
      featured: false,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
    },
    {
      name: "Yemelay Apartment",
      description: "Modern apartment rental landing page showcasing available units, location details, and contact information with future plans for dynamic management.",
      tech: ["MERN", "TypeScript", "React", "Node.js"],
      github: "https://github.com/Breanzy/yemelay-apartment",
      demo: "https://yemelay-apartment.vercel.app",
      type: "Landing Page",
      featured: false,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop"
    },
    {
      name: "NextJS Movie App",
      description: "IMDB-inspired movie discovery platform with TMDB API integration, featuring search, authentication, and theme switching.",
      tech: ["Next.js", "Tailwind", "Clerk", "MongoDB", "TMDB API"],
      github: "https://github.com/Breanzy/NextJS-Movie-App",
      demo: "https://next-js-movie-app-three.vercel.app",
      type: "Web App",
      featured: false,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    }
  ];

  const skills = [
    { name: "Frontend", icon: <Code className="w-5 h-5" />, techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { name: "Backend", icon: <Server className="w-5 h-5" />, techs: ["Node.js", "PHP", "Express.js", "REST APIs"] },
    { name: "Database", icon: <Database className="w-5 h-5" />, techs: ["MongoDB", "MySQL", "Firebase", "Pinecone"] },
    { name: "Tools", icon: <Smartphone className="w-5 h-5" />, techs: ["Git", "Docker", "Vercel", "AWS", "Stripe"] }
  ];

  const heroSpring = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { tension: 280, friction: 60 },
    delay: 300,
  });

  const titleSpring = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: { tension: 200, friction: 20 },
    delay: 600,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-navy-950 relative overflow-hidden">
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative px-6 py-24 text-center overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <animated.div style={heroSpring} className="mb-8">
            <animated.h1 style={titleSpring} className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Brean Julius
              </span>
            </animated.h1>
            <animated.h2 style={titleSpring} className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Carbonilla
            </animated.h2>
          </animated.div>
          <animated.p style={heroSpring} className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Full Stack Developer crafting digital experiences with modern technologies
          </animated.p>
          <animated.div style={heroSpring} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-navy-700 hover:from-blue-700 hover:to-navy-800 text-white border-0 px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="https://github.com/Breanzy" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View My Work
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg backdrop-blur-sm"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </animated.div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <section className="px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Technical Arsenal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const skillSpring = useSpring({
                opacity: 1,
                transform: 'translateY(0px)',
                from: { opacity: 0, transform: 'translateY(30px)' },
                delay: index * 100,
                config: { tension: 280, friction: 60 },
              });

              return (
                <animated.div key={skill.name} style={skillSpring}>
                  <Card className="bg-gradient-to-br from-slate-900/50 to-blue-900/30 border-blue-700 hover:border-blue-500 transition-colors backdrop-blur-sm">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-white">
                        <div className="p-2 bg-gradient-to-r from-blue-600 to-navy-700 rounded-lg">
                          {skill.icon}
                        </div>
                        {skill.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skill.techs.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-slate-800 text-gray-300 hover:bg-blue-800">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </animated.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-4">Featured Projects</h3>
          <p className="text-gray-400 text-center mb-12">Showcasing my best full-stack development work</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.filter(p => p.featured).map((project, index) => (
              <ProjectCard key={project.name} project={project} delay={index * 200} />
            ))}
          </div>

          {/* Other Projects */}
          <h4 className="text-2xl font-bold text-white text-center mb-8">More Projects</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <ProjectCard key={project.name} project={project} delay={index * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 border-t border-blue-800/50 relative z-10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing</h3>
          <p className="text-gray-400 mb-8">
            Always excited to work on challenging projects and explore new technologies
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-navy-700 hover:from-blue-700 hover:to-navy-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="https://github.com/Breanzy" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Connect on GitHub
            </a>
          </Button>
          <div className="mt-8 pt-8 border-t border-blue-800/50">
            <p className="text-gray-500 text-sm">
              © 2024 Brean Julius Carbonilla. Crafted with passion and modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
