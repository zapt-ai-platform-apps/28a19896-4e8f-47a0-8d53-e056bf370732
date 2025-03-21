import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Tarot. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-accent-gold transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-accent-gold transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;