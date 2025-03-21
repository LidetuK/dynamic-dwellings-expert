
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, LineChart, DollarSign, Briefcase, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const InvestmentsIndex = () => {
  const investmentCategories = [
    {
      id: 'residential',
      title: 'Residential Investments',
      description: 'Premium residential properties with high appreciation potential in prime locations.',
      icon: <TrendingUp className="h-12 w-12 text-qatken-blue" />,
      link: '/investments/residential',
      roi: '8-12%',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 'commercial',
      title: 'Commercial Real Estate',
      description: 'Strategic commercial property investments with stable long-term returns.',
      icon: <Briefcase className="h-12 w-12 text-qatken-blue" />,
      link: '/investments/commercial',
      roi: '7-9%',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
    },
    {
      id: 'funds',
      title: 'REITs & Property Funds',
      description: 'Diversified real estate investment trusts and property funds for passive income.',
      icon: <LineChart className="h-12 w-12 text-qatken-blue" />,
      link: '/investments/funds',
      roi: '6-8%',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 'special',
      title: 'Special Opportunities',
      description: 'Exclusive high-yield investment options for qualified investors.',
      icon: <DollarSign className="h-12 w-12 text-qatken-blue" />,
      link: '/investments/special',
      roi: '10-15%',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative bg-qatken-blue text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Investment Opportunities</h1>
              <p className="text-xl opacity-90 mb-8">
                Strategic real estate investments curated by our expert team to help you build wealth and secure your financial future.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-white text-qatken-blue hover:bg-gray-100"
              >
                <Link to="/contact">
                  Speak with an Investment Advisor
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Investment Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Explore Investment Options</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {investmentCategories.map((category) => (
                <div key={category.id} className="relative group overflow-hidden rounded-xl shadow-lg">
                  <div className="relative h-96">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <div className="mb-4">{category.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-white/80 mb-4">{category.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-white font-bold bg-qatken-blue/80 px-3 py-1 rounded-full text-sm">
                          Avg. ROI: {category.roi}
                        </span>
                        <Button 
                          asChild
                          size="sm"
                          variant="outline"
                          className="bg-white text-qatken-blue hover:bg-gray-100"
                        >
                          <Link to={category.link}>
                            Explore <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold mb-4">Why Invest with Qatken Properties?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-qatken-blue/10 p-1 rounded mr-2 text-qatken-blue mt-1">✓</span>
                      <span>Expert market analysis and investment advisory</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-qatken-blue/10 p-1 rounded mr-2 text-qatken-blue mt-1">✓</span>
                      <span>Diverse portfolio of investment opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-qatken-blue/10 p-1 rounded mr-2 text-qatken-blue mt-1">✓</span>
                      <span>Tailored investment strategies based on your goals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-qatken-blue/10 p-1 rounded mr-2 text-qatken-blue mt-1">✓</span>
                      <span>Comprehensive property management services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-qatken-blue/10 p-1 rounded mr-2 text-qatken-blue mt-1">✓</span>
                      <span>Transparent reporting and performance monitoring</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-qatken-blue hover:bg-qatken-blue/90 w-full md:w-auto"
                  >
                    <Link to="/contact">
                      Request Investment Brochure
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InvestmentsIndex;
