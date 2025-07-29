import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center space-x-8">
      <Link to="/" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
        Home
      </Link>
      <Link to="/about" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
        About
      </Link>
      <Link to="/activities" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
        Current Activities
      </Link>
      <Link to="/resources" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
        Resources
      </Link>
      <Link to="/contact" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
        Contact
      </Link>
    </nav>
  );
}
