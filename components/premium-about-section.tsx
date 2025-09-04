'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Download, Award, Target, Heart, Zap } from 'lucide-react';
import GradientText from '@/components/reactbits/gradient-text';
import Magnet from '@/components/reactbits/magnet';
import Particles from '@/components/reactbits/particles';
import Image from 'next/image';
import Link from 'next/link';

const achievements = [
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Built impactful full-stack and AI projects showcased in academic and tech communities',
    color: '#f59e0b'
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'Proven track record of delivering high-quality projects under tight deadlines',
    color: '#10b981'
  },
  {
    icon: Heart,
    title: 'Passion-Driven',
    description: 'Love experimenting with 3D web, AI, and creative coding to push boundaries',
    color: '#ef4444'
  },
  {
    icon: Zap,
    title: 'Innovation Focus',
    description: 'Exploring next-gen tools like Three.js, Next.js, and AI/ML to craft unique solutions',
    color: '#8b5cf6'
  }
];


const timeline = [
  {
    year: '2022',
    title: 'A/L Completion',
    description: 'Passed the Advanced Level in the Physical Science stream.'
  },
  {
    year: '2023',
    title: 'University Admission',
    description: 'Joined the University of Moratuwa to pursue higher studies.'
  },
  {
    year: '2024',
    title: 'CSE Selection',
    description: 'Selected Computer Science & Engineering as my specialization.'
  },
  {
    year: '2024',
    title: 'Leadership Role',
    description: 'Joined MoraSpirit as Assistant Head of the Web & Technology Pillar.'
  }
];


export default function PremiumAboutSection() {
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
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      rotateX: -15,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        ease: [0.23, 1, 0.32, 1] as any,
      },
    },
  };

  return (
    <section id='about' ref={ref} className="relative py-32 overflow-hidden">
      {/* Enhanced Background with Custom Gradient */}
      <div className="absolute inset-0 z-0">
        {/* Base background colors - Enhanced for better dark mode appearance */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900" />
        
        {/* Light Mode Background - Multiple gradient layers */}
        <div className="absolute inset-0 dark:hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/8 via-[#8b5cf6]/8 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tl from-[#ec4899]/8 via-[#3b82f6]/8 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6]/6 to-[#3b82f6]/6" />
        </div>
        
        {/* Dark Mode Background - Enhanced with richer colors */}
        <div className="absolute inset-0 hidden dark:block">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/20 via-[#8b5cf6]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tl from-[#ec4899]/20 via-[#3b82f6]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6]/15 to-[#3b82f6]/15" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-slate-900/50" />
        </div>
        
        {/* Aurora Background Layer - Enhanced for dark mode */}
        <div className="absolute inset-0 z-5 opacity-60 dark:opacity-80">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#6366f1]/10 to-[#8b5cf6]/10 dark:from-[#6366f1]/25 dark:to-[#8b5cf6]/25 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-[#ec4899]/15 to-[#3b82f6]/15 dark:from-[#ec4899]/30 dark:to-[#3b82f6]/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-[#8b5cf6]/8 to-[#6366f1]/8 dark:from-[#8b5cf6]/20 dark:to-[#6366f1]/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
          </div>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <GradientText 
              colors={['#3b82f6', '#06b6d4', '#8b5cf6', '#3b82f6']}
              animationSpeed={6}
              className="text-6xl md:text-8xl font-black tracking-tight mb-6"
            >
              About Me
            </GradientText>
          </motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-700 dark:text-white/80 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Passionate developer crafting digital experiences that inspire and innovate
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative">
            <Magnet magnetStrength={3} padding={40}>
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
                className="relative group perspective-1000"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 scale-110"></div>
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-white/90 to-slate-100/90 dark:from-slate-700/90 dark:to-slate-800/90 border border-slate-200/50 dark:border-white/20 backdrop-blur-sm shadow-2xl" style={{ width: '100%', height: '400px' }}>
                  <Image
                    src="/my-full.jpeg"
                    alt="Devinda Dilshan"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-120 dark:brightness-110"
                    priority
                  />
                  
                  {/* Enhanced overlay effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute bottom-6 left-6">
                      <div className="text-slate-800 dark:text-white/90 text-sm font-semibold px-3 py-1 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">Available for projects</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Magnet>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <GradientText 
                colors={['#3b82f6', '#06b6d4', '#8b5cf6']}
                animationSpeed={4}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Building the Future, One Line at a Time
              </GradientText>
              
              <motion.p 
                whileHover={{ scale: 1.02 }}
                className="text-lg text-slate-700 dark:text-white/90 leading-relaxed text-justify p-6 rounded-2xl bg-white/70 dark:bg-slate-800/40 backdrop-blur-sm border border-slate-200/50 dark:border-white/10 hover:border-slate-300/70 dark:hover:border-white/30 transition-all duration-300"
              >
                I'm a passionate full-stack developer with more than 1 year of experience creating 
                innovative digital solutions. My expertise spans across modern web technologies and
                AI integration.
              </motion.p>
              
              <motion.p 
                whileHover={{ scale: 1.02 }}
                className="text-lg text-slate-700 dark:text-white/90 leading-relaxed text-justify p-6 rounded-2xl bg-white/70 dark:bg-slate-800/40 backdrop-blur-sm border border-slate-200/50 dark:border-white/10 hover:border-slate-300/70 dark:hover:border-white/30 transition-all duration-300"
              >
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community through 
                blog posts and mentoring.
              </motion.p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Magnet magnetStrength={3} padding={40}>
                <Link href="Devinda_Resume.pdf" download>
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Download CV
                </Button>
                </Link>
              </Magnet>
              
              <Magnet magnetStrength={3} padding={40}>
                <Link href={'https://www.linkedin.com/in/devinda-dilshan/'} >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-slate-300 dark:border-white/30 bg-white/70 dark:bg-slate-800/60 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700/80 hover:border-slate-400 dark:hover:border-white/50 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                >
                  Let's Connect
                </Button>
                </Link>
              </Magnet>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Achievements Grid */}
        <motion.div variants={itemVariants} className="mb-20">
          <GradientText 
            colors={['#3b82f6', '#06b6d4', '#8b5cf6']}
            animationSpeed={4}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            What Drives Me
          </GradientText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Magnet key={index} magnetStrength={3} padding={20}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -15,
                    rotateY: 8,
                    rotateX: 5 
                  }}
                  className="group p-8 rounded-3xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-white/10 hover:border-slate-300/70 dark:hover:border-white/30 transition-all duration-500 text-center relative overflow-hidden shadow-xl hover:shadow-2xl"
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl"
                    style={{
                      background: `radial-gradient(circle at center, ${achievement.color}60, transparent 70%)`
                    }}
                  />
                  
                  <div 
                    className="inline-flex p-6 rounded-3xl mb-6 relative transform group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      backgroundColor: `${achievement.color}20`,
                      boxShadow: `0 8px 32px ${achievement.color}30`
                    }}
                  >
                    <achievement.icon 
                      className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12"
                      style={{ color: achievement.color }}
                    />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-4 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    {achievement.title}
                  </h4>
                  
                  <p className="text-slate-600 dark:text-white/80 leading-relaxed text-sm group-hover:text-slate-700 dark:group-hover:text-white/90 transition-colors duration-300">
                    {achievement.description}
                  </p>
                </motion.div>
              </Magnet>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Timeline */}
        <motion.div variants={itemVariants}>
          <GradientText 
            colors={['#3b82f6', '#06b6d4', '#8b5cf6']}
            animationSpeed={4}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            My Journey
          </GradientText>
          
          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 shadow-lg"></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 z-20 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <Magnet magnetStrength={3} padding={30}>
                      <motion.div
                        whileHover={{ scale: 1.05, y: -8, rotateY: index % 2 === 0 ? 5 : -5 }}
                        className="p-8 rounded-3xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-white/10 hover:border-slate-300/70 dark:hover:border-white/30 transition-all duration-500 shadow-xl hover:shadow-2xl"
                      >
                        <GradientText 
                          colors={['#3b82f6', '#8b5cf6', '#06b6d4']}
                          animationSpeed={3}
                          className="text-3xl font-black mb-3"
                        >
                          {item.year}
                        </GradientText>
                        <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                          {item.title}
                        </h4>
                        <p className="text-slate-600 dark:text-white/80 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    </Magnet>
                  </div>
                  
                  {/* Enhanced Timeline Node */}
                  <div className="relative z-30">
                    <Magnet magnetStrength={2} padding={15}>
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 180 }}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-slate-200/50 dark:border-white/20 shadow-2xl backdrop-blur-sm"
                        style={{
                          boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)'
                        }}
                      />
                    </Magnet>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
