
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'IndustrialExpo',
      description: 'A comprehensive website project designed to facilitate online tendering specifically tailored for industrial sectors. Streamlines the process of tender submission, evaluation, and selection, providing a centralized platform for industries to efficiently address their procurement needs.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
      category: 'Web Development',
      icon: <Globe className="w-6 h-6" />,
      features: [
        'Online tender management system',
        'Centralized procurement platform',
        'Evaluation and selection tools',
        'Industry-specific features'
      ]
    },
    {
      title: 'MovieFlix',
      description: 'A feature-rich movie search website with real-time search, advanced filtering, and personalized recommendations using React, Node.js and MongoDB. Enhanced user experience with responsive design and interactive elements.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      category: 'Full Stack',
      icon: <Code className="w-6 h-6" />,
      features: [
        'Real-time movie search',
        'Advanced filtering options',
        'Personalized recommendations',
        'Responsive design'
      ]
    },
    {
      title: 'Student Dashboard - E-Learning',
      description: 'Developed a comprehensive student dashboard for an e-learning platform with features like personalized learning paths, real-time progress tracking, and interactive course management tools using React, Node.js, and MongoDB.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      category: 'Educational Platform',
      icon: <Database className="w-6 h-6" />,
      features: [
        'Personalized learning paths',
        'Real-time progress tracking',
        'Interactive course management',
        'Student engagement tools'
      ]
    }
  ];
  const githublink = () =>{
    window.open('https://github.com/mahankalibhanubabu')
  }

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Featured <span className="text-purple-400">Projects</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Showcase of innovative solutions and technical expertise
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="bg-slate-800/50 border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105 group"
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="text-purple-400 group-hover:scale-110 transition-transform duration-200">
                  {project.icon}
                </div>
                <Badge variant="outline" className="border-purple-400/40 text-purple-400">
                  {project.category}
                </Badge>
              </div>
              <CardTitle className="text-white text-xl group-hover:text-purple-400 transition-colors duration-200">
                {project.title}
              </CardTitle>
              <CardDescription className="text-gray-400 leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 text-sm">• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-purple-600/20 text-purple-300">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-4">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-purple-400/40 text-purple-400 hover:bg-purple-400/10 flex-1"
                    onClick={githublink}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-purple-600 hover:bg-purple-700 flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
