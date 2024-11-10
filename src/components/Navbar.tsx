import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              JD
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="hover:text-blue-600 px-3 py-2">Home</a>
              <a href="#about" className="hover:text-blue-600 px-3 py-2">About</a>
              <a href="#skills" className="hover:text-blue-600 px-3 py-2">Skills</a>
              <a href="#projects" className="hover:text-blue-600 px-3 py-2">Projects</a>
              <a href="#contact" className="hover:text-blue-600 px-3 py-2">Contact</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" className="text-gray-600 hover:text-blue-600">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:john@example.com" className="text-gray-600 hover:text-blue-600">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block hover:text-blue-600 px-3 py-2">Home</a>
            <a href="#about" className="block hover:text-blue-600 px-3 py-2">About</a>
            <a href="#skills" className="block hover:text-blue-600 px-3 py-2">Skills</a>
            <a href="#projects" className="block hover:text-blue-600 px-3 py-2">Projects</a>
            <a href="#contact" className="block hover:text-blue-600 px-3 py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}