
import { motion } from 'framer-motion';
import { Palette, Heart, Coffee, Youtube, Mail, Instagram } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-6">
            About <span className="text-yellow-400">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">My Journey</h3>
            <p className="text-amber-200 leading-relaxed">
              Hi! I'm a passionate artist who loves bringing ideas to life through traditional sketching. 
              What started as a hobby has grown into something I truly cherish - creating unique, 
              hand-drawn artwork that captures the essence of every subject.
            </p>
            <p className="text-amber-200 leading-relaxed">
              Every sketch tells a story, and I believe in the power of traditional art to connect 
              with people in ways that digital art sometimes can't. From portraits to landscapes, 
              I pour my heart into every piece I create.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-yellow-400">
                <Palette className="w-5 h-5" />
                <span>Traditional Sketching</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-400">
                <Heart className="w-5 h-5" />
                <span>Passion-Driven</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-400">
                <Coffee className="w-5 h-5" />
                <span>Detail-Oriented</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-lg p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Connect with me</h3>
            <div className="space-y-4">
              <a
                href="mailto:nslcreatesofficial@gmail.com"
                className="flex items-center gap-3 text-amber-200 hover:text-yellow-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>nslcreatesofficial@gmail.com</span>
              </a>
              <a
                href="https://youtube.com/@nsl_creates"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-amber-200 hover:text-yellow-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span>YouTube - @nsl_creates</span>
              </a>
              <a
                href="https://instagram.com/nslforge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-amber-200 hover:text-yellow-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram - @nslforge</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
