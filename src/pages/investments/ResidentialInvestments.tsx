
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, CircleDollarSign, TrendingUp, Award, Briefcase } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const ResidentialInvestments = () => {
  const residentialProperties = [
    {
      id: 1,
      title: "Premium Apartment Complex",
      location: "Dubai Marina",
      price: "From AED 1,200,000",
      roi: "10-12%",
      type: "Off-plan",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Premium Location", "High Rental Yield", "Payment Plan Available"]
    },
    {
      id: 2,
      title: "Luxury Villas",
      location: "Palm Jumeirah",
      price: "From AED 5,500,000",
      roi: "8-10%",
      type: "Ready",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Beachfront Access", "Premium Amenities", "High Capital Appreciation"]
    },
    {
      id: 3,
      title: "Urban Townhouses",
      location: "Dubai Hills",
      price: "From AED 2,300,000",
      roi: "9-11%",
      type: "Off-plan",
      image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Community Living", "Family-friendly", "Attractive Payment Plan"]
    },
    {
      id: 4,
      title: "Serviced Apartments",
      location: "Downtown Dubai",
      price: "From AED 950,000",
      roi: "10-13%",
      type: "Ready",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: ["Hotel Management", "Guaranteed Returns", "Prime Tourist Location"]
    }
  ];

  const whyResidential = [
    {
      icon: <CircleDollarSign className="h-6 w-6 text-qatken-blue" />,
      title: "Strong ROI",
      description: "Residential properties in premium areas offer returns between 8-12% annually."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-qatken-blue" />,
      title: "Capital Appreciation",
      description: "Property values in key residential areas have increased by 20-30% over the past 3 years."
    },
    {
      icon: <Home className="h-6 w-6 text-qatken-blue" />,
      title: "Rental Demand",
      description: "High demand for quality housing ensures consistent occupancy rates."
    },
    {
      icon: <Award className="h-6 w-6 text-qatken-blue" />,
      title: "Quality Assurance",
      description: "All properties are vetted for construction quality and investment potential."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative bg-qatken-blue text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm mb-4">
              <Link to="/" className="text-white/80 hover:text-white">Home</Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <Link to="/investments" className="text-white/80 hover:text-white">Investments</Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <span>Residential</span>
            </div>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Residential Investment Properties</h1>
              <p className="text-xl opacity-90 mb-6">
                Prime residential properties with strong rental yields and excellent appreciation potential.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-qatken-blue hover:bg-gray-100"
                >
                  <Link to="/contact">
                    Speak to an Advisor
                  </Link>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link to="#properties">
                    View Properties
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Invest in Residential */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Why Invest in Residential Properties</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyResidential.map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <div className="mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section id="properties" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Featured Investment Properties</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {residentialProperties.map((property) => (
                <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all hover:shadow-lg">
                  <div className="relative h-60">
                    <img 
                      src={property.image} 
                      alt={property.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-qatken-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                      {property.type}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{property.title}</h3>
                      <span className="text-qatken-blue font-bold">ROI: {property.roi}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{property.location}</p>
                    <p className="text-lg font-semibold mb-4">{property.price}</p>
                    
                    <Separator className="my-4" />
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {property.features.map((feature, idx) => (
                        <span 
                          key={idx} 
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <Button 
                      asChild
                      className="w-full bg-qatken-blue hover:bg-qatken-blue/90"
                    >
                      <Link to={`/property/${property.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="bg-white">
                <Link to="/buy">
                  View All Properties <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Investment Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Investment Process</h2>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-qatken-blue/20 md:transform md:-translate-x-1/2 hidden md:block"></div>
              
              {/* Steps */}
              <div className="space-y-12 relative">
                {[
                  { 
                    title: "Initial Consultation", 
                    description: "We start by understanding your investment goals, risk tolerance, and financial objectives.",
                    icon: <Briefcase className="h-8 w-8 text-white" />
                  },
                  { 
                    title: "Property Selection", 
                    description: "Our investment experts identify properties that match your criteria and have strong growth potential.",
                    icon: <Home className="h-8 w-8 text-white" />
                  },
                  { 
                    title: "Due Diligence", 
                    description: "We conduct thorough market analysis, property inspections, and legal verification.",
                    icon: <Award className="h-8 w-8 text-white" />
                  },
                  { 
                    title: "Investment & Acquisition", 
                    description: "We handle all aspects of the purchase process, ensuring a smooth transaction.",
                    icon: <CircleDollarSign className="h-8 w-8 text-white" />
                  },
                  { 
                    title: "Asset Management", 
                    description: "Ongoing management of your property investment with regular performance reports.",
                    icon: <TrendingUp className="h-8 w-8 text-white" />
                  }
                ].map((step, index) => (
                  <div key={index} className={`flex flex-col md:flex-row items-start md:items-center gap-8 relative ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 relative">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 md:hidden w-12 h-12 rounded-full bg-qatken-blue flex items-center justify-center">
                        {step.icon}
                      </div>
                      <div className={`pl-16 md:pl-0 ${index % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 transform w-12 h-12 rounded-full bg-qatken-blue items-center justify-center">
                      {step.icon}
                    </div>
                    
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-14 bg-qatken-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Investment Journey?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Our team of investment experts is ready to help you build a profitable real estate portfolio.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-qatken-blue hover:bg-gray-100"
            >
              <Link to="/contact">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResidentialInvestments;
