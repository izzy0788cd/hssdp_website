import React from "react";
import Navbar from "./Navbar";
import pngEmblem from "../assets/pictures/png_Emblem.png";

export default function Header() {
  return (
    <header className="bg-[#79db7a] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        
        {/* Left side: logo + text */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <img
            src={pngEmblem}
            alt="national emblem"
            className="h-20 w-20 object-contain"
          />
          <span className="text-black font-bold text-2xl whitespace-nowrap">
            Health Services Sector Development Project
          </span>
        </div>

        {/* Right side: navbar */}
        <div className="flex justify-end flex-grow">
          <Navbar />
        </div>

      </div>
    </header>
  );
}
