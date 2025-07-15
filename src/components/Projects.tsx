import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Database, Globe, ShoppingCart, Cloud, Ticket } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'IndustrialExpo',
      description: 'A comprehensive website project designed to facilitate online tendering specifically tailored for industrial sectors. Streamlines the process of tender submission, evaluation, and selection, providing a centralized platform for industries to efficiently address their procurement needs.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
      category: 'Web Development',
      icon: <Globe className="w-6 h-6" />,
      github: 'https://github.com/mahankalibhanubabu/IndustrialExpo',
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
      github: 'https://github.com/mahankalibhanubabu/movieflix-react-',
      features: [
        'Real-time movie search',
        'Advanced filtering options',
        'Personalized recommendations',
        'Responsive design'
      ]
    },
    {
      title: 'ShopVibe -  E-commerce Platform',
      description: 'Built a feature-rich e-commerce website, ShopVibe, using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform offers a seamless shopping experience with robust product management, secure user authentication, an intuitive shopping cart, and efficient order processing, all designed for scalability and performance.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Stripe/Razorpay (Payment Gateway Integration)'],
      category: 'E-commerce',
      icon: <ShoppingCart className="w-6 h-6" />,
      github: 'https://github.com/mahankalibhanubabu/shopvibe',
      features: [
        'User Authentication (Login, Register, Password Reset)',
        'Product Listing & Detail Pages',
        'Shopping Cart Functionality',
        'Secure Checkout & Payment Integration',
        'Order Management & History',
        'Product Search & Filtering',
        'Admin Panel for Product & Order Management',
        'Responsive Design for seamless mobile experience'
      ]
    },
    {
      title: 'Advanced Weather Forecast',
      description: 'Engineered a dynamic online weather platform providing real-time, hyper-local weather conditions and advanced forecasting capabilities. Features include interactive maps, severe weather alerts, and historical data visualization, built with the MERN stack.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'],
      category: 'Data Visualization & Utilities',
      icon: <Cloud className="w-6 h-6" />,
      github: 'https://github.com/mahankalibhanubabu/weather-forcasting-',
      features: [
        'Real-time weather updates',
        'Hyper-local forecasting',
        'Interactive weather maps',
        'Severe weather alerts',
        'Historical weather data visualization'
      ]
    },
    {
      title: 'Student Dashboard - E-Learning',
      description: 'Developed a comprehensive student dashboard for an e-learning platform with features like personalized learning paths, real-time progress tracking, and interactive course management tools using React, Node.js, and MongoDB.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      category: 'Educational Platform',
      icon: <Database className="w-6 h-6" />,
      github: 'https://github.com/mahankalibhanubabu/student-dashboard',
      features: [
        'Personalized learning paths',
        'Real-time progress tracking',
        'Interactive course management',
        'Student engagement tools'
      ]
    },
    {
      title: "EventFlow: Online Event Management Platform",
      description: "Developed a comprehensive online event management platform, EventFlow, streamlining event creation, smart ticketing, and real-time analytics. This project features intuitive event building, secure payment integrations, and dual user dashboards for organizers and attendees, enhancing the overall event experience.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      category: "Event Management",
      icon: <Ticket className="w-6 h-6" />,
      link: "https://eventflow-react-app.vercel.app/",
      features: [
        "End-to-end event creation and management",
        "Smart ticketing with flexible pricing and QR codes",
        "Real-time analytics and reporting",
        "Dual dashboards for organizers and attendees",
        "Secure authentication and responsive design"
      ]
    }
  ];

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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-purple-400/40 text-purple-400 hover:bg-purple-400/10 w-full"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
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
