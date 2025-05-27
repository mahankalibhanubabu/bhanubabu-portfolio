import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  // Changed to an array to hold multiple education entries
  const educationHistory = [
    {
      degree: 'Bachelor of Technology in Computer Science (IoT)',
      institution: 'Malla Reddy Engineering College',
      location: 'Hyderabad, Telangana',
      duration: 'May 2025',
      score: '8.60',
      scoreLabel: 'CGPA', // Label for the score
      coursework: [
        'Data Structures and Algorithms (Java)',
        'Object Oriented Programming',
        'Computer Network',
        'Database Management',
        'Internet of Things',
        'Operating System'
      ]
    },
    {
      degree: 'Intermediate', // Was 'course'
      institution: 'Telangana State Model Junior College', // Was 'college'
      location: 'Medak, Telangana', // Was 'Location'
      duration: 'March 2021', // Was 'year'
      score: '87%', // Was 'Percentage'
      scoreLabel: 'Percentage', // Label for the score
      coursework: ['Maths', 'Physics', 'Chemistry'] // Was 'Relevant Coursework'
    },
    {
      degree: 'SSC',
      institution: 'Telanagana State Model School',
      location: 'Medak, Telangana',
      duration: 'April 2019',
      score: '9.3',
      scoreLabel: 'CGPA',
      coursework: ['English', 'Telugu', 'Maths', 'Science','Hindi','Social']
    }
  ];

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
    <div className="container mx-auto px-6 py-12 md:py-20"> {/* Added some padding for better spacing */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Education & <span className="text-purple-400">Achievements</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Academic background and notable accomplishments
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start"> {/* items-start to align tops if content height differs */}
        {/* Education Section - now maps over educationHistory */}
        <div className="space-y-8"> {/* Wrapper for multiple education cards */}
          {educationHistory.map((edu, index) => (
            <Card 
              key={index} // Important for lists in React
              className="bg-slate-800/50 border-purple-400/20 hover:border-purple-400/40 transition-all duration-300"
            >
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
                <CardTitle className="text-white text-xl">{edu.degree}</CardTitle>
                <CardDescription className="text-purple-400 text-lg font-semibold">
                  {edu.institution}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2"> {/* flex-wrap for smaller screens */}
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="text-purple-400 font-semibold mb-2">{edu.scoreLabel}</h4>
                    <p className="text-white text-2xl font-bold">{edu.score}</p>
                  </div>

                  {edu.coursework && edu.coursework.length > 0 && ( // Conditionally render if coursework exists
                    <div>
                      <h4 className="text-white font-semibold mb-3">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2"> {/* Changed to flex-wrap for better badge layout */}
                        {edu.coursework.map((course, courseIndex) => (
                          <Badge 
                            key={courseIndex} 
                            variant="outline" 
                            className="border-purple-400/40 text-purple-300 text-xs"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section - remains largely the same */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-6">Achievements & Extracurricular</h3>
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105"
            >
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