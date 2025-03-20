
// Property type definitions
export type PropertyType = 'sale' | 'rent';
export type PropertyStatus = 'completed' | 'ongoing' | 'furnished' | 'unfurnished' | 'commercial';

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  area: number;
  image: string;
  type: PropertyType;
  status: PropertyStatus;
  featured: boolean;
}
