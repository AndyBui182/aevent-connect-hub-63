
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
    <div className="w-12 h-12 rounded-full bg-aevent-light flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Everything You Need For Successful Events</h2>
          <p className="text-gray-600">
            Aevent provides a comprehensive set of tools and services to help you create, manage, and promote your startup and innovation events.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-aevent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>}
            title="Discover Events"
            description="Find and explore startup and innovation events around the world, with smart filters and personalized recommendations."
          />
          
          <Feature 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-aevent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>}
            title="Connect & Collaborate"
            description="Network with event organizers, sponsors, and participants. Build relationships and find collaboration opportunities."
          />
          
          <Feature 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-aevent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>}
            title="Event Service Marketplace"
            description="Access a marketplace of services for venue booking, event promotion, speaker management, and more."
          />
          
          <Feature 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-aevent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>}
            title="Create & Manage"
            description="Powerful tools to create and manage your events, from planning and promotion to check-in and post-event analysis."
          />
          
          <Feature 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-aevent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>}
            title="Secure & Reliable"
            description="Our platform ensures secure payment processing, data protection, and reliable service for all your event needs."
          />
          
          <Feature 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-aevent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>}
            title="Insights & Analytics"
            description="Gain valuable insights from comprehensive analytics and reporting tools for your events."
          />
        </div>
        
        <div className="text-center mt-16">
          <Button className="bg-aevent-primary hover:bg-aevent-secondary rounded-full">
            <Link to="/services">Explore All Features</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
