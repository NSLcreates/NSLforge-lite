
import { motion } from 'framer-motion';
import { Palette, Award, Users, Clock } from 'lucide-react';

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
            About <span className="text-yellow-400">NSL Forge</span>
          </h2>
          <p className="text-xl text-amber-200 max-w-3xl mx-auto">
            Where traditional artistry meets modern vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Artistic Elements Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-500 rounded-2xl p-8 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-800 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-900 rounded-full opacity-10"></div>
              
              <div className="relative z-10 text-center text-gray-800">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-6xl mb-6"
                >
                  🎨
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Traditional Artistry</h3>
                <p className="text-lg opacity-80">Pencil, passion, and precision</p>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-amber-100">
              Passionate About <span className="text-yellow-400">Traditional Art</span>
            </h3>
            
            <p className="text-lg text-amber-200 leading-relaxed">
              Welcome to NSL Forge, where traditional sketching meets modern vision. As a dedicated artist, 
              I bring fresh perspectives to timeless techniques, creating artwork that captures both 
              emotion and technical precision.
            </p>

            <p className="text-lg text-amber-200 leading-relaxed">
              My journey began with a simple pencil and paper, evolving into a passion for creating 
              detailed portraits, landscapes, and character designs. Each piece tells a story, 
              whether it's capturing a beloved pet's personality or bringing an original character to life.
            </p>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center bg-gray-700 rounded-lg p-4"
              >
                <Palette className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-yellow-400">50+</div>
                <div className="text-amber-200 text-sm">Completed Works</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center bg-gray-700 rounded-lg p-4"
              >
                <Users className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-yellow-400">25+</div>
                <div className="text-amber-200 text-sm">Happy Clients</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center bg-gray-700 rounded-lg p-4"
              >
                <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-yellow-400">3+</div>
                <div className="text-amber-200 text-sm">Years Experience</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center bg-gray-700 rounded-lg p-4"
              >
                <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-yellow-400">100%</div>
                <div className="text-amber-200 text-sm">Satisfaction</div>
              </motion.div>
            </div>

            {/* Specializations with improved design */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-amber-100">Specializations</h4>
              <div className="grid grid-cols-2 gap-3">
                {['Traditional Sketching', 'Portrait Art', 'Character Design', 'Landscape Drawing', 'Pet Portraits', 'Fan Art'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgb(251, 191, 36)' }}
                    className="bg-gray-700 hover:bg-yellow-400 hover:text-gray-900 text-amber-200 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 text-center cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="pt-6">
              <h4 className="text-xl font-bold text-amber-100 mb-4">Connect With Me</h4>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  Instagram
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  Twitter
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  DeviantArt
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
