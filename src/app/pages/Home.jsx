import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow py-10 px-4 md:px-8 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-display gold-text mb-6">
            Divine Guidance Through Tarot & Astrology
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our innovative platform enhances your readings with the power of AI to blend the mystical wisdom of Tarot with the precise insights of Astrology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/reading" className="btn-primary text-center text-lg px-8 py-3">
              Start Your Reading
            </Link>
            
            <Link to="/about" className="btn-secondary text-center text-lg px-8 py-3">
              Learn More
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full max-w-5xl mt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-mystical-light bg-opacity-20 rounded-lg p-6 hover:bg-opacity-30 transition-all duration-300">
              <div className="mb-4 text-accent-gold text-3xl">✨</div>
              <h3 className="text-xl font-display gold-text mb-2">Tarot Wisdom</h3>
              <p className="text-gray-300">Discover the ancient guidance of Tarot cards, interpreted through our advanced AI system for personalized insights.</p>
            </div>
            
            <div className="bg-mystical-light bg-opacity-20 rounded-lg p-6 hover:bg-opacity-30 transition-all duration-300">
              <div className="mb-4 text-accent-gold text-3xl">🌙</div>
              <h3 className="text-xl font-display gold-text mb-2">Astrological Insights</h3>
              <p className="text-gray-300">Get deeper understanding through astrological connections that enhance your Tarot reading with cosmic context.</p>
            </div>
            
            <div className="bg-mystical-light bg-opacity-20 rounded-lg p-6 hover:bg-opacity-30 transition-all duration-300">
              <div className="mb-4 text-accent-gold text-3xl">🔮</div>
              <h3 className="text-xl font-display gold-text mb-2">AI-Enhanced Readings</h3>
              <p className="text-gray-300">Our state-of-the-art AI combines traditional tarot wisdom with modern psychological and astrological insights.</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Home;