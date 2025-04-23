
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Mail, ArrowRight } from 'lucide-react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created",
        description: "Please check your email to verify your account.",
      });
      navigate('/auth/verify');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <Link to="/" className="flex items-center space-x-2 mb-8">
          <div className="w-10 h-10 rounded-md bg-gradient-to-r from-aevent-primary to-aevent-bright flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-aevent-primary to-aevent-bright bg-clip-text text-transparent">
            Aevent
          </span>
        </Link>

        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-sm">
          <h1 className="text-2xl font-bold mb-2">Create your account</h1>
          <p className="text-gray-500 mb-6">Join Aevent to organize and discover events</p>
          
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input 
                id="fullName"
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />
            </div>
            
            <div className="flex items-start space-x-2 py-2">
              <Checkbox id="terms" className="mt-1" />
              <Label htmlFor="terms" className="font-normal text-sm">
                I agree to the <Link to="/terms" className="text-aevent-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-aevent-primary hover:underline">Privacy Policy</Link>
              </Label>
            </div>
            
            <Button type="submit" className="w-full bg-aevent-primary hover:bg-aevent-secondary" disabled={isLoading}>
              {isLoading ? 'Creating account...' : 'Create account'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/auth/login" className="text-aevent-primary hover:underline font-medium">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      <footer className="py-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Aevent. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SignupPage;
