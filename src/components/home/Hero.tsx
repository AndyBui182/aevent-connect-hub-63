
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-aevent-dark via-aevent-dark to-aevent-secondary text-white py-20 lg:py-32 overflow-hidden animate-gradient">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#9b87f5_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            Connect, Collaborate & <span className="bg-gradient-to-r from-aevent-primary to-aevent-bright bg-clip-text text-transparent">Create</span> Amazing Events
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 animate-slide-up" style={{ animationDelay: '100ms' }}>
            Aevent is your all-in-one platform for discovering, organizing, and participating in startup and innovation events that drive growth and foster connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Button size="lg" className="bg-aevent-primary hover:bg-aevent-secondary text-white rounded-full">
              <Link to="/events" className="flex items-center">
                Explore Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full">
              <Link to="/create">Create Event</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
