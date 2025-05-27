
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const TemplateHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-purple-600 text-white py-20 lg:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Discover Amazing <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Events</span> Near You
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 animate-fade-in">
            Connect with like-minded people, learn new skills, and create unforgettable memories at events tailored to your interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full">
              <Link to="/template/events" className="flex items-center">
                Explore Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateHero;
