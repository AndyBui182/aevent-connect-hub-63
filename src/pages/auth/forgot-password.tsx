
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Mail } from 'lucide-react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      toast({
        title: "Recovery email sent",
        description: "Please check your inbox for password reset instructions.",
      });
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
          {!submitted ? (
            <>
              <h1 className="text-2xl font-bold mb-2">Reset your password</h1>
              <p className="text-gray-500 mb-6">Enter your email and we'll send you instructions to reset your password</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
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
                
                <Button type="submit" className="w-full bg-aevent-primary hover:bg-aevent-secondary" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Send reset instructions'}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-xl font-bold mb-2">Check your email</h2>
              <p className="text-gray-600 mb-6">
                We've sent password reset instructions to:<br />
                <span className="font-medium">{email}</span>
              </p>
              <Button 
                variant="outline" 
                className="mt-2" 
                onClick={() => setSubmitted(false)}
              >
                Try a different email
              </Button>
            </div>
          )}
          
          <div className="mt-6 text-center">
            <Link to="/auth/login" className="inline-flex items-center text-aevent-primary hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to login
            </Link>
          </div>
        </div>
      </div>
      
      <footer className="py-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Aevent. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ForgotPasswordPage;
