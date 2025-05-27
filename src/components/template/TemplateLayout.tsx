
import { ReactNode } from 'react';
import TemplateHeader from './TemplateHeader';
import TemplateFooter from './TemplateFooter';

interface TemplateLayoutProps {
  children: ReactNode;
}

const TemplateLayout = ({ children }: TemplateLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <TemplateHeader />
      <main className="flex-grow">
        {children}
      </main>
      <TemplateFooter />
    </div>
  );
};

export default TemplateLayout;
