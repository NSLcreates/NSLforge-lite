
import { motion } from 'framer-motion';
import { User, Image, Star } from 'lucide-react';

const services = [
  {
    icon: User,
    title: 'Custom Portraits',
    description: 'Detailed portrait sketches capturing personality and emotion',
    features: ['Individual portraits', 'Pet portraits', 'Family portraits', 'Character portraits'],
    action: 'Request Portrait'
  },
  {
    icon: Image,
    title: 'Landscape Art',
    description: 'Scenic artwork bringing natural beauty to life on paper',
    features: ['Nature scenes', 'Urban landscapes', 'Architectural studies', 'Fantasy environments'],
    action: 'Request Landscape'
  },
  {
    icon: Star,
    title: 'Character Design',
    description: 'Original character concepts and fan art commissions',
    features: ['Original characters', 'Fan art', 'Concept designs', 'Comic characters'],
    action: 'Request Character'
  }
];

const process = [
  { step: '01', title: 'Discussion', description: 'Chat about your vision and ideas' },
  { step: '02', title: 'Sketching', description: 'Initial concepts and rough drafts' },
  { step: '03', title: 'Refinement', description: 'Detailed work and adjustments' },
  { step: '04', title: 'Completion', description: 'Final artwork delivery' }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-fuchsia-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            My <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I create traditional sketch artwork as a passion project. Each piece is hand-crafted with care and dedication to improve my artistic skills.
          </p>
        </motion.div>

        {/* Services Grid with 3D Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: '0 25px 50px rgba(232, 121, 249, 0.3)',
                y: -10
              }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-600 relative overflow-hidden group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glowing background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              
              <motion.div
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-fuchsia-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-slate-100 mb-4 relative z-10">{service.title}</h3>
              <p className="text-slate-300 mb-6 relative z-10">{service.description}</p>
              <ul className="text-slate-300 mb-6 space-y-2 relative z-10">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span 
                      className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3"
                      whileHover={{ scale: 1.5, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <div className="text-xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent relative z-10">
                {service.action}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section with Enhanced 3D */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
            My <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">Process</span>
          </h3>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A simple process to create artwork that captures your vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30, rotateY: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 10,
                y: -10
              }}
              className="text-center group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                whileHover={{ 
                  rotateY: 360,
                  boxShadow: '0 15px 30px rgba(232, 121, 249, 0.4)'
                }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-fuchsia-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              >
                {step.step}
              </motion.div>
              <h4 className="text-xl font-bold text-slate-100 mb-2">{step.title}</h4>
              <p className="text-slate-300">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="mt-16 p-6 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg border-l-4 border-fuchsia-400 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <h4 className="text-lg font-bold text-fuchsia-400 mb-2">Important Notice</h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            All artwork is created as a personal passion project and learning experience. I'm 15 years old and not operating as a commercial business. 
            Fan art and original artwork are created for personal enjoyment and skill development. Please reach out if you'd like to discuss a sketch request! 
            Completion time varies by complexity and my school schedule.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
