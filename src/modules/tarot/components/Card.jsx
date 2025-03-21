import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ card, isFlipped, onClick, position }) => {
  // Placeholder image for cards until we have real images
  const cardImage = card ? (card.image || 'PLACEHOLDER') : 'PLACEHOLDER';
  const dataImageRequest = card ? `tarot card ${card.name}` : 'tarot card back';
  
  const cardVariants = {
    hover: {
      y: -10,
      boxShadow: "0 10px 25px rgba(212, 175, 55, 0.4)",
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <motion.div 
      className="card-container relative"
      style={{ width: '160px', height: '280px' }}
      variants={cardVariants}
      whileHover="hover"
      onClick={onClick}
    >
      <div className={`card-inner w-full h-full ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-back absolute rounded-lg overflow-hidden flex items-center justify-center w-full h-full shadow-lg">
          <div className="absolute inset-0 card-back rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={cardImage} 
              data-image-request={dataImageRequest}
              alt="Tarot Card Back" 
              className="w-[120px] h-[120px] object-contain opacity-50" 
            />
          </div>
        </div>
        
        {card && (
          <div className="card-front absolute rounded-lg overflow-hidden w-full h-full shadow-lg bg-mystical-dark border-2 border-accent-gold">
            <img 
              src={cardImage} 
              data-image-request={dataImageRequest}
              alt={card.name} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
              <h3 className="text-white text-center font-display text-sm">
                {card.name}
              </h3>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;