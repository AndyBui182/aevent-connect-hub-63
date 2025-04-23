
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You've been successfully logged out.",
    });
    navigate('/');
  };

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
          
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="rounded-full">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-aevent-primary flex items-center justify-center text-white mr-2">
                      {user?.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="hidden sm:inline">{user?.name}</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/events/my-events')}>
                  My Events
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/create')}>
                  Create Event
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex space-x-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="rounded-full"
                onClick={() => navigate('/auth/login')}
              >
                Log in
              </Button>
              <Button 
                size="sm" 
                className="rounded-full bg-aevent-primary hover:bg-aevent-secondary"
                onClick={() => navigate('/auth/signup')}
              >
                Sign up
              </Button>
            </div>
          )}
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
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button variant="outline" size="sm" className="rounded-full w-full">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              
              {isAuthenticated ? (
                <>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-full w-full justify-start"
                    onClick={() => navigate('/profile')}
                  >
                    <User className="w-4 h-4 mr-2" />
                    My Profile
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-full w-full justify-start"
                    onClick={() => navigate('/create')}
                  >
                    Create Event
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-full w-full justify-start"
                    onClick={handleLogout}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-full w-full"
                    onClick={() => navigate('/auth/login')}
                  >
                    Log in
                  </Button>
                  <Button 
                    size="sm" 
                    className="rounded-full w-full bg-aevent-primary hover:bg-aevent-secondary"
                    onClick={() => navigate('/auth/signup')}
                  >
                    Sign up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
