
import React from 'react';
import { Github, ExternalLink, Code, Database, Server, Smartphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useSpring, animated, useTrail, useInView } from '@react-spring/web';

const Index = () => {
  const [heroRef, heroInView] = useInView();
  const [skillsRef, skillsInView] = useInView();
  const [projectsRef, projectsInView] = useInView();

  const heroAnimation = useSpring({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 }
  });

  const projects = [
    {
      name: "PDF-SaaS Project",
      description: "AI-powered PDF analysis SaaS using advanced language models to review documents and provide intelligent insights and Q&A capabilities.",
      tech: ["Next.js", "MERN", "Firebase", "LangChain", "Pinecone", "OpenAI", "Stripe", "Clerk", "Tailwind"],
      github: "https://github.com/Breanzy/PDF-SaaS-Project",
      demo: "https://pdf-saas-project.vercel.app",
      type: "SaaS",
      featured: true,
      image: "/api/placeholder/400/200"
    },
    {
      name: "Peerkada",
      description: "Organization management hub for MSU-IIT SPF with profile registration and QR-based duty tracking system.",
      tech: ["XAMPP", "PHP", "JavaScript", "MySQL"],
      github: "https://github.com/Breanzy/Peerkada",
      demo: "https://peerkada.ct.ws",
      type: "Web App",
      featured: true,
      image: "/api/placeholder/400/200"
    },
    {
      name: "MERN Tutorial Blog",
      description: "Personal blog platform featuring software engineering insights, daily experiences, and IT industry news with full CRUD functionality.",
      tech: ["MERN", "Redux", "Google OAuth", "DaisyUI", "MongoDB", "Firebase", "JWT"],
      github: "https://github.com/Breanzy/Mern-Tutorial-Project",
      demo: "https://mern-tutorial-project.onrender.com",
      type: "Blog",
      featured: false,
      image: "/api/placeholder/400/200"
    },
    {
      name: "Yemelay Apartment",
      description: "Modern apartment rental landing page showcasing available units, location details, and contact information with future plans for dynamic management.",
      tech: ["MERN", "TypeScript", "React", "Node.js"],
      github: "https://github.com/Breanzy/yemelay-apartment",
      demo: "https://yemelay-apartment.vercel.app",
      type: "Landing Page",
      featured: false,
      image: "/api/placeholder/400/200"
    },
    {
      name: "NextJS Movie App",
      description: "IMDB-inspired movie discovery platform with TMDB API integration, featuring search, authentication, and theme switching.",
      tech: ["Next.js", "Tailwind", "Clerk", "MongoDB", "TMDB API"],
      github: "https://github.com/Breanzy/NextJS-Movie-App",
      demo: "https://next-js-movie-app-three.vercel.app",
      type: "Web App",
      featured: false,
      image: "/api/placeholder/400/200"
    }
  ];

  const skills = [
    { name: "Frontend", icon: <Code className="w-5 h-5" />, techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { name: "Backend", icon: <Server className="w-5 h-5" />, techs: ["Node.js", "PHP", "Express.js", "REST APIs"] },
    { name: "Database", icon: <Database className="w-5 h-5" />, techs: ["MongoDB", "MySQL", "Firebase", "Pinecone"] },
    { name: "Tools", icon: <Smartphone className="w-5 h-5" />, techs: ["Git", "Docker", "Vercel", "AWS", "Stripe"] }
  ];

  const skillsTrail = useTrail(skills.length, {
    opacity: skillsInView ? 1 : 0,
    transform: skillsInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 },
    delay: 200
  });

  const featuredProjectsTrail = useTrail(projects.filter(p => p.featured).length, {
    opacity: projectsInView ? 1 : 0,
    transform: projectsInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 },
    delay: 300
  });

  const otherProjectsTrail = useTrail(projects.filter(p => !p.featured).length, {
    opacity: projectsInView ? 1 : 0,
    transform: projectsInView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 },
    delay: 500
  });

  const floatingAnimation = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(-20px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
    config: { duration: 3000 }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <animated.div
          style={floatingAnimation}
          className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-20"
        />
        <animated.div
          style={{
            ...floatingAnimation,
            transform: floatingAnimation.transform.to(t => `${t} translateX(10px)`)
          }}
          className="absolute top-40 right-20 w-6 h-6 bg-cyan-400 rounded-full opacity-15"
        />
        <animated.div
          style={{
            ...floatingAnimation,
            transform: floatingAnimation.transform.to(t => `${t} translateX(-15px)`)
          }}
          className="absolute bottom-40 left-20 w-3 h-3 bg-blue-300 rounded-full opacity-25"
        />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative px-6 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
        <animated.div style={heroAnimation} className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Brean Julius
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Carbonilla
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Full Stack Developer crafting digital experiences with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
            >
              <a href="https://github.com/Breanzy" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View My Work
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>
        </animated.div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Technical Arsenal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsTrail.map((style, index) => (
              <animated.div key={skills[index].name} style={style}>
                <Card className="bg-slate-900/50 border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-white">
                      <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
                        {skills[index].icon}
                      </div>
                      {skills[index].name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills[index].techs.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-slate-800 text-gray-300 hover:bg-slate-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section ref={projectsRef} className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-4">Featured Projects</h3>
          <p className="text-gray-400 text-center mb-12">Showcasing my best full-stack development work</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjectsTrail.map((style, index) => {
              const project = projects.filter(p => p.featured)[index];
              return (
                <animated.div key={project.name} style={style}>
                  <Card className="bg-slate-900/80 border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02] group overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                          {project.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </CardTitle>
                      <CardDescription className="text-gray-300 text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 6).map((tech) => (
                          <Badge key={tech} variant="outline" className="border-slate-600 text-gray-400 hover:border-blue-400">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 6 && (
                          <Badge variant="outline" className="border-slate-600 text-gray-400">
                            +{project.tech.length - 6} more
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-3">
                        <Button asChild variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button asChild size="sm" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </animated.div>
              );
            })}
          </div>

          {/* Other Projects */}
          <h4 className="text-2xl font-bold text-white text-center mb-8">More Projects</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjectsTrail.map((style, index) => {
              const project = projects.filter(p => !p.featured)[index];
              return (
                <animated.div key={project.name} style={style}>
                  <Card className="bg-slate-900/60 border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                    <div className="relative h-32 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    </div>
                    <CardHeader>
                      <Badge className="bg-slate-800 text-gray-300 w-fit mb-2">
                        {project.type}
                      </Badge>
                      <CardTitle className="text-white text-lg hover:text-blue-400 transition-colors">
                        {project.name}
                      </CardTitle>
                      <CardDescription className="text-gray-400 text-sm">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-slate-800 text-gray-400 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button asChild variant="outline" size="sm" className="border-slate-600 text-gray-400 hover:border-blue-400 hover:text-blue-400 text-xs">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </a>
                        </Button>
                        <Button asChild size="sm" className="bg-slate-800 hover:bg-blue-600 text-gray-300 hover:text-white text-xs">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </animated.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing</h3>
          <p className="text-gray-400 mb-8">
            Always excited to work on challenging projects and explore new technologies
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transform hover:scale-105 transition-all duration-300"
          >
            <a href="https://github.com/Breanzy" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Connect on GitHub
            </a>
          </Button>
          <div className="mt-8 pt-8 border-t border-slate-800">
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
