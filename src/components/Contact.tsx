
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Code } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'mahankalibbhanubabu23323@gmail.com',
      link: 'mailto:mahankalibbhanubabu23323@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+91 9014325589',
      link: 'tel:+919014325589'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      content: 'Medak, Telangana, India',
      link: null
    }
  ];

    const bhanuresume =()=>{
      window.open('https://drive.google.com/file/d/1uEGMxryWQVaUzpfPy-0119EIJhDgbcMM/view?usp=drive_link','_blank');
    }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://linkedin.com/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'HackerRank',
      icon: <Code className="w-6 h-6" />,
      url: 'https://hackerrank.com/',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get In <span className="text-purple-400">Touch</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Ready to collaborate on exciting projects or discuss opportunities
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm always open to discussing new opportunities, innovative projects, or potential collaborations. 
              Whether you're looking for a dedicated MERN stack developer or want to explore how we can work 
              together, I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-slate-800/50 border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-purple-400">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.content}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white ${social.color} transition-all duration-200 transform hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Card className="bg-slate-800/50 border-purple-400/20">
          <CardHeader>
            <CardTitle className="text-white">Ready to Start a Project?</CardTitle>
            <CardDescription className="text-gray-400">
              Download my resume or send me a message
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                size="lg"
                onClick={bhanuresume}
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-purple-400/40 text-purple-400 hover:bg-purple-400/10"
                size="lg"
              >
                <Mail className="mr-2" size={20} />
                Send Email
              </Button>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h4 className="text-white font-semibold mb-3">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-400">1</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">10+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">12+</div>
                  <div className="text-gray-400 text-sm">Certifications</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">0</div>
                  <div className="text-gray-400 text-sm">Companies</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
