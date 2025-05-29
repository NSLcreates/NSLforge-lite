
import { motion } from 'framer-motion';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* CSS-based 3D Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated geometric shapes */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Large floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(232, 121, 249, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(232, 121, 249, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
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
          Creating traditional sketch artwork with passion and dedication. 
          <br />
          Bringing your ideas to life through timeless artistry.
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
            <span className="relative z-10">Request Artwork</span>
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
