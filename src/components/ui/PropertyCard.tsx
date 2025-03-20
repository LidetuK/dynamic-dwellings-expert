
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Bed, Bath, Square, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '@/hooks/use-mobile';

export interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  priceUnit?: string;
  beds: number;
  baths: number;
  area: number;
  areaUnit?: string;
  image: string;
  type: 'sale' | 'rent';
  status?: 'completed' | 'ongoing' | 'furnished' | 'unfurnished' | 'commercial';
  featured?: boolean;
  className?: string;
}

const PropertyCard = ({
  id,
  title,
  location,
  price,
  priceUnit = 'KSh',
  beds,
  baths,
  area,
  areaUnit = 'sq.ft',
  image,
  type,
  status,
  featured = false,
  className,
}: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const isMobile = useIsMobile();

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price);
  };

  return (
    <div 
      className={cn(
        "property-card group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      <Link to={`/property/${id}`} className="block">
        <div className="relative">
          <AspectRatio ratio={4/3}>
            <img 
              src={image || 'https://placehold.co/400x300?text=Property'} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </AspectRatio>
          
          {featured && (
            <div className="absolute top-3 left-3 bg-qatken-orange text-white px-3 py-1 text-xs font-semibold rounded-full z-10">
              Featured
            </div>
          )}
          
          {status && (
            <div className="absolute top-3 right-12 bg-qatken-blue text-white px-3 py-1 text-xs font-semibold rounded-full z-10">
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </div>
          )}
          
          <button
            onClick={toggleLike}
            className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm transition-colors hover:bg-white z-10"
            aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart 
              size={18} 
              className={cn(
                "transition-colors",
                isLiked ? "fill-red-500 text-red-500" : "text-gray-500"
              )} 
            />
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center text-qatken-orange mb-2">
            <Tag size={16} className="mr-1" />
            <span className="text-sm font-semibold">
              For {type === 'sale' ? 'Sale' : 'Rent'}
            </span>
          </div>
          
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-1 group-hover:text-qatken-blue transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center text-gray-500 mt-1 mb-3">
            <MapPin size={16} className="mr-1 text-gray-400 flex-shrink-0" />
            <span className="text-sm truncate">{location}</span>
          </div>
          
          <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-3">
            <div className="flex space-x-2 sm:space-x-4">
              <div className="flex items-center text-gray-700" title="Bedrooms">
                <Bed size={16} className="mr-1 text-gray-500" />
                <span className="text-xs sm:text-sm">{beds}</span>
              </div>
              <div className="flex items-center text-gray-700" title="Bathrooms">
                <Bath size={16} className="mr-1 text-gray-500" />
                <span className="text-xs sm:text-sm">{baths}</span>
              </div>
              <div className="flex items-center text-gray-700" title="Area">
                <Square size={16} className="mr-1 text-gray-500" />
                <span className="text-xs sm:text-sm">{area} {areaUnit}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <div className="text-qatken-blue font-bold text-base sm:text-lg">
              {priceUnit} {formatPrice(price)}
              {type === 'rent' && <span className="text-gray-500 text-xs sm:text-sm font-normal">/mo</span>}
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-qatken-blue hover:text-qatken-blue/90 hover:bg-qatken-blue/10 p-0"
            >
              Details
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
