
import { Property, PropertyType, PropertyStatus } from './propertyTypes';
import { saleProperties } from './saleProperties';
import { rentProperties } from './rentProperties';

/**
 * Filters properties based on specified criteria
 */
export const filterProperties = (
  properties: Property[],
  filters?: {
    type?: PropertyType;
    status?: PropertyStatus;
    minPrice?: number;
    maxPrice?: number;
    beds?: number;
    baths?: number;
    featured?: boolean;
  }
) => {
  if (!filters) return properties;

  return properties.filter((property) => {
    // Filter by type
    if (filters.type && property.type !== filters.type) {
      return false;
    }

    // Filter by status
    if (filters.status && property.status !== filters.status) {
      return false;
    }

    // Filter by price range
    if (filters.minPrice && property.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice && property.price > filters.maxPrice) {
      return false;
    }

    // Filter by beds
    if (filters.beds && property.beds < filters.beds) {
      return false;
    }

    // Filter by baths
    if (filters.baths && property.baths < filters.baths) {
      return false;
    }

    // Filter by featured
    if (filters.featured !== undefined && property.featured !== filters.featured) {
      return false;
    }

    return true;
  });
};

/**
 * Get similar properties based on type, status, and price range
 */
export const getSimilarProperties = (
  property: Property,
  count: number = 3
): Property[] => {
  const allProperties = [...saleProperties, ...rentProperties];
  
  // Filter properties with the same type and similar price range (±30%)
  const similarProperties = allProperties.filter(
    (p) => 
      p.id !== property.id && // exclude the current property
      p.type === property.type && // same type (sale/rent)
      p.price >= property.price * 0.7 && // price range lower bound
      p.price <= property.price * 1.3 // price range upper bound
  );
  
  // Sort by closest price and similarity in beds/baths
  return similarProperties
    .sort((a, b) => {
      const aPriceDiff = Math.abs(a.price - property.price);
      const bPriceDiff = Math.abs(b.price - property.price);
      const aRoomDiff = Math.abs(a.beds - property.beds) + Math.abs(a.baths - property.baths);
      const bRoomDiff = Math.abs(b.beds - property.beds) + Math.abs(b.baths - property.baths);
      
      return (aPriceDiff + aRoomDiff * 100000) - (bPriceDiff + bRoomDiff * 100000);
    })
    .slice(0, count);
};

/**
 * Get all featured properties
 */
export const getFeaturedProperties = (count?: number): Property[] => {
  const featured = [...saleProperties, ...rentProperties]
    .filter(p => p.featured)
    .sort((a, b) => b.price - a.price);
    
  return count ? featured.slice(0, count) : featured;
};

/**
 * Get properties by status
 */
export const getPropertiesByStatus = (status: PropertyStatus, count?: number): Property[] => {
  const filtered = [...saleProperties, ...rentProperties].filter(p => p.status === status);
  return count ? filtered.slice(0, count) : filtered;
};

/**
 * Get properties by type
 */
export const getPropertiesByType = (type: PropertyType, count?: number): Property[] => {
  const properties = type === 'sale' ? saleProperties : rentProperties;
  return count ? properties.slice(0, count) : properties;
};

/**
 * Find a property by ID
 */
export const getPropertyById = (id: string): Property | undefined => {
  return [...saleProperties, ...rentProperties].find(p => p.id === id);
};
