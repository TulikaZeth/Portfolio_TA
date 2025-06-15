// src/components/HeroSection.jsx
import React from 'react';
import { Code2, Brain } from 'lucide-react';
//import { href } from 'react-router-dom';

const HeroSection = ({ setActiveSection }) => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Building
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tech for Change
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Blending Python, Machine Learning, and Computer Vision to build intelligent systems that redefine what's possible....
            </p>
          </div>
          <div className="flex space-x-4">
            <button                 onClick={() => setActiveSection("projects")} className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center space-x-2">
              <Code2 size={20} />
              <span >View Projects</span>
            </button>
            <button onClick={()=>window.open("https://drive.google.com/file/d/1cHHpa2vmSeBwhu6poXcCm1jxfPAHx-DT/view?usp=sharing", '_blank', 'noopener,noreferrer')} className="px-8 py-4 border border-gray-600 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
              Resume
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700">
            <div className="absolute inset-4 border border-blue-500/30 rounded-xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Brain className="w-16 h-16 text-blue-400 mx-auto animate-pulse" />
                  <div className="text-blue-400 font-mono text-sm">
                    {'{ ML_DEV: "ACTIVE" }'}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 text-xs text-gray-500 font-mono">
              Python • CV • ML • AI • DS 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;