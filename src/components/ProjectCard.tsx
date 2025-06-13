
import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    type: string;
    featured: boolean;
    image: string;
  };
  delay?: number;
}

const ProjectCard = ({ project, delay = 0 }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardSpring = useSpring({
    transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0px) scale(1)',
    boxShadow: isHovered 
      ? '0 20px 40px rgba(59, 130, 246, 0.3)' 
      : '0 10px 20px rgba(0, 0, 0, 0.2)',
    config: { tension: 300, friction: 25 },
  });

  const imageSpring = useSpring({
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    config: { tension: 300, friction: 25 },
  });

  const contentSpring = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(30px)' },
    delay,
    config: { tension: 280, friction: 60 },
  });

  return (
    <animated.div style={contentSpring}>
      <animated.div
        style={cardSpring}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card className="bg-gradient-to-br from-slate-900/80 to-blue-900/40 border-blue-700/50 hover:border-blue-500 transition-all duration-300 overflow-hidden backdrop-blur-sm">
          <div className="relative h-48 overflow-hidden">
            <animated.img
              style={imageSpring}
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            <Badge className="absolute top-4 left-4 bg-blue-600/90 text-white backdrop-blur-sm">
              {project.type}
            </Badge>
          </div>
          
          <CardHeader>
            <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors">
              {project.name}
            </CardTitle>
            <CardDescription className="text-gray-300 text-base leading-relaxed">
              {project.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, project.featured ? 6 : 4).map((tech) => (
                <Badge key={tech} variant="outline" className="border-blue-600 text-blue-400 hover:border-blue-400 hover:bg-blue-400/10">
                  {tech}
                </Badge>
              ))}
              {project.tech.length > (project.featured ? 6 : 4) && (
                <Badge variant="outline" className="border-blue-600 text-blue-400">
                  +{project.tech.length - (project.featured ? 6 : 4)} more
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
              <Button asChild size="sm" className="bg-gradient-to-r from-blue-600 to-navy-700 hover:from-blue-700 hover:to-navy-800">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {project.featured ? 'Live Demo' : 'Demo'}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </animated.div>
    </animated.div>
  );
};

export default ProjectCard;
