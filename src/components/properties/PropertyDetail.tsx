
import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Property } from '@/data/properties';
import PropertyGallery from './PropertyGallery';
import PropertyQuickInfo from './PropertyQuickInfo';
import PropertyTabs from './PropertyTabs';
import PropertySidebar from './PropertySidebar';
import SimilarProperties from './SimilarProperties';

interface PropertyDetailProps {
  property: Property;
  similarProperties?: Property[];
}

const PropertyDetail = ({ property, similarProperties = [] }: PropertyDetailProps) => {
  const [isLiked, setIsLiked] = useState(false);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price);
  };
  
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-qatken-blue transition-colors">Home</a>
        <span className="mx-2">/</span>
        <a href={property.type === 'sale' ? '/buy' : '/rent'} className="hover:text-qatken-blue transition-colors">
          {property.type === 'sale' ? 'Buy' : 'Rent'}
        </a>
        <span className="mx-2">/</span>
        <span className="text-gray-700 font-medium">{property.title}</span>
      </div>
      
      {/* Property Title Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">{property.title}</h1>
          <div className="flex items-center text-gray-500">
            <MapPin size={16} className="mr-1 text-gray-400" />
            <span>{property.location}</span>
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-2xl md:text-3xl font-bold text-qatken-blue">
          KSh {formatPrice(property.price)}
          {property.type === 'rent' && <span className="text-gray-500 text-sm font-normal">/mo</span>}
        </div>
      </div>
      
      {/* Property Gallery */}
      <PropertyGallery 
        mainImage={property.image} 
        isLiked={isLiked} 
        onToggleLike={toggleLike} 
      />
      
      {/* Property Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Main Content */}
        <div className="col-span-2">
          {/* Quick Info */}
          <PropertyQuickInfo property={property} />
          
          {/* Tabs */}
          <PropertyTabs property={property} formatPrice={formatPrice} />
        </div>
        
        {/* Sidebar */}
        <PropertySidebar property={property} />
      </div>
      
      {/* Similar Properties */}
      <SimilarProperties similarProperties={similarProperties} />
    </div>
  );
};

export default PropertyDetail;
