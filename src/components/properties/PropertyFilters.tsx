
import { useState } from 'react';
import { Filter, Search, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

interface PropertyFiltersProps {
  isFilterOpen: boolean;
  setIsFilterOpen: (isOpen: boolean) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filters: {
    priceRange: string;
    propertyType: string;
    bedrooms: string;
    bathrooms: string;
    location: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    priceRange: string;
    propertyType: string;
    bedrooms: string;
    bathrooms: string;
    location: string;
  }>>;
  onApplyFilters: () => void;
  propertyType: 'sale' | 'rent';
}

const PropertyFilters = ({
  isFilterOpen,
  setIsFilterOpen,
  searchTerm,
  setSearchTerm,
  filters,
  setFilters,
  onApplyFilters,
  propertyType
}: PropertyFiltersProps) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
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

        <Button 
          variant="outline" 
          className="md:hidden w-full" 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          {isFilterOpen ? <X className="mr-2 h-4 w-4" /> : <Filter className="mr-2 h-4 w-4" />}
          {isFilterOpen ? "Close Filters" : "Filters"}
        </Button>

        <Button 
          variant="outline" 
          className="hidden md:flex" 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" /> Filters
        </Button>
      </div>

      <div className={cn(
        "grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-lg mb-8 transition-all duration-300",
        isFilterOpen ? "block" : "hidden"
      )}>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Price Range</label>
          <select 
            className="w-full p-2 border border-gray-200 rounded-md"
            name="priceRange"
            value={filters.priceRange}
            onChange={handleFilterChange}
          >
            <option value="">Any Price</option>
            {propertyType === 'sale' ? (
              <>
                <option value="0-5000000">0 - 5,000,000</option>
                <option value="5000000-10000000">5,000,000 - 10,000,000</option>
                <option value="10000000-20000000">10,000,000 - 20,000,000</option>
                <option value="20000000-50000000">20,000,000 - 50,000,000</option>
                <option value="50000000+">50,000,000+</option>
              </>
            ) : (
              <>
                <option value="0-50000">0 - 50,000</option>
                <option value="50000-100000">50,000 - 100,000</option>
                <option value="100000-200000">100,000 - 200,000</option>
                <option value="200000-500000">200,000 - 500,000</option>
                <option value="500000+">500,000+</option>
              </>
            )}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Property Type</label>
          <select 
            className="w-full p-2 border border-gray-200 rounded-md"
            name="propertyType"
            value={filters.propertyType}
            onChange={handleFilterChange}
          >
            <option value="">All Types</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="townhouse">Townhouse</option>
            {propertyType === 'rent' && (
              <>
                <option value="office">Office</option>
                <option value="retail">Retail Space</option>
                <option value="warehouse">Warehouse</option>
              </>
            )}
            {propertyType === 'sale' && (
              <option value="land">Land</option>
            )}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Bedrooms</label>
          <select 
            className="w-full p-2 border border-gray-200 rounded-md"
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleFilterChange}
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>
        <div className="flex items-end">
          <Button className="w-full" onClick={onApplyFilters}>Apply Filters</Button>
        </div>
      </div>
    </>
  );
};

export default PropertyFilters;
