
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-10 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-md bg-gradient-to-r from-aevent-primary to-aevent-bright flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-aevent-primary to-aevent-bright bg-clip-text text-transparent">
            Aevent
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/events" className="text-gray-700 hover:text-aevent-primary transition">
            Explore Events
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-aevent-primary transition">
            Services
          </Link>
          <Link to="/connect" className="text-gray-700 hover:text-aevent-primary transition">
            Connect
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-aevent-primary transition">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" className="rounded-full">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
          <Button size="sm" className="rounded-full bg-aevent-primary hover:bg-aevent-secondary">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/events" className="text-gray-700 hover:text-aevent-primary transition py-2">
              Explore Events
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-aevent-primary transition py-2">
              Services
            </Link>
            <Link to="/connect" className="text-gray-700 hover:text-aevent-primary transition py-2">
              Connect
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-aevent-primary transition py-2">
              About
            </Link>
            <div className="flex items-center space-x-4 pt-4 border-t">
              <Button variant="outline" size="sm" className="rounded-full w-full">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button size="sm" className="rounded-full w-full bg-aevent-primary hover:bg-aevent-secondary">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
