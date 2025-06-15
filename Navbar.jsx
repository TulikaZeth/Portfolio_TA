import React from 'react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = ['home', 'projects', 'contact', 'about'];

  const handleClick = (section) => {
    if (section === 'contact') {
      // Open default mail app
      window.location.href = 'mailto:tulikaanand05@gmail.com';
    } else {
      setActiveSection(section);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Tulika Anand
          </div>
          <div className="flex space-x-8">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => handleClick(section)}
                className={`capitalize transition-all duration-300 ${
                  activeSection === section 
                    ? 'text-blue-400 border-b-2 border-blue-400' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
