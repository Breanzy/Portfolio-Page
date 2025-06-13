
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Code2, Coffee, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const slideIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 280, friction: 60 },
    delay: 200,
  });

  const imageFloat = useSpring({
    transform: inView ? 'translateY(-10px)' : 'translateY(0px)',
    config: { tension: 180, friction: 12 },
    loop: { reverse: true },
    delay: 500,
  });

  return (
    <section ref={ref} className="px-6 py-20 relative z-10">
      <div className="max-w-6xl mx-auto">
        <animated.div style={slideIn} className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">About Me</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-navy-600 mx-auto"></div>
        </animated.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <animated.div style={slideIn} className="text-center lg:text-left">
            <animated.div style={imageFloat} className="inline-block mb-6">
              <Avatar className="w-48 h-48 mx-auto lg:mx-0 border-4 border-blue-400 shadow-2xl">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="Brean Julius Carbonilla" />
                <AvatarFallback className="bg-gradient-to-br from-blue-600 to-navy-800 text-white text-6xl">BC</AvatarFallback>
              </Avatar>
            </animated.div>
          </animated.div>
          
          <animated.div style={slideIn} className="space-y-6">
            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate full-stack developer with a love for creating innovative digital solutions. 
                With expertise spanning from modern frontend frameworks to robust backend systems, I bring 
                ideas to life through clean, efficient code.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing my experiences through my tech blog. I believe in continuous learning 
                and staying ahead of the curve in this ever-evolving field.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm">
                <Code2 className="w-4 h-4 mr-2" />
                Problem Solver
              </Badge>
              <Badge className="bg-navy-600 hover:bg-navy-700 text-white px-4 py-2 text-sm">
                <Coffee className="w-4 h-4 mr-2" />
                Coffee Enthusiast
              </Badge>
              <Badge className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 text-sm">
                <Lightbulb className="w-4 h-4 mr-2" />
                Innovation Driven
              </Badge>
            </div>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
