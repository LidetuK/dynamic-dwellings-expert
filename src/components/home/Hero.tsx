
import { useState, useEffect } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent'>('buy');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Find Your Dream Home',
      description: 'Discover perfect properties tailored to your lifestyle'
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Premium Properties',
      description: 'Luxury homes and apartments in prime locations'
    },
    {
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80',
      title: 'Investment Opportunities',
      description: 'Secure your future with strategic real estate investments'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section 
      className={cn(
        "relative min-h-[85vh] flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 bg-gray-900",
              currentSlide === index ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center text-white mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl opacity-90 mb-8">
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 animate-zoom-in">
          {/* Tabs */}
          <div className="flex mb-6">
            <button
              className={cn(
                "flex-1 py-3 text-center font-medium transition-colors",
                activeTab === 'buy'
                  ? "text-qatken-blue border-b-2 border-qatken-blue"
                  : "text-gray-500 hover:text-gray-700"
              )}
              onClick={() => setActiveTab('buy')}
            >
              Buy
            </button>
            <button
              className={cn(
                "flex-1 py-3 text-center font-medium transition-colors",
                activeTab === 'rent'
                  ? "text-qatken-blue border-b-2 border-qatken-blue"
                  : "text-gray-500 hover:text-gray-700"
              )}
              onClick={() => setActiveTab('rent')}
            >
              Rent
            </button>
          </div>

          {/* Search Form */}
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  type="text" 
                  placeholder="Location" 
                  className="pl-10 bg-gray-50 border-gray-200"
                />
              </div>
              <div className="md:w-1/4">
                <select className="w-full h-10 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:ring-qatken-blue focus:border-qatken-blue">
                  <option value="">Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="commercial">Commercial</option>
                  <option value="land">Land</option>
                </select>
              </div>
              <div className="md:w-1/4">
                <select className="w-full h-10 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:ring-qatken-blue focus:border-qatken-blue">
                  <option value="">Price Range</option>
                  <option value="0-1000000">0 - 1,000,000</option>
                  <option value="1000000-5000000">1,000,000 - 5,000,000</option>
                  <option value="5000000-10000000">5,000,000 - 10,000,000</option>
                  <option value="10000000+">10,000,000+</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="col-span-1">
                <select className="w-full h-10 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:ring-qatken-blue focus:border-qatken-blue">
                  <option value="">Bedrooms</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
              <div className="col-span-1">
                <select className="w-full h-10 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:ring-qatken-blue focus:border-qatken-blue">
                  <option value="">Bathrooms</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
              <div className="col-span-2">
                <Button className="w-full bg-qatken-blue hover:bg-qatken-blue/90 h-10">
                  <Search className="mr-2 h-4 w-4" /> Search Properties
                </Button>
              </div>
            </div>
          </form>
        </div>

        {/* Slider Indicators */}
        <div className="flex justify-center mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 mx-1 rounded-full transition-all",
                currentSlide === index 
                  ? "bg-white" 
                  : "bg-white/40 hover:bg-white/60"
              )}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
