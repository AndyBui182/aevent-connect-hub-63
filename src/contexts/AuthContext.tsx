
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type User = {
  name: string;
  email: string;
  avatar?: string;
  provider?: 'email' | 'google';
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('user');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (isLoggedIn === 'true' && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse user data', error);
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');
      }
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // This is a simulated login - in a real app, you'd call your API
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const userData = {
          name: email.split('@')[0],
          email: email,
          provider: 'email' as const,
        };
        
        setUser(userData);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(userData));
        setIsLoading(false);
        resolve();
      }, 1000);
    });
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    
    // Simulate Google OAuth flow
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        try {
          // In a real app, this would be handled by Google OAuth
          const mockGoogleUser = {
            name: 'Google User',
            email: 'user@gmail.com',
            avatar: 'https://via.placeholder.com/40',
            provider: 'google' as const,
          };
          
          setUser(mockGoogleUser);
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('user', JSON.stringify(mockGoogleUser));
          setIsLoading(false);
          resolve();
        } catch (error) {
          setIsLoading(false);
          reject(error);
        }
      }, 1500);
    });
  };

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    
    // This is a simulated signup - in a real app, you'd call your API
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsLoading(false);
        resolve();
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    loginWithGoogle,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
