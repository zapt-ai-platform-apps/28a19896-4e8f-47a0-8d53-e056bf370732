import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './app/layout/Header';
import Footer from './app/layout/Footer';
import Home from './app/pages/Home';
import ReadingPage from './app/pages/ReadingPage';
import AboutPage from './app/pages/AboutPage';
import CelestialBackground from './shared/components/CelestialBackground';
import ZaptBadge from './shared/components/ZaptBadge';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <CelestialBackground />
      
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reading" element={<ReadingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      
      <Footer />
      <ZaptBadge />
    </div>
  );
}