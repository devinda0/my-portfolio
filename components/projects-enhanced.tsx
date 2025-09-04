'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Box, Float, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import MagnetEnhanced from './reactbits/magnet-enhanced';
import ParticlesEnhanced from './reactbits/particles-enhanced';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ExternalLink, Github, ArrowRight, Calendar, Tag } from 'lucide-react';

// 3D Project Card Component
function ProjectCard3D({ 
  project, 
  position, 
  isHovered,
  onHover,
  onUnhover 
}: { 
  project: any;
  position: [number, number, number];
  isHovered: boolean;
  onHover: () => void;
  onUnhover: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      meshRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
      meshRef.current.rotation.x = Math.cos(time * 0.3) * 0.05;
      
      if (isHovered) {
        meshRef.current.scale.setScalar(1.1);
        meshRef.current.position.z = position[2] + 0.5;
      } else {
        meshRef.current.scale.setScalar(1);
        meshRef.current.position.z = position[2];
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={onHover}
        onPointerOut={onUnhover}
      >
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial 
          color={isHovered ? "#8B5CF6" : "#4F46E5"}
          emissive={isHovered ? "#8B5CF6" : "#4F46E5"}
          emissiveIntensity={isHovered ? 0.3 : 0.1}
          roughness={0.2}
          metalness={0.8}
        />
        <Text
          position={[0, 0, 0.06]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
        >
          {project.title}
        </Text>
      </mesh>
    </Float>
  );
}

// 3D Scene Component
function ProjectsScene({ projects, hoveredProject }: { projects: any[]; hoveredProject: number | null }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
      
      {projects.slice(0, 6).map((project, index) => {
        const angle = (index / 6) * Math.PI * 2;
        const radius = 4;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius * 0.3;
        const z = Math.sin(angle) * 2;
        
        return (
          <ProjectCard3D
            key={project.title}
            project={project}
            position={[x, y, z]}
            isHovered={hoveredProject === index}
            onHover={() => {}}
            onUnhover={() => {}}
          />
        );
      })}
    </>
  );
}

interface Project {
  title: string;
  name: string;
  description: string;
  technologies: string[];
  icon: any;
  year: string;
  category: string;
  link: string;
  url: string;
}

interface ProjectsEnhancedProps {
  projects?: Project[];
}

export default function ProjectsEnhanced({ projects = [] }: ProjectsEnhancedProps) {
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
      style={{ y, opacity }}
      className="relative py-32 bg-gradient-to-br from-gray-900 via-black to-purple-900 overflow-hidden"
    >
      {/* Enhanced Particles Background */}
      <div className="absolute inset-0 opacity-30">
        <ParticlesEnhanced
          particleCount={150}
          particleColors={['#8B5CF6', '#EC4899', '#3B82F6']}
          moveParticlesOnHover={true}
          particleHoverFactor={1.5}
          alphaParticles={true}
          particleBaseSize={80}
          speed={0.1}
        />
      </div>

      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20">
        <Canvas>
          <ProjectsScene projects={projects} hoveredProject={hoveredProject} />
        </Canvas>
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
            <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30">
              🚀 Featured Work
            </Badge>
          </MagnetEnhanced>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              Projects & 
            </span>
            <br />
            <span className="text-white">Innovations</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25' 
                    : 'border-purple-500/30 text-purple-300 hover:bg-purple-500/10'
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
                <Card className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl">
                        <project.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </div>
                    </div>
                    
                    <Badge variant="secondary" className="w-fit mb-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30">
                      <Tag className="w-3 h-3 mr-1" />
                      {project.category}
                    </Badge>
                    
                    <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <CardDescription className="text-gray-300 leading-relaxed">
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
                          className="px-3 py-1 text-xs bg-gradient-to-r from-gray-700/50 to-gray-800/50 text-gray-300 rounded-full border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300"
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
                          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white group-hover:scale-105 transition-all duration-300"
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
                      
                      {project.url && (
                        <MagnetEnhanced magnetStrength={3} padding={20}>
                          <Button
                            size="sm"
                            variant="outline"
                            asChild
                            className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 group-hover:scale-105 transition-all duration-300"
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
                      )}
                    </div>
                  </CardContent>
                </Card>
              </MagnetEnhanced>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <MagnetEnhanced magnetStrength={3} padding={40}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 group"
            >
              <span className="mr-2">🔍</span>
              Explore All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </MagnetEnhanced>
        </motion.div>
      </div>
    </motion.section>
  );
}
