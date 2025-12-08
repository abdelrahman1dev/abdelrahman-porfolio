"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Github, Linkedin, Dribbble, ArrowUpRight } from "lucide-react";
import GrediantTxt from "../components/GrediantTxt";
 import Squares from '@/components/Squares';
function HeroSec() {
  return (
     <div
      className="relative heroDiv w-full min-h-screen flex items-center justify-center px-6 py-35"
    >

        <div className="absolute before:bottom-0 before:h-30 before:absolute bottom-0 before:w-full w-full before:content-[''] before:bg-gradient-to-t before:from-[#f8fafc] before:to-transparent"></div>
      {/* Background squares fill the whole hero */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Squares
        mode="light"
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>

      {/* Circular spinning badge – placed globally so it doesn't overlap content */}
      <div className="pointer-events-none absolute top-20 right-10 hidden lg:flex items-center justify-center z-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="h-28 w-28 rounded-full border border-black/20 flex items-center justify-center"
        >
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              fill="none"
            />
            <text className="text-[9px] fill-black/60 tracking-[0.25em] uppercase" style={{ fontSize: '9px' }}>
              <textPath href="#circlePath" startOffset="0%">
                Creative Developer • Portfolio •
              </textPath>
            </text>
          </svg>
        </motion.div>
        <div className="absolute h-10 w-10 rounded-full bg-slate-900 border border-black/20 flex items-center justify-center">
          <span className="text-xs font-semibold text-white">AM</span>
        </div>
      </div>

      {/* Main Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        {/* LEFT: Text / Intro */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full lg:w-[40%] space-y-6"
        >
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-emerald-300">
              Available for Projects
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <p
              className="text-[11px] uppercase tracking-[0.25em]"
              style={{ color: "var(--text-secondary, #9ca3af)" }}
            >
              Fullstack Developer
            </p>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: "var(--text-primary, #f9fafb)" }}
            >
              Meet the Expert
              <br />
              <GrediantTxt text="fullstack engineer" ClassName="text-4xl lg:text-5xl font-bold leading-tight" />
            </h1>
            <p
              className="text-sm"
              style={{ color: "var(--text-secondary, #9ca3af)" }}
            >
              By Abdelrahman Mohamed
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4 pt-2">
            {[Github, Linkedin, Dribbble].map((Icon, i) => (
              <motion.button
                key={i}
                whileHover={{ y: -1, scale: 1.03 }}
                className="p-2 rounded-full border border-black/10 bg-black/5 hover:bg-black/10 transition"
              >
                <Icon size={18} className="text-black/80" />
              </motion.button>
            ))}
          </div>

          {/* Small bottom tags */}
          <div className="flex flex-wrap gap-4 pt-4 text-xs text-black/50">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-black/50" /> Design
              Systems
            </span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-black/50" /> Frontend
              Architecture
            </span>
          </div>
        </motion.div>

        {/* CENTER: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative w-full lg:w-[28%] group flex items-center justify-center rounded-full"
        >
          {/* Subtle glow behind image (darker / less intense) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.22),transparent_65%)] blur-xl" />
          </div>


     <div className="relative h-60 w-60 flex items-center justify-center">
  {/* الصورة - ثابتة */}
  <div className="h-52 w-52 rounded-full overflow-hidden bg-white shadow-lg">
    <Image
      src="/img/download.webp"
      width={500}
      height={500}
      alt="pfp"
      className="h-full w-full object-cover group-hover:scale-105 transition-all duration-500 pointer-events-none"
    />
  </div>

  {/* البوردر المتحرك + اللمعة */}
  <svg
    className="absolute h-60 w-60 pointer-events-none"
    viewBox="0 0 100 100"
  >
    <defs>
      {/* جراديانت الاميرالد */}
      <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="50%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#22c55e" />
      </linearGradient>

      {/* لمعة بيضا بتمشي على البوردر */}
      <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(255,255,255,0)" />
        <stop offset="50%" stopColor="rgba(255,255,255,0.9)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </linearGradient>
    </defs>

    {/* البوردر الاساسي الاميرالد */}
    <circle
      cx="50"
      cy="50"
      r="47"
      fill="none"
      stroke="url(#emeraldGradient)"
      strokeWidth="3"
    />

    {/* اللمعة البيضا اللي بتلف */}
    <circle
      cx="50"
      cy="50"
      r="47"
      fill="none"
      stroke="url(#shineGradient)"
      strokeWidth="6"
      strokeLinecap="round"
      className="animate-spin-slow"
      strokeDasharray="40 400"
    />
  </svg>
</div>

        </motion.div>

        {/* RIGHT: Copy + Rating + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-[32%] space-y-6"
        >
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary, #9ca3af)" }}
          >
            As a professional web developer, I build fast, modern, and scalable
            applications that combine clean engineering with thoughtful UX to
            create experiences that feel polished and engaging.
          </p>

          {/* Rating line */}
          <div className="flex items-center gap-3 text-xs text-black/60">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill="#22c55e"
                  className="text-emerald-400"
                />
              ))}
            </div>
            <span>5.0 Rated by clients</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <motion.button
              whileHover={{ y: -1, scale: 1.02 }}
              className="px-5 py-2.5 rounded-full cursor-pointer text-sm font-medium bg-emerald-500 hover:bg-emerald-400 text-black shadow-md shadow-emerald-500/30"
            >
              Explore Services
            </motion.button>
            <button className="px-4 py-2.5 flex group cursor-pointer rounded-full text-xs sm:text-sm font-medium border border-black/15 text-black/80 hover:bg-black/5">
              Request Resume <ArrowUpRight className="group-hover:translate-x-1 transition-all duration-500"/>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroSec;
