import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, SlidersHorizontal, Home, Building, Briefcase, Filter, X, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PropertyCard from '@/components/ui/PropertyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

// Mock data for properties with properly typed 'type' property
const mockProperties = [
  {
    id: "3",
    title: "Cozy Studio Apartment",
    location: "Arts District, Eastlands",
    price: 45000,
    beds: 1,
    baths: 1,
    area: 650,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'rent' as const,
    status: "furnished",
    featured: true
  },
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
    status: "commercial",
    featured: true
  },
  {
    id: "6",
    title: "Furnished Townhouse",
    location: "Karen Estate, Karen",
    price: 150000,
    beds: 3,
    baths: 3,
    area: 1800,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'rent' as const,
    status: "furnished",
    featured: true
  },
  {
    id: "12",
    title: "Modern Unfurnished Apartment",
    location: "Westlands, Nairobi",
    price: 85000,
    beds: 3,
    baths: 2,
    area: 1450,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'rent' as const,
    status: "unfurnished",
    featured: false
  },
  {
    id: "13",
    title: "Furnished Garden Apartment",
    location: "Lavington, Nairobi",
    price: 95000,
    beds: 2,
    baths: 2,
    area: 1200,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'rent' as const,
    status: "furnished",
    featured: false
  },
  {
    id: "14",
    title: "Unfurnished Family Home",
    location: "Runda, Nairobi",
    price: 250000,
    beds: 4,
    baths: 3,
    area: 3200,
    image: "https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'rent' as const,
    status: "unfurnished",
    featured: false
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
    status: "commercial",
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
    status: "commercial",
    featured: true
  }
];

const Rent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeType, setActiveType] = useState<'furnished' | 'unfurnished' | 'commercial'>(
    searchParams.get('type') === 'unfurnished' 
      ? 'unfurnished' 
      : searchParams.get('type') === 'commercial'
        ? 'commercial'
        : 'furnished'
  );
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter properties based on active type
  const filteredProperties = mockProperties.filter(property => {
    return property.type === 'rent' && property.status === activeType;
  });

  // Further filter by search term if any
  const searchedProperties = searchTerm
    ? filteredProperties.filter(
        property =>
          property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredProperties;

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update URL when activeType changes
    setSearchParams({ type: activeType });
  }, [activeType, setSearchParams]);

  // Update activeType when URL param changes
  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam === 'furnished' || typeParam === 'unfurnished' || typeParam === 'commercial') {
      setActiveType(typeParam);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <div className="bg-qatken-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Properties for Rent</h1>
            <p className="text-lg opacity-90 max-w-3xl">
              Explore our selection of residential and commercial properties available for rent.
            </p>
          </div>
        </div>

        {/* Tabs and Filters section */}
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

            {/* Tabs */}
            <Tabs 
              defaultValue={activeType} 
              value={activeType} 
              onValueChange={(value) => setActiveType(value as 'furnished' | 'unfurnished' | 'commercial')}
              className="w-full md:w-auto"
            >
              <TabsList className="grid w-full md:w-auto grid-cols-3">
                <TabsTrigger value="furnished">
                  <Home className="mr-2 h-4 w-4" /> Furnished
                </TabsTrigger>
                <TabsTrigger value="unfurnished">
                  <Building className="mr-2 h-4 w-4" /> Unfurnished
                </TabsTrigger>
                <TabsTrigger value="commercial">
                  <Briefcase className="mr-2 h-4 w-4" /> Commercial
                </TabsTrigger>
              </TabsList>
            </Tabs>

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
                <option value="0-50000">0 - 50,000</option>
                <option value="50000-100000">50,000 - 100,000</option>
                <option value="100000-200000">100,000 - 200,000</option>
                <option value="200000-500000">200,000 - 500,000</option>
                <option value="500000+">500,000+</option>
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
                <option value="office">Office</option>
                <option value="retail">Retail Space</option>
                <option value="warehouse">Warehouse</option>
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

          {/* Property Categories */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Browse Rental Properties</h2>
              <div className="flex space-x-3">
                <Button asChild variant="outline">
                  <Link to="/rent/furnished">
                    Furnished <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/rent/unfurnished">
                    Unfurnished <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/rent/commercial">
                    Commercial <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <TabsContent value="furnished" className="mt-0">
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
            </TabsContent>
            <TabsContent value="unfurnished" className="mt-0">
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
            </TabsContent>
            <TabsContent value="commercial" className="mt-0">
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
            </TabsContent>
          </div>

          {/* Pagination */}
          {searchedProperties.length > 0 && (
            <div className="flex justify-center space-x-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="outline" className="bg-qatken-blue text-white hover:bg-qatken-blue/90">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rent;
