
import { Property, PropertyType, PropertyStatus } from './propertyTypes';
import { saleProperties } from './saleProperties';
import { rentProperties } from './rentProperties';
import { filterProperties } from './propertyUtils';

// Export everything for backward compatibility
export type { Property, PropertyType, PropertyStatus };
export { saleProperties, rentProperties, filterProperties };
