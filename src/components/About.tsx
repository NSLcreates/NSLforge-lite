
import { motion } from 'framer-motion';

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
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-amber-100 to-yellow-200 rounded-lg aspect-square flex items-center justify-center">
              <div className="text-center text-gray-800">
                <div className="text-6xl mb-4">🎨</div>
                <p className="text-lg font-medium">Artist Portrait</p>
              </div>
            </div>
          </motion.div>

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
              Welcome to NSL Forge, where traditional sketching meets modern vision. As a young artist, 
              I bring fresh perspectives to timeless techniques, creating artwork that captures both 
              emotion and technical precision.
            </p>

            <p className="text-lg text-amber-200 leading-relaxed">
              My journey began with a simple pencil and paper, evolving into a passion for creating 
              detailed portraits, landscapes, and character designs. Each piece tells a story, 
              whether it's capturing a beloved pet's personality or bringing an original character to life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-amber-200">Completed Works</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">25+</div>
                <div className="text-amber-200">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">3+</div>
                <div className="text-amber-200">Years Experience</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-amber-100">Specializations</h4>
              <div className="flex flex-wrap gap-3">
                {['Traditional Sketching', 'Portrait Art', 'Character Design', 'Landscape Drawing', 'Pet Portraits', 'Fan Art'].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-700 text-amber-200 px-3 py-2 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-bold text-amber-100 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="bg-yellow-400 text-gray-900 p-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
                >
                  Instagram
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="bg-gray-700 text-amber-100 p-3 rounded-lg font-medium hover:bg-gray-600 transition-colors"
                >
                  Twitter
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="bg-gray-700 text-amber-100 p-3 rounded-lg font-medium hover:bg-gray-600 transition-colors"
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
