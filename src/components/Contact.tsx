import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, Mail, User, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    description: '',
    timeline: ''
  });
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = (newFiles: File[]) => {
    const imageFiles = newFiles.filter(file => file.type.startsWith('image/'));
    if (imageFiles.length !== newFiles.length) {
      toast({
        title: "Invalid Files",
        description: "Please only upload image files.",
        variant: "destructive"
      });
    }
    setFiles([...files, ...imageFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (files.length === 0) {
      toast({
        title: "Reference Images Required",
        description: "Please upload at least one reference image for your sketch request.",
        variant: "destructive"
      });
      return;
    }
    
    console.log('Form Data:', formData);
    console.log('Files:', files);
    
    toast({
      title: "Sketch Request Sent!",
      description: "Thank you for your interest! I'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      description: '',
      timeline: ''
    });
    setFiles([]);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-6">
            Let's Create <span className="text-yellow-400">Together</span>
          </h2>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto">
            Have an idea for a sketch? Fill out the form below with your vision, 
            and I'll do my best to bring it to life with traditional sketching techniques!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-gray-800 rounded-lg p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-amber-100 font-medium mb-2">
                <User className="inline w-4 h-4 mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-amber-100 focus:border-yellow-400 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-amber-100 font-medium mb-2">
                <Mail className="inline w-4 h-4 mr-2" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-amber-100 focus:border-yellow-400 focus:outline-none transition-colors"
                placeholder="your.email@example.com (optional)"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-amber-100 font-medium mb-2">Sketch Type *</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-amber-100 focus:border-yellow-400 focus:outline-none transition-colors"
            >
              <option value="">Select sketch type</option>
              <option value="portrait">Portrait Sketch</option>
              <option value="landscape">Landscape Art</option>
              <option value="character">Character Design</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-amber-100 font-medium mb-2">Timeline (Optional)</label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-amber-100 focus:border-yellow-400 focus:outline-none transition-colors"
            >
              <option value="">When would you like this?</option>
              <option value="no-rush">No rush - whenever you have time</option>
              <option value="few-weeks">In a few weeks</option>
              <option value="month-or-two">Within a month or two</option>
              <option value="flexible">Completely flexible</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-amber-100 font-medium mb-2">
              <MessageSquare className="inline w-4 h-4 mr-2" />
              Describe Your Idea *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-amber-100 focus:border-yellow-400 focus:outline-none transition-colors resize-vertical"
              placeholder="Describe your sketch idea in detail. Include style preferences, mood, specific elements you want included, etc."
            />
          </div>

          {/* File Upload */}
          <div className="mb-8">
            <label className="block text-amber-100 font-medium mb-2">
              <Upload className="inline w-4 h-4 mr-2" />
              Reference Images *
            </label>
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive 
                  ? 'border-yellow-400 bg-yellow-400/10' 
                  : 'border-gray-600 hover:border-gray-500'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-amber-200 mb-2">
                Drag and drop images here, or{' '}
                <label className="text-yellow-400 cursor-pointer hover:underline">
                  browse files
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileInput}
                    className="hidden"
                  />
                </label>
              </p>
              <p className="text-gray-400 text-sm">PNG, JPG, GIF up to 10MB each (Required)</p>
            </div>

            {/* File List */}
            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-700 rounded-lg p-3">
                    <span className="text-amber-200 truncate">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg"
          >
            Send Sketch Request
          </motion.button>

          <p className="text-gray-400 text-sm mt-4 text-center">
            I usually respond when I have free time from school. All information is kept private!
          </p>
        </motion.form>
      </div>
    </section>
  );
};
