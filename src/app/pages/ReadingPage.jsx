import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Deck from '../../modules/tarot/components/Deck';
import Reading from '../../modules/tarot/components/Reading';
import QuestionForm from '../../modules/tarot/components/QuestionForm';

const ReadingPage = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [question, setQuestion] = useState("");
  const [step, setStep] = useState("question"); // question, deck, reading
  
  const handleSelectCards = (cards) => {
    setSelectedCards(cards);
    setStep("reading");
  };
  
  const handleSetQuestion = (question) => {
    setQuestion(question);
    setStep("deck");
  };
  
  const resetReading = () => {
    setSelectedCards([]);
    setQuestion("");
    setStep("question");
  };
  
  return (
    <div className="min-h-screen py-8 px-4 md:px-8">
      <motion.h1 
        className="text-3xl md:text-5xl font-display gold-text text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Tarot Reading
      </motion.h1>
      
      <motion.p 
        className="text-center text-white text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Focus your mind on what you seek guidance for, then draw your cards to receive wisdom from the universe.
      </motion.p>
      
      {step === "question" && (
        <QuestionForm onSubmit={handleSetQuestion} />
      )}
      
      {step === "deck" && (
        <Deck onSelectCards={handleSelectCards} />
      )}
      
      {step === "reading" && (
        <Reading 
          selectedCards={selectedCards} 
          question={question}
          onReset={resetReading}
        />
      )}
    </div>
  );
};

export default ReadingPage;