import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#173d73] text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row justify-between text-sm space-y-4 sm:space-y-0">
        {/* Left: Copyright */}
        <div className="text-center sm:text-left">
          <p>Health Services Sector Development Project</p>
          <p>Sec 68 Lot 07, Ruta Place, Gordons</p>
          <p>P. O. Box 353, Gordons</p>
          <p>NCD, Port Moresby</p>
        </div>

        {/* Center: Address */}
        <div className="text-center sm:text-left">
          <p>Email: info@pnghssdp.org</p>
          <p>Phone: +675 325 1206 | 325 1275</p>
        </div>

        {/* Right: Contact */}
        <div className="text-center sm:text-right">
          <p>&copy; {new Date().getFullYear()} Health Services Sector Development Project</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
