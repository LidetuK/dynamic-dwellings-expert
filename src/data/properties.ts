
// Types for properties
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

// Sale properties
export const saleProperties: Property[] = [
  {
    id: "1",
    title: "Modern Apartment with City View",
    location: "Downtown, City Center",
    price: 12500000,
    beds: 3,
    baths: 2,
    area: 1200,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    type: 'sale',
    status: "completed",
    featured: true
  },
  {
    id: "2",
    title: "Luxury Family Home",
    location: "Suburban Hills, Westlands",
    price: 25000000,
    beds: 4,
    baths: 3,
    area: 2500,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    type: 'sale',
    status: "completed",
    featured: false
  },
  {
    id: "5",
    title: "Riverside Villa Development",
    location: "Riverside Estate, Lavington",
    price: 45000000,
    beds: 5,
    baths: 5,
    area: 4500,
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'sale',
    status: "ongoing",
    featured: true
  },
  {
    id: "7",
    title: "Modern Townhouse",
    location: "Spring Valley, Nairobi",
    price: 18500000,
    beds: 3,
    baths: 2,
    area: 1800,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'sale',
    status: "completed",
    featured: false
  },
  {
    id: "8",
    title: "Luxury Penthouse",
    location: "Upper Hill, Nairobi",
    price: 35000000,
    beds: 4,
    baths: 3,
    area: 2200,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'sale',
    status: "completed",
    featured: false
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
    type: 'sale',
    status: "ongoing",
    featured: true
  },
  {
    id: "10",
    title: "Urban Apartment",
    location: "Kilimani, Nairobi",
    price: 9800000,
    beds: 2,
    baths: 2,
    area: 950,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'sale',
    status: "completed",
    featured: false
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
    type: 'sale',
    status: "ongoing",
    featured: true
  }
];

// Rent properties
export const rentProperties: Property[] = [
  {
    id: "3",
    title: "Cozy Studio Apartment",
    location: "Arts District, Eastlands",
    price: 45000,
    beds: 1,
    baths: 1,
    area: 650,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    type: 'rent',
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
    type: 'rent',
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
    type: 'rent',
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
    type: 'rent',
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
    type: 'rent',
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
    type: 'rent',
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
    type: 'rent',
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
    type: 'rent',
    status: "commercial",
    featured: true
  }
];

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
