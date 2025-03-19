
import { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, Filter, X } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PropertyCard from '@/components/ui/PropertyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

// Mock data for ongoing projects
const ongoingProperties = [
  {
    id: "5",
    title: "Riverside Villa Development",
    location: "Riverside Estate, Lavington",
    price: 45000000,
    beds: 5,
    baths: 5,
    area: 4500,
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'sale' as const,
    status: "ongoing",
    featured: true
  },
  {
    id: "9",
    title: "Golf Estate Villa",
    location: "Karen Golf View, Karen",
    price: 65000000,
    beds: 5,
    baths: 5,
    area: 5500,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'sale' as const,
    status: "ongoing",
    featured: true
  },
  {
    id: "11",
    title: "Beachfront Development",
    location: "Coastal Estate, Mombasa",
    price: 28000000,
    beds: 3,
    baths: 3,
    area: 1650,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'sale' as const,
    status: "ongoing",
    featured: true
  },
  {
    id: "17",
    title: "Skyline Apartments",
    location: "Upperhill, Nairobi",
    price: 18500000,
    beds: 2,
    baths: 2,
    area: 1200,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    type: 'sale' as const,
    status: "ongoing",
    featured: false
  },
  {
    id: "18",
    title: "Garden Terraces",
    location: "Kilimani, Nairobi",
    price: 22000000,
    beds: 3,
    baths: 3,
    area: 1800,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    type: 'sale' as const,
    status: "ongoing",
    featured: false
  }
];

const OngoingProjects = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter by search term if any
  const searchedProperties = searchTerm
    ? ongoingProperties.filter(
        property =>
          property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : ongoingProperties;

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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Ongoing Development Projects</h1>
            <p className="text-lg opacity-90 max-w-3xl">
              Invest in our premium off-plan properties and development projects with attractive payment plans.
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
                placeholder="Search projects" 
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
                <option value="0-10000000">0 - 10,000,000</option>
                <option value="10000000-20000000">10,000,000 - 20,000,000</option>
                <option value="20000000-50000000">20,000,000 - 50,000,000</option>
                <option value="50000000+">50,000,000+</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Project Type</label>
              <select className="w-full p-2 border border-gray-200 rounded-md">
                <option value="">All Types</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="townhouse">Townhouse</option>
                <option value="mixed-use">Mixed-Use</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">Completion Date</label>
              <select className="w-full p-2 border border-gray-200 rounded-md">
                <option value="">Any</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026+">2026+</option>
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
                  <p className="text-lg text-gray-500">No projects found matching your criteria.</p>
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

export default OngoingProjects;
