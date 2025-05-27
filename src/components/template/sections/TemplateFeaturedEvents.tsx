
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockEvents } from '@/data/mockData';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const TemplateFeaturedEvents = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover hand-picked events from top organizers in your area
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mockEvents.map((event) => (
            <Card key={event.id} className="event-card overflow-hidden">
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3">
                  {event.category}
                </Badge>
              </div>
              <CardHeader>
                <h3 className="text-xl font-semibold line-clamp-2">{event.title}</h3>
                <p className="text-muted-foreground line-clamp-2">{event.description}</p>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {event.date} at {event.time}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  {event.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  {event.attendees} attendees
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-semibold">{event.price}</span>
                <Button>Join Event</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg">
            <Link to="/template/events">
              View All Events
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplateFeaturedEvents;
