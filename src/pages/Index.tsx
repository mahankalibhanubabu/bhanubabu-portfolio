
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Download, Code, Database, Globe, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation activeSection={activeSection} />
      
      <section id="home">
        <Hero />
      </section>

      <section id="about" className="py-20">
        <About />
      </section>

      <section id="skills" className="py-20 bg-slate-800/50">
        <Skills />
      </section>

      <section id="experience" className="py-20">
        <Experience />
      </section>

      <section id="projects" className="py-20 bg-slate-800/50">
        <Projects />
      </section>

      <section id="education" className="py-20">
        <Education />
      </section>

      <section id="contact" className="py-20 bg-slate-800/50">
        <Contact />
      </section>

      <footer className="bg-slate-900 text-white py-8 text-center">
        <p>&copy; 2024 Mahankali Bhanu Babu. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
