import { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, Filter, X } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PropertyCard from '@/components/ui/PropertyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

// Mock data for commercial properties with properly typed status
const commercialProperties = [
  {
    id: "4",
    title: "Executive Office Space",
    location: "Business Park, CBD",
    price: 120000,
    beds: 0,
    baths: 2,
    area: 1800,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'rent' as const,
    status: "commercial" as const,
    featured: true
  },
  {
    id: "15",
    title: "Commercial Retail Space",
    location: "Mombasa Road, Nairobi",
    price: 180000,
    beds: 0,
    baths: 2,
    area: 2500,
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'rent' as const,
    status: "commercial" as const,
    featured: false
  },
  {
    id: "16",
    title: "Commercial Office Floor",
    location: "Upper Hill, Nairobi",
    price: 350000,
    beds: 0,
    baths: 4,
    area: 5000,
    image: "https://images.unsplash.com/photo-1540821924489-7690c70c4eac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'rent' as const,
    status: "commercial" as const,
    featured: true
  },
  {
    id: "22",
    title: "Prime Retail Shop",
    location: "Shopping Mall, Westlands",
    price: 95000,
    beds: 0,
    baths: 1,
    area: 800,
    image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    type: 'rent' as const,
    status: "commercial" as const,
    featured: false
  },
  {
    id: "23",
    title: "Industrial Warehouse",
    location: "Industrial Area, Nairobi",
    price: 280000,
    beds: 0,
    baths: 2,
    area: 8000,
    image: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    type: 'rent' as const,
    status: "commercial" as const,
    featured: false
  }
];

const CommercialProperties = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter by search term if any
  const searchedProperties = searchTerm
    ? commercialProperties.filter(
        property =>
          property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : commercialProperties;

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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Commercial Properties for Lease</h1>
            <p className="text-lg opacity-90 max-w-3xl">
              Discover our premium selection of office spaces, retail outlets, and industrial facilities for your business.
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
                <option value="0-100000">0 - 100,000</option>
                <option value="100000-200000">100,000 - 200,000</option>
                <option value="200000-500000">200,000 - 500,000</option>
                <option value="500000+">500,000+</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Property Type</label>
              <select className="w-full p-2 border border-gray-200 rounded-md">
                <option value="">All Types</option>
                <option value="office">Office Space</option>
                <option value="retail">Retail Outlet</option>
                <option value="warehouse">Warehouse</option>
                <option value="industrial">Industrial Space</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Area (sq.ft)</label>
              <select className="w-full p-2 border border-gray-200 rounded-md">
                <option value="">Any</option>
                <option value="0-1000">0 - 1,000</option>
                <option value="1000-2000">1,000 - 2,000</option>
                <option value="2000-5000">2,000 - 5,000</option>
                <option value="5000+">5,000+</option>
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
              <Button variant="outline">Next</Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommercialProperties;
