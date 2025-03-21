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
            <img src="https://images.unsplash.com/photo-1532372320572-cda25653a26d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxMHx8bXlzdGljYWwlMjB0YXJvdCUyMGNhcmQlMjBiYWNrJTIwd2l0aCUyMGNvc21pYyUyMGRlc2lnbnxlbnwwfHx8fDE3NDI1Njk5NjB8MA&ixlib=rb-4.0.3&q=80&w=1080" 
               
              data-image-request="mystical tarot card back with cosmic design"
              alt="Tarot Card Back" 
              className="w-[120px] h-[120px] object-contain opacity-80" 
            />
          </div>
        </div>
        
        {card && (
          <div className="card-front absolute rounded-lg overflow-hidden w-full h-full shadow-lg bg-mystical-dark border-2 border-accent-gold">
            <img src="https://images.unsplash.com/photo-1582125169517-53e6192d476b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxMHx8JTYwZGV0YWlsZWQlMjB0YXJvdCUyMGNhcmQlMjBpbGx1c3RyYXRpb24lMjBvZiUyMCUyNCU3QmNhcmQubmFtZXxlbnwwfHx8fDE3NDI1Njk5NjB8MA&ixlib=rb-4.0.3&q=80&w=1080" 
               
              data-image-request={`detailed tarot card illustration of ${card.name}`}
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