
import TemplateLayout from '@/components/template/TemplateLayout';
import TemplateHero from '@/components/template/sections/TemplateHero';
import TemplateFeaturedEvents from '@/components/template/sections/TemplateFeaturedEvents';
import TemplateFeatures from '@/components/template/sections/TemplateFeatures';
import TemplateTestimonials from '@/components/template/sections/TemplateTestimonials';
import TemplateCTA from '@/components/template/sections/TemplateCTA';

const TemplatePage = () => {
  return (
    <TemplateLayout>
      <TemplateHero />
      <TemplateFeaturedEvents />
      <TemplateFeatures />
      <TemplateTestimonials />
      <TemplateCTA />
    </TemplateLayout>
  );
};

export default TemplatePage;
