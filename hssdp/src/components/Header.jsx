import React from "react";
import pngEmblem from "../assets/pictures/png_Emblem.png";

export default function Header() {
  return (
    <header className="bg-[#3a6e3c] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap">
        
        {/* Left side: logo + text */}
        <div className="flex items-center space-x-4">
          <img
            src={pngEmblem}
            alt="national emblem"
            className="h-20 w-20 object-contain"
          />
          <span className="text-white font-bold text-xl sm:text-2xl">
            Health Services Sector Development Project
          </span>
        </div>
      </div>
    </header>
  );
}
