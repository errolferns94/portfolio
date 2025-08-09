'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const MatrixBackground = dynamic(() => import('./MatrixBackground'), {
  ssr: false
})

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MatrixBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-mono font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-green to-neon-pink"
        >
          Errol Fernandes
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-xl md:text-2xl font-light text-gray-300"
        >
          Developer by Code. Designer by Choice. Security Enthusiast Always.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-lg md:text-xl text-gray-400"
        >
          I build and secure full-stack experiences with a flair for aesthetic design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex justify-center gap-4"
        >
          
        </motion.div>
      </div>
    </div>
  )
}

export default Hero 