
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MapPin, Star, ArrowRight, CheckCircle, Zap, Shield, HeadphonesIcon } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Event Planning & Management",
      description: "Complete end-to-end event planning and management services for startups and innovation events.",
      features: ["Venue Selection", "Vendor Management", "Timeline Planning", "Budget Management"],
      price: "Starting from $2,500",
      icon: Calendar,
      popular: true
    },
    {
      id: 2,
      title: "Networking Solutions",
      description: "Advanced networking tools and matchmaking services to connect the right people at your event.",
      features: ["AI-Powered Matching", "Networking Apps", "Speed Networking", "Follow-up Tools"],
      price: "Starting from $1,200",
      icon: Users,
      popular: false
    },
    {
      id: 3,
      title: "Marketing & Promotion",
      description: "Comprehensive marketing strategies to maximize attendance and engagement for your events.",
      features: ["Social Media Marketing", "Email Campaigns", "Content Creation", "Influencer Outreach"],
      price: "Starting from $800",
      icon: Star,
      popular: false
    },
    {
      id: 4,
      title: "Technical Support",
      description: "Full technical infrastructure including live streaming, registration systems, and event apps.",
      features: ["Live Streaming", "Registration Platform", "Mobile Apps", "Analytics Dashboard"],
      price: "Starting from $1,500",
      icon: Zap,
      popular: false
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Over 500+ successful events organized with 98% client satisfaction rate."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive insurance coverage and contingency planning for all events."
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock support before, during, and after your event."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-aevent-primary via-aevent-primary to-purple-600 text-white py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Professional Event <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-10">
                From concept to execution, we provide comprehensive event services to make your startup and innovation events successful.
              </p>
              <Button size="lg" className="bg-white text-aevent-primary hover:bg-gray-100 rounded-full">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our comprehensive range of event services tailored for startups and innovation events
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="relative hover:shadow-lg transition-shadow">
                  {service.popular && (
                    <Badge className="absolute -top-2 left-4 bg-aevent-primary">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-aevent-primary/10 flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-aevent-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <p className="text-aevent-primary font-semibold">{service.price}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={service.popular ? "default" : "outline"}>
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Services?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We bring expertise, reliability, and innovation to every event we manage
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-aevent-primary/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-aevent-primary" />
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-aevent-primary to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Plan Your Next Event?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
              Let our expert team handle the details while you focus on your vision. Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-aevent-primary hover:bg-gray-100 rounded-full">
                Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full">
                View Portfolio
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ServicesPage;
