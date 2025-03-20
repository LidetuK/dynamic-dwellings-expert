
import { useState } from 'react';
import { 
  Heart, MapPin, Bed, Bath, Square, ChevronLeft, ChevronRight,
  Share2, Printer, Download, Tag, Clock, Calendar, Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PropertyCard from '@/components/ui/PropertyCard';
import { Property } from '@/data/properties';
import { cn } from '@/lib/utils';

interface PropertyDetailProps {
  property: Property;
  similarProperties?: Property[];
}

const PropertyDetail = ({ property, similarProperties = [] }: PropertyDetailProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Mock images array (in real app, property would have multiple images)
  const images = [
    property.image,
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
  ];
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price);
  };
  
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
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
      <div className="relative mb-8 rounded-xl overflow-hidden shadow-lg">
        <AspectRatio ratio={16/9}>
          <img 
            src={images[currentImageIndex]} 
            alt={`Property image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </AspectRatio>
        
        {/* Image Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <Button 
            variant="ghost"
            size="icon"
            onClick={prevImage}
            className="bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white/90 rounded-full shadow-sm"
          >
            <ChevronLeft size={24} />
          </Button>
          <Button 
            variant="ghost"
            size="icon"
            onClick={nextImage}
            className="bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white/90 rounded-full shadow-sm"
          >
            <ChevronRight size={24} />
          </Button>
        </div>
        
        {/* Image Gallery Indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full",
                currentImageIndex === index ? "bg-qatken-blue" : "bg-white/70"
              )}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button 
            variant="ghost"
            size="icon"
            onClick={toggleLike}
            className="bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full shadow-sm"
          >
            <Heart 
              size={18} 
              className={cn(
                isLiked ? "fill-red-500 text-red-500" : "text-gray-700"
              )} 
            />
          </Button>
          <Button 
            variant="ghost"
            size="icon"
            className="bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full shadow-sm"
          >
            <Share2 size={18} className="text-gray-700" />
          </Button>
          <Button 
            variant="ghost"
            size="icon"
            className="bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full shadow-sm"
          >
            <Printer size={18} className="text-gray-700" />
          </Button>
        </div>
      </div>
      
      {/* Property Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Main Content */}
        <div className="col-span-2">
          {/* Quick Info */}
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
          
          {/* Tabs */}
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
        </div>
        
        {/* Sidebar */}
        <div className="col-span-1">
          {/* Contact Agent */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Contact Agent</h3>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                    alt="Agent"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">John Doe</h4>
                  <p className="text-sm text-gray-500">Real Estate Agent</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qatken-blue"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qatken-blue"
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qatken-blue"
                  />
                </div>
                <div className="relative">
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qatken-blue"
                    defaultValue={`I'm interested in ${property.title}. Please contact me with more information.`}
                  />
                </div>
                <Button className="w-full bg-qatken-blue hover:bg-qatken-blue/90">
                  Send Message
                </Button>
                <Button variant="outline" className="w-full">
                  Call Agent
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Property Document */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Property Document</h3>
              <Button variant="outline" className="w-full flex items-center justify-center">
                <Download size={18} className="mr-2" />
                Download Brochure
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Similar Properties */}
      {similarProperties.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Similar Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProperties.slice(0, 3).map((prop) => (
              <PropertyCard key={prop.id} {...prop} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetail;
