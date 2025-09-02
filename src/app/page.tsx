'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code, MapPin, Download } from 'lucide-react'
import MobileMenu from '@/components/MobileMenu'
import SkillCard from '@/components/SkillCard'
import ProjectCard from '@/components/ProjectCard'
import ThemeToggle from '@/components/ThemeToggle'

const skills = [
  { name: 'JavaScript', icon: '/developer-portfolio/logos/javascript.svg' },
  { name: 'TypeScript', icon: '/developer-portfolio/logos/typescript.svg' },
  { name: 'JS', icon: '/developer-portfolio/logos/javascript.svg' },
  { name: 'TS', icon: '/developer-portfolio/logos/typescript.svg' },
  { name: 'React', icon: '⚛️' },
  { name: 'React Native', icon: '📱' },
  { name: 'Next.js', icon: '/developer-portfolio/logos/nextjs.svg' },
  { name: 'Node.js', icon: '/developer-portfolio/logos/nodejs.svg' },
  { name: 'OpenAI', icon: '/developer-portfolio/logos/openai.svg' },
  { name: 'AI Integration', icon: '🤖' },
  { name: 'OpenAI API', icon: '🧠' },
  { name: 'Express', icon: '🚀' },
  { name: 'Redux', icon: '🔄' },
  { name: 'Zustand', icon: '🐻' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Elasticsearch', icon: '🔍' },
  { name: 'Python', icon: '🐍' },
  { name: 'AWS', icon: '/developer-portfolio/logos/aws.svg' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Git', icon: '📝' },
  { name: 'VS Code', icon: '💻' },
  { name: 'Open Source', icon: '🌟' }
]

const projects = [
  {
    title: 'React Visual Annotator (Published NPM Package)',
    description: 'Production-ready NPM package for React image annotation with rotatable bounding boxes, polygons, and points.',
    challenge: 'Built a complex annotation system with 24% smaller bundle size than competitors while maintaining full React 19 compatibility.',
    impact: 'Downloaded by developers worldwide • Featured on NPM • Open source with 50+ GitHub stars',
    role: 'Lead Developer & Package Maintainer',
    tech: ['React', 'TypeScript', 'Vite', 'Material-UI', 'NPM Publishing', 'Open Source'],
    github: 'https://github.com/sukeshhublikar/react-visual-annotator',
    demo: 'https://www.npmjs.com/package/react-visual-annotator',
    image: 'https://via.placeholder.com/400x300',
    featured: true
  },
  {
    title: 'Enterprise Data Catalog Platform (Rakuten)',
    description: 'Unified application consolidating all catalog tools with single sign-on, permission management, and cross-application notification system.',
    challenge: 'Architected a scalable microservices solution handling 10M+ daily requests with real-time notifications across multiple applications.',
    impact: 'Reduced development time by 40% • Improved user experience • Won Rakuten Excellence Award',
    role: 'Senior Fullstack Developer & Technical Lead',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Java', 'MySQL', 'Microservices'],
    image: 'https://via.placeholder.com/400x300',
    featured: true
  },
  {
    title: 'Gastryda Bidding Platform',
    description: 'Online bidding platform for oil and gas industry. Features user management, real-time bidding, negotiations, and deal management with responsive design.',
    tech: ['React', 'Go', 'Ant Design', 'PostgreSQL'],
    // github: 'https://github.com/sukeshhublikar',
    // demo: 'https://gastryda.com',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    title: 'Opendev Property Platform',
    description: 'Property marketplace enabling users to buy, sell, and negotiate real estate online. Includes payment integration, email templates, and cross-browser compatibility.',
    tech: ['React', 'Go', 'Ant Design', 'PostgreSQL'],
      // github: 'https://github.com/sukeshhublikar',
      // demo: 'https://opendev.com',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    title: 'EzzHealth Medical Portal',
    description: 'Healthcare platform for finding doctors, hospitals, and clinics with appointment booking system. Improved search algorithms and customer satisfaction by 40%.',
    tech: ['React', 'Node.js', 'Express', 'Bootstrap', 'Elasticsearch', 'MongoDB'],
    // github: 'https://github.com/sukeshhublikar',
    // demo: 'https://ezzhealth.com',
    image: 'https://via.placeholder.com/400x300'
  },
  {
    title: 'React Native Mobile Solutions',
    description: 'Cross-platform mobile applications with advanced configuration management, splash screens, and autocomplete functionality. Expertise in iOS and Android development.',
    tech: ['React Native', 'JavaScript', 'iOS', 'Android', 'Objective-C'],
      // github: 'https://github.com/sukeshhublikar',
      // demo: 'https://github.com/sukeshhublikar',
    image: 'https://via.placeholder.com/400x300'
  }
]

const experience = [
  {
    company: 'Rakuten',
    role: 'Senior Fullstack Developer',
    period: 'Sep 2019 - Present',
    description: 'Designed and developed end-to-end annotation tools for data cataloging using React, Node.js, Java, and MySQL. Built comprehensive console applications including all Data Catalog Tools and Dashboards with backend APIs and database integration. Leading fullstack development initiatives and ensuring high-quality code standards.',
    achievements: ['Rakuten Excellence Award', 'Team Work Award']
  },
  {
    company: 'ACubetech Solutions',
    role: 'Fullstack Developer',
    period: 'Aug 2018 - Aug 2019',
    description: 'Developed end-to-end Gastryda online bidding platform for global oil and gas industry using React, Go, and PostgreSQL. Created complete Opendev property marketplace with backend APIs, negotiation features, and payment integration. Built responsive frontend with robust backend architecture.',
    achievements: []
  },
  {
    company: 'Ezz Health Technology Ltd',
    role: 'Fullstack Developer',
    period: 'Jun 2016 - Aug 2018',
    description: 'Built complete EzzHealth web portal with backend APIs for doctor and hospital search, appointment booking system using React, Node.js, Express, and MongoDB. Developed comprehensive Clinical Portal for patient and doctor management with full database integration. Improved customer satisfaction by 40% and reduced helpdesk tickets by 25%.',
    achievements: []
  }
]

const education = {
  degree: 'Information Science Engineering',
  institution: 'SJBIT Bengaluru',
  period: '2012 - 2015',
  location: 'Karnataka, India'
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-slate-900 dark:text-white"
            >
              Sukesh Hublikar
            </motion.div>
            <div className="hidden md:flex space-x-8 items-center">
              {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <ThemeToggle />
            </div>
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
              <Code size={48} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
              Hi, I&apos;m <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Sukesh Hublikar</span> 👋
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Senior Fullstack Developer | 9+ Years | NPM Package Author | React, TypeScript & AI Specialist
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              Passionate fullstack developer creating end-to-end web solutions. Expert in React, Next.js, Node.js, AI integration, and database technologies with significant experience in both frontend and backend development for startups and enterprise solutions.
            </p>
            <div className="flex justify-center items-center space-x-2 text-slate-600 dark:text-slate-400 mb-8">
              <MapPin size={16} />
              <span>Bengaluru, Karnataka, India</span>
            </div>
            <div className="flex justify-center space-x-6 mb-8">
              <motion.a
                href="https://github.com/sukeshhublikar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sukesh-hublikar-4b3215124"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:sukeshhublikar2015@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center"
            >
              <motion.a
                href="/developer-portfolio/sukesh-hublikar-resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills 💻</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Technologies I work with</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill.name}
                icon={skill.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400 text-lg">Some of my recent work</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                challenge={project.challenge}
                impact={project.impact}
                role={project.role}
                tech={project.tech}
                github={project.github}
                demo={project.demo}
                index={index}
                featured={project.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Experience 💼</h2>
            <p className="text-slate-400 text-lg">My professional journey</p>
          </motion.div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-slate-700 p-6 rounded-lg border-l-4 border-purple-400"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  <span className="text-purple-400 font-medium">{exp.period}</span>
                </div>
                <h4 className="text-lg text-slate-300 mb-3">{exp.role}</h4>
                <p className="text-slate-400 mb-4">{exp.description}</p>
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-400/30"
                      >
                        🏆 {achievement}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Education 🎓</h2>
            <p className="text-slate-400 text-lg">Academic background</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-700 p-8 rounded-lg border-l-4 border-purple-400 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
            <h4 className="text-xl text-purple-400 mb-2">{education.institution}</h4>
            <div className="flex justify-center items-center space-x-4 text-slate-400">
              <span>{education.period}</span>
              <span>•</span>
              <span>{education.location}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              I&apos;m available for freelance projects and full-time opportunities. Let&apos;s discuss how I can help bring your ideas to life.
            </p>
            
            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <motion.a
                href="mailto:sukeshhublikar2015@gmail.com?subject=Project Inquiry&body=Hi Sukesh, I'd like to discuss a project with you."
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <Mail size={20} />
                <span>Start a Project</span>
              </motion.a>
              <motion.a
                href="/developer-portfolio/sukesh-hublikar-resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-lg font-semibold border-2 border-slate-200 dark:border-slate-600 hover:border-purple-400 transition-all duration-300 flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.a>
            </div>

            {/* Quick Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div
                whileHover={{ y: -2 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
              >
                <Mail className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Email</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">sukeshhublikar2015@gmail.com</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
              >
                <Linkedin className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">LinkedIn</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Connect professionally</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
              >
                <Github className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">GitHub</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">View my code</p>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://github.com/sukeshhublikar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-600 transition-all"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sukesh-hublikar-4b3215124"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-600 transition-all"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://stackoverflow.com/users/6179909/sukesh-hublikar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-600 transition-all"
              >
                <Code size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Sukesh Hublikar. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  )
}