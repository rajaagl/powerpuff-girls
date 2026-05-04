import { Link } from 'react-router-dom';
import logo from '../assets/powerpuffgirlslogo.png';

function Navbar() {
  return (
    <nav className="bg-pink-500 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo + Nom de la série */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img 
              src={logo} 
              alt="Powerpuff Girls Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-white font-bold text-xl">
              Powerpuff Girls
            </span>
          </Link>
          <div className="flex gap-6">
            <Link 
              to="/" 
              className="text-white font-bold text-xl"
            >
              Série
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;