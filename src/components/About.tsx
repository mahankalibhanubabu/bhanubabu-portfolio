
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About <span className="text-purple-400">Me</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Passionate MERN stack developer with extensive experience in building robust web applications
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="prose prose-invert">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm Mahankali Bhanu Babu, a dedicated MERN stack developer with fresh perspective 
              in creating innovative web solutions. I graduated from Malla Reddy Engineering College with 
              a Bachelor's in Computer Science and have been passionate about technology ever since.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My expertise spans across the full stack, from crafting intuitive user interfaces with React 
              to building robust backend systems with Node.js and MongoDB. I've had the privilege of working 
              with companies like Vinsense Technologies and Salesforce, where I've honed my skills in 
              cloud technologies, database management, and modern development practices.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h4 className="text-purple-400 font-semibold mb-2">Location</h4>
              <p className="text-gray-300">Medak, Telangana</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h4 className="text-purple-400 font-semibold mb-2">Experience</h4>
              <p className="text-gray-300">Fresher</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h4 className="text-purple-400 font-semibold mb-2">Phone</h4>
              <p className="text-gray-300">+91 9014325589</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <h4 className="text-purple-400 font-semibold mb-2">Email</h4>
              <p className="text-gray-300 text-sm">mahankalibbhanubabu23323@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Card className="bg-slate-800/50 border-purple-400/20 overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">Professional Resume</h3>
                <p className="text-gray-400">Complete technical background and experience</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <img 
                  src="/lovable-uploads/resume ss.png" 
                  alt="Mahankali Bhanu Babu Resume" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
