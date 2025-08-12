'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const menuItems = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    setTimeout(() => {
      const element = document.getElementById(sectionId.toLowerCase())
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 100)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-slate-900 dark:text-white hover:text-purple-400 transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-16 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 z-50"
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-lg font-medium py-2"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
