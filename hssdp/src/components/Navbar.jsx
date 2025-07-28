import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-left space-x-4">
        <Link to="/" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
          Home
        </Link>
        <Link to="/" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
          About
        </Link>
        <Link to="/" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
          Achivements & Projects
        </Link>
        <Link to="/" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
          Current Activities
        </Link>
        <Link to="/" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
          Resources
        </Link>
        <Link to="/" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
          Contact
        </Link>
      </div>
    </header>
  );
}
