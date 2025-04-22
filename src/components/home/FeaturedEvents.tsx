
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';

// Dummy data for events
const events = [
  {
    id: 1,
    title: 'Startup Weekend Hanoi 2023',
    description: 'A 54-hour event where aspiring entrepreneurs can experience startup life.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    date: 'Oct 15-17, 2023',
    location: 'Hanoi, Vietnam',
    category: 'Competition',
    attendees: 150,
    featured: true,
    status: 'upcoming'
  },
  {
    id: 2,
    title: 'Vietnam Venture Summit',
    description: 'Connect startups with leading venture capital firms from across Asia.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    date: 'Nov 5, 2023',
    location: 'Ho Chi Minh City',
    category: 'Conference',
    attendees: 300,
    featured: true,
    status: 'upcoming'
  },
  {
    id: 3,
    title: 'Tech in Asia Conference',
    description: 'The largest tech conference in Asia featuring top speakers and startups.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    date: 'Dec 3-4, 2023',
    location: 'Singapore',
    category: 'Conference',
    attendees: 500,
    featured: true,
    status: 'upcoming'
  },
  {
    id: 4,
    title: 'Vietnam Investment Forum',
    description: 'Bringing together entrepreneurs and investors for networking and learning.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    date: 'Jan 15, 2024',
    location: 'Da Nang, Vietnam',
    category: 'Networking',
    attendees: 200,
    featured: true,
    status: 'upcoming'
  }
];

const FeaturedEvents = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.status === filter);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Events</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover upcoming events in the startup and innovation ecosystem. Find opportunities to learn, connect, and grow your network.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'} 
              size="sm"
              className={filter === 'all' ? 'bg-aevent-primary hover:bg-aevent-secondary' : ''}
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button 
              variant={filter === 'upcoming' ? 'default' : 'outline'} 
              size="sm"
              className={filter === 'upcoming' ? 'bg-aevent-primary hover:bg-aevent-secondary' : ''}
              onClick={() => setFilter('upcoming')}
            >
              Upcoming
            </Button>
            <Button 
              variant={filter === 'past' ? 'default' : 'outline'} 
              size="sm"
              className={filter === 'past' ? 'bg-aevent-primary hover:bg-aevent-secondary' : ''}
              onClick={() => setFilter('past')}
            >
              Past
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <Link to={`/events/${event.id}`} key={event.id} className="group">
              <div className="event-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-aevent-primary hover:bg-aevent-secondary">
                    {event.category}
                  </Badge>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-aevent-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="mr-2 h-4 w-4 text-aevent-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPin className="mr-2 h-4 w-4 text-aevent-primary" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="mr-2 h-4 w-4 text-aevent-primary" />
                    {event.attendees} attendees
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-aevent-primary hover:bg-aevent-secondary rounded-full">
            <Link to="/events" className="flex items-center">
              View All Events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
