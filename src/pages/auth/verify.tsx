
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Mail, RefreshCw } from 'lucide-react';

const VerifyPage = () => {
  const [code, setCode] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [isLoading, setIsLoading] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0 && !canResend) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !canResend) {
      setCanResend(true);
    }
  }, [timeLeft, canResend]);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      
      if (code === '123456') {
        toast({
          title: "Email verified",
          description: "Your account has been verified successfully.",
        });
        navigate('/');
      } else {
        toast({
          title: "Invalid code",
          description: "The verification code you entered is incorrect.",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  const handleResendCode = () => {
    setCanResend(false);
    setTimeLeft(60);
    
    toast({
      title: "Code resent",
      description: "A new verification code has been sent to your email.",
    });
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

        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-sm text-center">
          <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Mail className="h-8 w-8 text-aevent-primary" />
          </div>
          
          <h1 className="text-2xl font-bold mb-2">Verify your email</h1>
          <p className="text-gray-500 mb-6">
            We've sent a verification code to your email.<br />
            Enter the code below to confirm your account.
          </p>
          
          <form onSubmit={handleVerify} className="space-y-6">
            <div className="flex justify-center">
              <InputOTP maxLength={6} value={code} onChange={setCode}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            
            <Button type="submit" className="w-full bg-aevent-primary hover:bg-aevent-secondary" disabled={isLoading || code.length < 6}>
              {isLoading ? 'Verifying...' : 'Verify Email'}
            </Button>
          </form>
          
          <div className="mt-6">
            <p className="text-gray-600 mb-2">Didn't receive the code?</p>
            {canResend ? (
              <Button variant="ghost" onClick={handleResendCode} className="text-aevent-primary">
                <RefreshCw className="mr-2 h-4 w-4" />
                Resend Code
              </Button>
            ) : (
              <p className="text-sm text-gray-500">
                You can resend the code in {timeLeft} seconds
              </p>
            )}
          </div>
        </div>
      </div>
      
      <footer className="py-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Aevent. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default VerifyPage;
