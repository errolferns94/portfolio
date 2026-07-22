'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Resume = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section id="resume" className="min-h-screen flex flex-col items-center justify-center p-8 relative">
        <div className="max-w-4xl w-full bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-green-500/30">
          <h2 className="text-4xl font-bold text-green-500 mb-8 text-center">Resume</h2>
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-gray-300 mb-4">
                Download my resume to learn more about my professional experience, skills, and qualifications.
              </p>
              <Link 
                href="/Errol_Resume_Dev(1).pdf" 
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors"
                download
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-green-500">Skills</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Web Development</li>
                  <li>JavaScript/TypeScript</li>
                  <li>React & Next.js</li>
                  <li>Node.js</li>
                  <li>Database Management</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-green-500">Education</h3>
                <div className="text-gray-300">
                  <p className="font-semibold">Computer Science</p>
                  <p className="text-sm">Parvatibai Chowgule College of Arts, Science and Commerce</p>
                  <p className="text-sm">2021 - 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center p-8 relative"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl w-full bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-green-500/30"
      >
        <h2 className="text-4xl font-bold text-green-500 mb-8 text-center">Resume</h2>
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-gray-300 mb-4">
              Download my resume to learn more about my professional experience, skills, and qualifications.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/Errol-Resume (5).pdf" 
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors"
                download
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-green-500">Skills</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Web Development</li>
                <li>JavaScript/TypeScript</li>
                <li>React & Next.js</li>
                <li>Node.js</li>
                <li>Database Management</li>
                <li>UI/UX Design</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-green-500">Education</h3>
              <div className="text-gray-300">
                
                <p className="font-semibold">School  (2019)</p>
                <p className="text-sm">Vidya Vikas Academy  (10th)</p>
                <p className="text-sm">7.6 CGPA</p>
                <p className="font-semibold">High School  (2021)</p>
                <p className="text-sm">Vidya Vikas Academy (12th)</p>
                <p className="text-sm">7.4 CGPA</p>
                <p className="font-semibold">Computer Science(B.Sc) (2021-2024)</p>
                <p className="text-sm">Parvatibai Chowgule College of Arts, Science and Commerce</p>
                <p className="text-sm">7.00 CGPA</p>
              </div>
              
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Resume; 