
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CallToActionProps {
  className?: string;
}

const CallToAction = ({ className }: CallToActionProps) => {
  return (
    <section 
      className={cn(
        "py-20 relative overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-qatken-blue/90 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Property?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Let us guide you through the process of finding your dream home or investment property.
            Our team of experts is ready to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-qatken-blue hover:bg-gray-100">
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
