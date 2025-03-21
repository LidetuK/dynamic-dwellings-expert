
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, DollarSign } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const SpecialInvestments = () => {
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
              <span>Special Opportunities</span>
            </div>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Special Investment Opportunities</h1>
              <p className="text-xl opacity-90 mb-6">
                Exclusive high-yield investment options for qualified investors.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-white text-qatken-blue hover:bg-gray-100"
              >
                <Link to="/contact">
                  Speak to an Advisor
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Content Placeholder */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <DollarSign className="h-16 w-16 mx-auto text-qatken-blue mb-6" />
            <h2 className="text-3xl font-bold mb-6">Special Investment Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              This page will feature our exclusive investment opportunities including distressed properties, pre-launch projects, and other high-return investments available to qualified investors.
            </p>
            <Button 
              asChild
              className="bg-qatken-blue hover:bg-qatken-blue/90"
            >
              <Link to="/contact">
                Apply for Investor Access
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SpecialInvestments;
