
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const ConnectPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">Connect & Collaborate</h1>
          <p className="text-gray-600 mb-8">
            Find partners, sponsors, and collaborators for your startup and innovation events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">For Event Organizers</h2>
            <p className="text-gray-600 mb-6">
              Looking for sponsors, speakers, or partners for your event?
            </p>
            <Button className="w-full bg-aevent-primary hover:bg-aevent-secondary">
              Post Collaboration Request
            </Button>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">For Partners & Sponsors</h2>
            <p className="text-gray-600 mb-6">
              Want to support or participate in upcoming events?
            </p>
            <Button className="w-full bg-aevent-primary hover:bg-aevent-secondary">
              Browse Opportunities
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ConnectPage;
