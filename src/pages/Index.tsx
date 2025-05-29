
import { Hero } from '@/components/Hero';
import { Gallery } from '@/components/Gallery';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';
import { BackToTop } from '@/components/BackToTop';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <Gallery />
        <Services />
        <About />
        <Contact />
      </motion.div>

      <BackToTop />
    </div>
  );
};

export default Index;
