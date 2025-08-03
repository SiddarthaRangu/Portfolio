'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Mail, ExternalLink, Code, Server, Database, Globe, Cpu, Shield, Package, Terminal, ChevronRight, Phone, Briefcase, Award, GraduationCap } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// --- DATA STRUCTURES ---

const rotatingSkills = [
  { name: 'Next.js', color: 'text-black' },
  { name: 'React.js', color: 'text-blue-500' },
  { name: 'TypeScript', color: 'text-blue-600' },
  { name: 'Node.js', color: 'text-green-500' },
  { name: 'MongoDB', color: 'text-emerald-500' },
  { name: 'Redux', color: 'text-purple-600' },
  { name: 'Tailwind CSS', color: 'text-cyan-400' },
  { name: 'Prisma', color: 'text-gray-600' },
  { name: 'AWS', color: 'text-amber-500' }
];

const skillsData = {
    'Frontend': [
        { name: 'React', icon: <Code className="w-5 h-5" /> },
        { name: 'Next.js', icon: <Code className="w-5 h-5" /> },
        { name: 'Redux', icon: <Code className="w-5 h-5" /> },
        { name: 'TypeScript', icon: <Code className="w-5 h-5" /> },
        { name: 'Tailwind CSS', icon: <Package className="w-5 h-5" /> },
        { name: 'Shadcn/UI', icon: <Package className="w-5 h-5" /> },
    ],
    'Backend': [
        { name: 'Node.js', icon: <Server className="w-5 h-5" /> },
        { name: 'Express', icon: <Server className="w-5 h-5" /> },
        { name: 'Firebase', icon: <Database className="w-5 h-5" /> },
        { name: 'Python', icon: <Cpu className="w-5 h-5" /> },
    ],
    'Databases & DevOps': [
        { name: 'MongoDB', icon: <Database className="w-5 h-5" /> },
        { name: 'PostgreSQL', icon: <Database className="w-5 h-5" /> },
        { name: 'Prisma', icon: <Database className="w-5 h-5" /> },
        { name: 'AWS (S3, EC2)', icon: <Shield className="w-5 h-5" /> },
    ],
    'Tools': [
        { name: 'Git', icon: <Terminal className="w-5 h-5" /> },
        { name: 'Postman', icon: <Terminal className="w-5 h-5" /> },
        { name: 'REST APIs', icon: <Globe className="w-5 h-5" /> },
        { name: 'Chrome DevTools', icon: <Terminal className="w-5 h-5" /> },
    ]
};

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with a focus on performance and user experience.',
    technologies: ['React', 'Redux', 'Tailwind CSS', 'FakeStoreAPI'],
    highlights: [
      'Designed a product search system with live filtering and debounced API calls, reducing requests by over 50%.',
      'Engineered a persistent shopping cart using Redux and local storage.',
      'Created 8+ reusable UI components to standardize the design system.'
    ],
    link: 'https://shopping-lac-beta-68.vercel.app/',
    linkType: 'Live Demo'
  },
  {
    title: 'Payment Transfer System',
    description: 'A secure money transfer application with RESTful APIs for account management.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    highlights: [
      'Enabled user-to-user fund transfers via a secure login with bcrypt password hashing.',
      'Developed 5+ RESTful APIs to manage balances, transactions, and histories.',
      'Ensured data integrity using MongoDB transactions and Mongoose validations.'
    ],
    link: 'https://github.com/SiddarthaRangu/Pyments_Transfer_App',
    linkType: 'GitHub'
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
    link: 'https://siddcommenstapp.ccbp.tech',
    linkType: 'Live Demo'
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
    link: 'https://siddappstore.ccbp.tech/',
    linkType: 'Live Demo'
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
    link: 'https://siddwikipedia.ccbp.tech/',
    linkType: 'Live Demo'
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
    link: 'https://siddfoodmunch.ccbp.tech/',
    linkType: 'Live Demo'
  }
];

// UPDATED education data structure
const education = [
    {
        institution: 'Matrusri Engineering College',
        degree: 'B.E. in Electronics & Communication',
        period: '2021 - 2025',
        gpa: 'CGPA: 7.5/10'
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

const certifications = [
  { name: 'Introduction to DevOps', issuer: 'IBM via Coursera', link: 'https://coursera.org/verify/LDJCGMF4RC5T' },
  { name: 'Introduction to Front-End Development', issuer: 'Meta via Coursera', link: 'https://coursera.org/verify/S3WJXPJNH31B' },
  { name: '100XDevs Full Stack Web Development', issuer: '100XDevs', link: null } 
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }, // Increased stagger for better visibility
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Portfolio() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  // --- START: NEW STATE FOR CONTACT FORM ---
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'
  const [statusMessage, setStatusMessage] = useState('');
  // --- END: NEW STATE FOR CONTACT FORM ---

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % rotatingSkills.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const timelineRef = React.useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.5 });

  // --- START: NEW FORM HANDLER FUNCTION ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormState((prev) => ({ ...prev, [name]: value }));
};

  const handleFormSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSubmissionStatus('sending');
    setStatusMessage('Sending your message...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setStatusMessage('Thank you! Your message has been sent.');
        setFormState({ name: '', email: '', message: '' }); // Reset form
      } else {
        throw new Error('Something went wrong on the server.');
      }
    } catch (error) {
      setSubmissionStatus('error');
      setStatusMessage('Sorry, something went wrong. Please try again later.');
      console.error('Form submission error:', error);
    }
  };
  // --- END: NEW FORM HANDLER FUNCTION ---


  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navigation - Always fixed at the top */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Siddartha Rangu
          </motion.div>
          <div className="hidden md:flex gap-6">
            {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <motion.a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-blue-600 transition-colors font-medium" whileHover={{ y: -2 }}>
                {item}
              </motion.a>
            ))}
          </div>
          <motion.a href="https://drive.google.com/file/d/1VSih2mHsoLA47ct86CqGaHKQsv3N9ssL/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            Resume
          </motion.a>
        </div>
      </nav>

      {/* Main content wrapper with padding-top to offset the fixed navbar */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 -mt-16">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl relative z-10">
            <motion.h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              Siddartha Rangu
            </motion.h1>
            <motion.p className="text-xl md:text-2xl font-medium mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              Full Stack Developer || MERN Stack
            </motion.p>
            <div className="h-16 mb-8 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div key={rotatingSkills[currentSkillIndex].name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className={`text-2xl font-medium ${rotatingSkills[currentSkillIndex].color}`}>
                  {rotatingSkills[currentSkillIndex].name}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="#projects" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                View Projects <ChevronRight size={18} />
              </motion.a>
              <motion.a href="#contact" className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-sm flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                Contact Me <Mail size={18} />
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* About & Experience Section */}
        <section id="about" className="py-24 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">About & Experience</h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-12"></div>
                <motion.p className="text-center text-lg text-gray-700 leading-relaxed mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    I&apos;m a passionate Full Stack Developer with hands-on experience in the MERN stack and building production-level Next.js applications. My focus is on creating scalable, high-performance web solutions with a strong emphasis on clean code and great user experiences. I thrive on solving complex problems and continuously learning new technologies. </motion.p>               <div ref={timelineRef} className="relative pl-4">
                    <div className="absolute left-4 top-5 h-full w-0.5 bg-gray-200 md:left-5">
                      <motion.div className="w-full bg-blue-500" style={{ height: isTimelineInView ? "90%" : "0%" }} transition={{ duration: 1, ease: "circOut" }}/>
                    </div>
                    <motion.div className="relative pl-12" initial={{ opacity: 0, x: 20 }} animate={isTimelineInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
                        <div className="absolute left-0 top-0">
                            <div className="w-10 h-10 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center">
                                <Briefcase className="w-5 h-5 text-blue-500" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Web Development Intern</h3>
                        <p className="font-semibold text-indigo-600">Codestam Technologies</p>
                        <p className="text-sm text-gray-500 mb-4">April 2024 – Present | Remote</p>
                        <ul className="space-y-2 text-gray-600">
                            {["Developed scalable web applications using Next.js and TypeScript, improving frontend performance by 30%.", "Engineered modular UI components with the Shadcn library, accelerating development cycles by 25%.", "Integrated Firebase Authentication for secure user sessions across 5+ projects.", "Contributed to full-stack tasks including REST API integration and state management."].map((point, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" /><span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Technical Skills</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-16"></div>
            <div className="space-y-12">
              {Object.entries(skillsData).map(([category, skills], index) => (
                <motion.div key={category} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <div className={`w-3 h-3 ${index % 2 === 0 ? 'bg-blue-600' : 'bg-indigo-600'} rounded-full mr-3`}></div>
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills.map((skill) => (
                      <motion.div key={skill.name} variants={itemVariants} className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-all shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-500 to-indigo-500' : 'from-indigo-500 to-purple-500'} text-white`}>
                              {skill.icon}
                          </div>
                          <span className="font-medium text-gray-800">{skill.name}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Projects</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-16"></div>
              <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
              {projects.map((project) => (
                <motion.div key={project.title} variants={itemVariants} className="bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all" whileHover={{ y: -5, scale: 1.03 }}>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start"><span className="text-blue-600 mr-2 mt-1">•</span><span>{highlight}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (<span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">{tech}</span>))}
                    </div>
                    <motion.a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm" whileHover={{ x: 5 }}>
                      {project.linkType === 'GitHub' ? <FaGithub className="mr-2" /> : <ExternalLink size={14} className="mr-2" />} {project.linkType}
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Education & Certifications</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-16"></div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Education Column */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><GraduationCap className="text-blue-600"/> Education</h3>
                <motion.div className="space-y-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  {education.map((edu) => (
                    <motion.div key={edu.institution} variants={itemVariants} className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-xl font-bold">{edu.institution}</h4>
                      <p className="text-gray-600 mb-2">{edu.degree}</p>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{edu.period}</span>
                        <span className="font-medium">{edu.gpa}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              {/* Certifications Column */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Award className="text-indigo-600"/> Certifications</h3>
                <motion.div className="space-y-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  {certifications.map((cert) => (
                      <motion.div key={cert.name} variants={itemVariants}>
                        <a href={cert.link || '#'} target={cert.link ? "_blank" : "_self"} rel="noopener noreferrer" className={`block p-4 bg-white rounded-lg border border-gray-200 shadow-sm transition-all ${cert.link ? 'hover:border-blue-500 hover:shadow-md hover:-translate-y-1' : 'cursor-default'}`}>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-semibold text-gray-800">{cert.name}</p>
                              <p className="text-sm text-gray-500">{cert.issuer}</p>
                            </div>
                            {cert.link && (<div className="flex items-center gap-2 text-blue-600 text-sm font-medium ml-4 shrink-0">Verify <ExternalLink size={16}/></div>)}
                          </div>
                        </a>
                      </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* --- START: UPDATED Contact Section --- */}
        <section id="contact" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Get In Touch</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-12"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-center mt-4 mb-12">Feel free to reach out for collaborations or just to say hello!</p>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div className="space-y-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <div className="flex items-center p-6 bg-gray-100 rounded-lg border border-gray-200">
                  <Mail className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" /><a href="mailto:siddartharangu@gmail.com" className="text-gray-600 hover:text-blue-600 break-all">siddartharangu@gmail.com</a>
                </div>
                <div className="flex items-center p-6 bg-gray-100 rounded-lg border border-gray-200">
                  <Phone className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" /><a href="tel:+916309751826" className="text-gray-600 hover:text-blue-600">+91 6309751826</a>
                </div>
                <div className="flex gap-4 pt-4">
                  <a href="https://github.com/SiddarthaRangu" target="_blank" rel="noopener noreferrer" className="inline-block text-gray-600 hover:text-gray-900"><FaGithub size={28} /></a>
                  <a href="https://www.linkedin.com/in/siddartha-rangu/" target="_blank" rel="noopener noreferrer" className="inline-block text-gray-600 hover:text-blue-600"><FaLinkedin size={28} /></a>
                </div>
              </motion.div>
              <motion.form onSubmit={handleFormSubmit} className="space-y-4" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" name="name" value={formState.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" value={formState.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition" placeholder="Your email" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows={4} value={formState.message} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition" placeholder="Your message" required></textarea>
                </div>
                <motion.button type="submit" disabled={submissionStatus === 'sending'} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  {submissionStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </motion.button>
                {statusMessage && (
                  <p className={`text-sm text-center mt-4 ${submissionStatus === 'error' ? 'text-red-500' : 'text-green-600'}`}>
                    {statusMessage}
                  </p>
                )}
              </motion.form>
            </div>
          </div>
        </section>
        {/* --- END: UPDATED Contact Section --- */}

        <footer className="py-8 bg-gray-100 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Siddartha Rangu. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}