'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-3 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'dark' ? 1 : 0,
          opacity: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-3"
      >
        <Moon size={20} className="text-slate-800 dark:text-slate-200" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'light' ? 1 : 0,
          opacity: theme === 'light' ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-3"
      >
        <Sun size={20} className="text-slate-800 dark:text-slate-200" />
      </motion.div>

      {/* Invisible spacer to maintain button size */}
      <div className="w-5 h-5 opacity-0">
        <Sun size={20} />
      </div>
    </motion.button>
  )
}


