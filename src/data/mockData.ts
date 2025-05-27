
// Mock data for the UI template
export const mockEvents = [
  {
    id: '1',
    title: 'Startup Pitch Competition 2024',
    description: 'Join the biggest startup competition of the year. Present your innovative ideas to top investors and win funding.',
    date: '2024-02-15',
    time: '09:00',
    location: 'Tech Hub, San Francisco',
    category: 'Competition',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop',
    attendees: 250,
    price: 'Free',
    organizer: {
      name: 'TechVenture',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    }
  },
  {
    id: '2',
    title: 'AI & Machine Learning Summit',
    description: 'Explore the latest trends in artificial intelligence and machine learning with industry experts.',
    date: '2024-02-22',
    time: '10:00',
    location: 'Innovation Center, New York',
    category: 'Conference',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
    attendees: 180,
    price: '$99',
    organizer: {
      name: 'AI Innovations',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    }
  },
  {
    id: '3',
    title: 'Blockchain Workshop',
    description: 'Hands-on workshop covering blockchain fundamentals, smart contracts, and DeFi applications.',
    date: '2024-03-01',
    time: '14:00',
    location: 'Digital Space, Austin',
    category: 'Workshop',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    attendees: 75,
    price: '$150',
    organizer: {
      name: 'Crypto Academy',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=100&h=100&fit=crop&crop=face'
    }
  }
];

export const mockTestimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Founder, TechStart',
    content: 'Amazing platform for discovering innovative events. The networking opportunities are incredible!',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=100&h=100&fit=crop&crop=face',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Investor, VentureCapital',
    content: 'Found my next investment opportunity through this platform. Highly recommended for investors.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Developer, InnovateLab',
    content: 'Great events and workshops. Perfect for staying updated with the latest tech trends.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5
  }
];

export const mockServices = [
  {
    id: '1',
    title: 'Event Planning',
    description: 'Complete event planning and management services from concept to execution.',
    icon: 'Calendar',
    features: ['Venue Selection', 'Speaker Coordination', 'Marketing Support', 'Technical Setup'],
    price: 'From $5,000'
  },
  {
    id: '2',
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing campaigns to maximize your event reach.',
    icon: 'Megaphone',
    features: ['Social Media Marketing', 'Email Campaigns', 'Content Creation', 'Analytics'],
    price: 'From $2,000'
  },
  {
    id: '3',
    title: 'Live Streaming',
    description: 'Professional live streaming services for hybrid and virtual events.',
    icon: 'Video',
    features: ['HD Streaming', 'Multi-camera Setup', 'Interactive Features', 'Recording'],
    price: 'From $1,500'
  }
];

export const mockUser = {
  name: 'Alex Thompson',
  email: 'alex@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  role: 'Event Organizer'
};
