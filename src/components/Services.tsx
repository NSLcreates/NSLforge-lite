
import { motion } from 'framer-motion';
import { User, Image, Star } from 'lucide-react';

const services = [
  {
    icon: User,
    title: 'Custom Portraits',
    description: 'Detailed portrait sketches capturing personality and emotion',
    features: ['Individual portraits', 'Pet portraits', 'Family portraits', 'Character portraits'],
    price: 'Starting at $75'
  },
  {
    icon: Image,
    title: 'Landscape Art',
    description: 'Scenic artwork bringing natural beauty to life on paper',
    features: ['Nature scenes', 'Urban landscapes', 'Architectural studies', 'Fantasy environments'],
    price: 'Starting at $100'
  },
  {
    icon: Star,
    title: 'Character Design',
    description: 'Original character concepts and fan art commissions',
    features: ['Original characters', 'Fan art', 'Concept designs', 'Comic characters'],
    price: 'Starting at $60'
  }
];

const process = [
  { step: '01', title: 'Consultation', description: 'Discuss your vision and requirements' },
  { step: '02', title: 'Sketching', description: 'Initial concepts and rough drafts' },
  { step: '03', title: 'Refinement', description: 'Detailed work and adjustments' },
  { step: '04', title: 'Completion', description: 'Final artwork delivery' }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-6">
            My <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-xl text-amber-200 max-w-3xl mx-auto">
            Professional commission services specializing in traditional sketch artwork. Each piece is hand-crafted with care and precision.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-b from-gray-800 to-gray-700 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-amber-100 mb-4">{service.title}</h3>
              <p className="text-amber-200 mb-6">{service.description}</p>
              <ul className="text-amber-300 mb-6 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-yellow-400">{service.price}</div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-amber-100 mb-6">
            Commission <span className="text-yellow-400">Process</span>
          </h3>
          <p className="text-lg text-amber-200 max-w-2xl mx-auto">
            A streamlined process to ensure your artwork meets your expectations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-gray-900">
                {step.step}
              </div>
              <h4 className="text-xl font-bold text-amber-100 mb-2">{step.title}</h4>
              <p className="text-amber-200">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-6 bg-gray-800 rounded-lg border-l-4 border-yellow-400"
        >
          <h4 className="text-lg font-bold text-yellow-400 mb-2">Commission Terms & Disclaimer</h4>
          <p className="text-amber-200 text-sm leading-relaxed">
            All artwork is created for personal use only. Fan art commissions are accepted but cannot be used for commercial purposes. 
            Payment is required upfront, with major revisions discussed before starting. Completion time varies by complexity but typically ranges from 1-3 weeks. 
            All original artwork remains the intellectual property of NSL Forge unless otherwise agreed upon.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
