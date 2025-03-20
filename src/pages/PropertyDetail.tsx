
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PropertyDetailComponent from '@/components/properties/PropertyDetail';
import { saleProperties, rentProperties, Property } from '@/data/properties';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [similarProperties, setSimilarProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the property by id
    const allProperties = [...saleProperties, ...rentProperties];
    const foundProperty = allProperties.find(prop => prop.id === id) || null;
    
    if (foundProperty) {
      setProperty(foundProperty);
      
      // Find similar properties (same type and status)
      const similar = allProperties
        .filter(p => 
          p.id !== id && 
          p.type === foundProperty.type && 
          p.status === foundProperty.status
        )
        .slice(0, 3);
      
      setSimilarProperties(similar);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-qatken-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading property details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Property Not Found</h2>
            <p className="text-gray-600 mb-6">The property you're looking for doesn't exist or has been removed.</p>
            <a href="/" className="text-qatken-blue hover:underline">Return to Homepage</a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PropertyDetailComponent 
          property={property} 
          similarProperties={similarProperties} 
        />
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
