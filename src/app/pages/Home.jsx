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
          <h1 className="text-4xl md:text-6xl font-display gold-text mb-8">
            Divine Guidance Through Tarot & Astrology
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
            Our innovative platform enhances your readings with the power of AI to blend the mystical wisdom of Tarot with the precise insights of Astrology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/reading" className="btn-primary text-center text-lg px-8 py-3 cursor-pointer">
              Start Your Reading
            </Link>
            
            <Link to="/about" className="btn-secondary text-center text-lg px-8 py-3 cursor-pointer">
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
            <div className="content-section hover:bg-mystical-light/40 transition-all duration-300">
              <div className="mb-4 text-accent-gold text-3xl">✨</div>
              <h3 className="text-xl md:text-2xl font-display gold-text mb-4">Tarot Wisdom</h3>
              <p className="text-white text-lg">Discover the ancient guidance of Tarot cards, interpreted through our advanced AI system for personalized insights.</p>
            </div>
            
            <div className="content-section hover:bg-mystical-light/40 transition-all duration-300">
              <div className="mb-4 text-accent-gold text-3xl">🌙</div>
              <h3 className="text-xl md:text-2xl font-display gold-text mb-4">Astrological Insights</h3>
              <p className="text-white text-lg">Get deeper understanding through astrological connections that enhance your Tarot reading with cosmic context.</p>
            </div>
            
            <div className="content-section hover:bg-mystical-light/40 transition-all duration-300">
              <div className="mb-4 text-accent-gold text-3xl">🔮</div>
              <h3 className="text-xl md:text-2xl font-display gold-text mb-4">AI-Enhanced Readings</h3>
              <p className="text-white text-lg">Our state-of-the-art AI combines traditional tarot wisdom with modern psychological and astrological insights.</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Home;