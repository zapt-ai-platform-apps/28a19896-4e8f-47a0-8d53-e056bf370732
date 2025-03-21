import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=64&height=64" 
              alt="Tarot Logo" 
              className="w-10 h-10 md:w-12 md:h-12" 
            />
            <h1 className="text-3xl md:text-4xl font-display gold-text tracking-wide">Tarot</h1>
          </Link>
        </motion.div>
        
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:block"
        >
          <ul className="flex gap-8 font-display text-lg">
            <li><Link to="/" className="text-gray-300 hover:text-accent-gold transition-colors">Home</Link></li>
            <li><Link to="/reading" className="text-gray-300 hover:text-accent-gold transition-colors">Reading</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-accent-gold transition-colors">About</Link></li>
          </ul>
        </motion.nav>
        
        <div className="md:hidden">
          {/* Mobile menu button - to be implemented if needed */}
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;