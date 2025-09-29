import React from 'react';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import { 
  ArrowDown, 
  Code, 
  Palette, 
  Database, 
  Smartphone,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

function App() {
  const skills = [
    { name: 'Frontend Development', icon: Code, description: 'React, Vue, Angular, TypeScript' },
    { name: 'UI/UX Design', icon: Palette, description: 'Figma, Adobe XD, Tailwind CSS' },
    { name: 'Backend Development', icon: Database, description: 'Node.js, Python, PostgreSQL' },
    { name: 'Mobile Development', icon: Smartphone, description: 'React Native, Flutter' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Alex Johnson
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A passionate full-stack developer creating beautiful, functional web experiences 
              that make a difference in people's lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="mt-16 animate-bounce">
            <ArrowDown className="w-8 h-8 text-gray-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  I'm a passionate full-stack developer with over 5 years of experience 
                  creating digital solutions that bridge the gap between design and functionality. 
                  My journey began with a curiosity about how websites work, and it has evolved 
                  into a deep love for crafting experiences that users genuinely enjoy.
                </p>
                <p className="mb-6">
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community. 
                  I believe in continuous learning and staying ahead of the curve in this 
                  ever-evolving field.
                </p>
                <p>
                  My approach combines technical expertise with creative problem-solving, 
                  ensuring that every project I work on not only meets requirements but 
                  exceeds expectations in both functionality and user experience.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Developer workspace"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I specialize in modern web technologies and love learning new tools 
              that help me build better experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.name}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {skill.name}
                  </h3>
                  <p className="text-gray-600">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating 
              meaningful digital experiences.
            </p>
          </div>
          
          <Carousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's connect and discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <p className="text-gray-300">Email</p>
                    <a href="mailto:alex@example.com" className="text-white hover:text-blue-400 transition-colors">
                      alex@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-semibold mb-6">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Alex Johnson. Built with React and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;