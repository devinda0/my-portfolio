'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useRef, useMemo } from 'react';
import { 
  OrbitControls, 
  useGLTF, 
  Environment, 
  PerspectiveCamera,
  Float,
  MeshDistortMaterial,
  Sphere,
  Text3D,
  Center,
  useTexture,
  Sparkles,
  Stars
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Laptop Model Component
function LaptopModel(props: any) {
  const { scene } = useGLTF('/models_extracted/scene.gltf');
  const laptopRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      laptopRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.1}
      floatIntensity={0.2}
    >
      <primitive 
        ref={laptopRef}
        object={scene.clone()} 
        scale={[2, 2, 2]}
        position={[3, 0, 0]}
        {...props} 
      />
    </Float>
  );
}

// Floating Geometric Shapes
function FloatingShape({ position, color, ...props }: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  return (
    <Float
      speed={3}
      rotationIntensity={0.2}
      floatIntensity={0.3}
    >
      <mesh ref={meshRef} position={position} {...props}>
        <icosahedronGeometry args={[0.5, 0]} />
        <MeshDistortMaterial 
          color={color}
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

// Animated Text
function AnimatedText() {
  const textRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={textRef} position={[-3, 1, 0]}>
      <Float
        speed={1.5}
        rotationIntensity={0.1}
        floatIntensity={0.1}
      >
        <Center>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.8}
            height={0.1}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            DEV
            <MeshDistortMaterial 
              color="#3b82f6"
              distort={0.1}
              speed={1}
              roughness={0.1}
              metalness={0.9}
              emissive="#1e40af"
              emissiveIntensity={0.3}
            />
          </Text3D>
        </Center>
      </Float>
    </group>
  );
}

// Particle Ring
function ParticleRing() {
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      const angle = (i / 300) * Math.PI * 2;
      const radius = 5 + Math.random() * 2;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#06b6d4"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

// Main 3D Scene
function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault fov={75} position={[0, 0, 8]} />
      <OrbitControls 
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.5}
      />
      
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#3b82f6" intensity={0.5} />
      <pointLight position={[10, -10, 5]} color="#06b6d4" intensity={0.5} />
      
      {/* Environment */}
      <Environment preset="city" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* 3D Models and Objects */}
      <Suspense fallback={null}>
        <LaptopModel />
        <AnimatedText />
      </Suspense>
      
      {/* Floating Geometric Shapes */}
      <FloatingShape position={[-2, 2, -2]} color="#8b5cf6" />
      <FloatingShape position={[4, -1, -1]} color="#06b6d4" />
      <FloatingShape position={[-4, -1, 1]} color="#3b82f6" />
      <FloatingShape position={[0, 3, -3]} color="#10b981" />
      
      {/* Particle Effects */}
      <ParticleRing />
      <Sparkles count={100} scale={[10, 10, 10]} size={2} speed={0.4} color="#ffffff" />
      
      {/* Central Sphere with distortion */}
      <Float
        speed={2}
        rotationIntensity={0.3}
        floatIntensity={0.2}
      >
        <Sphere args={[0.8, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial 
            color="#1e1b4b"
            distort={0.4}
            speed={3}
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.8}
            emissive="#3730a3"
            emissiveIntensity={0.2}
          />
        </Sphere>
      </Float>
    </>
  );
}

// Loading fallback
function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default function Enhanced3DBackground() {
  return (
    <div className="w-full h-full">
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={<Loader />}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
