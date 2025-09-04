'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Zap, Code, Palette, Cpu } from 'lucide-react';
import GradientText from '@/components/reactbits/gradient-text';
import Magnet from '@/components/reactbits/magnet';
import Particles from '@/components/reactbits/particles';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  color: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Dashboard',
    description: 'A comprehensive analytics dashboard with real-time data visualization and machine learning insights.',
    tech: ['React', 'TypeScript', 'Python', 'TensorFlow'],
    category: 'Web Application',
    image: '/api/placeholder/600/400',
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
    color: '#3b82f6'
  },
  {
    id: '2',
    title: '3D E-Commerce Platform',
    description: 'Immersive shopping experience with 3D product visualization and AR try-on features.',
    tech: ['Next.js', 'Three.js', 'WebGL', 'Stripe'],
    category: 'E-Commerce',
    image: '/api/placeholder/600/400',
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
    color: '#8b5cf6'
  },
  {
    id: '3',
    title: 'Blockchain Portfolio Tracker',
    description: 'Decentralized application for tracking cryptocurrency portfolios with real-time analytics.',
    tech: ['Solidity', 'Web3.js', 'React', 'Node.js'],
    category: 'Blockchain',
    image: '/api/placeholder/600/400',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    color: '#06b6d4'
  },
  {
    id: '4',
    title: 'Neural Network Visualizer',
    description: 'Interactive tool for visualizing and understanding neural network architectures.',
    tech: ['Python', 'D3.js', 'Flask', 'TensorFlow'],
    category: 'AI/ML',
    image: '/api/placeholder/600/400',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    color: '#10b981'
  }
];

const categories = [
  { name: 'All', icon: Zap, count: projects.length },
  { name: 'Web Application', icon: Code, count: projects.filter(p => p.category === 'Web Application').length },
  { name: 'E-Commerce', icon: Palette, count: projects.filter(p => p.category === 'E-Commerce').length },
  { name: 'Blockchain', icon: Cpu, count: projects.filter(p => p.category === 'Blockchain').length },
];

export default function PremiumProjectsSection() {
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
      y: 50,
      scale: 0.9,
      rotateX: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1] as any,
      },
    },
  };

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-slate-950 via-indigo-950 to-purple-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleCount={150}
          particleSpread={40}
          speed={0.2}
          particleColors={['#1e40af', '#3730a3', '#7c3aed']}
          moveParticlesOnHover={false}
          alphaParticles={true}
          particleBaseSize={40}
          sizeRandomness={2}
          cameraDistance={25}
        />
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
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <GradientText 
              colors={['#3b82f6', '#8b5cf6', '#06b6d4']}
              animationSpeed={6}
              className="text-6xl md:text-7xl font-bold mb-6"
            >
              Featured Projects
            </GradientText>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Discover my latest work showcasing cutting-edge technologies and innovative solutions
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <Magnet key={category.name} magnetStrength={2} padding={20}>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all duration-300"
              >
                <category.icon className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                <span className="font-medium">{category.name}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 group-hover:bg-blue-500/20">
                  {category.count}
                </span>
              </motion.button>
            </Magnet>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
            >
              <Magnet magnetStrength={1.5} padding={30}>
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    y: -10,
                    rotateY: 2,
                    rotateX: 2,
                  }}
                  className={`relative p-8 rounded-3xl backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-500 ${
                    project.featured 
                      ? 'bg-gradient-to-br from-white/10 to-white/5 lg:col-span-1' 
                      : 'bg-white/5'
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${project.color}10 0%, rgba(255,255,255,0.05) 100%)`,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
                  }}
                >
                  {/* Project Image/Preview */}
                  <div className="relative mb-6 aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                    <div 
                      className="absolute inset-0 bg-gradient-to-br opacity-20"
                      style={{ backgroundColor: project.color }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">🚀</div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/20"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-white/70 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-white/10 text-white/80 border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Category */}
                    <div className="flex items-center justify-between pt-4">
                      <span 
                        className="text-sm font-medium"
                        style={{ color: project.color }}
                      >
                        {project.category}
                      </span>
                      <div className="flex gap-2">
                        <motion.a
                          href={project.demoUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${project.color}40, transparent 40%)`,
                    }}
                  />
                </motion.div>
              </Magnet>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <Magnet magnetStrength={3} padding={40}>
            <Button
              size="lg"
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white border-0 px-12 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <ExternalLink className="w-6 h-6 mr-3 group-hover:rotate-45 transition-transform duration-300" />
              View All Projects
            </Button>
          </Magnet>
        </motion.div>
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 via-transparent to-indigo-950/50 pointer-events-none" />
    </section>
  );
}
