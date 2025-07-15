
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink, Download } from 'lucide-react';
import { title } from 'process';

const Certificates = () => {
  const certificates = [
    {
      title: 'Salesforce Developer',
      issuer: 'Salesforce',
      description: '"Proud to be a Salesforce Certified Developer! This certification confirms my skills in Apex, Lightning, and crafting robust solutions to maximize business impact on Salesforce."',
      image: 'https://th.bing.com/th/id/OIP.u7703LMdFomHOG4jIVQwoAAAAA?rs=1&pid=ImgDetMain'
    },
    {
      title: 'Azure Fundamentals',
      issuer: 'Microscoft Azure',
      description: 'Proud to be Azure Certified! This credential confirms my skills in designing and managing robust, scalable solutions on the Microsoft Azure cloud platform.',
      image: 'https://th.bing.com/th/id/OIP.5Zgd7tKg7y5c9_drW_1x4wHaEK?rs=1&pid=ImgDetMain'
    },
    {
      title: 'Accenture Developer Job Simulation',
      issuer: 'accenture',
      description: 'Grateful to have completed an Accenture Job Simulation on Forage! This virtual experience provided invaluable practical skills and a deeper understanding of real-world consulting/tech challenges.',
      image: 'https://cdn.uconnectlabs.com/wp-content/uploads/sites/253/2023/08/forage.jpeg'
    },
    {
      title:'Generative AI and ChatGPT',
      issuer: 'Geeks for Geeks',
      description: 'Thrilled to announce the completion of the Generative AI and ChatGPT by Geeks for Geeks! This has significantly boosted my foundational skills in leveraging data for informed decision-making.',
      image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fpractice.geeksforgeeks.org%2F&psig=AOvVaw0JbQjybZM2juVoqug5_xvc&ust=1752650707364000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJC4vOyqvo4DFQAAAAAdAAAAABAE',
    },
    {
      title:'Data Science and Analytics',
      issuer: 'HP Life',
      description: 'Thrilled to announce the completion of the Data Science and Analytics by HP LIFE program! This has significantly boosted my foundational skills in leveraging data for informed decision-making.',
      image:'https://th.bing.com/th/id/OIP.tzqzdNvRnVWosKNGBsXB7AHaDT?rs=1&pid=ImgDetMain',
    },
    {
      title:'Problem Solving (Basic)',
      issuer: 'HackerRank',
      description: 'Proud to have completed the Problem Solving (Basic) course on HackerRank',
      image:'https://th.bing.com/th/id/OIP.e29lhxIjByuC0QfMjbdmYwHaEO?rs=1&pid=ImgDetMain',
    },
    {
      title:'Java(Basic)',
      issuer:'HackerRank',
      description: 'Proud to have completed the Java(Basic) course on HackerRank',
      image:'https://th.bing.com/th/id/OIP.e29lhxIjByuC0QfMjbdmYwHaEO?rs=1&pid=ImgDetMain',
    },
    {
      title:'JavaScript(Basic)',
      issuer:'HackerRank',
      description: 'Proud to have completed the JavaScript(Basic) course on HackerRank',
      image:'https://th.bing.com/th/id/OIP.e29lhxIjByuC0QfMjbdmYwHaEO?rs=1&pid=ImgDetMain',
    },
    {
      title:'SQL(Intermediate)',
      issuer:'HackerRank',
      description: 'Proud to have completed the SQL(Intermediate) course on HackerRank',
      image:'https://th.bing.com/th/id/OIP.e29lhxIjByuC0QfMjbdmYwHaEO?rs=1&pid=ImgDetMain',
    },
    {
      title:'Python(Basic)',
      issuer:'HackerRank',
      description: 'Proud to have completed the Python(Basic) course on HackerRank',
      image:'https://th.bing.com/th/id/OIP.e29lhxIjByuC0QfMjbdmYwHaEO?rs=1&pid=ImgDetMain',
    },
    {
      title:'Software Engineer Intern',
      issuer:'HackerRank',
      description: 'Proud to have completed the Software Engineer Intern certificate on HackerRank',
      image:'https://th.bing.com/th/id/OIP.e29lhxIjByuC0QfMjbdmYwHaEO?rs=1&pid=ImgDetMain',
    },
    {
      title:'Software Engineer ',
      issuer:'HackerRank',
      description: 'Proud to have completed the Software Engineer certificate on HackerRank',
      image:'https://th.bing.com/th/id/OIP.e29lhxIjByuC0QfMjbdmYwHaEO?rs=1&pid=ImgDetMain',
    },
  ];

  //const certificatessalesforce= "https://drive.google.com/file/d/1qPz3oFh4oFawDlTa18KYbU7MJWnPCQx-/view?usp=drive_link";
  //const certificatesazure="https://drive.google.com/file/d/1bMEJakpgo7mARR6miePnRcXQsSkufdTg/view?usp=drive_link";
  const allcertificate="https://drive.google.com/drive/folders/1ZOHU2dzjLIVxHw8pd3njxmbQa3xnTAsX?usp=drive_link";

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
            href={allcertificate} 
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
                  href={allcertificate} 
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
