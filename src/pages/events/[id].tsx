
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Share, 
  Clock, 
  User, 
  Heart, 
  FileText,
  FileImage,
  Link as LinkIcon,
  ArrowLeft
} from 'lucide-react';

// Dummy data for a single event
const eventData = {
  id: 1,
  title: 'Startup Weekend Hanoi 2023',
  description: "Startup Weekend is a 54-hour event where attendees pitch ideas, form teams, and start companies. It's a crash course in entrepreneurship where participants create working startups and learn about what it takes to start a company. Be part of a global community of entrepreneurs, mentors, and investors who are passionate about startups and innovation.",
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
    { name: 'Google for Startups', logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=150&fit=crop' },
    { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=150&h=150&fit=crop' },
    { name: 'VietnamWorks', logo: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=150&h=150&fit=crop' }
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
  status: 'upcoming',
  attachments: [
    { type: 'pdf', name: 'Event Schedule.pdf', size: '2.3 MB', url: '#' },
    { type: 'image', name: 'Venue Map.jpg', size: '1.1 MB', url: '#' },
    { type: 'pdf', name: 'Sponsor Information.pdf', size: '3.5 MB', url: '#' }
  ],
  relatedArticles: [
    {
      title: 'How to Prepare for Startup Weekend',
      excerpt: 'Learn tips and tricks to make the most of your Startup Weekend experience.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      url: '#'
    },
    {
      title: 'Success Stories from Previous Startup Weekends',
      excerpt: 'Read about companies that got their start at Startup Weekend events.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      url: '#'
    }
  ]
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
          {/* Main Content - Left Column */}
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
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{event.title}</h1>
            
            <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <h2 className="text-xl font-semibold mb-4">About This Event</h2>
              <p className="text-gray-700 mb-6">{event.description}</p>
              
              <h3 className="text-lg font-semibold mb-4 mt-6">Event Agenda</h3>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {event.speakers.map((speaker, index) => (
                  <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                    <div className="p-4 flex flex-col items-center text-center">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name} 
                        className="w-20 h-20 rounded-full object-cover mb-3"
                      />
                      <h3 className="font-semibold">{speaker.name}</h3>
                      <p className="text-gray-600 text-sm">{speaker.role}</p>
                    </div>
                  </Card>
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
                      className="w-24 h-24 object-cover rounded-lg mb-2"
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
          
          {/* Sidebar - Right Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Join Event Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
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
              </div>
              
              {/* Event Details Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Event Details</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="mr-3 h-5 w-5 text-aevent-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Date</p>
                      <p className="text-gray-600">{event.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="mr-3 h-5 w-5 text-aevent-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Time</p>
                      <p className="text-gray-600">{event.startTime} - {event.endTime}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="mr-3 h-5 w-5 text-aevent-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">{event.location}</p>
                      <Button variant="link" className="p-0 h-auto text-aevent-primary hover:text-aevent-secondary mt-1">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="mr-3 h-5 w-5 text-aevent-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Attendees</p>
                      <p className="text-gray-600">{event.attendees} registered</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <User className="mr-3 h-5 w-5 text-aevent-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Organized by</p>
                      <p className="text-gray-600">{event.organizer.name}</p>
                      <Button variant="link" className="p-0 h-auto text-aevent-primary hover:text-aevent-secondary mt-1">
                        Contact Organizer
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Event Location Map */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Event Location</h2>
                <div className="rounded-lg overflow-hidden mb-4 h-48 bg-gray-100">
                  {/* Map would go here */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Map Placeholder
                  </div>
                </div>
              </div>
              
              {/* Event Attachments (replacing Discussion) */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Event Materials</h2>
                <div className="space-y-3">
                  {event.attachments.map((file, index) => (
                    <div key={index} className="flex items-center p-3 border rounded-md hover:bg-gray-50 transition-colors">
                      {file.type === 'pdf' ? (
                        <FileText className="h-5 w-5 text-aevent-primary mr-3" />
                      ) : file.type === 'image' ? (
                        <FileImage className="h-5 w-5 text-aevent-primary mr-3" />
                      ) : (
                        <LinkIcon className="h-5 w-5 text-aevent-primary mr-3" />
                      )}
                      <div className="flex-1">
                        <p className="font-medium text-sm">{file.name}</p>
                        <p className="text-gray-500 text-xs">{file.size}</p>
                      </div>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={file.url} download>Download</a>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Related Articles */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Related Articles</h2>
                <div className="space-y-4">
                  {event.relatedArticles.map((article, index) => (
                    <Link key={index} to={article.url} className="block group">
                      <div className="flex gap-3">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-20 h-16 object-cover rounded"
                        />
                        <div>
                          <h3 className="font-medium text-sm group-hover:text-aevent-primary transition-colors line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                            {article.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Services CTA */}
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
