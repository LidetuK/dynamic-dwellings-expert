
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const neighborhoods = [
  {
    name: "Riverside Estate",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    description: "Upscale riverside community with luxury homes and elegant apartments, perfect for families seeking tranquility and natural beauty.",
    highlights: [
      "Waterfront properties",
      "Private parks and gardens",
      "Excellent schools nearby",
      "24/7 security"
    ]
  },
  {
    name: "City Center",
    image: "https://images.unsplash.com/photo-1495476479092-6ece1898a101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    description: "The heart of urban living with modern high-rise apartments offering stunning city views and convenient access to business districts.",
    highlights: [
      "Walking distance to offices",
      "Vibrant nightlife",
      "Public transportation hub",
      "Fine dining restaurants"
    ]
  },
  {
    name: "Suburban Heights",
    image: "https://images.unsplash.com/photo-1625178171259-7a4998199096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    description: "Family-friendly suburb with spacious homes, green spaces, and a strong community atmosphere, ideal for raising children.",
    highlights: [
      "Large family homes",
      "Community centers",
      "Top-rated schools",
      "Sports facilities"
    ]
  },
  {
    name: "Arts District",
    image: "https://images.unsplash.com/photo-1624552184280-9e9631befb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    description: "Creative and vibrant neighborhood with converted lofts, boutique stores, art galleries, and trendy cafés for the culturally inclined.",
    highlights: [
      "Artist studios and galleries",
      "Historic architecture",
      "Weekend markets",
      "Independent bookstores"
    ]
  }
];

const NeighborhoodGuide = () => {
  const [activeNeighborhood, setActiveNeighborhood] = useState(0);

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Neighborhood Guide</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of neighborhoods to find the perfect location that matches your lifestyle and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-4">Featured Areas</h3>
              <div className="space-y-2">
                {neighborhoods.map((neighborhood, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-md transition-colors",
                      activeNeighborhood === index
                        ? "bg-qatken-blue text-white"
                        : "bg-white hover:bg-gray-100"
                    )}
                    onClick={() => setActiveNeighborhood(index)}
                  >
                    {neighborhood.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src={neighborhoods[activeNeighborhood].image}
                  alt={neighborhoods[activeNeighborhood].name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{neighborhoods[activeNeighborhood].name}</h3>
                <p className="text-gray-600 mb-4">{neighborhoods[activeNeighborhood].description}</p>
                
                <h4 className="font-medium text-lg mb-2">Highlights:</h4>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {neighborhoods[activeNeighborhood].highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 bg-qatken-blue rounded-full mr-2"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-between items-center">
                  <Button asChild className="bg-qatken-blue hover:bg-qatken-blue/90">
                    <Link to="/buy">View Properties</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/about">Area Guide</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodGuide;
