
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Share, 
  Clock, 
  User, 
  Heart, 
  MessageSquare,
  ArrowLeft
} from 'lucide-react';

// Dummy data for a single event
const eventData = {
  id: 1,
  title: 'Startup Weekend Hanoi 2023',
  description: 'Startup Weekend is a 54-hour event where attendees pitch ideas, form teams, and start companies. It's a crash course in entrepreneurship where participants create working startups and learn about what it takes to start a company. Be part of a global community of entrepreneurs, mentors, and investors who are passionate about startups and innovation.',
  image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
  date: 'Oct 15-17, 2023',
  startTime: '5:00 PM',
  endTime: '9:00 PM',
  location: 'Hanoi Innovation Hub, 38 Nguyen Co Thach, Hanoi, Vietnam',
  category: 'Competition',
  attendees: 150,
  organizer: {
    name: 'TechStars Vietnam',
    logo: 'https://randomuser.me/api/portraits/men/32.jpg',
    description: 'Techstars is a global investment business that provides access to capital, one-on-one mentorship, and customized programming for early-stage entrepreneurs.'
  },
  sponsors: [
    { name: 'Google for Startups', logo: 'https://via.placeholder.com/150' },
    { name: 'Microsoft', logo: 'https://via.placeholder.com/150' },
    { name: 'VietnamWorks', logo: 'https://via.placeholder.com/150' }
  ],
  agenda: [
    { day: 'Day 1', title: 'Pitches & Team Formation', description: 'Participants pitch ideas, vote for the top ideas, and form teams.' },
    { day: 'Day 2', title: 'Business Model Development', description: 'Teams focus on customer development, validation, and execution.' },
    { day: 'Day 3', title: 'Final Presentations & Judging', description: 'Teams present their prototypes and receive feedback from judges.' }
  ],
  speakers: [
    { name: 'John Doe', role: 'CEO, TechVenture', image: 'https://randomuser.me/api/portraits/men/62.jpg' },
    { name: 'Jane Smith', role: 'Investor, ABC Capital', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Michael Brown', role: 'Founder, StartupXYZ', image: 'https://randomuser.me/api/portraits/men/32.jpg' }
  ],
  featured: true,
  status: 'upcoming'
};

const EventDetailPage = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch the event data based on the ID
  const event = eventData;
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Link to="/events" className="flex items-center text-aevent-primary hover:text-aevent-secondary mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden mb-8">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-64 md:h-96 object-cover"
              />
              <Badge className="absolute top-4 right-4 bg-aevent-primary hover:bg-aevent-secondary">
                {event.category}
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <Calendar className="mr-2 h-5 w-5 text-aevent-primary" />
                {event.date}
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="mr-2 h-5 w-5 text-aevent-primary" />
                {event.startTime} - {event.endTime}
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="mr-2 h-5 w-5 text-aevent-primary" />
                {event.location}
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="mr-2 h-5 w-5 text-aevent-primary" />
                {event.attendees} attendees
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-xl font-semibold mb-4">About This Event</h2>
              <p className="text-gray-700 mb-4">{event.description}</p>
              
              <h3 className="text-lg font-semibold mb-3 mt-6">Event Agenda</h3>
              <div className="space-y-4">
                {event.agenda.map((item, index) => (
                  <div key={index} className="border-l-4 border-aevent-primary pl-4 py-2">
                    <div className="font-semibold">{item.day}: {item.title}</div>
                    <div className="text-gray-600">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-xl font-semibold mb-4">Speakers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name} 
                      className="w-20 h-20 rounded-full object-cover mb-3"
                    />
                    <h3 className="font-semibold">{speaker.name}</h3>
                    <p className="text-gray-600 text-sm">{speaker.role}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-xl font-semibold mb-4">Organizer</h2>
              <div className="flex items-center">
                <img 
                  src={event.organizer.logo} 
                  alt={event.organizer.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{event.organizer.name}</h3>
                  <p className="text-gray-600">{event.organizer.description}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Sponsors</h2>
              <div className="flex flex-wrap gap-6 items-center">
                {event.sponsors.map((sponsor, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="w-24 h-24 object-contain mb-2"
                    />
                    <p className="text-gray-600 text-sm">{sponsor.name}</p>
                  </div>
                ))}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-gray-400 text-3xl">+</span>
                  </div>
                  <Link to="/sponsor" className="text-aevent-primary hover:text-aevent-secondary text-sm">
                    Become a Sponsor
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <h2 className="text-xl font-semibold mb-4">Join This Event</h2>
                <Button size="lg" className="w-full mb-3 bg-aevent-primary hover:bg-aevent-secondary">
                  Register Now
                </Button>
                <Button size="lg" variant="outline" className="w-full mb-6">
                  Save to Calendar
                </Button>
                
                <div className="flex justify-between mb-6">
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <Heart className="mr-1 h-4 w-4" />
                    Interested
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <Share className="mr-1 h-4 w-4" />
                    Share
                  </Button>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex items-center text-gray-600 mb-2">
                    <User className="mr-2 h-4 w-4 text-aevent-primary" />
                    Created by <span className="font-medium ml-1">{event.organizer.name}</span>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-aevent-primary hover:text-aevent-secondary">
                    <Link to="/contact-organizer">Contact Organizer</Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <h2 className="text-xl font-semibold mb-4">Event Location</h2>
                <div className="rounded-lg overflow-hidden mb-4 h-48 bg-gray-200">
                  {/* Map would go here */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Map Placeholder
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{event.location}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Get Directions
                </Button>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <h2 className="text-xl font-semibold mb-4">Discuss This Event</h2>
                <div className="flex items-center mb-4">
                  <MessageSquare className="mr-2 h-5 w-5 text-aevent-primary" />
                  <span className="text-gray-600">12 comments</span>
                </div>
                <Button variant="outline" className="w-full">
                  View Discussion
                </Button>
              </div>
              
              <div className="bg-aevent-light bg-opacity-30 rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-3">Need Event Services?</h2>
                <p className="text-gray-700 mb-4">
                  Find vendors for venue, catering, photography, and more on our marketplace.
                </p>
                <Button variant="outline" className="w-full">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetailPage;
