
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    content: "Aevent revolutionized how we organize our startup pitch competitions. The platform made it easy to find sponsors, manage registrations, and connect with participants.",
    author: "Minh Nguyen",
    role: "Founder, TechHub Vietnam",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    content: "As a sponsor, Aevent helps us discover relevant events to support. The analytics and reporting features provide valuable insights on our ROI from each event.",
    author: "Linh Tran",
    role: "Marketing Director, FutureTech",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    content: "The event service marketplace saved us so much time. We found all the vendors we needed in one place and coordinated everything through the platform.",
    author: "David Pham",
    role: "Event Manager, Innovation Summit",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg"
  },
  {
    id: 4,
    content: "Aevent helped me discover relevant startup events in my industry. The networking features allowed me to connect with potential investors before the events even began.",
    author: "Mai Le",
    role: "CEO, GreenTech Solutions",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600">
            Hear from event organizers, sponsors, and participants who have used Aevent to create successful events and connections.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-6">
                          <svg className="h-10 w-10 text-aevent-primary opacity-20" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                        </div>
                        <p className="text-gray-700 text-lg mb-6">{testimonial.content}</p>
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author} 
                          className="w-16 h-16 rounded-full object-cover mb-4"
                        />
                        <div>
                          <h4 className="font-semibold">{testimonial.author}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex 
                    ? 'bg-aevent-primary' 
                    : 'bg-gray-300 hover:bg-gray-400'
                } transition-colors`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
