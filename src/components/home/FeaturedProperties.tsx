import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PropertyCard from '@/components/ui/PropertyCard';
import { cn } from '@/lib/utils';

// Mock data for properties with properly typed 'type' and 'status' properties
const mockProperties = [
  {
    id: "1",
    title: "Modern Apartment with City View",
    location: "Downtown, City Center",
    price: 12500000,
    beds: 3,
    baths: 2,
    area: 1200,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    type: 'sale' as const,
    status: "completed" as const,
    featured: true
  },
  {
    id: "2",
    title: "Luxury Family Home",
    location: "Suburban Hills, Westlands",
    price: 25000000,
    beds: 4,
    baths: 3,
    area: 2500,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    type: 'sale' as const,
    status: "completed" as const,
    featured: true
  },
  {
    id: "3",
    title: "Cozy Studio Apartment",
    location: "Arts District, Eastlands",
    price: 45000,
    beds: 1,
    baths: 1,
    area: 650,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'rent' as const,
    status: "furnished" as const,
    featured: true
  },
  {
    id: "4",
    title: "Executive Office Space",
    location: "Business Park, CBD",
    price: 120000,
    beds: 0,
    baths: 2,
    area: 1800,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'rent' as const,
    status: "commercial" as const,
    featured: true
  },
  {
    id: "5",
    title: "Riverside Villa Development",
    location: "Riverside Estate, Lavington",
    price: 45000000,
    beds: 5,
    baths: 5,
    area: 4500,
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'sale' as const,
    status: "ongoing" as const,
    featured: true
  },
  {
    id: "6",
    title: "Furnished Townhouse",
    location: "Karen Estate, Karen",
    price: 150000,
    beds: 3,
    baths: 3,
    area: 1800,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'rent' as const,
    status: "furnished" as const,
    featured: true
  }
];

interface FeaturedPropertiesProps {
  className?: string;
}

const FeaturedProperties = ({ className }: FeaturedPropertiesProps) => {
  const [activeTab, setActiveTab] = useState<'all' | 'sale' | 'rent'>('all');

  const filteredProperties = mockProperties.filter(property => {
    if (activeTab === 'all') return true;
    return property.type === activeTab;
  });

  return (
    <section className={cn("py-16 bg-gray-50", className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Discover our handpicked selection of exceptional properties that redefine quality living and investment opportunities.
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
          {filteredProperties.map((property, index) => (
            <div key={property.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <PropertyCard {...property} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="border-qatken-blue text-qatken-blue hover:bg-qatken-blue hover:text-white"
          >
            <Link to={activeTab === 'rent' ? "/rent" : "/buy"}>
              View All Properties <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
