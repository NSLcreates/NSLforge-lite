
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const artworks = [
  { id: 1, title: 'Portrait Study', category: 'portraits', image: '/placeholder.svg', description: 'Detailed character portrait in traditional pencil' },
  { id: 2, title: 'Landscape Sketch', category: 'landscapes', image: '/placeholder.svg', description: 'Scenic mountain view with intricate details' },
  { id: 3, title: 'Character Design', category: 'characters', image: '/placeholder.svg', description: 'Original character concept art' },
  { id: 4, title: 'Fantasy Portrait', category: 'portraits', image: '/placeholder.svg', description: 'Mystical character illustration' },
  { id: 5, title: 'Nature Study', category: 'landscapes', image: '/placeholder.svg', description: 'Forest scene with detailed textures' },
  { id: 6, title: 'Comic Character', category: 'characters', image: '/placeholder.svg', description: 'Dynamic action pose sketch' },
  { id: 7, title: 'Pet Portrait', category: 'portraits', image: '/placeholder.svg', description: 'Beloved companion artwork' },
  { id: 8, title: 'Urban Sketch', category: 'landscapes', image: '/placeholder.svg', description: 'City architecture study' },
  { id: 9, title: 'Fantasy Creature', category: 'characters', image: '/placeholder.svg', description: 'Mythical being design' }
];

const categories = ['all', 'portraits', 'landscapes', 'characters'];

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof artworks[0] | null>(null);

  const filteredArtworks = activeCategory === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === activeCategory);

  return (
    <section id="gallery" className="py-20 px-4 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            My <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore a collection of traditional sketch artworks, each piece crafted with dedication and attention to detail.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-slate-700 rounded-lg overflow-hidden shadow-lg cursor-pointer group border border-slate-600"
                onClick={() => setSelectedImage(artwork)}
              >
                <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                      <h3 className="text-lg font-bold mb-2">{artwork.title}</h3>
                      <p className="text-sm">{artwork.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-slate-800 rounded-lg overflow-hidden max-w-4xl max-h-[90vh] overflow-y-auto border border-slate-600"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-100 mb-2">{selectedImage.title}</h3>
                  <p className="text-slate-300">{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
