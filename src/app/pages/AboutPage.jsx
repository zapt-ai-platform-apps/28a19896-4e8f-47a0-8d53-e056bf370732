import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-8 px-4 md:px-8">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-display gold-text text-center mb-8">About Our Tarot Experience</h1>
        
        <div className="bg-mystical-light bg-opacity-20 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-display gold-text mb-4">The Fusion of Ancient Wisdom & Modern Technology</h2>
          
          <div className="space-y-6 text-gray-200">
            <p>
              Our Tarot platform harmoniously blends the ancient mystical tradition of Tarot reading with astrological insights, all enhanced by cutting-edge AI technology. We've created an experience that honors the depth and wisdom of traditional Tarot while bringing it into the modern age.
            </p>
            
            <p>
              Each reading is uniquely crafted using our advanced AI system, which has been extensively trained in Tarot symbolism, astrological correspondences, and spiritual guidance. The result is a deeply personalized reading that offers genuine insight and direction.
            </p>
            
            <p>
              Unlike simple automated readings, our AI considers the complex interplay between cards, their positions, and their relationships to astrological influences, creating a multi-dimensional analysis that rivals traditional in-person readings.
            </p>
          </div>
          
          <h2 className="text-2xl font-display gold-text mt-10 mb-4">How to Interpret Your Reading</h2>
          
          <div className="space-y-6 text-gray-200">
            <p>
              A Tarot reading offers guidance, not definitive futures. The cards reveal energies, patterns, and possibilities—not predetermined outcomes. They serve as a mirror, reflecting aspects of your situation you may not consciously recognize.
            </p>
            
            <p>
              As you receive your reading, keep an open mind and reflect on how the insights connect to your life. Sometimes the most valuable aspects of a reading aren't immediately obvious but become clear with reflection.
            </p>
            
            <p>
              Remember that you always possess free will. The cards may illuminate the path, but you choose the steps you take along your journey.
            </p>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <Link to="/reading" className="btn-primary text-center text-lg px-8 py-3">
            Begin Your Reading
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;