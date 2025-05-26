
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = {
    degree: 'Bachelor of Technology in Computer Science (IoT)',
    institution: 'Malla Reddy Engineering College',
    location: 'Hyderabad, Telangana',
    duration: 'May 2025',
    cgpa: '8.60',
    coursework: [
      'Data Structures and Algorithms (Java)',
      'Object Oriented Programming',
      'Computer Network',
      'Database Management',
      'Internet of Things',
      'Operating System'
    ]
  };

  const achievements = [
    {
      title: 'Vishesh Project Expo 2K22',
      description: 'Led a team of 5 people, and everyone having different skill set, we made a online trending website.',
      icon: <Award className="w-5 h-5" />
    },
    {
      title: 'Certifications Completed',
      description: 'Successfully completed 12+ certifications from different organizations and 3+ Virtual Internships from Forage.',
      icon: <Award className="w-5 h-5" />
    },
    {
      title: 'Volunteer Experience',
      description: 'Volunteered for Vishesh Project Expo 2K23 and helped participants in their projects.',
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Education & <span className="text-purple-400">Achievements</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Academic background and notable accomplishments
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="bg-slate-800/50 border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-purple-400">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <Badge variant="secondary" className="bg-purple-600 text-white">
                  Education
                </Badge>
              </div>
            </div>
            <CardTitle className="text-white text-xl">{education.degree}</CardTitle>
            <CardDescription className="text-purple-400 text-lg font-semibold">
              {education.institution}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{education.duration}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{education.location}</span>
                </div>
              </div>
              
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <h4 className="text-purple-400 font-semibold mb-2">CGPA</h4>
                <p className="text-white text-2xl font-bold">{education.cgpa}</p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Relevant Coursework:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {education.coursework.map((course, index) => (
                    <Badge key={index} variant="outline" className="border-purple-400/40 text-purple-300 text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-6">Achievements & Extracurricular</h3>
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-slate-800/50 border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-purple-400 mt-1">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">{achievement.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
