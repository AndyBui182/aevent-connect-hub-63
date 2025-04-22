
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">About Aevent</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-center mb-8">
              Aevent is the leading platform for startup and innovation events in Vietnam,
              connecting organizers, participants, and service providers in the ecosystem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-aevent-primary mb-2">500+</div>
                <div className="text-gray-600">Events Hosted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-aevent-primary mb-2">50k+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-aevent-primary mb-2">100+</div>
                <div className="text-gray-600">Service Providers</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-8">
              To empower the startup and innovation ecosystem by making it easier to organize,
              discover, and participate in impactful events that drive growth and foster connections.
            </p>

            <div className="bg-aevent-light bg-opacity-30 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Join Our Platform</h2>
              <p className="mb-6">
                Whether you're an event organizer, service provider, or participant,
                there's a place for you in our ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-aevent-primary hover:bg-aevent-secondary">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
