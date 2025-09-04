'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import Aurora from '@/components/reactbits/aurora';
import Particles from '@/components/reactbits/particles';
import GradientText from '@/components/reactbits/gradient-text';
import Magnet from '@/components/reactbits/magnet';

export default function PremiumHeroSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        ease: [0.23, 1, 0.32, 1] as any,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as any,
      },
    },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora 
          colorStops={['#1e40af', '#3b82f6', '#06b6d4', '#8b5cf6']}
          amplitude={2}
          blend={0.7}
          speed={0.8}
        />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 z-10">
        <Particles
          particleCount={150}
          particleSpread={25}
          speed={0.5}
          particleColors={['#3b82f6', '#06b6d4', '#8b5cf6', '#ffffff']}
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={2}
          cameraDistance={15}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="inline-block"
          >
            <GradientText 
              colors={['#3b82f6', '#06b6d4', '#8b5cf6', '#3b82f6']}
              animationSpeed={6}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight"
            >
              DEVINDA
            </GradientText>
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-6">
          <GradientText 
            colors={['#06b6d4', '#8b5cf6', '#3b82f6']}
            animationSpeed={4}
            className="text-2xl md:text-4xl lg:text-5xl font-light"
          >
            Full Stack Developer
          </GradientText>
        </motion.div>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Crafting exceptional digital experiences with modern technologies. 
          Specializing in React, Next.js, and cutting-edge web development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Magnet magnetStrength={3} padding={40}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </Magnet>

          <Magnet magnetStrength={3} padding={40}>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View Projects
            </Button>
          </Magnet>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { number: "5+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <GradientText 
                colors={['#3b82f6', '#06b6d4']}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                {stat.number}
              </GradientText>
              <p className="text-white/80 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Magnet magnetStrength={2} padding={30}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-white/60 cursor-pointer"
            >
              <span className="text-sm mb-2 font-medium">Scroll to explore</span>
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </Magnet>
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-15 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
