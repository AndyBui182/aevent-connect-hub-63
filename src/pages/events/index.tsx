
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MapPin, Search, Users, Filter } from 'lucide-react';

// Dummy data for events (extended from FeaturedEvents)
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
  },
  {
    id: 5,
    title: 'ASEAN Fintech Innovation Challenge',
    description: 'A competition for fintech startups across Southeast Asia.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    date: 'Feb 7-8, 2024',
    location: 'Bangkok, Thailand',
    category: 'Competition',
    attendees: 120,
    featured: false,
    status: 'upcoming'
  },
  {
    id: 6,
    title: 'Saigon AI Summit',
    description: 'Exploring the latest in artificial intelligence and machine learning.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    date: 'Feb 20, 2024',
    location: 'Ho Chi Minh City',
    category: 'Summit',
    attendees: 250,
    featured: false,
    status: 'upcoming'
  },
  {
    id: 7,
    title: 'Digital Transformation Forum',
    description: 'Strategies and technologies for business digital transformation.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    date: 'Apr 5, 2024',
    location: 'Hanoi, Vietnam',
    category: 'Forum',
    attendees: 180,
    featured: false,
    status: 'upcoming'
  },
  {
    id: 8,
    title: 'Asia Blockchain Week',
    description: 'The most influential blockchain and cryptocurrency event in Asia.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    date: 'May 12-16, 2024',
    location: 'Singapore',
    category: 'Conference',
    attendees: 400,
    featured: false,
    status: 'upcoming'
  }
];

const categories = ['All Categories', 'Conference', 'Summit', 'Workshop', 'Competition', 'Networking', 'Forum'];
const locations = ['All Locations', 'Hanoi', 'Ho Chi Minh City', 'Da Nang', 'Singapore', 'Bangkok'];

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All Categories' || event.category === categoryFilter;
    const matchesLocation = locationFilter === 'All Locations' || event.location.includes(locationFilter);
    const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesLocation && matchesStatus;
  });

  return (
    <Layout>
      <section className="bg-gradient-to-r from-aevent-dark to-aevent-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Events</h1>
          <p className="text-lg text-gray-200 max-w-2xl mb-8">
            Find and explore startup and innovation events from around the world. Connect with fellow entrepreneurs, investors, and industry experts.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input 
                  type="search" 
                  placeholder="Search events..." 
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white/10"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="mr-2 h-4 w-4" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
            <Button className="bg-aevent-primary hover:bg-aevent-secondary text-white">
              <Link to="/create">Create Event</Link>
            </Button>
          </div>
          
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 p-4 bg-white/5 rounded-lg">
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <Select 
                  value={categoryFilter} 
                  onValueChange={setCategoryFilter}
                >
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Location</label>
                <Select 
                  value={locationFilter} 
                  onValueChange={setLocationFilter}
                >
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <div className="flex space-x-2">
                  <Button 
                    size="sm"
                    variant={statusFilter === 'all' ? 'default' : 'outline'} 
                    className={statusFilter === 'all' 
                      ? 'bg-aevent-primary hover:bg-aevent-secondary' 
                      : 'border-white/20 text-white hover:bg-white/10'}
                    onClick={() => setStatusFilter('all')}
                  >
                    All
                  </Button>
                  <Button 
                    size="sm"
                    variant={statusFilter === 'upcoming' ? 'default' : 'outline'} 
                    className={statusFilter === 'upcoming' 
                      ? 'bg-aevent-primary hover:bg-aevent-secondary' 
                      : 'border-white/20 text-white hover:bg-white/10'}
                    onClick={() => setStatusFilter('upcoming')}
                  >
                    Upcoming
                  </Button>
                  <Button 
                    size="sm"
                    variant={statusFilter === 'past' ? 'default' : 'outline'} 
                    className={statusFilter === 'past' 
                      ? 'bg-aevent-primary hover:bg-aevent-secondary' 
                      : 'border-white/20 text-white hover:bg-white/10'}
                    onClick={() => setStatusFilter('past')}
                  >
                    Past
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              {filteredEvents.length} {filteredEvents.length === 1 ? 'Event' : 'Events'} Found
            </h2>
            <div className="flex space-x-2">
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEvents.map((event) => (
              <Link to={`/events/${event.id}`} key={event.id} className="group">
                <div className="event-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all h-full flex flex-col">
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
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-aevent-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{event.description}</p>
                    <div className="mt-auto">
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
                </div>
              </Link>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold mb-4">No events found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your filters or search terms</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('All Categories');
                  setLocationFilter('All Locations');
                  setStatusFilter('all');
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default EventsPage;
