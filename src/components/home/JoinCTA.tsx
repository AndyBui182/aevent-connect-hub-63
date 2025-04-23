
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const JoinCTA = () => {
  return (
    <section className="bg-gradient-to-r from-aevent-primary via-aevent-secondary to-aevent-bright text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Amazing Events?</h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10">
          Join thousands of event organizers, sponsors, and participants on Aevent and take your startup and innovation events to the next level.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-aevent-primary hover:bg-gray-100 rounded-full">
            <Link to="/create">Tạo Sự Kiện</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full">
            <Link to="/signup">Sign Up Free</Link>
          </Button>
        </div>
        <div className="mt-6">
          <Link to="/connect/request" className="inline-block">
            <Button size="sm" variant="secondary" className="rounded-full bg-aevent-secondary hover:bg-aevent-primary text-white mt-2">
              Đăng yêu cầu hợp tác
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default JoinCTA;
