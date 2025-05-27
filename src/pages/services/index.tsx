
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Search, Calendar, MapPin, Users, Star, Award, Settings, Image, FileText, Link as LinkIcon, Globe, ShoppingCart, DollarSign, CreditCard } from 'lucide-react';

const ServicesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProviders = serviceProviders.filter(provider => {
    if (activeFilter !== 'all' && provider.category !== activeFilter) {
      return false;
    }
    
    if (searchQuery && !provider.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !provider.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">Event Services Marketplace</h1>
          <p className="text-gray-600 mb-8">
            Find and book trusted service providers for your startup and innovation events.
            Connect with partners and build your event ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-aevent-primary hover:bg-aevent-secondary">
              List Your Service
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button size="lg" variant="outline">
                  <Search className="mr-2 h-4 w-4" />
                  Find Services
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[400px] sm:w-[540px]">
                <SheetHeader>
                  <SheetTitle>Find the perfect service provider</SheetTitle>
                  <SheetDescription>
                    Search by name, category or description
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <Command className="rounded-lg border shadow-md">
                    <CommandInput 
                      placeholder="Search for services..." 
                      value={searchQuery}
                      onValueChange={setSearchQuery}
                    />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      {Object.keys(categories).map((key) => (
                        <CommandGroup key={key} heading={categories[key].name}>
                          {serviceProviders
                            .filter(provider => provider.category === key && 
                              (provider.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                               provider.description.toLowerCase().includes(searchQuery.toLowerCase())))
                            .slice(0, 3)
                            .map(provider => (
                              <CommandItem key={provider.id}>
                                <div className="flex items-center">
                                  <div className="w-8 h-8 rounded-full bg-aevent-light flex items-center justify-center mr-3">
                                    {provider.icon}
                                  </div>
                                  <span>{provider.name}</span>
                                </div>
                              </CommandItem>
                            ))}
                        </CommandGroup>
                      ))}
                    </CommandList>
                  </Command>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative w-full md:w-2/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              className="pl-10" 
              placeholder="Search services..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3">
            <Tabs defaultValue="all" onValueChange={setActiveFilter} className="w-full">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="partners">Partners</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Service Categories */}
        <h2 className="text-2xl font-semibold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Object.entries(categories).map(([slug, category]) => (
            <Link
              key={slug}
              to={`/services/${slug}`}
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

        {/* Featured Service Providers */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Featured Service Providers</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders
              .filter(provider => provider.featured)
              .slice(0, 3)
              .map((provider) => (
                <Card key={provider.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full bg-gray-100">
                    <div className="absolute top-0 right-0 bg-aevent-primary text-white px-3 py-1 text-sm font-medium">
                      Featured
                    </div>
                    <Image className="h-full w-full object-cover p-8" alt={provider.name} />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">{provider.name}</CardTitle>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="ml-1 text-sm font-medium">{provider.rating}</span>
                      </div>
                    </div>
                    <CardDescription>{provider.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {provider.location}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {provider.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-aevent-light/50 text-aevent-secondary px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/services/provider/${provider.id}`}>View Profile</Link>
                    </Button>
                    <Button size="sm">Contact</Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>

        {/* All Service Providers */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">All Service Providers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.slice(0, 6).map((provider) => (
              <Card key={provider.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-aevent-light flex items-center justify-center mr-3">
                          {provider.icon}
                        </div>
                        {provider.name}
                      </div>
                    </CardTitle>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{provider.rating}</span>
                    </div>
                  </div>
                  <CardDescription>{provider.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {provider.location}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {provider.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-aevent-light/50 text-aevent-secondary px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/services/provider/${provider.id}`}>View Profile</Link>
                  </Button>
                  <Button size="sm">Contact</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline">Load More</Button>
          </div>
        </div>

        {/* Partnership Opportunities */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-r from-aevent-primary/20 to-aevent-light/30 overflow-hidden">
              <CardHeader>
                <CardTitle>Become a Sponsor</CardTitle>
                <CardDescription>Support innovative events and gain visibility in the startup ecosystem</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2 text-aevent-primary" />
                    Access to sponsorship packages for all event sizes
                  </li>
                  <li className="flex items-center">
                    <Globe className="h-4 w-4 mr-2 text-aevent-primary" />
                    Brand visibility across digital and physical platforms
                  </li>
                  <li className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-aevent-primary" />
                    Connect with innovative startups and entrepreneurs
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button>Learn More</Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-gradient-to-r from-aevent-primary/20 to-aevent-light/30 overflow-hidden">
              <CardHeader>
                <CardTitle>Co-Organize an Event</CardTitle>
                <CardDescription>Find partners to collaborate on your next innovation event</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <LinkIcon className="h-4 w-4 mr-2 text-aevent-primary" />
                    Connect with complementary event organizers
                  </li>
                  <li className="flex items-center">
                    <ShoppingCart className="h-4 w-4 mr-2 text-aevent-primary" />
                    Share resources and reduce costs
                  </li>
                  <li className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-aevent-primary" />
                    Expand reach and attendance through combined networks
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button>Find Partners</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Event Planning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-aevent-primary" />
                  Planning Templates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Download free event planning templates, checklists, and budget tools.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Download</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-aevent-primary" />
                  Industry Guides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Expert guides on running successful startup and innovation events.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Read Guides</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-aevent-primary" />
                  Service Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Compare service providers side-by-side to find the perfect match.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Compare</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-l-4 border-aevent-primary">
                <CardContent className="pt-6">
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div className="ml-3">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-aevent-primary to-aevent-secondary text-white rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to elevate your events?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Join our community of event professionals and service providers to create exceptional startup and innovation events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-aevent-primary">
              List Your Service
            </Button>
            <Button size="lg" className="bg-white text-aevent-primary hover:bg-gray-100">
              Find Services
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Data
const categories = {
  venue: {
    name: 'Venue & Space',
    slug: 'venue',
    description: 'Find and book perfect venues for your events',
    icon: <MapPin className="h-6 w-6 text-aevent-primary" />
  },
  planning: {
    name: 'Event Planning',
    slug: 'planning',
    description: 'Professional event planners and coordinators',
    icon: <Calendar className="h-6 w-6 text-aevent-primary" />
  },
  staff: {
    name: 'Staff & Personnel',
    slug: 'staff',
    description: 'Event staff, hosts, and support personnel',
    icon: <Users className="h-6 w-6 text-aevent-primary" />
  },
  technology: {
    name: 'Event Technology',
    slug: 'technology',
    description: 'Registration, streaming, and event tech solutions',
    icon: <Settings className="h-6 w-6 text-aevent-primary" />
  },
  catering: {
    name: 'Catering & Food',
    slug: 'catering',
    description: 'Food and beverage services for events',
    icon: <ShoppingCart className="h-6 w-6 text-aevent-primary" />
  },
  marketing: {
    name: 'Event Marketing',
    slug: 'marketing',
    description: 'Promotion, social media, and marketing services',
    icon: <Globe className="h-6 w-6 text-aevent-primary" />
  },
};

const serviceProviders = [
  {
    id: 1,
    name: 'TechVenue SF',
    category: 'venue',
    shortDescription: 'Modern tech-focused event venue in San Francisco',
    description: 'A state-of-the-art venue designed specifically for tech events, product launches and innovation conferences.',
    location: 'San Francisco, CA',
    rating: 4.8,
    featured: true,
    tags: ['Tech Events', 'Conference Space', 'Downtown'],
    icon: <MapPin className="h-5 w-5 text-aevent-primary" />
  },
  {
    id: 2,
    name: 'InnoPlanner',
    category: 'planning',
    shortDescription: 'Innovation-focused event planning agency',
    description: 'Specialized in planning and executing innovation summits, startup conferences, and tech meetups.',
    location: 'Remote / Global',
    rating: 4.9,
    featured: true,
    tags: ['Tech Events', 'Startup Conferences', 'Innovation Summits'],
    icon: <Calendar className="h-5 w-5 text-aevent-primary" />
  },
  {
    id: 3,
    name: 'EventCrew Pro',
    category: 'staff',
    shortDescription: 'Experienced event staffing for tech events',
    description: 'Professional event staff with experience in tech conferences, product launches, and innovation showcases.',
    location: 'Multiple Cities',
    rating: 4.7,
    featured: false,
    tags: ['Tech-savvy Staff', 'Professional', 'Nationwide'],
    icon: <Users className="h-5 w-5 text-aevent-primary" />
  },
  {
    id: 4,
    name: 'TechStream Solutions',
    category: 'technology',
    shortDescription: 'Complete tech solutions for virtual events',
    description: 'Specialized in live streaming, virtual conferencing, and hybrid event technology solutions.',
    location: 'Austin, TX',
    rating: 4.9,
    featured: true,
    tags: ['Virtual Events', 'Live Streaming', 'Hybrid Solutions'],
    icon: <Settings className="h-5 w-5 text-aevent-primary" />
  },
  {
    id: 5,
    name: 'Innovate Catering',
    category: 'catering',
    shortDescription: 'Creative catering for innovation events',
    description: 'Unique catering experiences designed specifically for startup and tech events.',
    location: 'New York, NY',
    rating: 4.6,
    featured: false,
    tags: ['Creative Menus', 'Tech-themed', 'Dietary Options'],
    icon: <ShoppingCart className="h-5 w-5 text-aevent-primary" />
  },
  {
    id: 6,
    name: 'Startup PR',
    category: 'marketing',
    shortDescription: 'PR and marketing for startup events',
    description: 'Specialized PR agency focusing on startup and innovation event promotion.',
    location: 'Boston, MA',
    rating: 4.8,
    featured: false,
    tags: ['PR', 'Social Media', 'Content Strategy'],
    icon: <Globe className="h-5 w-5 text-aevent-primary" />
  },
  {
    id: 7,
    name: 'Innovation Hub',
    category: 'venue',
    shortDescription: 'Collaborative space for innovation events',
    description: 'A collaborative venue designed for innovation workshops, hackathons, and startup meetups.',
    location: 'Chicago, IL',
    rating: 4.7,
    featured: false,
    tags: ['Collaborative Space', 'Workshops', 'Central Location'],
    icon: <MapPin className="h-5 w-5 text-aevent-primary" />
  },
  {
    id: 8,
    name: 'Tech Event Masters',
    category: 'planning',
    shortDescription: 'Tech conference specialists',
    description: 'Event planners specializing in large-scale tech conferences and innovation summits.',
    location: 'Seattle, WA',
    rating: 4.9,
    featured: false,
    tags: ['Large Conferences', 'Tech Industry', 'Full Service'],
    icon: <Calendar className="h-5 w-5 text-aevent-primary" />
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Event Director, TechStart Conference',
    quote: 'We found our perfect venue and staffing solutions all in one place. The process was seamless and the event was a huge success!'
  },
  {
    name: 'Michael Chen',
    title: 'Founder, InnovateTech',
    quote: 'As a first-time event organizer, the resources and service providers I found here made all the difference in executing a professional conference.'
  },
  {
    name: 'Amanda Rodriguez',
    title: 'Marketing Director, StartupWeek',
    quote: 'The partnership opportunities we discovered helped us expand our event reach and create valuable connections in the startup ecosystem.'
  }
];

export default ServicesPage;

