
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PropertyCard from '@/components/ui/PropertyCard';

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  area: number;
  image: string;
  type: 'sale' | 'rent';
  status: 'completed' | 'ongoing' | 'furnished' | 'unfurnished' | 'commercial';
  featured: boolean;
}

interface PropertyListProps {
  properties: Property[];
  activeType: string;
  listTitle: string;
  links?: {
    path: string;
    label: string;
  }[];
}

const PropertyList = ({ properties, activeType, listTitle, links }: PropertyListProps) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">{listTitle}</h2>
        {links && links.length > 0 && (
          <div className="flex space-x-3">
            {links.map((link, index) => (
              <Button key={index} asChild variant="outline">
                <Link to={link.path}>
                  {link.label} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))
        ) : (
          <div className="col-span-full py-12 text-center">
            <p className="text-lg text-gray-500">No properties found matching your criteria.</p>
          </div>
        )}
      </div>

      {properties.length > 0 && (
        <div className="flex justify-center space-x-2 mt-8">
          <Button variant="outline" disabled>Previous</Button>
          <Button variant="outline" className="bg-qatken-blue text-white hover:bg-qatken-blue/90">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      )}
    </div>
  );
};

export default PropertyList;
