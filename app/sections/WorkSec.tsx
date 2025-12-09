'use client';

import projects from '@/public/projects'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import GrediantTxt from '../components/GrediantTxt';
import Link from 'next/link';

function WorkSec() {


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative w-full py-24 px-6" style={{ backgroundColor: 'var(--bg-color)' }}>
      {/* Background decoration - Emerald */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-40 -left-40 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
          }}
        ></div>
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GrediantTxt
            ClassName="text-5xl font-bold text-center p-2 my-5 capitalize"
            text="latest projects"
          />
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Explore some of my recent work and projects that showcase my skills and expertise
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.filter((p) => p.featured).map((project) => (
            <Link href={`/projects/${project.link}`} key={project.id}>
                <motion.div
              key={project.id}
              variants={itemVariants}
              className="group rounded-2xl border overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: 'rgba(16, 185, 129, 0.2)',
                backgroundColor: 'rgba(16, 185, 129, 0.05)',
              }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-56 flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>

                <Image className="text-8xl group-hover:scale-110 transition-transform duration-300" src={project.image} alt='project' width={600} height={600} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#10b981' }}>
                  {project.title}
                </h3>
                <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: 'rgba(16, 185, 129, 0.15)',
                        color: '#10b981',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                    style={{
                      backgroundColor: '#10b981',
                      color: 'white',
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github size={16} /> Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all"
                    style={{
                      borderColor: 'rgba(16, 185, 129, 0.3)',
                      color: '#10b981',
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink size={16} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.filter((p) => !p.featured).map((project) => (
           <Link href={`/projects/${project.link}`}>
             <motion.div
              key={project.id}
              variants={itemVariants}
              className="group rounded-xl border overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: 'rgba(16, 185, 129, 0.2)',
                backgroundColor: 'rgba(16, 185, 129, 0.05)',
              }}
              whileHover={{ y: -3 }}
            >
              <div className="relative h-40 flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                <Image className="text-6xl group-hover:scale-110 transition-transform duration-300" src={project.image} alt='project' width={400} height={400} />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2" style={{ color: '#10b981' }}>
                  {project.title}
                </h3>
                <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded"
                      style={{
                        backgroundColor: 'rgba(16, 185, 129, 0.15)',
                        color: '#10b981',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 rounded text-xs font-medium"
                    style={{
                      backgroundColor: '#10b981',
                      color: 'white',
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 rounded text-xs font-medium border"
                    style={{
                      borderColor: 'rgba(16, 185, 129, 0.3)',
                      color: '#10b981',
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <ArrowRight size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
           </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WorkSec;
