
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Mesh } from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#E879F9"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const ParticleField = () => {
  const count = 100;
  const meshRefs = useRef<Mesh[]>([]);

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <Float key={i} speed={0.5 + Math.random()} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh
            ref={(el) => (meshRefs.current[i] = el!)}
            position={[
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20,
            ]}
            scale={0.1 + Math.random() * 0.1}
          >
            <sphereGeometry args={[0.1]} />
            <meshStandardMaterial color="#A855F7" />
          </mesh>
        </Float>
      ))}
    </>
  );
};

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} color="#E879F9" />
          <pointLight position={[-10, -10, -5]} intensity={0.8} color="#A855F7" />
          <AnimatedSphere />
          <ParticleField />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.3}
            enableDamping
            dampingFactor={0.05}
          />
        </Canvas>
      </div>

      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-slate-100 mb-6"
        >
          <motion.span 
            className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            NSL
          </motion.span> Forge
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed"
        >
          Crafting traditional sketch artwork with passion and precision. 
          <br />
          Bringing your vision to life through timeless artistry.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 20px 40px rgba(232, 121, 249, 0.4)',
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10">Commission Artwork</span>
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(168, 85, 247, 0.3)',
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-fuchsia-400 text-fuchsia-400 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-fuchsia-400 hover:text-slate-900 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-fuchsia-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            />
            <span className="relative z-10">View Gallery</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            boxShadow: ['0 0 10px rgba(232, 121, 249, 0.3)', '0 0 20px rgba(232, 121, 249, 0.6)', '0 0 10px rgba(232, 121, 249, 0.3)']
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-fuchsia-400 rounded-full flex justify-center backdrop-blur-sm bg-slate-900/20"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-fuchsia-400 to-purple-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
