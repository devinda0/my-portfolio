'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  Float, 
  Text3D, 
  MeshDistortMaterial, 
  Sphere,
  RoundedBox,
  Html,
  Trail,
  Sparkles
} from '@react-three/drei';
import { Suspense, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as THREE from 'three';
import GradientText from '@/components/reactbits/gradient-text';

// Skill Orb Component
function SkillOrb({ 
  skill, 
  position, 
  color, 
  isHovered, 
  onHover,
  onUnhover 
}: { 
  skill: { name: string, level: number, category: string },
  position: [number, number, number], 
  color: string,
  isHovered: boolean,
  onHover: () => void,
  onUnhover: () => void
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const trailRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const scale = isHovered ? 1.5 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
      
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
      
      if (isHovered) {
        meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      }
    }
  });

  const radius = 0.3 + (skill.level / 100) * 0.3;

  return (
    <group position={position}>
      <Trail
        width={0.5}
        length={8}
        color={color}
        attenuation={(t) => t * t}
      >
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
          <Sphere 
            ref={meshRef}
            args={[radius, 32, 32]}
            onPointerEnter={onHover}
            onPointerLeave={onUnhover}
          >
            <MeshDistortMaterial
              color={color}
              transparent
              opacity={0.9}
              distort={isHovered ? 0.4 : 0.2}
              speed={isHovered ? 3 : 1}
              roughness={0.1}
              metalness={0.8}
              emissive={color}
              emissiveIntensity={isHovered ? 0.4 : 0.2}
            />
          </Sphere>
        </Float>
      </Trail>

      {/* Skill name label */}
      <Html
        position={[0, radius + 0.5, 0]}
        center
        transform
        distanceFactor={6}
        style={{
          pointerEvents: 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <div className={`text-white text-center font-bold transition-all duration-300 ${
          isHovered ? 'text-lg scale-125' : 'text-sm'
        }`}>
          {skill.name}
          <div className="text-xs text-white/60 mt-1">
            {skill.level}%
          </div>
        </div>
      </Html>

      {/* Particles around orb */}
      {isHovered && (
        <Sparkles 
          count={20} 
          scale={[2, 2, 2]} 
          size={2} 
          speed={0.6} 
          color={color} 
        />
      )}
    </group>
  );
}

// Skill Category Node
function CategoryNode({ 
  category, 
  position, 
  skills,
  hoveredSkill,
  setHoveredSkill 
}: {
  category: string,
  position: [number, number, number],
  skills: any[],
  hoveredSkill: string | null,
  setHoveredSkill: (skill: string | null) => void
}) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const categoryColors: { [key: string]: string } = {
    'Frontend': '#61dafb',
    'Backend': '#68d391', 
    'Database': '#f59e0b',
    'Languages': '#8b5cf6',
    'Tools': '#ef4444',
    'Cloud': '#06b6d4'
  };

  const color = categoryColors[category] || '#3b82f6';

  return (
    <group ref={meshRef} position={position}>
      {/* Central category sphere */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
        <RoundedBox args={[1, 0.3, 1]} radius={0.1}>
          <MeshDistortMaterial
            color={color}
            transparent
            opacity={0.7}
            distort={0.1}
            speed={1}
            metalness={0.9}
            roughness={0.1}
          />
        </RoundedBox>
      </Float>

      {/* Category label */}
      <Html
        position={[0, 0, 0]}
        center
        transform
        distanceFactor={8}
        style={{ pointerEvents: 'none' }}
      >
        <div className="text-white font-bold text-lg text-center px-4">
          {category}
        </div>
      </Html>

      {/* Skills orbiting around category */}
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2;
        const radius = 2.5;
        const skillPosition: [number, number, number] = [
          Math.cos(angle) * radius,
          Math.sin(index * 0.5) * 0.5,
          Math.sin(angle) * radius
        ];

        return (
          <SkillOrb
            key={skill.name}
            skill={skill}
            position={skillPosition}
            color={color}
            isHovered={hoveredSkill === skill.name}
            onHover={() => setHoveredSkill(skill.name)}
            onUnhover={() => setHoveredSkill(null)}
          />
        );
      })}
    </group>
  );
}

// Main Skills 3D Scene
function SkillsScene({ skillsData, hoveredSkill, setHoveredSkill }: {
  skillsData: { [key: string]: any[] },
  hoveredSkill: string | null,
  setHoveredSkill: (skill: string | null) => void
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  const categories = Object.keys(skillsData);
  const positions = useMemo(() => {
    return categories.map((_, index) => {
      const angle = (index / categories.length) * Math.PI * 2;
      const radius = 6;
      return [
        Math.cos(angle) * radius,
        Math.sin(angle * 0.5) * 2,
        Math.sin(angle) * radius
      ] as [number, number, number];
    });
  }, [categories.length]);

  return (
    <group ref={groupRef}>
      {/* Ambient lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 10, 0]} intensity={1} color="#ffffff" />
      <pointLight position={[10, 0, 10]} intensity={0.5} color="#3b82f6" />
      <pointLight position={[-10, 0, -10]} intensity={0.5} color="#8b5cf6" />

      {/* Central core */}
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.2}>
        <Sphere args={[0.8, 32, 32]}>
          <MeshDistortMaterial
            color="#1e1b4b"
            transparent
            opacity={0.6}
            distort={0.3}
            speed={2}
            metalness={0.9}
            roughness={0.1}
            emissive="#3730a3"
            emissiveIntensity={0.2}
          />
        </Sphere>
      </Float>

      {categories.map((category, index) => (
        <CategoryNode
          key={category}
          category={category}
          position={positions[index]}
          skills={skillsData[category]}
          hoveredSkill={hoveredSkill}
          setHoveredSkill={setHoveredSkill}
        />
      ))}

      {/* Background effects */}
      <Sparkles 
        count={100} 
        scale={[20, 20, 20]} 
        size={1} 
        speed={0.2} 
        color="#ffffff" 
      />
    </group>
  );
}

export default function Premium3DSkills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillsData = {
    'Frontend': [
      { name: 'React', level: 95, category: 'Frontend' },
      { name: 'Next.js', level: 90, category: 'Frontend' },
      { name: 'TypeScript', level: 88, category: 'Frontend' },
      { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
      { name: 'Three.js', level: 85, category: 'Frontend' }
    ],
    'Backend': [
      { name: 'Node.js', level: 88, category: 'Backend' },
      { name: 'Express.js', level: 85, category: 'Backend' },
      { name: 'Python', level: 90, category: 'Backend' },
      { name: 'Java', level: 82, category: 'Backend' },
      { name: 'RESTful APIs', level: 88, category: 'Backend' }
    ],
    'Database': [
      { name: 'MongoDB', level: 85, category: 'Database' },
      { name: 'PostgreSQL', level: 80, category: 'Database' },
      { name: 'MySQL', level: 83, category: 'Database' },
      { name: 'Redis', level: 75, category: 'Database' }
    ],
    'Tools': [
      { name: 'Git', level: 90, category: 'Tools' },
      { name: 'Docker', level: 78, category: 'Tools' },
      { name: 'VS Code', level: 95, category: 'Tools' },
      { name: 'Figma', level: 85, category: 'Tools' }
    ],
    'Cloud': [
      { name: 'AWS', level: 75, category: 'Cloud' },
      { name: 'Vercel', level: 88, category: 'Cloud' },
      { name: 'Firebase', level: 82, category: 'Cloud' },
      { name: 'Netlify', level: 85, category: 'Cloud' }
    ]
  };

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
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-purple-950 via-slate-950 to-indigo-950"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 60 }}>
          <Suspense fallback={null}>
            <SkillsScene 
              skillsData={skillsData}
              hoveredSkill={hoveredSkill}
              setHoveredSkill={setHoveredSkill}
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
            colors={['#8b5cf6', '#06b6d4', '#10b981']}
            animationSpeed={6}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Technical Skills
          </GradientText>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explore my technical expertise through this interactive 3D visualization. 
            Hover over the skill orbs to see proficiency levels.
          </p>
        </motion.div>

        {/* Skill Details Panel */}
        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <div className="bg-black/80 backdrop-blur-md rounded-2xl border border-white/20 p-6 min-w-64">
              <h4 className="text-xl font-bold text-white mb-2">{hoveredSkill}</h4>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${Object.values(skillsData).flat().find(skill => skill.name === hoveredSkill)?.level || 0}%`
                    }}
                  />
                </div>
                <span className="text-white/80 text-sm font-medium">
                  {Object.values(skillsData).flat().find(skill => skill.name === hoveredSkill)?.level}%
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Skills Summary Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-20">
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div
              key={category}
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-bold text-white mb-4">{category}</h4>
              <div className="space-y-2">
                {skills.slice(0, 3).map((skill) => (
                  <div key={skill.name} className="text-white/70 text-sm">
                    {skill.name}
                  </div>
                ))}
                {skills.length > 3 && (
                  <div className="text-blue-400 text-xs">
                    +{skills.length - 3} more
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instructions */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <p className="text-white/60 text-lg">
            🖱️ Move your mouse around and hover over the skill orbs to interact
          </p>
        </motion.div>
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-5 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
