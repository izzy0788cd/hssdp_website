import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#3a6e3c] text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4 text-center flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Health Services Sector Development Project</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}
