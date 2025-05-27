
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Users, Calendar, Star } from 'lucide-react';

const TemplateFeatures = () => {
  const features = [
    {
      icon: Search,
      title: 'Smart Discovery',
      description: 'Find events that match your interests using our intelligent recommendation system.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with like-minded individuals and build lasting professional relationships.'
    },
    {
      icon: Calendar,
      title: 'Easy Planning',
      description: 'Organize your own events with our comprehensive planning and management tools.'
    },
    {
      icon: Star,
      title: 'Quality Events',
      description: 'All events are curated to ensure high-quality experiences for all attendees.'
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EventHub?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We make it easy to discover, organize, and attend amazing events
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplateFeatures;
