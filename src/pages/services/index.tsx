
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Search, Calendar, MapPin, Users } from 'lucide-react';

const ServicesPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">Event Services Marketplace</h1>
          <p className="text-gray-600 mb-8">
            Find and book trusted service providers for your startup and innovation events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-aevent-primary hover:bg-aevent-secondary">
              List Your Service
            </Button>
            <Button size="lg" variant="outline">
              <Search className="mr-2 h-4 w-4" />
              Find Services
            </Button>
          </div>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceCategories.map((category) => (
            <Link
              key={category.name}
              to={`/services/${category.slug}`}
              className="group block bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-aevent-light flex items-center justify-center">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-aevent-primary">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

const serviceCategories = [
  {
    name: 'Venue & Space',
    slug: 'venue',
    description: 'Find and book perfect venues for your events',
    icon: <MapPin className="h-6 w-6 text-aevent-primary" />
  },
  {
    name: 'Event Planning',
    slug: 'planning',
    description: 'Professional event planners and coordinators',
    icon: <Calendar className="h-6 w-6 text-aevent-primary" />
  },
  {
    name: 'Staff & Personnel',
    slug: 'staff',
    description: 'Event staff, hosts, and support personnel',
    icon: <Users className="h-6 w-6 text-aevent-primary" />
  }
];

export default ServicesPage;
