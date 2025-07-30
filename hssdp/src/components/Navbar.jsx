import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-white text-base font-medium">
        <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-blue-200 transition-colors">About</Link>
        <Link to="/activities" className="hover:text-blue-200 transition-colors">Current Activities</Link>
        <Link to="/resources" className="hover:text-blue-200 transition-colors">Resources</Link>
        <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden text-white z-30"
      >
        <Menu className="w-7 h-7" />
      </button>

      {/* Fullscreen Mobile Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#3a6e3c] z-50 flex flex-col items-center justify-center space-y-8 text-white text-2xl font-semibold">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-6 text-white"
          >
            <X className="w-7 h-7" />
          </button>

          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-200">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-200">About</Link>
          <Link to="/activities" onClick={() => setIsOpen(false)} className="hover:text-blue-200">Current Activities</Link>
          <Link to="/resources" onClick={() => setIsOpen(false)} className="hover:text-blue-200">Resources</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-200">Contact</Link>
        </div>
      )}
    </>
  );
}
