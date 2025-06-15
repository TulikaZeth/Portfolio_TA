// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
// import VlogsSection from './components/VlogsSection';
import AboutSection from './components/AboutSection';
import AnimatedBackground from './components/AnimatedBackground';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection setActiveSection={setActiveSection} />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
  window.location.href = "mailto:tulikaanand05@gmail.com"; 
  return null;
      case 'about':
        return <AboutSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="relative z-10">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default App;