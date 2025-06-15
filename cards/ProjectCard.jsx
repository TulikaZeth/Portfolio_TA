// src/components/cards/ProjectCard.jsx
import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, tech, link, featured = false }) => {
  return (
    <div className={`group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:scale-105 ${featured ? 'lg:col-span-2' : ''}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <ExternalLink onClick={()=>window.location.href=link} className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
        </div>
        <p className="text-gray-300 mb-6 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, idx) => (
            <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
              {item}
            </span>
          ))}
        </div>
        <div onClick={()=>window.location.href=link} className="flex items-center text-blue-400 font-semibold">
          <span className="mr-2">Explore Project</span>
          <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;