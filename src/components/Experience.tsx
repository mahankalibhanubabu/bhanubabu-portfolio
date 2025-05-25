
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Vice President - IoT essENSE',
      company: 'IoT essENSE',
      location: 'Remote',
      duration: 'Nov 2023 - nov 2024',
      type: 'Leadership Role',
      description: [
        'Lead "IoT Essense" as Vice President, driving strategic initiatives and fostering collaboration to advance understanding and application of IoT technologies within the community',
        'Spearhead innovative projects and facilitate knowledge exchange among members to explore and implement IoT solutions for addressing real-world challenges',
        'Ensure "IoT Essense" maintains a leading position in IoT developments through effective leadership, engagement, and contribution to technological progress and societal impact'
      ],
      technologies: ['IoT', 'Leadership', 'Strategic Planning', 'Project Management']
    },
    {
      title: 'Salesforce Developer Virtual Internship',
      company: 'Salesforce',
      location: 'Remote',
      duration: 'Jan 2024 - aug 2024',
      type: 'Virtual Internship',
      description: [
        'Successfully completed a virtual Salesforce internship, acquiring practical skills and insights into Salesforce platform functionalities, CRM tools, and sales automation processes'
      ],
      technologies: ['Salesforce', 'CRM', 'Sales Automation', 'Platform Development']
    },
    {
      title: 'Cloudauth: Secure User Management System',
      company: 'Vinsense Technologies',
      location: 'Remote',
      duration: 'Nov 2023 - dec 2023',
      type: 'Full-time',
      description: [
        'During internship, developed Cloud Auth integrating Java for website, SQL for data storage, ensuring secure user management',
        'Proficient in Java and SQL'
      ],
      technologies: ['Java', 'SQL', 'Cloud Auth', 'User Management', 'Security']
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Work <span className="text-purple-400">Experience</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Professional journey building innovative solutions and leading teams
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-4 border-slate-900 z-10"></div>

              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                <Card className="bg-slate-800/50 border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-purple-600 text-white">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.duration}
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                    <CardDescription className="flex items-center text-purple-400">
                      <Building className="w-4 h-4 mr-2" />
                      {exp.company}
                      <MapPin className="w-4 h-4 ml-4 mr-1" />
                      {exp.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm leading-relaxed">
                          • {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-purple-400/40 text-purple-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
