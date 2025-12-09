'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Zap, Award } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import GrediantTxt from '../components/GrediantTxt';

function AboutSec() {
  const [activeTab, setActiveTab] = useState('stats');

  const aboutItems = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices and design patterns.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Breaking down complex problems and finding elegant solutions with attention to detail.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency to deliver the best user experience.'
    },
    {
      icon: Award,
      title: 'Continuous Learning',
      description: 'Always staying updated with latest technologies and industry best practices.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section
      className="relative w-full py-24 px-6"
      style={{ backgroundColor: 'var(--bg-color)' }}
    >
      {/* Background decoration - Emerald shades */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 -left-40 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
          }}
        ></div>
        <div
          className="absolute bottom-0 -right-40 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          
            <GrediantTxt text='About Me' ClassName='text-4xl md:text-5xl font-bold mb-4'  />
            
         
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            I'm a passionate front-end developer focused on creating beautiful, functional web experiences
          </p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div
                className="p-6 rounded-2xl border backdrop-blur-sm"
                style={{
                  borderColor: 'rgba(16, 185, 129, 0.2)',
                  backgroundColor: 'rgba(16, 185, 129, 0.05)',
                }}
              >
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#10b981' }}
                >
                  Who I Am
                </h3>
                <p style={{ color: 'var(--text-primary)' }} className="leading-relaxed">
                  I'm Abdelrahman Mohamed, a front-end developer with a passion for building modern web applications. With expertise in React, Next.js, and backend technologies, I create seamless digital experiences that solve real-world problems.
                </p>
              </div>

              <div
                className="p-6 rounded-2xl border backdrop-blur-sm"
                style={{
                  borderColor: 'rgba(16, 185, 129, 0.2)',
                  backgroundColor: 'rgba(16, 185, 129, 0.05)',
                }}
              >
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#10b981' }}
                >
                  My Journey
                </h3>
                <p style={{ color: 'var(--text-primary)' }} className="leading-relaxed">
                  Started with a curiosity for how things work, I've grown into a developer who loves tackling challenges. Each project taught me something new, from optimization to user experience design.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="h-96 rounded-2xl border-4 flex items-center justify-center"
              style={{
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.08)',
              }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(16, 185, 129, 0.2)',
                  '0 0 40px rgba(16, 185, 129, 0.4)',
                  '0 0 20px rgba(16, 185, 129, 0.2)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
           <Image  src={'/img/2.jpg'} alt='photo' width={200} height={200}/>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills/Highlights Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aboutItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl border backdrop-blur-sm hover:border-emerald-300 transition-all duration-300"
                style={{
                  borderColor: 'rgba(16, 185, 129, 0.2)',
                  backgroundColor: 'rgba(16, 185, 129, 0.05)',
                }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#10b981' }}
                  whileHover={{ rotate: 10 }}
                >
                  <IconComponent size={24} color="white" />
                </motion.div>
                <h4
                  className="font-bold text-lg mb-2"
                  style={{ color: '#10b981' }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tabs Section - Stats & Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="rounded-2xl border backdrop-blur-sm p-8"
          style={{
            borderColor: 'rgba(16, 185, 129, 0.2)',
            backgroundColor: 'rgba(16, 185, 129, 0.05)',
          }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
              <TabsTrigger value="stats" style={{ 
                color: activeTab === 'stats' ? '#ffffff' : 'var(--text-secondary)',
                backgroundColor: activeTab === 'stats' ? '#10b981' : 'transparent',
              }}>
                Stats
              </TabsTrigger>
              <TabsTrigger value="tech" style={{
                color: activeTab === 'tech' ? '#ffffff' : 'var(--text-secondary)',
                backgroundColor: activeTab === 'tech' ? '#10b981' : 'transparent',
              }}>
                Tech Stack
              </TabsTrigger>
            </TabsList>

            {/* Stats Tab Content */}
            <TabsContent value="stats">
              <motion.div
                className="grid md:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {[
                  { number: '10+', label: 'Projects Completed' },
                  { number: '5+', label: 'Happy Clients' },
                  { number: '2+', label: 'Years Experience' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 rounded-xl border backdrop-blur-sm"
                    style={{
                      borderColor: 'rgba(16, 185, 129, 0.2)',
                      backgroundColor: 'rgba(16, 185, 129, 0.08)',
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3
                      className="text-4xl font-bold mb-2"
                      style={{ color: '#10b981' }}
                    >
                      {stat.number}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Tech Stack Tab Content */}
            <TabsContent value="tech">
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {[
                  { name: 'React', level: 'Expert' },
                  { name: 'Next.js', level: 'Expert' },
                  { name: 'JavaScript', level: 'Expert' },
                  { name: 'TypeScript', level: 'Advanced' },
                  { name: 'Supabase', level: 'Intermediate' },
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-xl border backdrop-blur-sm"
                    style={{
                      borderColor: 'rgba(16, 185, 129, 0.2)',
                      backgroundColor: 'rgba(16, 185, 129, 0.08)',
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4
                        className="font-bold text-lg"
                        style={{ color: '#10b981' }}
                      >
                        {tech.name}
                      </h4>
                      <span
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: '#10b981',
                          color: 'white',
                        }}
                      >
                        {tech.level}
                      </span>
                    </div>
                    <div
                      className="w-full h-2 rounded-full"
                      style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)' }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: '#10b981' }}
                        initial={{ width: 0 }}
                        animate={{ width: tech.level === 'Expert' ? '100%' : tech.level === 'Advanced' ? '85%' : '60%' }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSec;
