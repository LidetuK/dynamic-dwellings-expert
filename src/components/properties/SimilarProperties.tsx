
import PropertyCard from '@/components/ui/PropertyCard';
import { Property } from '@/data/properties';

interface SimilarPropertiesProps {
  similarProperties: Property[];
}

const SimilarProperties = ({ similarProperties }: SimilarPropertiesProps) => {
  if (similarProperties.length === 0) return null;
  
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">Similar Properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarProperties.slice(0, 3).map((prop) => (
          <PropertyCard key={prop.id} {...prop} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProperties;
