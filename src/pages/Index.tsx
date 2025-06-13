import React from 'react';
import { useSpring, animated, useTrail, useChain, useSpringRef } from '@react-spring/web';
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

  // Hero section animations
  const heroRef = useSpringRef();
  const heroSpring = useSpring({
    ref: heroRef,
    opacity: 1,
    transform: 'translateY(0px) scale(1)',
    from: { opacity: 0, transform: 'translateY(100px) scale(0.8)' },
    config: { tension: 120, friction: 20 },
  });

  const titleRef = useSpringRef();
  const titleSpring = useSpring({
    ref: titleRef,
    opacity: 1,
    transform: 'scale(1) rotateX(0deg)',
    from: { opacity: 0, transform: 'scale(0.5) rotateX(-90deg)' },
    config: { tension: 200, friction: 25 },
  });

  const buttonsRef = useSpringRef();
  const buttonsSpring = useSpring({
    ref: buttonsRef,
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { tension: 280, friction: 60 },
  });

  // Chain animations for dramatic entrance
  useChain([heroRef, titleRef, buttonsRef], [0, 0.3, 0.6]);

  // Trail animation for skills
  const skillsTrail = useTrail(skills.length, {
    opacity: 1,
    transform: 'translateX(0px) rotateY(0deg)',
    from: { opacity: 0, transform: 'translateX(-100px) rotateY(-180deg)' },
    config: { tension: 280, friction: 60 },
    delay: 200,
  });

  // Bouncing animation for gradient background
  const backgroundSpring = useSpring({
    background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 25%, #1e40af 50%, #3b82f6 75%, #0f172a 100%)',
    backgroundSize: '400% 400%',
    config: { duration: 8000 },
    loop: true,
    from: { backgroundPosition: '0% 50%' },
    to: { backgroundPosition: '100% 50%' },
  });

  return (
    <animated.div style={backgroundSpring} className="min-h-screen relative overflow-hidden">
      <FloatingElements />
      
      {/* Animated overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-transparent to-blue-950/90 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)] pointer-events-none z-[2]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(30,64,175,0.2),transparent_50%)] pointer-events-none z-[2]" />
      
      {/* Hero Section */}
      <section className="relative px-6 py-32 text-center overflow-hidden z-10">
        <div className="relative z-10 max-w-4xl mx-auto">
          <animated.div style={heroSpring} className="mb-12">
            <animated.h1 style={titleSpring} className="text-7xl md:text-9xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-300 via-navy-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
                Brean Julius
              </span>
            </animated.h1>
            <animated.h2 style={titleSpring} className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">
              Carbonilla
            </animated.h2>
          </animated.div>
          <animated.p style={heroSpring} className="text-2xl md:text-3xl text-blue-200 mb-12 font-light leading-relaxed drop-shadow-lg">
            Full Stack Developer crafting digital experiences with modern technologies
          </animated.p>
          <animated.div style={buttonsSpring} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-navy-600 via-blue-600 to-navy-700 hover:from-navy-700 hover:via-blue-700 hover:to-navy-800 text-white border-0 px-10 py-4 text-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-110"
            >
              <a href="https://github.com/Breanzy" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 mr-3" />
                View My Work
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-400 text-blue-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-navy-600 hover:text-white px-10 py-4 text-xl backdrop-blur-lg bg-navy-900/30 hover:scale-110 transition-all duration-500"
            >
              <ExternalLink className="w-6 h-6 mr-3" />
              Contact Me
            </Button>
          </animated.div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Skills Section with Trail Animation */}
      <section className="px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <animated.h3 
            style={useSpring({
              opacity: 1,
              transform: 'translateY(0px)',
              from: { opacity: 0, transform: 'translateY(50px)' },
              delay: 100,
            })}
            className="text-4xl font-bold text-white text-center mb-16 drop-shadow-lg"
          >
            Technical Arsenal
          </animated.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsTrail.map((style, index) => {
              const skill = skills[index];
              return (
                <animated.div key={skill.name} style={style}>
                  <Card className="bg-gradient-to-br from-navy-900/60 to-blue-900/40 border-2 border-blue-600/50 hover:border-blue-400 transition-all duration-500 backdrop-blur-xl hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-4 text-white text-lg">
                        <div className="p-3 bg-gradient-to-r from-navy-600 to-blue-700 rounded-xl shadow-lg">
                          {skill.icon}
                        </div>
                        {skill.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skill.techs.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-navy-800/80 text-blue-200 hover:bg-blue-700 hover:text-white transition-colors duration-300">
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
      <section className="px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <animated.div
            style={useSpring({
              opacity: 1,
              transform: 'translateY(0px)',
              from: { opacity: 0, transform: 'translateY(50px)' },
              delay: 200,
            })}
          >
            <h3 className="text-4xl font-bold text-white text-center mb-6 drop-shadow-lg">Featured Projects</h3>
            <p className="text-blue-200 text-xl text-center mb-16 drop-shadow-md">Showcasing my best full-stack development work</p>
          </animated.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
            {projects.filter(p => p.featured).map((project, index) => (
              <ProjectCard key={project.name} project={project} delay={index * 300} />
            ))}
          </div>

          {/* Other Projects */}
          <animated.div
            style={useSpring({
              opacity: 1,
              transform: 'translateY(0px)',
              from: { opacity: 0, transform: 'translateY(50px)' },
              delay: 400,
            })}
          >
            <h4 className="text-3xl font-bold text-white text-center mb-12 drop-shadow-lg">More Projects</h4>
          </animated.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <ProjectCard key={project.name} project={project} delay={index * 200 + 600} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-20 border-t border-blue-600/30 relative z-10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <animated.div
            style={useSpring({
              opacity: 1,
              transform: 'translateY(0px) scale(1)',
              from: { opacity: 0, transform: 'translateY(50px) scale(0.8)' },
              delay: 800,
            })}
          >
            <h3 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">Let's Build Something Amazing</h3>
            <p className="text-blue-200 mb-10 text-lg drop-shadow-md">
              Always excited to work on challenging projects and explore new technologies
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-navy-600 via-blue-600 to-navy-700 hover:from-navy-700 hover:via-blue-700 hover:to-navy-800 text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-110 px-8 py-4 text-lg"
            >
              <a href="https://github.com/Breanzy" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 mr-3" />
                Connect on GitHub
              </a>
            </Button>
          </animated.div>
          <div className="mt-12 pt-8 border-t border-blue-600/30">
            <p className="text-blue-300/70 text-sm drop-shadow-md">
              © 2024 Brean Julius Carbonilla. Crafted with passion and modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </animated.div>
  );
};

export default Index;
