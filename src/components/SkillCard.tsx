'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface SkillCardProps {
  skill: string
  index: number
  icon?: string
}

export default function SkillCard({ skill, index, icon }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
      }}
      className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800 px-4 py-3 rounded-lg text-center text-slate-900 dark:text-white font-medium border border-slate-200 dark:border-slate-600 hover:border-purple-400 transition-all duration-300 cursor-pointer group"
    >
      <div className="flex items-center justify-center space-x-2">
        {icon &&
          (icon.includes("/") ? (
            <Image
              src={icon}
              alt={skill}
              className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-200"
            />
          ) : (
            <span className="text-lg">{icon}</span>
          ))}
        <span className="group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
          {skill}
        </span>
      </div>
    </motion.div>
  );
}
