'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

export const NavBar: React.FC = () => {
  const [isClick, setIsClick] = useState(false)

  const toggleNavbar = (): void => {
    setIsClick(!isClick)
  }

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },

    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const contianerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },

    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  }

  return (
    <>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white">
                  logo
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Home
                </a>

                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Contato
                </a>

                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Especialista
                </a>

                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  templates
                </a>

                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Novas
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isClick && (
            <motion.div
              className="md:hidden"
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                variants={contianerVars}
                initial="initial"
                animate="open"
                exit="initial"
              >
                <a
                  href="/"
                  className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Home
                </a>

                <a
                  href="/"
                  className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Contato
                </a>

                <a
                  href="/"
                  className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Especialista
                </a>

                <a
                  href="/"
                  className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                >
                  templates
                </a>

                <a
                  href="/"
                  className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Novas
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default NavBar
