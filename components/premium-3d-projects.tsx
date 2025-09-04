'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  Float, 
  Text3D, 
  MeshDistortMaterial, 
  RoundedBox,
  Sphere,
  useTexture,
  Html,
  PerspectiveCamera
} from '@react-three/drei';
import { Suspense, useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Database, Gamepad2, Monitor, Server } from 'lucide-react';
import * as THREE from 'three';
import GradientText from '@/components/reactbits/gradient-text';
import Magnet from '@/components/reactbits/magnet';

// 3D Project Card Component
function Project3DCard({ 
  project, 
  position, 
  isActive, 
  onClick 
}: { 
  project: any, 
  position: [number, number, number], 
  isActive: boolean,
  onClick: () => void 
}) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      const targetScale = isActive ? 1.2 : hovered ? 1.1 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      if (isActive) {
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      } else {
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      }
    }
  });

  const IconComponent = project.icon;

  return (
    <group ref={meshRef} position={position}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <RoundedBox 
          args={[2, 2.5, 0.2]} 
          radius={0.1}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          onClick={onClick}
        >
          <MeshDistortMaterial
            color={isActive ? "#3b82f6" : hovered ? "#06b6d4" : "#1e1b4b"}
            transparent
            opacity={0.9}
            distort={isActive ? 0.3 : 0.1}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            emissive={isActive ? "#1e40af" : "#0f172a"}
            emissiveIntensity={isActive ? 0.3 : 0.1}
          />
        </RoundedBox>

        {/* Project Icon */}
        <Sphere args={[0.3]} position={[0, 0.7, 0.2]}>
          <MeshDistortMaterial
            color="#ffffff"
            distort={0.2}
            speed={1}
            metalness={0.9}
            roughness={0.1}
          />
        </Sphere>

        {/* Title */}
        <Html
          position={[0, -0.2, 0.2]}
          center
          transform
          distanceFactor={8}
          style={{
            width: '200px',
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          <div className="text-white text-center text-sm font-bold truncate px-2">
            {project.title}
          </div>
        </Html>

        {/* Technologies as floating particles */}
        {project.technologies.slice(0, 3).map((tech: string, index: number) => (
          <Float key={tech} speed={2} rotationIntensity={0.2}>
            <Sphere 
              args={[0.1]} 
              position={[
                Math.cos((index / 3) * Math.PI * 2) * 0.8,
                -0.8 + index * 0.1,
                0.3
              ]}
            >
              <meshStandardMaterial
                color={index === 0 ? "#61dafb" : index === 1 ? "#3178c6" : "#68d391"}
                emissive={index === 0 ? "#61dafb" : index === 1 ? "#3178c6" : "#68d391"}
                emissiveIntensity={0.2}
              />
            </Sphere>
          </Float>
        ))}
      </Float>
    </group>
  );
}

// Interactive 3D Scene for Projects
function ProjectsScene({ projects, activeProject, setActiveProject }: {
  projects: any[],
  activeProject: number,
  setActiveProject: (index: number) => void
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  // Arrange projects in a circular pattern
  const positions = useMemo(() => {
    return projects.map((_, index) => {
      const angle = (index / projects.length) * Math.PI * 2;
      const radius = 4;
      return [
        Math.cos(angle) * radius,
        0,
        Math.sin(angle) * radius
      ] as [number, number, number];
    });
  }, [projects.length]);

  return (
    <group ref={groupRef}>
      {/* Central Light Source */}
      <pointLight position={[0, 2, 0]} intensity={1} color="#3b82f6" />
      
      {projects.map((project, index) => (
        <Project3DCard
          key={project.title}
          project={project}
          position={positions[index]}
          isActive={activeProject === index}
          onClick={() => setActiveProject(index)}
        />
      ))}

      {/* Background Elements */}
      <Float speed={0.5} rotationIntensity={0.1}>
        <Sphere args={[8, 32, 32]} position={[0, 0, -10]}>
          <MeshDistortMaterial
            color="#0f0f23"
            transparent
            opacity={0.3}
            distort={0.2}
            speed={1}
            wireframe
          />
        </Sphere>
      </Float>
    </group>
  );
}

export default function Premium3DProjects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "RPAL-Compiler",
      description: "Developed a complete interpreter for the RPAL (Recursive Programming and Applicative Language) from the ground up, demonstrating a practical application of compiler theory and language processing fundamentals.",
      technologies: ["Python", "OOP", "Data Structures", "Algorithms"],
      icon: Code,
      year: "2025",
      category: "Compiler Design",
      link: "https://github.com/devinda0/RPAL-Compiler.git",
      features: [
        "Lexical Analysis & Tokenization",
        "Recursive Descent Parser",
        "Abstract Syntax Tree Generation", 
        "Environment-based Evaluation"
      ]
    },
    {
      title: "Train Booking System",
      description: "A comprehensive train scheduling management system showcasing modern application development by integrating Ballerina for the backend with React.js for the frontend, featuring secure admin controls.",
      technologies: ["Ballerina", "React.js", "MongoDB"],
      icon: Database,
      year: "2024", 
      category: "Full-Stack Web Application",
      link: "https://github.com/devinda0/Online_Train_Ticket_Booking_System.git",
      features: [
        "Real-time Seat Booking",
        "Payment Gateway Integration",
        "Admin Dashboard",
        "RESTful API Design"
      ]
    },
    {
      title: "Mystic-Mayhem Game",
      description: "Contributed to the design and implementation of a console-based role-playing game (RPG) from concept to completion as part of a development team for Object-Oriented Programming course.",
      technologies: ["Java", "OOP", "Data Structures", "Algorithms"],
      icon: Gamepad2,
      year: "2024",
      category: "Game Development",
      link: "https://github.com/devinda0/Mystic-Mayhem.git",
      features: [
        "Character Progression System",
        "Battle Mechanics",
        "Inventory Management",
        "Save/Load Functionality"
      ]
    },
    {
      title: "HRMS Backend",
      description: "Engineered a robust and secure server-side application that powers a comprehensive Human Resource Management System, responsible for all business logic, data processing, and API communications.",
      technologies: ["Express.js", "Node.js", "MySQL", "REST API"],
      icon: Server,
      year: "2024",
      category: "Backend Development",
      link: "https://github.com/devinda0/HRMS-Project-Backend.git",
      features: [
        "Employee Management",
        "Payroll Processing",
        "Authentication & Authorization",
        "Performance Analytics"
      ]
    },
    {
      title: "HRMS Frontend",
      description: "Developed a feature-rich, responsive, and intuitive front-end for a comprehensive Human Resource Management System, providing seamless user experience for HR administrators and employees.",
      technologies: ["React.js", "Tailwind CSS", "REST API"],
      icon: Monitor,
      year: "2024",
      category: "Frontend Development",
      link: "https://github.com/devinda0/HRMS-Project-Frontend.git",
      features: [
        "Responsive Design",
        "Interactive Dashboards",
        "Form Validation",
        "Data Visualization"
      ]
    }
  ];

  const currentProject = projects[activeProject];

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
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-purple-950"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 60 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <ProjectsScene 
              projects={projects}
              activeProject={activeProject}
              setActiveProject={setActiveProject}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <GradientText 
            colors={['#3b82f6', '#06b6d4', '#8b5cf6']}
            animationSpeed={6}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Featured Projects
          </GradientText>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explore my latest work in interactive 3D. Click on the floating project cards above to learn more.
          </p>
        </motion.div>

        {/* Project Details Panel */}
        <motion.div variants={itemVariants} className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Project Info */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                      <currentProject.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-blue-400 font-medium">{currentProject.category}</span>
                    <span className="text-white/60">•</span>
                    <span className="text-white/60">{currentProject.year}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {currentProject.title}
                  </h3>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    {currentProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {currentProject.technologies.map((tech: string) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Magnet magnetStrength={2} padding={20}>
                      <Button 
                        asChild
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-6 py-3"
                      >
                        <a href={currentProject.link} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    </Magnet>

                    <Magnet magnetStrength={2} padding={20}>
                      <Button 
                        variant="outline"
                        className="border-white/40 text-white hover:bg-white/10 px-6 py-3"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </Magnet>
                  </div>
                </div>

                {/* Features List */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-6">Key Features</h4>
                  <div className="space-y-4">
                    {currentProject.features.map((feature: string, index: number) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                        <span className="text-white/80">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Project Navigation */}
        <motion.div variants={itemVariants} className="flex justify-center mt-12">
          <div className="flex gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProject === index 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-5 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
