'use client'

import { motion } from 'framer-motion'
import { EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-mono font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-200 border border-dark-200 focus:border-neon-blue rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-200 border border-dark-200 focus:border-neon-blue rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-dark-200 border border-dark-200 focus:border-neon-blue rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-pink rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-mono font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:errolferns94@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-neon-blue transition-colors"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <EnvelopeIcon className="w-6 h-6" />
                  <span>errolferns94@gmail.com</span>
                </motion.a>
                <motion.a
                  href="https://github.com/errolferns94"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-neon-green transition-colors"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <GlobeAltIcon className="w-6 h-6" />
                  <span>github.com/errolferns94</span>
                </motion.a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-mono font-bold mb-4">Skills & Technologies</h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-dark-200 rounded-lg"
                >
                  <h4 className="font-medium text-neon-blue">MERN Stack Development</h4>
                  <p className="text-gray-400 text-sm mt-1">MongoDB, Express, React, Node.js</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-dark-200 rounded-lg"
                >
                  <h4 className="font-medium text-neon-green">Mobile Development</h4>
                  <p className="text-gray-400 text-sm mt-1">Android, React Native</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-dark-200 rounded-lg"
                >
                  <h4 className="font-medium text-neon-pink">Additional Skills</h4>
                  <p className="text-gray-400 text-sm mt-1">Django, Unity, Docker, Firebase</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 