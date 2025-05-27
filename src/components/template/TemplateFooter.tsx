
import { Link } from 'react-router-dom';

const TemplateFooter = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/template" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold">EventHub</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              The ultimate platform for discovering and organizing amazing events that connect people and drive innovation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/template/events" className="text-muted-foreground hover:text-primary transition">Explore Events</Link></li>
              <li><Link to="/template/services" className="text-muted-foreground hover:text-primary transition">Event Services</Link></li>
              <li><Link to="/template/pricing" className="text-muted-foreground hover:text-primary transition">Pricing</Link></li>
              <li><Link to="/template/create" className="text-muted-foreground hover:text-primary transition">Create Event</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/template/blog" className="text-muted-foreground hover:text-primary transition">Blog</Link></li>
              <li><Link to="/template/guides" className="text-muted-foreground hover:text-primary transition">Event Planning Guides</Link></li>
              <li><Link to="/template/help" className="text-muted-foreground hover:text-primary transition">Help Center</Link></li>
              <li><Link to="/template/faq" className="text-muted-foreground hover:text-primary transition">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/template/about" className="text-muted-foreground hover:text-primary transition">About Us</Link></li>
              <li><Link to="/template/contact" className="text-muted-foreground hover:text-primary transition">Contact</Link></li>
              <li><Link to="/template/terms" className="text-muted-foreground hover:text-primary transition">Terms of Service</Link></li>
              <li><Link to="/template/privacy" className="text-muted-foreground hover:text-primary transition">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-muted-foreground">© 2024 EventHub Template. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default TemplateFooter;
