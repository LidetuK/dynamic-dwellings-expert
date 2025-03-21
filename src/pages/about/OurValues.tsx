
import React from 'react';
import { ArrowRight, Heart, ShieldCheck, Users, Lightbulb, Leaf, Award } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const OurValues = () => {
  const coreValues = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-qatken-orange" />,
      title: "Integrity",
      description: "We act with honesty, transparency, and ethical conduct in all our dealings. Our clients can trust that we always have their best interests at heart."
    },
    {
      icon: <Award className="h-10 w-10 text-qatken-orange" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, constantly raising the bar and exceeding expectations in our service delivery and property offerings."
    },
    {
      icon: <Users className="h-10 w-10 text-qatken-orange" />,
      title: "Client-Centered",
      description: "Our clients are at the heart of all we do. We listen attentively to their needs and work tirelessly to ensure their satisfaction and success."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-qatken-orange" />,
      title: "Innovation",
      description: "We embrace innovation and creative thinking to develop better solutions, improve our services, and stay ahead in a dynamic industry."
    },
    {
      icon: <Leaf className="h-10 w-10 text-qatken-orange" />,
      title: "Sustainability",
      description: "We are committed to sustainable practices that preserve resources, reduce our environmental footprint, and contribute to a healthier planet."
    },
    {
      icon: <Heart className="h-10 w-10 text-qatken-orange" />,
      title: "Community",
      description: "We believe in giving back to the communities we serve, supporting local initiatives, and building stronger, more vibrant neighborhoods."
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h1>
              <p className="text-xl opacity-90 mb-6">
                The principles and beliefs that shape our culture and guide our decisions every day.
              </p>
            </div>
          </div>
        </section>

        {/* Values Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">The Principles That Define Us</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                At Qatken Properties, our values are more than just words—they're the foundation of our company culture and the standards by which we measure our success.
              </p>
              <div className="prose prose-lg max-w-3xl mx-auto text-gray-600">
                <p>
                  These core values influence every aspect of our business, from how we interact with clients to how we develop our services and contribute to our communities. They reflect who we are as a company and what we stand for in the real estate industry.
                </p>
                <p>
                  We believe that by staying true to these values, we can build stronger relationships, deliver better outcomes, and make a positive impact on the world around us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Core Values</h2>
              <p className="text-gray-600">
                These six foundational values are at the heart of everything we do at Qatken Properties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values in Action */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Values in Action</h2>
              <p className="text-gray-600">
                See how we bring our values to life in our day-to-day operations and initiatives.
              </p>
            </div>

            <div className="space-y-12 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                      alt="Client Meeting" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-xl font-bold mb-3 text-qatken-blue">Client-Centered Approach</h3>
                    <p className="text-gray-600 mb-4">
                      We put our clients first by providing personalized consultations, regular updates throughout the property process, and after-sales support that ensures their complete satisfaction.
                    </p>
                    <p className="text-gray-600">
                      Our client satisfaction surveys consistently show ratings above 95%, reflecting our commitment to exceptional service and attention to individual needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex flex-row-reverse">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                      alt="Innovation Hub" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-xl font-bold mb-3 text-qatken-blue">Innovation in Practice</h3>
                    <p className="text-gray-600 mb-4">
                      Our innovation hub is dedicated to developing new technologies and approaches that enhance the real estate experience, from virtual property tours to AI-powered property matching.
                    </p>
                    <p className="text-gray-600">
                      We've implemented a paperless transaction system that has reduced our environmental impact while streamlining the buying and selling process for our clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1623177527058-654a33f63a6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                      alt="Community Project" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-xl font-bold mb-3 text-qatken-blue">Community Engagement</h3>
                    <p className="text-gray-600 mb-4">
                      Our team regularly volunteers for community improvement projects, from park cleanups to home renovation assistance for elderly residents.
                    </p>
                    <p className="text-gray-600">
                      Through our Qatken Cares initiative, we donate a portion of every transaction to local charities focused on housing security and community development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-qatken-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Experience Our Values</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Work with a real estate partner whose values align with what matters most to you.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-qatken-blue hover:bg-gray-100"
            >
              <Link to="/contact">
                Connect With Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurValues;
