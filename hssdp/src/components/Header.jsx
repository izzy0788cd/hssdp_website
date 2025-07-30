import React from "react";
import pngEmblem from "../assets/pictures/png_Emblem.png";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-[#3a6e3c] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo + Text */}
        <div className="flex items-center space-x-4 z-10">
          <img
            src={pngEmblem}
            alt="National emblem"
            className="h-20 w-20 object-contain"
          />
          <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl leading-tight">
            Health Services Sector Development Project
          </span>
        </div>

        {/* Navbar (including hamburger) */}
        <Navbar />
      </div>
    </header>
  );
}

