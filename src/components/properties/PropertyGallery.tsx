
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Share2, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';

interface PropertyGalleryProps {
  mainImage: string;
  isLiked: boolean;
  onToggleLike: () => void;
}

const PropertyGallery = ({ mainImage, isLiked, onToggleLike }: PropertyGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Mock images array (in real app, property would have multiple images)
  const images = [
    mainImage,
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
  ];
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
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
          onClick={onToggleLike}
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
  );
};

export default PropertyGallery;
