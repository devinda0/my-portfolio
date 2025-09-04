'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  Float, 
  Text3D, 
  MeshDistortMaterial, 
  Environment, 
  PerspectiveCamera,
  useGLTF,
  Sphere,
  RoundedBox,
  Torus,
  Octahedron,
  Stars,
  Trail,
  useTexture,
  Sparkles
} from '@react-three/drei';
import { Suspense, useRef, useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import * as THREE from 'three';
import GradientText from '@/components/reactbits/gradient-text';
import Magnet from '@/components/reactbits/magnet';

// Enhanced Interactive Background with Mouse Following
function InteractiveScene() {
  const groupRef = useRef<THREE.Group>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { viewport } = useThree();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouse.y * 0.1,
        0.05
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouse.x * 0.1,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Orb with Dynamic Material */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.2}>
        <Sphere args={[1.2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#1e1b4b"
            transparent
            opacity={0.8}
            distort={0.4}
            speed={3}
            roughness={0.1}
            metalness={0.9}
            emissive="#3730a3"
            emissiveIntensity={0.3}
          />
        </Sphere>
        <Sparkles count={50} scale={[3, 3, 3]} size={3} speed={0.4} color="#64b5f6" />
      </Float>

      {/* Floating Tech Icons */}
      <FloatingIcon position={[-4, 2, -2]} color="#61dafb" symbol="React" />
      <FloatingIcon position={[4, -1, -1]} color="#3178c6" symbol="TS" />
      <FloatingIcon position={[-3, -2, 1]} color="#68d391" symbol="Node" />
      <FloatingIcon position={[3, 2, -3]} color="#f7df1e" symbol="JS" />
      <FloatingIcon position={[0, 4, -4]} color="#ff6b6b" symbol="3D" />

      {/* Orbital Rings */}
      <OrbitalRing radius={6} speed={0.01} particleCount={30} color="#3b82f6" />
      <OrbitalRing radius={8} speed={-0.015} particleCount={20} color="#06b6d4" />
      <OrbitalRing radius={10} speed={0.008} particleCount={40} color="#8b5cf6" />
    </group>
  );
}

// Floating Tech Icon Component
function FloatingIcon({ position, color, symbol }: { position: [number, number, number], color: string, symbol: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <RoundedBox ref={meshRef} args={[0.8, 0.8, 0.1]} position={position} radius={0.1}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.9}
          distort={0.2}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </RoundedBox>
      <Text3D
        position={[position[0], position[1], position[2] + 0.1]}
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.3}
        height={0.05}
        curveSegments={12}
      >
        {symbol}
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </Text3D>
    </Float>
  );
}

// Orbital Ring Component
function OrbitalRing({ radius, speed, particleCount, color }: { 
  radius: number, speed: number, particleCount: number, color: string 
}) {
  const ringRef = useRef<THREE.Group>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      temp.push({
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 2,
          Math.sin(angle) * radius
        ] as [number, number, number],
        scale: Math.random() * 0.5 + 0.5
      });
    }
    return temp;
  }, [radius, particleCount]);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.y = state.clock.elapsedTime * speed;
    }
  });

  return (
    <group ref={ringRef}>
      {particles.map((particle, index) => (
        <Octahedron key={index} args={[0.1]} position={particle.position} scale={particle.scale}>
          <MeshDistortMaterial
            color={color}
            transparent
            opacity={0.7}
            distort={0.3}
            speed={1}
            emissive={color}
            emissiveIntensity={0.1}
          />
        </Octahedron>
      ))}
    </group>
  );
}

// Enhanced Laptop Model with Interactions
function InteractiveLaptop() {
  const { scene } = useGLTF('/models_extracted/scene.gltf');
  const laptopRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      laptopRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      
      if (hovered) {
        laptopRef.current.scale.setScalar(THREE.MathUtils.lerp(laptopRef.current.scale.x, 2.2, 0.1));
      } else {
        laptopRef.current.scale.setScalar(THREE.MathUtils.lerp(laptopRef.current.scale.x, 2, 0.1));
      }
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
      <primitive 
        ref={laptopRef}
        object={scene.clone()} 
        scale={[2, 2, 2]}
        position={[4, 0, 0]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      />
    </Float>
  );
}

// Main 3D Scene Component
function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault fov={75} position={[0, 0, 12]} />
      
      {/* Enhanced Lighting Setup */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      <pointLight position={[-10, -10, -5]} color="#3b82f6" intensity={1} />
      <pointLight position={[10, -10, 5]} color="#06b6d4" intensity={1} />
      <pointLight position={[0, 10, 0]} color="#8b5cf6" intensity={0.8} />
      
      {/* Environment and Stars */}
      <Environment preset="city" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Interactive Elements */}
      <InteractiveScene />
      
      {/* 3D Models */}
      <Suspense fallback={null}>
        <InteractiveLaptop />
      </Suspense>
      
      {/* Fog for Depth */}
      <fog attach="fog" args={['#0f0f23', 8, 30]} />
    </>
  );
}

// Loading Component
function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
        <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin absolute top-2 left-2" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">Loading Experience...</div>
      </div>
    </div>
  );
}

export default function Premium3DHero() {
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
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <section 
      ref={ref} 
      className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <Magnet magnetStrength={2} padding={30}>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium shadow-2xl">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              Available for innovative projects
            </div>
          </Magnet>
        </motion.div>

        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <GradientText 
            colors={['#3b82f6', '#06b6d4', '#8b5cf6', '#10b981', '#f59e0b', '#3b82f6']}
            animationSpeed={8}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none"
            style={{
              textShadow: '0 10px 30px rgba(0,0,0,0.5), 0 0 50px rgba(59, 130, 246, 0.3)'
            }}
          >
            DEVINDA
          </GradientText>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-4">
          <GradientText 
            colors={['#06b6d4', '#8b5cf6', '#10b981', '#f59e0b']}
            animationSpeed={6}
            className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wide"
          >
            Creative Developer & 3D Artist
          </GradientText>
        </motion.div>

        {/* Enhanced Tech Stack */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 text-lg text-white/80">
            {[
              { name: 'React', color: '#61dafb' },
              { name: 'Three.js', color: '#049ef4' },
              { name: 'TypeScript', color: '#3178c6' },
              { name: 'Node.js', color: '#68d391' },
              { name: 'Python', color: '#3776ab' },
              { name: 'WebGL', color: '#ff6b6b' }
            ].map((tech, index) => (
              <Magnet key={tech.name} magnetStrength={1.5} padding={20}>
                <motion.div 
                  className="px-4 py-2 rounded-full backdrop-blur-sm border transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: `${tech.color}20`,
                    borderColor: `${tech.color}40`,
                    boxShadow: `0 0 20px ${tech.color}30`
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    boxShadow: `0 10px 30px ${tech.color}50`
                  }}
                >
                  {tech.name}
                </motion.div>
              </Magnet>
            ))}
          </div>
        </motion.div>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-xl text-white/70 mb-12 max-w-4xl leading-relaxed font-light"
        >
          Specializing in immersive web experiences that blend cutting-edge 3D graphics, 
          interactive animations, and performance-optimized code to create digital art that inspires.
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Magnet magnetStrength={4} padding={50}>
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white border-0 px-12 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-110 relative overflow-hidden"
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
              className="group border-2 border-white/40 text-white hover:bg-white/15 px-12 py-6 text-xl font-semibold rounded-2xl backdrop-blur-md transition-all duration-500 transform hover:scale-110 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <ExternalLink className="w-6 h-6 mr-3 group-hover:rotate-45 transition-transform duration-300" />
              Explore Portfolio
            </Button>
          </Magnet>
        </motion.div>

        {/* Social Links with 3D Effect */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6">
          {[
            { icon: Github, href: "https://github.com/devinda0", label: "GitHub", color: "#333" },
            { icon: Linkedin, href: "https://linkedin.com/in/devinda-dilshan", label: "LinkedIn", color: "#0077b5" },
            { icon: Mail, href: "mailto:your-email@example.com", label: "Email", color: "#ea4335" },
          ].map((social, index) => (
            <Magnet key={index} magnetStrength={3} padding={40}>
              <motion.a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotateY: 180 }}
                className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
                style={{
                  boxShadow: `0 0 20px ${social.color}30`
                }}
                aria-label={social.label}
              >
                <social.icon className="w-8 h-8 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </motion.a>
            </Magnet>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 z-5 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
    </section>
  );
}
