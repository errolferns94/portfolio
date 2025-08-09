'use client'

import { motion } from 'framer-motion'
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'Secure Chat Application',
    description: 'End-to-end encrypted chat application with real-time messaging and file sharing capabilities.',
    image: '/project-placeholder.svg',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/errolferns94/encrypted-chat-app',
    live: 'https://github.com/errolferns94/encrypted-chat-app',
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-featured e-commerce platform with secure payment processing and inventory management.',
    image: '/project-placeholder.svg',
    tech: ['React.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/errolferns94/e-commerce_platform',
    live: 'https://e-commerce-platform-5y5vigoo2-errolferns94s-projects.vercel.app',
  },
  {
    title: 'Network Security Tool',
    description: 'Automated network security assessment tool for vulnerability scanning and reporting.',
    image: '/project-placeholder.svg',
    tech: ['Python', 'Django', 'Docker', 'Redis'],
    github: 'https://github.com/errolferns94?tab=repositories',
    live: 'https://github.com/errolferns94?tab=repositories',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern and interactive portfolio website showcasing projects and skills.',
    image: '/project-placeholder.svg',
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    github: '#',
    live: '#',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-mono font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work, showcasing my expertise in full-stack development,
            cybersecurity, and UI/UX design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-dark-100 rounded-xl overflow-hidden"
            >
              <div className="p-6 relative z-20">
                <h3 className="text-xl font-mono font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-200 rounded-full text-sm text-neon-blue"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-300 hover:text-neon-green transition-colors"
                  >
                    <CodeBracketIcon className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-300 hover:text-neon-blue transition-colors"
                  >
                    <GlobeAltIcon className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 