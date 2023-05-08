import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white text-gray-800 p-4">
      <div className="px-2 pt-2 pb-3 sm:px-3">
        <Link
          to="/"
          className="nav-link text-gray-300 hover:bg-pink-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="nav-link text-gray-300 hover:bg-pink-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="nav-link text-gray-300 hover:bg-pink-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Contact
        </Link>
        <Link
          to="/projects"
          className="nav-link text-gray-300 hover:bg-pink-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
