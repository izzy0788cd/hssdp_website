import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#3a6e3c] text-white py-6 mt-8">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Health Services Sector Development Project</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}
