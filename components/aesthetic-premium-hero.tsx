'use client';

import React, { useEffect, useRef, useState, Suspense } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Button } from './ui/button';
import Link from 'next/link';
import { ChevronDown, Download, Github, Linkedin, Mail, ExternalLink, Sparkles, Code2, Zap } from 'lucide-react';

// ReactBits imports
import Aurora from './reactbits/aurora-enhanced';
import ParticlesEnhanced from './reactbits/particles-enhanced';
import SplashCursor from './reactbits/splash-cursor';
import BlobCursor from './reactbits/blob-cursor';
import MagnetEnhanced from './reactbits/magnet-enhanced';
import GradientText from './reactbits/gradient-text';

// Advanced Floating 3D Profile Image
function Advanced3DProfile() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const profileRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(profileRef, { once: true });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (profileRef.current) {
        const rect = profileRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x: x * 20, y: y * 20 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={profileRef}
      className="relative w-full h-full flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        scale: isInView ? 1 : 0.8, 
        rotateY: isInView ? 0 : 30 
      }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute inset-0"
        animate={{
          rotateZ: [0, 360],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
            style={{
              top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 30}%`,
              left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 30}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* Main profile container */}
      <motion.div
        className="relative z-10"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Outer glow ring */}
        <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-blue-600/30 blur-xl animate-pulse" />
        
        {/* Middle ring */}
        <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/40 animate-spin-slow" />
        
        {/* Inner ring */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-400/50 to-purple-400/50 animate-spin-very-slow" />
        
        {/* Profile image container */}
        <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 via-pink-400 to-blue-400 shadow-2xl">
          <img
            src="/my-circle.png"
            alt="Devinda - Full Stack Developer"
            className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-110"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-pink-600/20 mix-blend-overlay" />
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
        </div>

        {/* Status badge */}
        <motion.div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-md px-6 py-2 rounded-full border border-green-400/30 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
              <span className="text-white text-sm font-semibold">Available for Hire</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Enhanced Typing Animation with more effects
function AdvancedTypingAnimation() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  
  const phrases = [
    "Full Stack Developer",
    "AI/ML Enthusiast", 
    "3D Web Innovator",
    "Hackathon Builder",
    "Problem Solver",
    "Tech Explorer",
    "Future Engineer",
  ];

  useEffect(() => {
    if (isWaiting) {
      const waitTimeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 2500);
      return () => clearTimeout(waitTimeout);
    }

    const currentPhrase = phrases[currentPhraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentPhrase.length) {
          setDisplayText(currentPhrase.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setIsWaiting(true);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(currentPhrase.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentPhraseIndex, phrases, isWaiting]);

  return (
    <span className="relative flex justify-start items-center">
      <GradientText
        colors={['#a855f7', '#ec4899', '#3b82f6', '#8b5cf6']}
        animationSpeed={3}
        showBorder={false}
        className="font-bold text-4xl md:text-5xl lg:text-6xl"
      >
        {displayText}
      </GradientText>
      <motion.span 
        className="text-purple-400 font-bold ml-1 text-5xl"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        |
      </motion.span>
    </span>
  );
}

// Floating action buttons
function FloatingActions() {
  const actions = [
    { icon: Github, href: "https://github.com/devinda0", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/devinda-dilshan", label: "LinkedIn" },
    { icon: Mail, href: "mailto:devindadilshan0@gmail.com", label: "Email" },
    { icon: Download, href: "/Devinda_Resume.pdf", label: "Resume" }
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
      {actions.map((action, index) => (
        <motion.a
          key={action.label}
          href={action.href}
          target={action.href.startsWith('http') ? '_blank' : '_self'}
          className="group relative"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 + 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MagnetEnhanced magnetStrength={1} padding={5}>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md border border-purple-500/30 rounded-full flex items-center justify-center hover:from-purple-600/40 hover:to-blue-600/40 transition-all duration-300">
              <action.icon className="w-5 h-5 text-purple-300" />
            </div>
          </MagnetEnhanced>
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-md text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {action.label}
          </div>
        </motion.a>
      ))}
    </div>
  );
}

// Simplified geometric background elements
function GeometricElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Reduced number of floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-purple-500/10 rotate-45"
        animate={{ 
          rotate: [45, 405, 45],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-32 w-24 h-24 border border-pink-500/10 rounded-full"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Subtle grid pattern - reduced opacity */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.015)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_1000px_800px_at_50%_50%,black_30%,transparent_100%)]" />
    </div>
  );
}

// Main Hero Component
export default function AestheticPremiumHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });
  
  const smoothOpacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  return (
    <>
      {/* Cursor Effects */}
      <SplashCursor />
      <BlobCursor />
      
      {/* Floating Actions */}
      <FloatingActions />
      
      <section 
        id='hero'
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950"
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={['#6366f1', '#8b5cf6', '#ec4899', '#3b82f6']}
            amplitude={1.2}
            blend={0.3}
            speed={0.6}
          />
        </div>
        
        <div className="absolute inset-0 z-10">
          <ParticlesEnhanced
            particleCount={60}
            speed={30}
            particleColors={['#8b5cf6', '#ec4899', '#3b82f6']}
            moveParticlesOnHover={true}
            alphaParticles={true}
            particleBaseSize={1.5}
          />
        </div>

        {/* Main Content Container - Split Layout */}
        <motion.div 
          className="relative z-30 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center min-h-screen"
          style={{ 
            y: smoothY, 
            opacity: smoothOpacity 
          }}
        >
          {/* Left Side - Text Content */}
          <motion.div 
            className="space-y-8 text-left lg:pr-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >

            {/* Main Heading with GradientText */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
                <motion.span 
                  className="block"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <GradientText
                    colors={['#ffffff', '#e5e7eb', '#d1d5db']}
                    animationSpeed={4}
                    showBorder={false}
                    className="font-bold"
                  >
                    Hi, I'm
                  </GradientText>
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <GradientText
                    colors={['#a855f7', '#ec4899', '#3b82f6', '#8b5cf6']}
                    animationSpeed={2}
                    showBorder={false}
                    className="font-bold"
                  >
                    Devinda
                  </GradientText>
                </motion.span>
              </h1>
              
              <motion.div 
                className="min-h-[4rem] flex items-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <AdvancedTypingAnimation />
              </motion.div>
            </motion.div>

            {/* Enhanced Description */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-white leading-relaxed font-bold drop-shadow-lg">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-semibold drop-shadow-sm">exceptional digital experiences</span> with cutting-edge technologies.
              </p>
              <p className="text-lg font-bold text-gray-100 leading-relaxed drop-shadow-md">
                Specializing in modern web development, AI/ML solutions, and immersive 3D interfaces that push the boundaries of what's possible.
              </p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-6 pt-4"
            >
              <MagnetEnhanced
                magnetStrength={1}
                padding={5}
              >
                <Button 
                  size="lg" 
                  className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white border-0 px-10 py-6 text-lg font-semibold shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    View My Work
                    <ExternalLink className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-white/20 to-purple-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </MagnetEnhanced>
              
              <MagnetEnhanced
                magnetStrength={1}
                padding={1}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group relative border-2 dark:bg-gray-100 hover:dark:bg-purple-300/50 border-purple-500/50 text-purple-600 hover:bg-purple-300/50 hover:border-purple-600 hover:text-white px-10 py-6 text-lg font-semibold transition-all duration-500 backdrop-blur-md overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Get In Touch
                    <Mail className="ml-3 w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </MagnetEnhanced>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="pt-8"
            >
              <p className="text-sm text-gray-100 mb-4 font-bold drop-shadow-sm">Trusted technologies</p>
              <div className="flex flex-wrap gap-4">
                {['React', 'TypeScript', 'Node.js', 'Python', 'Three.js', 'AI/ML'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600/40 to-pink-600/70 hover:scale-[1.05] border border-purple-400/30 rounded-full text-sm text-purple-200 backdrop-blur-md shadow-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Advanced 3D Profile */}
          <motion.div 
            className="relative h-screen flex items-center justify-center lg:justify-end"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <Advanced3DProfile />
          </motion.div>
        </motion.div>
                
        {/* Scroll Indicator */}
        <Link href={'#about'} >
        <motion.div
          
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-40"
        >
          <span className="text-sm text-gray-300 font-medium drop-shadow-md">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-3 rounded-full border-2 border-purple-300/40 hover:border-purple-600/30 transition-colors cursor-pointer backdrop-blur-md"
          >
            <ChevronDown className="w-6 h-6 text-purple-200" />
          </motion.div>
        </motion.div>
        </Link>

        {/* Enhanced ambient glow effects */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </section>
    </>
  );
}
