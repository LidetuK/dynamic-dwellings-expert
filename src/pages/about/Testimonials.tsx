
import React from 'react';
import { Star, User, Award, Quote } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  // Featured testimonials with more detailed information
  const featuredTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      location: "Dubai Marina",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "Working with Qatken Properties was absolutely seamless. They understood our needs and found us our dream home within our budget. Their customer service was exceptional throughout the entire process. I highly recommend them to anyone looking to buy property in Dubai.",
      propertyType: "3-Bedroom Apartment"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Real Estate Investor",
      location: "Downtown Dubai",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "As an investor, I've worked with many real estate firms, but Qatken Properties stands out for their market knowledge and professionalism. They've helped me acquire multiple high-performing properties over the last three years and have consistently delivered excellent returns on my investments.",
      propertyType: "Commercial Properties"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "First-time Buyer",
      location: "Jumeirah Village Circle",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "Being a first-time homebuyer was intimidating, but the team at Qatken Properties guided me through every step. Their patience and expertise made what could have been a stressful experience into an exciting journey. I'm now happily settled in my new home and couldn't be more grateful.",
      propertyType: "1-Bedroom Apartment"
    }
  ];

  // Additional testimonials
  const additionalTestimonials = [
    {
      id: 4,
      name: "David Thompson",
      role: "Property Developer",
      rating: 5,
      quote: "Qatken Properties has been an invaluable partner in our development projects. Their market insights and sales strategies have contributed significantly to our success."
    },
    {
      id: 5,
      name: "Aisha Mahmoud",
      role: "Luxury Home Buyer",
      rating: 5,
      quote: "The personalized service I received from Qatken was exceptional. They found me a stunning waterfront villa that exceeded all my expectations."
    },
    {
      id: 6,
      name: "Robert Keller",
      role: "Commercial Tenant",
      rating: 4,
      quote: "We needed office space on short notice, and Qatken Properties delivered. Their commercial team found us the perfect location within our timeframe."
    },
    {
      id: 7,
      name: "Michelle Wong",
      role: "Property Seller",
      rating: 5,
      quote: "Qatken marketed my property brilliantly and secured a sale price well above my expectations. The entire process was smooth and professional."
    },
    {
      id: 8,
      name: "John Patel",
      role: "Long-term Investor",
      rating: 5,
      quote: "I've been investing with Qatken's guidance for over 5 years. Their investment strategy recommendations have consistently yielded strong returns."
    },
    {
      id: 9,
      name: "Sophia Martinez",
      role: "Residential Tenant",
      rating: 4,
      quote: "Qatken's property management team is responsive and efficient. Any maintenance issues are resolved quickly, making renting through them a pleasure."
    }
  ];

  // Render stars based on rating
  const renderRating = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative bg-qatken-blue text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
              <p className="text-xl opacity-90 mb-6">
                See what our clients have to say about their experience working with Qatken Properties.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Featured Success Stories</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:shadow-xl hover:-translate-y-1">
                  <div className="bg-gray-50 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-qatken-blue mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                          <p className="text-qatken-blue">{testimonial.role}</p>
                          <p className="text-gray-600 text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {renderRating(testimonial.rating)}
                      </div>
                    </div>
                    <div className="mb-2">
                      <span className="inline-block bg-qatken-lightgray text-qatken-blue text-sm px-3 py-1 rounded-full">
                        {testimonial.propertyType}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <Quote className="text-qatken-blue mb-4 h-8 w-8 opacity-50" />
                    <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Testimonials Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">More Client Experiences</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <div className="flex">
                      {renderRating(testimonial.rating)}
                    </div>
                  </div>
                  <p className="text-qatken-blue text-sm mb-3">{testimonial.role}</p>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-14 bg-qatken-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Share Your Story?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Whether you're looking for your dream home or seeking investment opportunities, we're here to help you write your own success story.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-qatken-blue hover:bg-gray-100"
            >
              <Link to="/contact">
                Contact Us Today
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
