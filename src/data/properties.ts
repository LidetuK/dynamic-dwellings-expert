
import { Property, PropertyType, PropertyStatus } from './propertyTypes';
import { saleProperties } from './saleProperties';
import { rentProperties } from './rentProperties';
import { 
  filterProperties, 
  getSimilarProperties, 
  getFeaturedProperties,
  getPropertiesByStatus,
  getPropertiesByType,
  getPropertyById
} from './propertyUtils';

// Export everything for backward compatibility
export type { Property, PropertyType, PropertyStatus };
export { 
  saleProperties, 
  rentProperties, 
  filterProperties,
  getSimilarProperties,
  getFeaturedProperties,
  getPropertiesByStatus,
  getPropertiesByType,
  getPropertyById
};
