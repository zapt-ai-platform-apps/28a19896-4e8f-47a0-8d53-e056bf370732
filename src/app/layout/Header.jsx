import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="py-6 px-4 md:px-8 relative">
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
            <li><Link to="/" className="text-white hover:text-accent-gold transition-colors">Home</Link></li>
            <li><Link to="/reading" className="text-white hover:text-accent-gold transition-colors">Reading</Link></li>
            <li><Link to="/about" className="text-white hover:text-accent-gold transition-colors">About</Link></li>
          </ul>
        </motion.nav>
        
        <div className="md:hidden">
          <button 
            className="text-white cursor-pointer p-2 hover:text-accent-gold transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="absolute top-full left-0 right-0 bg-mystical-dark/95 backdrop-blur-md z-50 border-t border-mystical-light/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="py-6 px-4">
              <ul className="flex flex-col gap-6 font-display text-xl">
                <li>
                  <Link 
                    to="/" 
                    className="text-white hover:text-accent-gold transition-colors block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/reading" 
                    className="text-white hover:text-accent-gold transition-colors block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Reading
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="text-white hover:text-accent-gold transition-colors block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;