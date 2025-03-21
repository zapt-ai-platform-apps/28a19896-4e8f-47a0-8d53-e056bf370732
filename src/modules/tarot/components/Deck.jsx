import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { tarotCards } from '../data/cards';

const Deck = ({ onSelectCards }) => {
  const [shuffling, setShuffling] = useState(false);
  const [cards, setCards] = useState([...tarotCards]);
  
  const shuffleCards = () => {
    setShuffling(true);
    
    // Animate shuffle
    setTimeout(() => {
      const shuffled = [...cards].sort(() => Math.random() - 0.5);
      setCards(shuffled);
      setShuffling(false);
    }, 800);
  };
  
  const drawCards = (count = 3) => {
    // Draw random cards from the deck
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    const selectedCards = shuffled.slice(0, count);
    
    // Call the callback with selected cards
    onSelectCards(selectedCards);
  };
  
  return (
    <div className="mb-12 flex flex-col items-center">
      <motion.div 
        className="relative w-[180px] h-[300px] mb-8"
        animate={{
          rotateZ: shuffling ? [0, -5, 5, -5, 0] : 0,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Stack of cards in the deck */}
        {[...Array(5)].map((_, index) => (
          <div 
            key={index}
            className="absolute card-back rounded-lg shadow-lg"
            style={{
              width: '160px',
              height: '280px',
              top: `${index * 1}px`,
              left: `${index * 1}px`,
              zIndex: 5 - index,
            }}
          >
            {index === 0 && (
              <img src="https://images.unsplash.com/photo-1513569771920-c9e1d31714af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxMHx8bXlzdGljYWwlMjB0YXJvdCUyMGNhcmQlMjBiYWNrJTIwd2l0aCUyMGNlbGVzdGlhbCUyMGRlc2lnbiUyQyUyMHN0YXJzJTJDJTIwbW9vbiUyMHBoYXNlcyUyQyUyMHNhY3JlZCUyMGdlb21ldHJ5JTJDJTIwZGFyayUyMGluZGlnbyUyMGFuZCUyMGdvbGQlMjBjb2xvcnN8ZW58MHx8fHwxNzQyNTcwMjkzfDA&ixlib=rb-4.0.3&q=80&w=1080" 
                 
                data-image-request="mystical tarot card back with celestial design, stars, moon phases, sacred geometry, dark indigo and gold colors"
                alt="Tarot Card Deck" 
                className="w-full h-full object-cover rounded-lg opacity-90" 
              />
            )}
          </div>
        ))}
      </motion.div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          className="btn-secondary cursor-pointer text-lg py-3 px-8" 
          onClick={shuffleCards}
          disabled={shuffling}
        >
          Shuffle Deck
        </button>
        
        <button 
          className="btn-primary cursor-pointer text-lg py-3 px-8" 
          onClick={() => drawCards(3)}
          disabled={shuffling}
        >
          Draw Cards
        </button>
      </div>
    </div>
  );
};

export default Deck;