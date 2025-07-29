import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-[#2e5d30] py-2 px-4 flex justify-center space-x-6 shadow">
      <Link
        to="/"
        className="text-white text-base font-medium hover:text-blue-200 transition-colors"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-white text-base font-medium hover:text-blue-200 transition-colors"
      >
        About
      </Link>
      <Link
        to="/activities"
        className="text-white text-base font-medium hover:text-blue-200 transition-colors"
      >
        Current Activities
      </Link>
      <Link
        to="/resources"
        className="text-white text-base font-medium hover:text-blue-200 transition-colors"
      >
        Resources
      </Link>
      <Link
        to="/contact"
        className="text-white text-base font-medium hover:text-blue-200 transition-colors"
      >
        Contact
      </Link>
    </nav>
  );
}

