
import { Bed, Bath, Square, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Property } from '@/data/properties';

interface PropertyQuickInfoProps {
  property: Property;
}

const PropertyQuickInfo = ({ property }: PropertyQuickInfoProps) => {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
            <Bed size={24} className="text-qatken-blue mb-2" />
            <span className="text-lg font-bold">{property.beds}</span>
            <span className="text-sm text-gray-500">Bedrooms</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
            <Bath size={24} className="text-qatken-blue mb-2" />
            <span className="text-lg font-bold">{property.baths}</span>
            <span className="text-sm text-gray-500">Bathrooms</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
            <Square size={24} className="text-qatken-blue mb-2" />
            <span className="text-lg font-bold">{property.area}</span>
            <span className="text-sm text-gray-500">Sq.ft</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
            <Tag size={24} className="text-qatken-blue mb-2" />
            <span className="text-lg font-bold capitalize">{property.status}</span>
            <span className="text-sm text-gray-500">Status</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyQuickInfo;
