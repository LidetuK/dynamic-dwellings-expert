
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PropertyProcessProps {
  className?: string;
}

const PropertyProcess = ({ className }: PropertyProcessProps) => {
  const steps = [
    {
      number: 1,
      title: "Consultation",
      description: "We start by understanding your specific property needs, budget, and preferences."
    },
    {
      number: 2,
      title: "Property Search",
      description: "Our experts curate a selection of properties that match your requirements."
    },
    {
      number: 3,
      title: "Property Viewing",
      description: "Schedule viewings at your convenience to explore potential properties."
    },
    {
      number: 4,
      title: "Negotiation",
      description: "We handle negotiations to ensure you get the best possible deal."
    },
    {
      number: 5,
      title: "Documentation",
      description: "Our team manages all legal paperwork and documentation requirements."
    },
    {
      number: 6,
      title: "Closing",
      description: "We guide you through the closing process until you receive your keys."
    }
  ];

  return (
    <section className={cn("py-16 bg-white", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Property Process</h2>
          <p className="text-lg text-gray-600">
            We make finding your perfect property simple and straightforward with our proven process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="relative animate-on-scroll"
            >
              <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-qatken-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
                <div className="absolute top-6 right-6 text-qatken-orange">
                  <Check className="h-6 w-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyProcess;
