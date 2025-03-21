
import React from 'react';
import { ArrowRight, User, Mail, Phone as PhoneIcon } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const OurTeam = () => {
  const executives = [
    { 
      name: "John Doe", 
      position: "Chief Executive Officer",
      bio: "With over 20 years of experience in real estate and a passion for exceptional service.",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      email: "john.doe@qatken.com",
      phone: "+1 234 567 890"
    },
    { 
      name: "Jane Smith", 
      position: "Chief Operations Officer",
      bio: "Jane brings 15 years of operational excellence and strategic planning to our leadership team.",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      email: "jane.smith@qatken.com",
      phone: "+1 234 567 891"
    },
    { 
      name: "Michael Johnson", 
      position: "Director of Sales",
      bio: "Leading our sales team with innovation and results-driven strategies for over a decade.",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
      email: "michael.johnson@qatken.com",
      phone: "+1 234 567 892"
    },
    { 
      name: "Emily Brown", 
      position: "Director of Marketing",
      bio: "Driving our brand strategy with creativity and data-driven marketing approaches.",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
      email: "emily.brown@qatken.com",
      phone: "+1 234 567 893"
    },
  ];

  const departments = [
    {
      name: "Sales Team",
      description: "Our dedicated sales team works tirelessly to match clients with their perfect properties.",
      members: [
        { name: "David Wilson", position: "Senior Sales Manager", image: "https://randomuser.me/api/portraits/men/15.jpg" },
        { name: "Sarah Davis", position: "Property Consultant", image: "https://randomuser.me/api/portraits/women/16.jpg" },
        { name: "Robert Miller", position: "Sales Executive", image: "https://randomuser.me/api/portraits/men/17.jpg" }
      ]
    },
    {
      name: "Property Management",
      description: "Ensuring all our properties are well-maintained and clients receive the best service.",
      members: [
        { name: "Jessica Taylor", position: "Head of Property Management", image: "https://randomuser.me/api/portraits/women/18.jpg" },
        { name: "Thomas Anderson", position: "Property Manager", image: "https://randomuser.me/api/portraits/men/19.jpg" },
        { name: "Lisa Martinez", position: "Maintenance Coordinator", image: "https://randomuser.me/api/portraits/women/20.jpg" }
      ]
    },
    {
      name: "Customer Service",
      description: "Dedicated to providing exceptional support and assistance to all our clients.",
      members: [
        { name: "Kevin Harris", position: "Customer Service Manager", image: "https://randomuser.me/api/portraits/men/21.jpg" },
        { name: "Jennifer Clark", position: "Client Relations Specialist", image: "https://randomuser.me/api/portraits/women/22.jpg" },
        { name: "Daniel Lewis", position: "Support Representative", image: "https://randomuser.me/api/portraits/men/23.jpg" }
      ]
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
              <p className="text-xl opacity-90 mb-6">
                Meet the exceptional professionals who make Qatken Properties a leader in the real estate industry.
              </p>
            </div>
          </div>
        </section>

        {/* Executive Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Leadership Team</h2>
              <p className="text-gray-600">
                Meet the experienced professionals who lead our company with vision, expertise, and a commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {executives.map((exec, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={exec.image} 
                    alt={exec.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{exec.name}</h3>
                    <p className="text-qatken-blue mb-3">{exec.position}</p>
                    <p className="text-gray-600 text-sm mb-4">{exec.bio}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="h-4 w-4 mr-2 text-qatken-orange" />
                        <span>{exec.email}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <PhoneIcon className="h-4 w-4 mr-2 text-qatken-orange" />
                        <span>{exec.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Departments</h2>
              <p className="text-gray-600">
                Each department at Qatken Properties plays a vital role in ensuring we deliver exceptional service and value.
              </p>
            </div>

            <div className="space-y-16">
              {departments.map((dept, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-qatken-blue mb-2">{dept.name}</h3>
                    <p className="text-gray-600 mb-6">{dept.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {dept.members.map((member, mIndex) => (
                        <div key={mIndex} className="flex items-center space-x-4">
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900">{member.name}</h4>
                            <p className="text-sm text-gray-600">{member.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-20 bg-qatken-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our growing team. Check out our current openings.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-qatken-blue hover:bg-gray-100"
            >
              <Link to="/contact">
                View Careers <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurTeam;
