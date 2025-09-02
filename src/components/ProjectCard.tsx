'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Code } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  challenge?: string
  impact?: string
  role?: string
  tech: string[]
  github?: string
  demo?: string
  image?: string
  index: number
  featured?: boolean
}

export default function ProjectCard({ 
  title, 
  description, 
  challenge,
  impact,
  role,
  tech, 
  github, 
  demo, 
  image, 
  index,
  featured
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-purple-400 transition-all duration-300 group"
    >
      {/* Project Image/Icon */}
      <div className="h-48 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 flex items-center justify-center relative overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Code size={48} className="text-white" />
        </motion.div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
            {title}
          </h3>
          {featured && (
            <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium rounded-full">
              Featured
            </span>
          )}
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">{description}</p>
        
        {role && (
          <div className="mb-3">
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Role: </span>
            <span className="text-sm text-slate-600 dark:text-slate-400">{role}</span>
          </div>
        )}
        
        {challenge && (
          <div className="mb-3">
            <span className="text-sm font-medium text-slate-900 dark:text-white">Challenge: </span>
            <span className="text-sm text-slate-600 dark:text-slate-400">{challenge}</span>
          </div>
        )}
        
        {impact && (
          <div className="mb-4">
            <span className="text-sm font-medium text-green-600 dark:text-green-400">Impact: </span>
            <span className="text-sm text-slate-600 dark:text-slate-400">{impact}</span>
          </div>
        )}
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((techItem) => (
            <span
              key={techItem}
              className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-300 dark:border-slate-600 hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
            >
              {techItem}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-4">
        {github && <motion.a
            href={github}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group/btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} className="group-hover/btn:rotate-12 transition-transform" />
            <span className="font-medium">Code</span>
          </motion.a>}
          {demo && (
          <motion.a
            href={demo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group/btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={18} className="group-hover/btn:rotate-12 transition-transform" />
            <span className="font-medium">Demo</span>
          </motion.a>)}
        </div>
      </div>
    </motion.div>
  )
}
