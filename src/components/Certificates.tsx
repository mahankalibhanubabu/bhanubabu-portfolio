
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink, Download } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'MERN Stack Development',
      issuer: 'Various Organizations',
      description: 'Comprehensive certification in MongoDB, Express.js, React, and Node.js development',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop'
    },
    {
      title: 'Cloud Technologies',
      issuer: 'Multiple Providers',
      description: 'Certifications in cloud platforms and modern deployment strategies',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop'
    },
    {
      title: 'Database Management',
      issuer: 'Professional Training',
      description: 'Advanced database design and management certifications',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop'
    }
  ];

  const certificatesDriveLink = "https://drive.google.com/drive/folders/1ZOHU2dzjLIVxHw8pd3njxmbQa3xnTAsX?usp=drive_link";

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Certificates & <span className="text-purple-400">Achievements</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Professional certifications and training achievements demonstrating technical expertise
        </p>
      </div>

      <div className="mb-12 text-center">
        <Button 
          asChild
          size="lg" 
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          <a 
            href={certificatesDriveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <ExternalLink className="mr-2" size={20} />
            View All Certificates
          </a>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <Card key={index} className="bg-slate-800/50 border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-purple-400">
                  <Award className="w-8 h-8" />
                </div>
                <Badge variant="secondary" className="bg-purple-600 text-white">
                  Certified
                </Badge>
              </div>
              <div className="w-full h-48 bg-slate-700 rounded-lg overflow-hidden mb-4">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-white text-xl">{cert.title}</CardTitle>
              <CardDescription className="text-purple-400 font-semibold">
                {cert.issuer}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed mb-4">
                {cert.description}
              </p>
              <Button 
                asChild
                variant="outline" 
                size="sm" 
                className="border-purple-400/40 text-purple-300 hover:bg-purple-600 hover:text-white w-full"
              >
                <a 
                  href={certificatesDriveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  <Download className="mr-2" size={16} />
                  View Certificate
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-slate-800/50 p-8 rounded-lg border border-purple-400/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Continuous Learning
          </h3>
          <p className="text-gray-300 text-lg mb-6">
            Successfully completed 12+ certifications from different organizations and 3+ Virtual Internships from Forage.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="border-purple-400/40 text-purple-300">
              Web Development
            </Badge>
            <Badge variant="outline" className="border-purple-400/40 text-purple-300">
              Cloud Computing
            </Badge>
            <Badge variant="outline" className="border-purple-400/40 text-purple-300">
              Database Management
            </Badge>
            <Badge variant="outline" className="border-purple-400/40 text-purple-300">
              Virtual Internships
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
