
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, LineChart } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const FundsInvestments = () => {
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
              <span>REITs & Funds</span>
            </div>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">REITs & Property Funds</h1>
              <p className="text-xl opacity-90 mb-6">
                Diversified real estate investment trusts and property funds for passive income.
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
            <LineChart className="h-16 w-16 mx-auto text-qatken-blue mb-6" />
            <h2 className="text-3xl font-bold mb-6">Real Estate Investment Trusts & Funds</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              This page will detail our carefully selected REITs and property funds that offer diversified exposure to the real estate market with lower entry barriers.
            </p>
            <Button 
              asChild
              className="bg-qatken-blue hover:bg-qatken-blue/90"
            >
              <Link to="/contact">
                Request Fund Prospectus
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FundsInvestments;
