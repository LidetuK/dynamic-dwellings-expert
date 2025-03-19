
import { cn } from '@/lib/utils';

interface PartnersProps {
  className?: string;
}

const Partners = ({ className }: PartnersProps) => {
  const partners = [
    {
      name: "Alpha Construction",
      logo: "https://placehold.co/200x80/f5f5f5/333333?text=Alpha+Construction",
    },
    {
      name: "Metro Finance",
      logo: "https://placehold.co/200x80/f5f5f5/333333?text=Metro+Finance",
    },
    {
      name: "BlueSky Insurance",
      logo: "https://placehold.co/200x80/f5f5f5/333333?text=BlueSky+Insurance",
    },
    {
      name: "Pioneer Developers",
      logo: "https://placehold.co/200x80/f5f5f5/333333?text=Pioneer+Developers",
    },
    {
      name: "Horizon Group",
      logo: "https://placehold.co/200x80/f5f5f5/333333?text=Horizon+Group",
    },
    {
      name: "Crown Architects",
      logo: "https://placehold.co/200x80/f5f5f5/333333?text=Crown+Architects",
    },
  ];

  return (
    <section className={cn("py-16 bg-gray-50", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Trusted Partners</h2>
          <p className="text-lg text-gray-600">
            We collaborate with industry leaders to deliver exceptional real estate services and solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-24"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-12 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
