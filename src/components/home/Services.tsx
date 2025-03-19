
import { 
  Home, Building, Key, Clock, Search, Presentation, Shield, Users 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceProps) => (
  <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="inline-flex items-center justify-center p-3 bg-qatken-blue/10 text-qatken-blue rounded-lg mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface ServicesProps {
  className?: string;
}

const Services = ({ className }: ServicesProps) => {
  const services = [
    {
      icon: <Home size={24} />,
      title: "Property Sales",
      description: "Find your dream home from our wide selection of properties for sale, ranging from apartments to luxury villas."
    },
    {
      icon: <Key size={24} />,
      title: "Rental Services",
      description: "Explore our rental options including furnished, unfurnished, and commercial properties for your needs."
    },
    {
      icon: <Building size={24} />,
      title: "Property Development",
      description: "Invest in our ongoing development projects with attractive payment plans and premium locations."
    },
    {
      icon: <Search size={24} />,
      title: "Property Valuation",
      description: "Get accurate market valuation for your property from our expert team of real estate professionals."
    },
    {
      icon: <Presentation size={24} />,
      title: "Investment Advisory",
      description: "Receive expert advice on real estate investments to maximize returns and minimize risks."
    },
    {
      icon: <Clock size={24} />,
      title: "Property Management",
      description: "Let us handle the day-to-day management of your property with our comprehensive management services."
    },
    {
      icon: <Shield size={24} />,
      title: "Legal Services",
      description: "Navigate complex real estate transactions with our legal experts ensuring all paperwork is in order."
    },
    {
      icon: <Users size={24} />,
      title: "Customer Support",
      description: "Our dedicated customer support team is available to assist you throughout your real estate journey."
    }
  ];

  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
          <p className="text-lg text-gray-600">
            Comprehensive real estate solutions tailored to meet your property needs with expertise and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
