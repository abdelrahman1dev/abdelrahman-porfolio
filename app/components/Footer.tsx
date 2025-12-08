'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer className="relative w-full border-t overflow-hidden" style={{ borderColor: 'rgba(16, 185, 129, 0.2)', backgroundColor: 'var(--bg-color)' }}>
      {/* Gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(16, 185, 129, 0.5), transparent)',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="grid md:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#10b981' }}>
              AM
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Fullstack developer crafting beautiful and functional digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4" style={{ color: '#10b981' }}>
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:font-semibold"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4" style={{ color: '#10b981' }}>
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li style={{ color: 'var(--text-secondary)' }}>
                Email: <span className="font-medium">abdelrahman@example.com</span>
              </li>
              <li style={{ color: 'var(--text-secondary)' }}>
                Location: <span className="font-medium">Egypt</span>
              </li>
              <li style={{ color: 'var(--text-secondary)' }}>
                Timezone: <span className="font-medium">UTC+2</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4" style={{ color: '#10b981' }}>
              Social
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-lg transition-all"
                    style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: '#10b981',
                    }}
                    whileHover={{ scale: 1.15, backgroundColor: 'rgba(16, 185, 129, 0.2)' }}
                    title={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div
          className="my-8 h-px"
          style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
        ></div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <motion.div variants={itemVariants} className="text-sm text-center md:text-left" style={{ color: 'var(--text-secondary)' }}>
            <p className="flex items-center justify-center md:justify-start gap-1">
              © {currentYear} Abdelrahman Mohamed. Made with{' '}
              <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <Heart size={16} style={{ color: '#10b981' }} />
              </motion.span>
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="text-sm text-center" style={{ color: 'var(--text-secondary)' }}>
            <p>Built with React • Next.js • Tailwind • Framer Motion</p>
          </motion.div>

          {/* Scroll to Top */}
          <motion.button
            variants={itemVariants}
            onClick={scrollToTop}
            className="p-2 rounded-lg transition-all"
            style={{
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              color: '#10b981',
            }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(16, 185, 129, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            title="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)' }}></div>
    </footer>
  );
}

export default Footer;
