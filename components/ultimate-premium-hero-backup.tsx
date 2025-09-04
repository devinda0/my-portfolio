'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import SplashCursor from './reactbits/splash-cursor';
import BlobCursor from './reactbits/blob-cursor';
import Aurora from './reactbits/aurora-enhanced';
import ParticlesEnhanced from './reactbits/particles-enhanced';
import MagnetEnhanced from './reactbits/magnet-enhanced';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

// Premium 3D Scene Component with better fallback
function ThreeScene() {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    // Simulate loading time for better UX
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
        <div className="w-20 h-20 border-2 border-purple-400/30 border-t-purple-400 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/15 via-blue-900/15 to-cyan-900/15" />
      
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-400/20 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-blue-400/20 rotate-45 animate-bounce" />
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-pink-400/20 rounded-full animate-ping" />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-purple-400/40 text-sm animate-pulse">Premium 3D Experience</div>
      </div>
    </div>
  );
}

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/15 via-blue-900/15 to-cyan-900/15" />
      
      {/* Animated mesh grid */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="url(#gradient)" strokeWidth="1"/>
            </pattern>
            <linearGradient id="gradient" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#EC4899" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Floating orbs */}
      {!isLoading && (
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      )}
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-purple-400/40 text-sm font-light tracking-wider"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Initializing Experience...
          </motion.div>
        </div>
      )}
    </div>
  );
}

// Enhanced Typing Animation Component
function TypingAnimation() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  
  const phrases = [
    "Full Stack Developer",
    "AI/ML Engineer", 
    "React Specialist",
    "Problem Solver",
    "Tech Innovator",
    "UI/UX Designer"
  ];

  useEffect(() => {
    if (isWaiting) {
      const waitTimeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 2000);
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
    }, isDeleting ? 75 : 120);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentPhraseIndex, phrases, isWaiting]);

  return (
    <span className="relative">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 font-semibold">
        {displayText}
      </span>
      <motion.span 
        className="text-purple-400 font-light"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        |
      </motion.span>
    </span>
  );
}

export default function UltimateHeroSection() {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Enhanced scroll animations
  const y = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.85]);
  const rotateX = useTransform(scrollY, [0, 400], [0, 10]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const springY = useSpring(y, springConfig);
  const springScale = useSpring(scale, springConfig);
  const springRotateX = useSpring(rotateX, springConfig);

  // Mouse tracking for subtle parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-950/50 to-black">
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 z-[1]" />
      
      {/* Enhanced Cursor Effects */}
      <SplashCursor 
        SPLAT_RADIUS={0.4}
        SPLAT_FORCE={10000}
        DENSITY_DISSIPATION={3.0}
        VELOCITY_DISSIPATION={2.0}
        COLOR_UPDATE_SPEED={20}
      />
      <BlobCursor 
        fillColor="#8B5CF6"
        trailCount={6}
        sizes={[50, 90, 140, 70, 100, 60]}
        innerSizes={[20, 35, 50, 25, 40, 25]}
        opacities={[0.5, 0.4, 0.3, 0.6, 0.4, 0.5]}
        zIndex={9999}
      />

      {/* Aurora Background */}
      <div className="absolute inset-0 opacity-80">
        <Aurora 
          colorStops={['#8B5CF6', '#EC4899', '#3B82F6', '#10B981']}
          amplitude={2.0}
          blend={0.8}
          speed={1.0}
        />
      </div>

      {/* Enhanced Particles */}
      <div className="absolute inset-0 opacity-60">
        <ParticlesEnhanced
          particleCount={400}
          particleColors={['#8B5CF6', '#EC4899', '#3B82F6', '#10B981', '#F59E0B']}
          moveParticlesOnHover={true}
          particleHoverFactor={3}
          alphaParticles={true}
          particleBaseSize={150}
          speed={0.2}
        />
      </div>

      {/* 3D Background Canvas */}
      <div className="absolute inset-0 opacity-30">
        <ThreeScene />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y: springY, opacity, scale: springScale }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full flex flex-col items-center justify-center min-h-screen"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <MagnetEnhanced magnetStrength={4} padding={50}>
            <Badge 
              variant="secondary" 
              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border-purple-500/30 px-6 py-2 text-sm backdrop-blur-sm"
            >
              🚀 Available for new opportunities
            </Badge>
          </MagnetEnhanced>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold mb-6 leading-tight"
        >
          <motion.span 
            className="block text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Hey, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 inline-block transform hover:scale-105 transition-transform">
              Devinda
            </span>
          </motion.span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl font-semibold mb-8 min-h-[4rem] flex items-center justify-center overflow-visible"
        >
          <TypingAnimation />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          I craft exceptional digital experiences with cutting-edge technologies. 
          Specializing in full-stack development, AI/ML integration, and creating 
          premium user interfaces that captivate and engage.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <MagnetEnhanced magnetStrength={3} padding={40}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white px-10 py-5 text-lg font-semibold rounded-full shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-500 hover:scale-110 group border border-purple-400/20"
            >
              <span className="mr-3 text-xl">🚀</span>
              View My Work
              <motion.span
                className="ml-3 inline-block text-xl"
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
          </MagnetEnhanced>

          <MagnetEnhanced magnetStrength={3} padding={40}>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-purple-500/60 text-white hover:bg-purple-500/20 hover:border-purple-400 px-10 py-5 text-lg font-semibold rounded-full backdrop-blur-md hover:scale-110 transition-all duration-500 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/25"
            >
              <span className="mr-3 text-xl">💬</span>
              Let's Connect
            </Button>
          </MagnetEnhanced>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <p className="text-gray-400 mb-8 text-sm uppercase tracking-widest font-medium">
            Powered by
          </p>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {['React', 'TypeScript', 'Next.js', 'Python', 'TensorFlow', 'Three.js', 'Node.js', 'GraphQL'].map((tech, index) => (
              <MagnetEnhanced key={tech} magnetStrength={6} padding={35}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
                  whileHover={{ scale: 1.15, y: -8 }}
                  className="px-6 py-3 bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-md rounded-full text-sm font-medium text-gray-200 border border-gray-600/40 hover:border-purple-500/60 hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-blue-900/30 transition-all duration-500 shadow-lg hover:shadow-purple-500/20"
                >
                  {tech}
                </motion.div>
              </MagnetEnhanced>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Premium Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-14 border-2 border-purple-400/60 rounded-full flex justify-center bg-gradient-to-b from-transparent to-purple-500/10 backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-3 shadow-lg shadow-purple-400/50"
          />
        </motion.div>
        <p className="text-gray-400 text-xs mt-3 font-medium tracking-wide">Scroll to explore</p>
      </motion.div>
    </section>
  );
}
