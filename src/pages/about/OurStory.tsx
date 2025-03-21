
import React from 'react';
import { Calendar, ArrowRight, User } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const OurStory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative bg-qatken-blue text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
              <p className="text-xl opacity-90 mb-6">
                The journey of Qatken Properties from its humble beginnings to becoming a leading name in real estate.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">From Vision to Reality</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2008, Qatken Properties began as a small family business with a vision to transform the real estate landscape by providing exceptional service and unmatched property options.
                </p>
                <p className="text-gray-600 mb-4">
                  The founders, with their combined experience of over 30 years in the property market, recognized a gap in the industry for a customer-focused, transparent, and innovative real estate company.
                </p>
                <p className="text-gray-600 mb-6">
                  What started as a team of just five dedicated professionals has now grown into a company with over 100 experts across multiple departments, serving thousands of satisfied clients.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center">
                    <Calendar className="text-qatken-orange mr-2" size={20} />
                    <span className="text-gray-700 font-medium">Established 2008</span>
                  </div>
                  <div className="flex items-center">
                    <User className="text-qatken-orange mr-2" size={20} />
                    <span className="text-gray-700 font-medium">100+ Employees</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" 
                  alt="Qatken Properties Office" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Journey</h2>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-qatken-blue"></div>
              
              {/* Timeline Items */}
              <div className="space-y-16">
                {[
                  { year: "2008", title: "Foundation", description: "Qatken Properties was established with a focus on residential sales." },
                  { year: "2012", title: "Expansion", description: "Expanded services to include property rentals and management." },
                  { year: "2015", title: "Going Digital", description: "Launched our digital platform to enhance customer experience." },
                  { year: "2018", title: "International Market", description: "Entered the international real estate market with our first overseas property." },
                  { year: "2020", title: "Sustainability Focus", description: "Introduced our green property initiative for eco-friendly homes." },
                  { year: "2023", title: "Innovation Hub", description: "Launched our innovation hub to develop new real estate technologies." }
                ].map((item, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-qatken-blue z-10 flex items-center justify-center text-qatken-blue font-bold">
                      {item.year.substring(2)}
                    </div>
                    <div className={`w-1/2 p-6 bg-white rounded-lg shadow-md ${index % 2 === 0 ? 'text-right mr-8' : 'text-left ml-8'}`}>
                      <span className="block text-xl font-bold text-qatken-blue mb-1">{item.year}</span>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-qatken-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join the thousands of satisfied clients who have trusted Qatken Properties with their real estate needs.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-qatken-blue hover:bg-gray-100"
            >
              <Link to="/contact">
                Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurStory;
