'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Calendar, MapPin, Building, Award, Users, Code, Rocket } from "lucide-react"
import GradientText from '../reactbits/gradient-text';
import Magnet from '../reactbits/magnet';

export function ExperienceSection() {
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
      y: 60,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1] as any,
      },
    },
  };

  return (
    <section id="experience" ref={ref} className="relative py-32 bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/15 dark:to-blue-500/20 overflow-hidden">
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
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <GradientText 
            colors={['#6366f1', '#8b5cf6', '#ec4899', '#3b82f6']}
            animationSpeed={6}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Experience
          </GradientText>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-foreground/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Building leadership skills while contributing to meaningful technical projects
          </motion.p>
        </motion.div>

        {/* Experience Card */}
        <motion.div variants={itemVariants} className="mb-16">
            <Card className="group card-enhanced card-glow card-shimmer card-depth hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border-2 border-border/50 dark:border-white/10 bg-gradient-to-br from-card/80 to-card/60 dark:from-slate-900/50 dark:to-indigo-900/30 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <CardTitle className="text-2xl md:text-3xl text-center mb-2 font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                        Assistant Head of Web & Tech Pillar
                      </CardTitle>
                      <div className="flex items-center gap-3 text-foreground/80 dark:text-white/80">
                        <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-border/30 dark:border-white/10">
                          <Building className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-lg font-semibold">MoraSpirit</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-foreground/70 dark:text-white/70">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-border/30 dark:border-white/10"
                    >
                      <Calendar className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="font-medium">2024 – Present</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-border/30 dark:border-white/10"
                    >
                      <MapPin className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      <span className="font-medium">Colombo 06, Sri Lanka</span>
                    </motion.div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {/* Key Achievements */}
                <div className="space-y-6">
                  <motion.h4 
                    className="text-xl font-semibold text-foreground dark:text-white flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <Award className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                    Key Achievements
                  </motion.h4>
                  
                  <div className="grid gap-4">
                    {[
                      {
                        icon: Code,
                        title: "Led the development and successful implementation",
                        description: "of moraspirit360.com, a key web platform for the organization, ensuring optimal user experience and functionality.",
                        color: "text-blue-600 dark:text-blue-400"
                      },
                      {
                        icon: Rocket,
                        title: "Managed and maintained",
                        description: "the entire technical infrastructure of MoraSpirit, collaborating closely with the Head of Pillar to ensure operational excellence.",
                        color: "text-purple-600 dark:text-purple-400"
                      },
                      {
                        icon: Users,
                        title: "Guided two co-chairs",
                        description: "for SpiritX 2025 Hackathon, contributing to its successful execution and providing technical oversight throughout the event.",
                        color: "text-green-600 dark:text-green-400"
                      },
                      {
                        icon: Award,
                        title: "Mentored and onboarded",
                        description: "new members within the Web & Tech Pillar, fostering skill development and team integration.",
                        color: "text-yellow-600 dark:text-yellow-400"
                      }
                    ].map((achievement, index) => {
                      const IconComponent = achievement.icon;
                      return (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          whileHover={{ x: 10, scale: 1.02 }}
                          className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-indigo-50/50 dark:from-white/5 dark:to-white/10 border border-border/30 dark:border-white/10 hover:border-border/60 dark:hover:border-white/20 transition-all duration-300"
                        >
                          <div className="p-2 rounded-lg bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-slate-800 dark:to-slate-700 border border-border/30 dark:border-white/10">
                          <IconComponent className={`h-5 w-5 ${achievement.color}`} />
                          </div>
                          <div className="flex-1">
                          <p className="text-foreground/90 dark:text-white/90 leading-relaxed">
                            <strong className={achievement.color}>{achievement.title}</strong>{' '}
                            <span className="text-foreground/70 dark:text-white/70">{achievement.description}</span>
                          </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Skills Developed */}
                <motion.div 
                  variants={itemVariants}
                  className="space-y-6 hidden md:block pt-8 border-t border-border/30 dark:border-white/10"
                >
                  <h4 className="text-xl font-semibold text-foreground dark:text-white flex items-center gap-3">
                    <Rocket className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    Key Skills Developed
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: "Leadership", color: "from-indigo-500 to-purple-500" },
                      { name: "Project Management", color: "from-purple-500 to-cyan-500" },
                      { name: "Team Mentoring", color: "from-cyan-500 to-indigo-500" },
                      { name: "Web Development", color: "from-indigo-500 to-purple-500" },
                      { name: "Technical Infrastructure", color: "from-purple-500 to-cyan-500" },
                    ].map((skill, index) => (
                      <Magnet key={skill.name} magnetStrength={0.5} padding={2}>
                      <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      >
                      <Badge
                      variant="secondary"
                      className={`
                      px-4 py-2 text-sm font-medium
                      bg-gradient-to-r ${skill.color}
                      text-white border-0 shadow-lg
                      hover:shadow-xl transition-all duration-300
                      cursor-pointer dark:shadow-lg/50
                      `}
                      >
                      {skill.name}
                      </Badge>
                      </motion.div>
                      </Magnet>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
