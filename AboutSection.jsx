// src/components/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
        <div className="text-lg text-gray-300 leading-relaxed space-y-6">
          <p>
            Hi, I’m Tulika Anand—an aspiring AI researcher pursuing dual degrees in Computer Science (KIET Ghaziabad) and Data Science & AI (IIT Guwahati). I work at the intersection of Python, Computer Vision, and Machine Learning, with a focus on building real-world solutions that are ethical and impactful.
          </p>
          <p>
            From emotion recognition for autistic children to animal detection on railway tracks, my projects reflect a commitment to responsible AI. I’m passionate about bridging the gap between research and application—using technology to create meaningful change.
          </p>
          <div className="flex justify-center space-x-6 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">Python</div>
              <div className="text-sm text-gray-400">Primary Language</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">CV & ML</div>
              <div className="text-sm text-gray-400">Specialization</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">DSAI and ML</div>
              <div className="text-sm text-gray-400">Focus Area</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;