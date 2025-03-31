'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  Mail, ExternalLink, Code, Server, Database, Globe, Cpu, Shield, Package, Terminal, ChevronRight, Phone } from 'lucide-react';
import {FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const rotatingSkills = [
  { name: 'React.js', color: 'text-blue-500' },
  { name: 'Node.js', color: 'text-green-500' },
  { name: 'MongoDB', color: 'text-emerald-500' },
  { name: 'JavaScript (ES6+)', color: 'text-yellow-500' },
  { name: 'Python', color: 'text-indigo-500' },
  { name: 'Express.js', color: 'text-gray-500' },
  { name: 'PostgreSQL', color: 'text-blue-400' },
  { name: 'HTML5/CSS3', color: 'text-orange-500' },
  { name: 'Bootstrap', color: 'text-purple-500' },
  { name: 'Tailwind CSS', color: 'text-cyan-400' },
  { name: 'REST APIs', color: 'text-red-400' },
  { name: 'AWS', color: 'text-amber-500' }
];

const projects = [
  {
    title: 'Payments Transfer App',
    description: 'Secure money transfer application with RESTful APIs for account management and transactions.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    highlights: [
      'JWT authentication with bcrypt.js hashing',
      'Transactional database logic with Mongoose',
      'Responsive UI with Tailwind CSS'
    ],
    link: 'https://github.com/SiddarthaRangu/Pyments_Transfer_App'
  },
  {
    title: 'Comments App',
    description: 'Real-time comments application with CRUD functionality.',
    technologies: ['React.js', 'JavaScript', 'HTML', 'CSS'],
    highlights: [
      'State management with React hooks',
      'UUID for unique comment IDs',
      'Optimized API calls'
    ],
    link: 'https://siddcommenstapp.ccbp.tech'
  },
  {
    title: 'App Store Website',
    description: 'Single-page app showcasing different app categories.',
    technologies: ['React.js', 'JavaScript', 'HTML', 'CSS'],
    highlights: [
      'Real-time search functionality',
      'React state management',
      'Cross-browser compatible UI'
    ],
    link: 'https://siddappstore.ccbp.tech/'
  },
  {
    title: 'Wikipedia Search Application',
    description: 'Custom search tool for Wikipedia with curated results.',
    technologies: ['JavaScript', 'Bootstrap', 'HTML', 'CSS'],
    highlights: [
      'Wikipedia API integration',
      'Responsive Bootstrap layout',
      'Asynchronous results fetching'
    ],
    link: 'https://siddwikipedia.ccbp.tech/'
  },
  {
    title: 'Food Munch Website',
    description: 'Mobile-first food store website with product showcases.',
    technologies: ['Bootstrap', 'HTML', 'CSS'],
    highlights: [
      'Mobile-first responsive design',
      'Bootstrap components',
      'Detailed product displays'
    ],
    link: 'https://siddfoodmunch.ccbp.tech/'
  }
  // ... (keep your other projects)
];

const education = [
  {
    institution: 'Matrusri Engineering College',
    degree: 'Bachelor of Engineering in Electronics and Communication',
    period: 'Class of 2025',
    gpa: 'GPA: 7.5/10.0'
  },
  {
    institution: 'Srichaitanya Junior College',
    degree: 'Intermediate (MPC)',
    period: 'Class of 2021',
    gpa: 'Percentage: 97.8'
  },
  {
    institution: 'Srichaitanya Techno School',
    degree: 'SSC',
    period: 'Class of 2019',
    gpa: 'CGPA: 10.0'
  }
];

export default function Portfolio() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % rotatingSkills.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Siddartha Rangu
          </motion.div>
          <div className="hidden md:flex gap-6">
            {['Home', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.a
            href="#contact"
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Hire Me
          </motion.a>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl relative z-10"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Siddartha Rangu
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl font-medium mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
             Full Stack Developer || MERN Stack
          </motion.p>
          
          {/* Enhanced Rotating Skills */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={rotatingSkills[currentSkillIndex].name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`text-2xl font-medium ${rotatingSkills[currentSkillIndex].color}`}
              >
                {rotatingSkills[currentSkillIndex].name}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              View Projects <ChevronRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-sm flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Contact Me <Mail size={18} />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Profile Description */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-gray-200 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              Professional Profile
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                {" I'm a passionate"} <span className="font-semibold text-blue-600">Full Stack Developer</span> with expertise in building scalable web applications using modern technologies like React.js, Node.js, and MongoDB. My journey in tech combines strong problem-solving skills with a keen eye for performance optimization.
              </p>
              <p className="text-lg leading-relaxed">
                What sets me apart is my ability to design <span className="font-semibold text-indigo-600">secure authentication systems</span> and implement <span className="font-semibold text-blue-600">RESTful APIs</span> that power seamless user experiences. I take pride in writing clean, maintainable code that stands the test of scale.
              </p>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
{/* Enhanced Skills Section */}
<section id="skills" className="py-20 px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-4 text-gray-900">Technical Skills</h2>
      <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
        Organized by development domains
      </p>
    </motion.div>

    <div className="space-y-12">
      {/* Frontend Skills */}
      <div>
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
          Frontend Development
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {['React.js', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS', 'Bootstrap'].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-all shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  {skill === 'React.js' && <Code className="w-5 h-5" />}
                  {skill === 'JavaScript' && <Globe className="w-5 h-5" />}
                  {skill === 'HTML5/CSS3' && <Globe className="w-5 h-5" />}
                  {skill === 'Tailwind CSS' && <Package className="w-5 h-5" />}
                  {skill === 'Bootstrap' && <Package className="w-5 h-5" />}
                </div>
                <span className="font-medium text-gray-800">{skill}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Backend Skills */}
      <div>
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <div className="w-3 h-3 bg-indigo-600 rounded-full mr-3"></div>
          Backend Development
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {['Node.js', 'Express.js', 'Python', 'REST APIs', 'JWT Auth'].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-indigo-400 transition-all shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  {skill === 'Node.js' && <Server className="w-5 h-5" />}
                  {skill === 'Express.js' && <Terminal className="w-5 h-5" />}
                  {skill === 'Python' && <Cpu className="w-5 h-5" />}
                  {skill === 'REST APIs' && <Terminal className="w-5 h-5" />}
                  {skill === 'JWT Auth' && <Shield className="w-5 h-5" />}
                </div>
                <span className="font-medium text-gray-800">{skill}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tools & Databases */}
      <div>
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
          Databases & Tools
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {['MongoDB', 'PostgreSQL', 'AWS', 'Git/GitHub', 'Postman'].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-all shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  {(skill === 'MongoDB' || skill === 'PostgreSQL') && <Database className="w-5 h-5" />}
                  {skill === 'AWS' && <Shield className="w-5 h-5" />}
                  {skill === 'Git/GitHub' && <Terminal className="w-5 h-5" />}
                  {skill === 'Postman' && <Terminal className="w-5 h-5" />}
                </div>
                <span className="font-medium text-gray-800">{skill}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <motion.a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink size={14} className="mr-2" /> View Project
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">Education</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold">{edu.institution}</h3>
                <p className="text-gray-600 mb-2">{edu.degree}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{edu.period}</span>
                  <span className="font-medium">{edu.gpa}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {[
                  { name: 'Full Stack Web Development', issuer: '100Xdevs' },
                  { name: 'Python Programming Essentials', issuer: 'NXT WAVE' },
                  { name: 'SQL Certification', issuer: 'NXT WAVE' }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 bg-white rounded-lg border border-gray-200"
                >
                  <h4 className="font-medium">{cert.name}</h4>
                  <p className="text-sm text-gray-500">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-gray-900">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Feel free to reach out for collaborations or just to say hello!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start p-6 bg-gray-50 rounded-lg border border-gray-200">
                <Mail className="w-5 h-5 text-blue-600 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-bold mb-1">Email</h4>
                  <a href="mailto:siddartharangu@gmail.com" className="text-gray-600 hover:text-blue-600">
                    siddartharangu@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start p-6 bg-gray-50 rounded-lg border border-gray-200">
                <Phone className="w-5 h-5 text-blue-600 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-bold mb-1">Phone</h4>
                  <a href="tel:+916309751826" className="text-gray-600 hover:text-blue-600">
                    +91 6309751826
                  </a>
                </div>
              </div>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
  href="https://github.com/SiddarthaRangu"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block text-gray-600 hover:text-blue-600 mx-2"
>
  <Github size={24} />
</a>
<a
  href="https://www.linkedin.com/in/siddartharangu"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block text-gray-600 hover:text-blue-600 mx-2"
>
  <Linkedin size={24} />
</a>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Your message"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Siddartha Rangu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}