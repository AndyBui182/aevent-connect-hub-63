
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedEvents from '@/components/home/FeaturedEvents';
import Features from '@/components/home/Features';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import JoinCTA from '@/components/home/JoinCTA';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedEvents />
      <Features />
      <TestimonialsSection />
      <JoinCTA />
    </Layout>
  );
};

export default Index;
