'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import MagnetEnhanced from '../reactbits/magnet-enhanced';
import ParticlesEnhanced from '../reactbits/particles-enhanced';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Github, Calendar, Tag, Code, Database, Gamepad2, Monitor, Server } from 'lucide-react';

interface Project {
  title: string;
  name: string;
  description: string;
  technologies: string[];
  icon: string;
  year: string;
  category: string;
  link: string;
  url: string;
}

interface ProjectsUltimateProps {
  projects?: Project[];
}

const iconMap = {
  Code,
  Database,
  Gamepad2,
  Monitor,
  Server,
};

export default function ProjectsSection({ projects = [] }: ProjectsUltimateProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  // Filter projects by category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      id="projects"
      className="relative py-32 overflow-hidden"
    >
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

      {/* Enhanced Particles Background */}
      <div className="absolute inset-0 opacity-25 dark:opacity-40">
        <ParticlesEnhanced
          particleCount={150}
          particleColors={['#6366f1', '#8b5cf6', '#ec4899', '#3b82f6']}
          moveParticlesOnHover={true}
          particleHoverFactor={1.5}
          alphaParticles={true}
          particleBaseSize={80}
          speed={0.1}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <MagnetEnhanced magnetStrength={3} padding={40}>
            <Badge className="mb-6 bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-500/20 dark:to-blue-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-500/30">
              🚀 Featured Work
            </Badge>
          </MagnetEnhanced>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
              Projects & 
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Innovations</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my collection of cutting-edge projects that showcase my expertise in 
            full-stack development, AI/ML, and modern web technologies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <MagnetEnhanced key={category} magnetStrength={4} padding={30}>
              <Button
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-3 rounded-full transition-all duration-300 
                  ${selectedCategory === category 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25' 
                    : 'border-indigo-400 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-500/10'
                  }
                `}
              >
                {category}
              </Button>
            </MagnetEnhanced>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group"
            >
              <MagnetEnhanced magnetStrength={2} padding={20}>
                <Card className="h-full bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-lg border-gray-200 dark:border-gray-700/50 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:shadow-indigo-500/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-xl">
                        {React.createElement(iconMap[project.icon as keyof typeof iconMap] || Code, { className: "w-6 h-6 text-indigo-600 dark:text-indigo-400" })}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </div>
                    </div>
                    
                    <Badge variant="secondary" className="w-fit mb-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-500/20 dark:to-indigo-500/20 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-500/30">
                      <Tag className="w-3 h-3 mr-1" />
                      {project.category}
                    </Badge>
                    
                    <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </CardDescription>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * techIndex }}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700/50 dark:to-gray-800/50 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-gray-600/50 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <MagnetEnhanced magnetStrength={3} padding={20}>
                        <Button
                          size="sm"
                          asChild
                          className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white group-hover:scale-105 transition-all duration-300"
                        >
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                          </a>
                        </Button>
                      </MagnetEnhanced>
                      
                      {/* {project.url && (
                        <MagnetEnhanced magnetStrength={3} padding={20}>
                          <Button
                            size="sm"
                            variant="outline"
                            asChild
                            className="border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 group-hover:scale-105 transition-all duration-300"
                          >
                            <a 
                              href={project.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Live</span>
                            </a>
                          </Button>
                        </MagnetEnhanced>
                      )} */}
                    </div>
                  </CardContent>
                </Card>
              </MagnetEnhanced>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <MagnetEnhanced magnetStrength={3} padding={40}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 group"
            >
              <span className="mr-2">🔍</span>
              Explore All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </MagnetEnhanced>
        </motion.div> */}
      </div>
    </motion.section>
  );
}
