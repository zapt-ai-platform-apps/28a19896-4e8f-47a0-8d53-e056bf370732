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
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw2fHxteXN0aWNhbCUyMHRhcm90JTIwY2FyZCUyMGJhY2slMjB3aXRoJTIwY2VsZXN0aWFsJTIwZGVzaWduJTJDJTIwc3RhcnMlMkMlMjBtb29uJTIwcGhhc2VzJTJDJTIwc2FjcmVkJTIwZ2VvbWV0cnklMkMlMjBkYXJrJTIwaW5kaWdvJTIwYW5kJTIwZ29sZCUyMGNvbG9yc3xlbnwwfHx8fDE3NDI1NzAyOTN8MA&ixlib=rb-4.0.3&q=80&w=1080" 
               
              data-image-request="mystical tarot card back with celestial design, stars, moon phases, sacred geometry, dark indigo and gold colors"
              alt="Tarot Card Back" 
              className="w-full h-full object-cover opacity-90" 
            />
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