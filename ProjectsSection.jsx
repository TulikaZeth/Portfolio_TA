// src/components/ProjectsSection.jsx
import React from 'react';
import ProjectCard from './cards/ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AnoCam",
      description: "Authorization Framework based on Person Classification based on Semi-supervised learning on CNN.",
      tech: ['Python', 'TensorFlow'],
      featured: true,
      link: "https://github.com/TulikaZeth/AnoCaM",
    },
    {
      title: "GatiShakti",
      description: "Real-time object detection and classification system for Railway Security and Animal Welfare.",
      tech: ['OpenCV', 'PyTorch', 'YOLO', 'Python'],
      link :"https://github.com/TulikaZeth/GatiShakti"
    },
    {
      title: "Sentiment Analyzer",
      description: "Advanced sentiment analysis",
      tech: ['OpenCV', 'Flask', 'API'],
      link : ""
    },
    {
      title: "BLOGBOT",
      description: "LangChain based AI-chatbot model for Blog Generation",
      tech: ['LangChain', 'Gemini-API', 'Agent-DuckDuckGo,Wikipedia'],
      link : "https://github.com/TulikaZeth/BLOGBOTAPI"
    },
    {
      title: "PharmLensAI",
      description: "intelligent healthcare tool designed to analyze medical prescriptions ",
      tech: ['StreamLit', 'EasyOCR','Numpy','Python','PIL'] ,
      link : "https://github.com/TulikaZeth/PharmLensAI"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300">Innovative solutions at the intersection of AI and impact</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;