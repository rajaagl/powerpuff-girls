import { Link } from 'react-router-dom';
import logo from '../assets/powerpuffgirlslogo.png'

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
             <img 
              src={logo} 
              alt="Powerpuff Girls Logo" 
              className="w-10 h-10 object-contain"
             />
            <Link to="/" className="text-xl font-bold text-pink-500">
               Powerpuff Girls
            </Link>
            <div className="flex gap-6">
               <Link to="/" className="text-sm text-gray-600 hover:text-pink-500">Série</Link>
               <Link to="/episodes" className="text-sm text-gray-600 hover:text-pink-500">Épisodes</Link>
            </div>
          </div>
          <div className="text-xs text-gray-400">
            © 2026 Powerpuff Girls App
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;