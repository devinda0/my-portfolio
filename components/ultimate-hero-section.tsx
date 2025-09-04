'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import Aurora from '@/components/reactbits/aurora';
import Particles from '@/components/reactbits/particles';
import GradientText from '@/components/reactbits/gradient-text';
import Magnet from '@/components/reactbits/magnet';

export default function UltimateHeroSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1] as any,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut" as any,
      },
    },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950">
      {/* Multi-layered Background Effects */}
      <div className="absolute inset-0 z-0">
        <Aurora 
          colorStops={['#1e1b4b', '#3730a3', '#1e40af', '#06b6d4', '#8b5cf6']}
          amplitude={1.5}
          blend={0.8}
          speed={1.2}
        />
      </div>

      <div className="absolute inset-0 z-5">
        <Particles
          particleCount={300}
          particleSpread={30}
          speed={0.3}
          particleColors={['#3b82f6', '#06b6d4', '#8b5cf6', '#10b981', '#f59e0b']}
          moveParticlesOnHover={true}
          particleHoverFactor={3}
          alphaParticles={true}
          particleBaseSize={60}
          sizeRandomness={3}
          cameraDistance={12}
        />
      </div>

      {/* Secondary particle layer */}
      <div className="absolute inset-0 z-8 opacity-60">
        <Particles
          particleCount={100}
          particleSpread={50}
          speed={0.8}
          particleColors={['#ffffff', '#e0e7ff', '#ddd6fe']}
          moveParticlesOnHover={false}
          alphaParticles={true}
          particleBaseSize={30}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={true}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        {/* Professional Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <Magnet magnetStrength={2} padding={30}>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              Available for freelance projects
            </div>
          </Magnet>
        </motion.div>

        {/* Main Title with 3D Effect */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="inline-block"
          >
            <GradientText 
              colors={['#3b82f6', '#06b6d4', '#8b5cf6', '#10b981', '#3b82f6']}
              animationSpeed={8}
              className="text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tight leading-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            >
              DEVINDA
            </GradientText>
          </motion.div>
        </motion.div>

        {/* Subtitle with Typewriter Effect */}
        <motion.div variants={itemVariants} className="mb-4">
          <GradientText 
            colors={['#06b6d4', '#8b5cf6', '#10b981', '#f59e0b']}
            animationSpeed={6}
            className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide"
          >
            Full Stack Developer & UI/UX Designer
          </GradientText>
        </motion.div>

        {/* Specializations */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl text-white/80">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Three.js'].map((tech, index) => (
              <Magnet key={tech} magnetStrength={1.5} padding={20}>
                <motion.span 
                  className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </motion.span>
              </Magnet>
            ))}
          </div>
        </motion.div>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Crafting digital experiences that blend cutting-edge technology with stunning design. 
          Specialized in creating immersive web applications that push the boundaries of what's possible.
        </motion.p>

        {/* CTA Buttons with Enhanced Effects */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Magnet magnetStrength={4} padding={50}>
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white border-0 px-10 py-5 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-110 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </Magnet>

          <Magnet magnetStrength={4} padding={50}>
            <Button 
              variant="outline" 
              size="lg"
              className="group border-2 border-white/40 text-white hover:bg-white/15 px-10 py-5 text-xl font-semibold rounded-2xl backdrop-blur-md transition-all duration-500 transform hover:scale-110 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <ExternalLink className="w-6 h-6 mr-3 group-hover:rotate-45 transition-transform duration-300" />
              View Portfolio
            </Button>
          </Magnet>
        </motion.div>

        {/* Enhanced Stats with 3D Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "5+", label: "Years Experience", icon: "⚡" },
            { number: "100+", label: "Projects Completed", icon: "🚀" },
            { number: "50+", label: "Happy Clients", icon: "❤️" },
            { number: "24/7", label: "Support Available", icon: "🌟" }
          ].map((stat, index) => (
            <Magnet key={index} magnetStrength={2} padding={30}>
              <motion.div 
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                }}
                className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-500 relative group"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce">{stat.icon}</div>
                <GradientText 
                  colors={['#3b82f6', '#06b6d4', '#8b5cf6']}
                  className="text-4xl md:text-5xl font-bold mb-3"
                >
                  {stat.number}
                </GradientText>
                <p className="text-white/80 text-lg font-medium">{stat.label}</p>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-purple-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </Magnet>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-16">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#", label: "Email" },
          ].map((social, index) => (
            <Magnet key={index} magnetStrength={3} padding={40}>
              <motion.a
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-8 h-8 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </motion.a>
            </Magnet>
          ))}
        </motion.div>

        {/* Scroll Indicator with Premium Animation */}
        <motion.div 
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Magnet magnetStrength={2} padding={40}>
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" as any
              }}
              className="flex flex-col items-center text-white/60 cursor-pointer group"
            >
              <span className="text-sm mb-3 font-medium group-hover:text-white/90 transition-colors">Scroll to explore</span>
              <div className="relative">
                <ArrowDown className="w-6 h-6 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </motion.div>
          </Magnet>
        </motion.div>
      </motion.div>

      {/* Multiple Gradient Overlays for Depth */}
      <div className="absolute inset-0 z-15 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-16 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />
      <div className="absolute inset-0 z-17 bg-radial-gradient from-transparent via-transparent to-black/20 pointer-events-none" />
    </section>
  );
}
