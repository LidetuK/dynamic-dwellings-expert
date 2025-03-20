
import { Property, PropertyType, PropertyStatus } from './propertyTypes';

// Helper function to filter properties
export const filterProperties = (
  properties: Property[],
  filters: {
    priceRange: string;
    propertyType: string;
    bedrooms: string;
    bathrooms: string;
    location: string;
  },
  searchTerm: string,
  propertyType: PropertyType,
  propertyStatus: PropertyStatus
) => {
  // First filter by type and status
  let filteredProps = properties.filter(property => {
    return property.type === propertyType && property.status === propertyStatus;
  });

  // Then apply additional filters
  filteredProps = filteredProps.filter(property => {
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (max) {
        if (property.price < min || property.price > max) return false;
      } else if (filters.priceRange.includes('+')) {
        const minValue = parseInt(filters.priceRange);
        if (property.price < minValue) return false;
      }
    }
    
    if (filters.bedrooms && property.beds < parseInt(filters.bedrooms)) {
      return false;
    }
    
    if (filters.bathrooms && property.baths < parseInt(filters.bathrooms)) {
      return false;
    }
    
    return true;
  });

  // Apply search term if provided
  return searchTerm
    ? filteredProps.filter(
        property =>
          property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredProps;
};
