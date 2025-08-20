import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-[#ffffff] text-base font-medium">
        <Link to="/" className="hover:text-[#63b3ed] transition-colors">Home</Link>
        <Link to="/about" className="hover:text-[#63b3ed] transition-colors">About</Link>
        <Link to="/activities" className="hover:text-[#63b3ed] transition-colors">Activities</Link>
        <Link to="/resources" className="hover:text-[#63b3ed] transition-colors">Resources</Link>
        <Link to="/contact" className="hover:text-[#63b3ed] transition-colors">Contact</Link>
      </nav>

      {/* Hamburger Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden text-[#ffffff] z-30 relative ml-2"
        aria-label="Open menu"
      >
        <Menu className="w-7 h-7" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Slide-down Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-[#000000]/75 transition-opacity shadow-md z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-[#2b6cb0]"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Menu Header */}
        <div className="mt-16 mb-4 px-6 flex items-center space-x-2 text-[#ffffff] font-bold text-lg">
          <Sparkles className="w-5 h-5" />
          <span>Menu</span>
        </div>

        {/* Navigation Links */}
        <div className="px-6 pb-6 flex flex-col space-y-4 text-base font-medium text-[#ffffff] text-center">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#63b3ed] transition-all">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#63b3ed] transition-all">About</Link>
          <Link to="/activities" onClick={() => setIsOpen(false)} className="hover:text-[#63b3ed] transition-all">Activities</Link>
          <Link to="/resources" onClick={() => setIsOpen(false)} className="hover:text-[#63b3ed] transition-all">Resources</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#63b3ed] transition-all">Contact</Link>
        </div>
      </div>
    </>
  );
}
