
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import PropertyCard from '@/components/ui/PropertyCard';
import { cn } from '@/lib/utils';
import { saleProperties, rentProperties } from '@/data/properties';
import { useIsMobile } from '@/hooks/use-mobile';

interface FeaturedNinePropertiesProps {
  className?: string;
}

const FeaturedNineProperties = ({ className }: FeaturedNinePropertiesProps) => {
  const [activeTab, setActiveTab] = useState<'all' | 'sale' | 'rent'>('all');
  const isMobile = useIsMobile();
  
  // Combine properties and sort by featured status
  const allProperties = [...saleProperties, ...rentProperties]
    .sort((a, b) => Number(b.featured) - Number(a.featured))
    .slice(0, 9);
  
  const saleProps = saleProperties.slice(0, 9);
  const rentProps = rentProperties.slice(0, 9);
  
  const displayProperties = activeTab === 'all' 
    ? allProperties 
    : activeTab === 'sale' 
      ? saleProps 
      : rentProps;

  return (
    <section className={cn("py-16 md:py-24 bg-white", className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Properties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Discover our selection of exceptional properties across prime locations. 
              Find your dream home or investment opportunity today.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setActiveTab('all')}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  activeTab === 'all'
                    ? "bg-qatken-blue text-white"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab('sale')}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  activeTab === 'sale'
                    ? "bg-qatken-blue text-white"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                For Sale
              </button>
              <button
                onClick={() => setActiveTab('rent')}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  activeTab === 'rent'
                    ? "bg-qatken-blue text-white"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                For Rent
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayProperties.map((property, index) => (
            <div 
              key={property.id} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PropertyCard {...property} />
            </div>
          ))}
        </div>

        {displayProperties.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No properties found matching your criteria.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Button 
            asChild
            size={isMobile ? "default" : "lg"}
            variant="outline"
            className="border-qatken-blue text-qatken-blue hover:bg-qatken-blue hover:text-white"
          >
            <a href={activeTab === 'rent' ? "/rent" : "/buy"}>
              View All Properties
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNineProperties;
