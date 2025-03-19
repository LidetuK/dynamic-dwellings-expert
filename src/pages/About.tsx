
import { CheckCircle, ArrowRight, User, Trophy, Calendar } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative bg-qatken-blue text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Qatken Properties</h1>
              <p className="text-xl opacity-90 mb-6">
                A trusted name in real estate, committed to excellence and customer satisfaction for over 15 years.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2008, Qatken Properties began as a small family business with a vision to transform the real estate landscape by providing exceptional service and unmatched property options.
                </p>
                <p className="text-gray-600 mb-4">
                  Over the years, we have grown into one of the region's most respected real estate companies, with a portfolio of prestigious properties and a reputation for integrity, professionalism, and reliability.
                </p>
                <p className="text-gray-600 mb-6">
                  Our journey has been guided by our commitment to excellence and our dedication to helping our clients find their perfect properties, whether for personal use or investment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center">
                    <Calendar className="text-qatken-orange mr-2" size={20} />
                    <span className="text-gray-700 font-medium">Established 2008</span>
                  </div>
                  <div className="flex items-center">
                    <Trophy className="text-qatken-orange mr-2" size={20} />
                    <span className="text-gray-700 font-medium">Award-winning Service</span>
                  </div>
                  <div className="flex items-center">
                    <User className="text-qatken-orange mr-2" size={20} />
                    <span className="text-gray-700 font-medium">1500+ Happy Clients</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" 
                  alt="Qatken Properties Office" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <img 
                    src="/lovable-uploads/5a2f12d1-d188-4557-bc33-4f2a68ba8f70.png" 
                    alt="Qatken Properties Logo" 
                    className="h-24"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission & Values</h2>
              <p className="text-gray-600">
                At Qatken Properties, we are driven by a set of core values that guide our operations and interactions with clients, partners, and the community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="inline-flex items-center justify-center p-3 bg-qatken-blue/10 text-qatken-blue rounded-lg mb-4">
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                </div>
                <p className="text-gray-600">
                  To provide exceptional real estate services that exceed client expectations, creating lasting relationships built on trust, integrity, and results.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="inline-flex items-center justify-center p-3 bg-qatken-blue/10 text-qatken-blue rounded-lg mb-4">
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                </div>
                <p className="text-gray-600">
                  To be the most trusted and respected real estate company, recognized for our commitment to excellence, innovation, and positive impact on the communities we serve.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="inline-flex items-center justify-center p-3 bg-qatken-blue/10 text-qatken-blue rounded-lg mb-4">
                  <h3 className="text-xl font-semibold">Our Values</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-qatken-orange mr-2 shrink-0 mt-1" size={18} />
                    <span className="text-gray-600">Integrity in all dealings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-qatken-orange mr-2 shrink-0 mt-1" size={18} />
                    <span className="text-gray-600">Excellence in service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-qatken-orange mr-2 shrink-0 mt-1" size={18} />
                    <span className="text-gray-600">Client-centered approach</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-qatken-orange mr-2 shrink-0 mt-1" size={18} />
                    <span className="text-gray-600">Innovation and adaptability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Leadership Team</h2>
              <p className="text-gray-600">
                Meet the experienced professionals who lead our company with vision, expertise, and a commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 10}.jpg`} 
                    alt="Team Member" 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900">John Doe {i}</h3>
                    <p className="text-qatken-blue mb-2">{
                      i === 1 ? 'Chief Executive Officer' : 
                      i === 2 ? 'Chief Operations Officer' : 
                      i === 3 ? 'Director of Sales' : 
                      'Director of Marketing'
                    }</p>
                    <p className="text-gray-600 text-sm">
                      With over {10 + i * 2} years of experience in real estate and a passion for exceptional service.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-qatken-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Whether you're looking to buy, sell, or rent a property, our team is ready to assist you every step of the way.
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

export default About;
