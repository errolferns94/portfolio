'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'Java', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'Node.js', level: 85 },
  { name: 'React', level: 90 },
  { name: 'MongoDB', level: 75 },
  { name: 'WordPress', level: 80 },
  { name: 'Adobe Photoshop', level: 85 },
  { name: 'Linux', level: 80 },
  { name: 'MySQL', level: 85 },
]

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Profile image section removed */}
          <div>
            <h2 className="text-3xl font-mono font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-6">
              I am a passionate software developer with a unique blend of technical expertise and creative design skills. My journey in technology has been driven by a deep fascination with cybersecurity and a commitment to creating secure, beautiful, and functional digital experiences.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-mono font-bold mb-4">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-dark-200 rounded-lg p-4"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-neon-blue">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-neon-blue to-neon-green"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 