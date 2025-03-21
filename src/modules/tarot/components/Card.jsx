import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ card, isFlipped, onClick, position }) => {
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
          <div className="absolute inset-0 flex items-center justify-center bg-mystical-purple">
            <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-mystical-dark to-mystical-purple border-2 border-accent-gold">
              <div className="text-accent-gold text-4xl mb-2">✧</div>
              <div className="flex justify-center items-center my-2">
                <div className="text-accent-gold text-2xl mx-1">☽</div>
                <div className="text-accent-gold text-3xl mx-1">★</div>
                <div className="text-accent-gold text-2xl mx-1">☾</div>
              </div>
              <div className="w-16 h-16 border-2 border-accent-gold rounded-full flex items-center justify-center my-2">
                <div className="w-12 h-12 border-2 border-accent-gold rotate-45"></div>
              </div>
              <div className="flex justify-center items-center my-2">
                <div className="text-accent-gold text-2xl mx-1">☽</div>
                <div className="text-accent-gold text-3xl mx-1">★</div>
                <div className="text-accent-gold text-2xl mx-1">☾</div>
              </div>
              <div className="text-accent-gold text-4xl mt-2">✧</div>
            </div>
          </div>
        </div>
        
        {card && (
          <div className="card-front absolute rounded-lg overflow-hidden w-full h-full shadow-lg bg-mystical-dark border-2 border-accent-gold">
            <img src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxfHwlNjB0cmFkaXRpb25hbCUyMHRhcm90JTIwY2FyZCUyMGlsbHVzdHJhdGlvbiUyMG9mJTIwJTI0JTdCY2FyZC5uYW1lfGVufDB8fHx8MTc0MjU3MDI5NHww&ixlib=rb-4.0.3&q=80&w=1080" 
               
              data-image-request={`traditional tarot card illustration of ${card.name}, mystical, detailed, rich colors`}
              alt={card.name} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
              <h3 className="text-white text-center font-display text-sm md:text-base">
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