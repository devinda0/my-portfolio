'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GradientText from '../reactbits/gradient-text';
import SpotlightCard from '../reactbits/spotlight-card';
import { 
  Code, 
  Database, 
  Cloud
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    color: '#3b82f6',
    skills: [
      { name: 'React', level: 80, color: '#3b82f6' },
      { name: 'Next.js', level: 80, color: '#8b5cf6' },
      { name: 'TypeScript', level: 75, color: '#ec4899' },
      { name: 'Three.js', level: 50, color: '#f59e0b' },
      { name: 'Tailwind CSS', level: 85, color: '#10b981' },
    ]
  },
  {
    title: 'Backend Development',
    icon: Database,
    color: '#10b981',
    skills: [
      { name: 'Node.js', level: 90, color: '#10b981' },
      { name: 'Python', level: 88, color: '#8b5cf6' },
      { name: 'PostgreSQL', level: 75, color: '#3b82f6' },
      { name: 'MongoDB', level: 75, color: '#ec4899' },
      { name: 'Java', level: 70, color: '#f59e0b' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: '#f59e0b',
    skills: [
      { name: 'AWS', level: 60, color: '#f59e0b' },
      { name: 'Docker', level: 75, color: '#3b82f6' },
      { name: 'Terraform', level: 60, color: '#8b5cf6' },
      { name: 'CI/CD', level: 80, color: '#10b981' }
    ]
  },
];

export default function SkillsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Add the keyframes for gradient animation
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradientShift {
        0%, 100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const,
        delay: 0.5
      }
    })
  };

  return (
    <section id='skills' ref={ref} className="relative py-32 overflow-hidden" style={{
      background: `linear-gradient(135deg, 
        #6366f1 0%, 
        #8b5cf6 25%, 
        #ec4899 50%, 
        #3b82f6 75%, 
        #6366f1 100%
      )`,
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite'
    }}>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <GradientText 
            colors={['#3b82f6', '#8b5cf6', '#ec4899']}
            animationSpeed={6}
            className="text-6xl md:text-7xl font-bold mb-6"
          >
            Skills & Expertise
          </GradientText>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Mastering technologies that power the modern digital world
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group"
            >
              <SpotlightCard 
                className="h-[480px]"
                spotlightColor={`rgba(${category.color.slice(1,3) ? parseInt(category.color.slice(1,3), 16) : 255}, ${category.color.slice(3,5) ? parseInt(category.color.slice(3,5), 16) : 255}, ${category.color.slice(5,7) ? parseInt(category.color.slice(5,7), 16) : 255}, 0.15)`}
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className="flex flex-col h-full"
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-8 flex-shrink-0">
                    <div 
                      className="p-4 rounded-2xl mr-4 relative"
                      style={{ backgroundColor: `${category.color}15` }}
                    >
                      <category.icon 
                        className="w-7 h-7"
                        style={{ color: category.color }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex-1 flex flex-col">
                    <div className="space-y-5 flex-1">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.08 
                          }}
                          className="group/skill"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-gray-700 dark:text-white/90 font-medium group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors text-sm">
                              {skill.name}
                            </span>
                            <span 
                              className="text-sm font-bold px-2 py-1 rounded-lg"
                              style={{ 
                                color: skill.color,
                                backgroundColor: `${skill.color}15`
                              }}
                            >
                              {skill.level}%
                            </span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="relative h-2.5 bg-gray-200/50 dark:bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              variants={skillVariants}
                              initial="hidden"
                              animate={inView ? "visible" : "hidden"}
                              custom={skill.level}
                              className="absolute top-0 left-0 h-full rounded-full overflow-hidden"
                              style={{
                                background: `linear-gradient(90deg, ${skill.color}60, ${skill.color})`
                              }}
                            >
                              {/* Shimmer Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-pulse"></div>
                            </motion.div>
                            
                            {/* Glow Effect */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={inView ? { opacity: 1 } : { opacity: 0 }}
                              transition={{ delay: 1 + skillIndex * 0.08 }}
                              className="absolute top-0 left-0 h-full rounded-full blur-sm"
                              style={{
                                width: `${skill.level}%`,
                                background: `linear-gradient(90deg, ${skill.color}30, ${skill.color}20)`
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>

      {/* Gradient Overlays for additional depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none" />
    </section>
  );
}
