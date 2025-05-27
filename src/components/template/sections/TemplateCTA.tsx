
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const TemplateCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
          Join thousands of event organizers and attendees who trust EventHub for their event needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full">
            Start Organizing <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full">
            Explore Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplateCTA;
