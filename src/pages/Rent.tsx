
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Home, Building, Briefcase } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/components/ui/use-toast';
import PropertyFilters from '@/components/properties/PropertyFilters';
import PropertyList from '@/components/properties/PropertyList';
import { rentProperties, filterProperties } from '@/data/properties';

const Rent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { toast } = useToast();
  const [activeType, setActiveType] = useState<'furnished' | 'unfurnished' | 'commercial'>(
    searchParams.get('type') === 'unfurnished' 
      ? 'unfurnished' 
      : searchParams.get('type') === 'commercial'
        ? 'commercial'
        : 'furnished'
  );
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    priceRange: searchParams.get('priceRange') || '',
    propertyType: searchParams.get('propertyType') || '',
    bedrooms: searchParams.get('bedrooms') || '',
    bathrooms: searchParams.get('bathrooms') || '',
    location: searchParams.get('location') || ''
  });

  useEffect(() => {
    const location = searchParams.get('location');
    const propertyType = searchParams.get('propertyType');
    const priceRange = searchParams.get('priceRange');
    
    if (location || propertyType || priceRange) {
      setIsFilterOpen(true);
      
      const newFilters = { ...filters };
      for (const [key, value] of searchParams.entries()) {
        if (key in newFilters) {
          newFilters[key as keyof typeof newFilters] = value;
        }
      }
      setFilters(newFilters);
      
      toast({
        title: "Search Applied",
        description: "Your search criteria has been applied to the results.",
      });
      
      if (location) {
        setSearchTerm(location);
      }
    }
  }, []);

  const searchedProperties = filterProperties(
    rentProperties,
    filters,
    searchTerm,
    'rent',
    activeType
  );

  const applyFilters = () => {
    const params = new URLSearchParams();
    params.append('type', activeType);
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.append(key, value);
      }
    });
    
    setSearchParams(params);
    
    toast({
      title: "Filters Applied",
      description: "The properties have been filtered according to your criteria.",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const params = new URLSearchParams(searchParams);
    params.set('type', activeType);
    setSearchParams(params);
  }, [activeType, setSearchParams]);

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
        <div className="bg-qatken-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Properties for Rent</h1>
            <p className="text-lg opacity-90 max-w-3xl">
              Explore our selection of residential and commercial properties available for rent.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <PropertyFilters 
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filters={filters}
            setFilters={setFilters}
            onApplyFilters={applyFilters}
            propertyType="rent"
          />

          <Tabs 
            defaultValue={activeType} 
            value={activeType} 
            onValueChange={(value) => setActiveType(value as 'furnished' | 'unfurnished' | 'commercial')}
            className="w-full"
          >
            <TabsList className="grid w-full md:w-auto grid-cols-3 mb-8">
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
            
            <TabsContent value="furnished" className="mt-0">
              <PropertyList 
                properties={searchedProperties}
                activeType={activeType}
                listTitle="Browse Furnished Rentals"
                links={[
                  { path: "/rent/furnished", label: "Furnished" },
                  { path: "/rent/unfurnished", label: "Unfurnished" },
                  { path: "/rent/commercial", label: "Commercial" }
                ]}
              />
            </TabsContent>
            
            <TabsContent value="unfurnished" className="mt-0">
              <PropertyList 
                properties={searchedProperties}
                activeType={activeType}
                listTitle="Browse Unfurnished Rentals"
                links={[
                  { path: "/rent/furnished", label: "Furnished" },
                  { path: "/rent/unfurnished", label: "Unfurnished" },
                  { path: "/rent/commercial", label: "Commercial" }
                ]}
              />
            </TabsContent>
            
            <TabsContent value="commercial" className="mt-0">
              <PropertyList 
                properties={searchedProperties}
                activeType={activeType}
                listTitle="Browse Commercial Properties"
                links={[
                  { path: "/rent/furnished", label: "Furnished" },
                  { path: "/rent/unfurnished", label: "Unfurnished" },
                  { path: "/rent/commercial", label: "Commercial" }
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rent;
