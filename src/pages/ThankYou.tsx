import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 pt-32 pb-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center"
      >
        <h1 className="text-5xl md:text-7xl font-serif italic mb-8">Thank You</h1>
        <p className="font-mono text-sm md:text-base leading-relaxed opacity-80 mb-12">
          Your message has been received. We appreciate you reaching out and will get back to you shortly.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ThankYou;
