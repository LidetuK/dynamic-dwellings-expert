import { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, Filter, X } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PropertyCard from '@/components/ui/PropertyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

// Mock data for completed properties with properly typed status
const completedProperties = [
  {
    id: "1",
    title: "Modern Apartment with City View",
    location: "Downtown, City Center",
    price: 12500000,
    beds: 3,
    baths: 2,
    area: 1200,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    type: 'sale' as const,
    status: "completed" as const,
    featured: true
  },
  {
    id: "2",
    title: "Luxury Family Home",
    location: "Suburban Hills, Westlands",
    price: 25000000,
    beds: 4,
    baths: 3,
    area: 2500,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    type: 'sale' as const,
    status: "completed" as const,
    featured: false
  },
  {
    id: "7",
    title: "Modern Townhouse",
    location: "Spring Valley, Nairobi",
    price: 18500000,
    beds: 3,
    baths: 2,
    area: 1800,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'sale' as const,
    status: "completed" as const,
    featured: false
  },
  {
    id: "8",
    title: "Luxury Penthouse",
    location: "Upper Hill, Nairobi",
    price: 35000000,
    beds: 4,
    baths: 3,
    area: 2200,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'sale' as const,
    status: "completed" as const,
    featured: false
  },
  {
    id: "10",
    title: "Urban Apartment",
    location: "Kilimani, Nairobi",
    price: 9800000,
    beds: 2,
    baths: 2,
    area: 950,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'sale' as const,
    status: "completed" as const,
    featured: false
  }
];

const CompletedProperties = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter by search term if any
  const searchedProperties = searchTerm
    ? completedProperties.filter(
        property =>
          property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : completedProperties;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <div className="bg-qatken-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Completed Properties for Sale</h1>
            <p className="text-lg opacity-90 max-w-3xl">
              Explore our selection of finished, move-in ready properties available for immediate purchase.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            {/* Search Bar */}
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                type="text" 
                placeholder="Search properties" 
                className="pl-10 border-gray-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Button (Mobile) */}
            <Button 
              variant="outline" 
              className="md:hidden w-full" 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              {isFilterOpen ? <X className="mr-2 h-4 w-4" /> : <Filter className="mr-2 h-4 w-4" />}
              {isFilterOpen ? "Close Filters" : "Filters"}
            </Button>

            {/* Filter Button (Desktop) */}
            <Button 
              variant="outline" 
              className="hidden md:flex" 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <SlidersHorizontal className="mr-2 h-4 w-4" /> Filters
            </Button>
          </div>

          {/* Filter Panel */}
          <div className={cn(
            "grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-lg mb-8 transition-all duration-300",
            isFilterOpen ? "block" : "hidden"
          )}>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Price Range</label>
              <select className="w-full p-2 border border-gray-200 rounded-md">
                <option value="">Any Price</option>
                <option value="0-5000000">0 - 5,000,000</option>
                <option value="5000000-10000000">5,000,000 - 10,000,000</option>
                <option value="10000000-20000000">10,000,000 - 20,000,000</option>
                <option value="20000000-50000000">20,000,000 - 50,000,000</option>
                <option value="50000000+">50,000,000+</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Property Type</label>
              <select className="w-full p-2 border border-gray-200 rounded-md">
                <option value="">All Types</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="townhouse">Townhouse</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Bedrooms</label>
              <select className="w-full p-2 border border-gray-200 rounded-md">
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button className="w-full">Apply Filters</Button>
            </div>
          </div>

          {/* Property Listings */}
          <div className="mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchedProperties.length > 0 ? (
                searchedProperties.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))
              ) : (
                <div className="col-span-full py-12 text-center">
                  <p className="text-lg text-gray-500">No properties found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>

          {/* Pagination */}
          {searchedProperties.length > 0 && (
            <div className="flex justify-center space-x-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="outline" className="bg-qatken-blue text-white hover:bg-qatken-blue/90">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">Next</Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CompletedProperties;
