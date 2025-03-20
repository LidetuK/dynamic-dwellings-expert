
import { Calendar, Tag, Clock, Bed, Bath, Square, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Property } from '@/data/properties';

interface PropertyTabsProps {
  property: Property;
  formatPrice: (price: number) => string;
}

const PropertyTabs = ({ property, formatPrice }: PropertyTabsProps) => {
  return (
    <Tabs defaultValue="overview" className="mb-8">
      <TabsList className="w-full justify-start mb-4">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="features">Features</TabsTrigger>
        <TabsTrigger value="location">Location</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview" className="mt-0">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Property Overview</h3>
            <p className="text-gray-700 mb-4">
              This beautiful {property.beds}-bedroom property located in {property.location} offers a perfect 
              blend of comfort, style, and convenience. The spacious layout spans {property.area} sq.ft, 
              featuring {property.baths} well-appointed bathrooms and modern amenities throughout.
            </p>
            <p className="text-gray-700 mb-4">
              Whether you're looking for a family home or an investment opportunity, this property 
              presents exceptional value with its prime location and outstanding features.
            </p>
            <p className="text-gray-700">
              Available for {property.type === 'sale' ? 'purchase' : 'rent'} at 
              KSh {formatPrice(property.price)} 
              {property.type === 'rent' ? ' per month' : ''}.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="details" className="mt-0">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Property Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center py-2 border-b border-gray-100">
                <Calendar size={18} className="mr-2 text-qatken-blue" />
                <span className="font-medium mr-2">Year Built:</span>
                <span className="text-gray-600">2021</span>
              </div>
              <div className="flex items-center py-2 border-b border-gray-100">
                <Tag size={18} className="mr-2 text-qatken-blue" />
                <span className="font-medium mr-2">Property Type:</span>
                <span className="text-gray-600 capitalize">{property.type === 'sale' ? 'For Sale' : 'For Rent'}</span>
              </div>
              <div className="flex items-center py-2 border-b border-gray-100">
                <Clock size={18} className="mr-2 text-qatken-blue" />
                <span className="font-medium mr-2">Status:</span>
                <span className="text-gray-600 capitalize">{property.status}</span>
              </div>
              <div className="flex items-center py-2 border-b border-gray-100">
                <Bed size={18} className="mr-2 text-qatken-blue" />
                <span className="font-medium mr-2">Bedrooms:</span>
                <span className="text-gray-600">{property.beds}</span>
              </div>
              <div className="flex items-center py-2 border-b border-gray-100">
                <Bath size={18} className="mr-2 text-qatken-blue" />
                <span className="font-medium mr-2">Bathrooms:</span>
                <span className="text-gray-600">{property.baths}</span>
              </div>
              <div className="flex items-center py-2 border-b border-gray-100">
                <Square size={18} className="mr-2 text-qatken-blue" />
                <span className="font-medium mr-2">Area:</span>
                <span className="text-gray-600">{property.area} sq.ft</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="features" className="mt-0">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Property Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-qatken-blue rounded-full mr-2"></div>
                <span>Central Air Conditioning</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-qatken-blue rounded-full mr-2"></div>
                <span>Private Balcony</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-qatken-blue rounded-full mr-2"></div>
                <span>Modern Kitchen</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-qatken-blue rounded-full mr-2"></div>
                <span>Hardwood Floors</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-qatken-blue rounded-full mr-2"></div>
                <span>Swimming Pool</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-qatken-blue rounded-full mr-2"></div>
                <span>Fitness Center</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-qatken-blue rounded-full mr-2"></div>
                <span>Secure Parking</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-qatken-blue rounded-full mr-2"></div>
                <span>24/7 Security</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="location" className="mt-0">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Property Location</h3>
            <div className="rounded-lg overflow-hidden h-[300px] bg-gray-100 mb-4">
              <div className="w-full h-full flex items-center justify-center">
                <Info size={24} className="mr-2 text-gray-400" />
                <span className="text-gray-500">Map loading...</span>
              </div>
            </div>
            <p className="text-gray-700">
              This property is conveniently located in {property.location}, offering easy access to shopping centers, 
              schools, healthcare facilities, and public transportation.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default PropertyTabs;
