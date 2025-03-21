
import React from 'react';
import { ArrowRight, Target, Lightbulb, Globe } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const OurMission = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative bg-qatken-blue text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
              <p className="text-xl opacity-90 mb-6">
                Driving our purpose and guiding our actions in the real estate industry and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-3 bg-qatken-blue/10 text-qatken-blue rounded-full mb-6">
                <Target size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Mission Statement</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                To provide exceptional real estate services that exceed client expectations, creating lasting relationships built on trust, integrity, and results.
              </p>
              <div className="prose prose-lg max-w-3xl mx-auto text-gray-600">
                <p>
                  At Qatken Properties, we are dedicated to transforming the real estate experience through personalized service, innovative solutions, and unwavering commitment to our clients' success. We believe that finding the perfect property is more than a transaction—it's about building a foundation for dreams, investments, and futures.
                </p>
                <p>
                  Our mission extends beyond simply buying and selling properties. We aim to be trusted advisors who guide our clients through every step of their real estate journey, ensuring they make informed decisions that align with their goals and aspirations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-3 bg-qatken-blue/10 text-qatken-blue rounded-full mb-6">
                <Lightbulb size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Vision</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                To be the most trusted and respected real estate company, recognized for our commitment to excellence, innovation, and positive impact on the communities we serve.
              </p>
              <div className="prose prose-lg max-w-3xl mx-auto text-gray-600">
                <p>
                  We envision a future where Qatken Properties is synonymous with excellence in real estate, where our brand represents the highest standards of service, integrity, and expertise. We strive to be innovators in our field, constantly evolving our approaches and leveraging technology to enhance the client experience.
                </p>
                <p>
                  Our vision includes being a positive force in the communities where we operate, contributing to sustainable development, and helping to create vibrant, thriving neighborhoods where people love to live, work, and play.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Goals */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-qatken-blue/10 text-qatken-blue rounded-full mb-6">
                <Globe size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Strategic Goals</h2>
              <p className="text-gray-600">
                We are committed to achieving these strategic objectives that align with our mission and vision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Client Satisfaction",
                  description: "Achieve and maintain a 95% client satisfaction rate through personalized service and attention to detail."
                },
                {
                  title: "Market Leadership",
                  description: "Establish Qatken Properties as the market leader in our operating regions, known for quality and reliability."
                },
                {
                  title: "Innovation",
                  description: "Continuously innovate our services and processes to enhance efficiency and improve client experience."
                },
                {
                  title: "Team Excellence",
                  description: "Cultivate a team of highly skilled professionals who embody our values and deliver exceptional service."
                },
                {
                  title: "Sustainable Growth",
                  description: "Pursue strategic growth opportunities that align with our values and strengthen our market position."
                },
                {
                  title: "Community Impact",
                  description: "Make meaningful contributions to the communities we serve through initiatives and partnerships."
                }
              ].map((goal, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-qatken-blue">{goal.title}</h3>
                  <p className="text-gray-600">{goal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-qatken-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Share Our Vision</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join us in our mission to transform the real estate experience and create lasting value for our clients.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-qatken-blue hover:bg-gray-100"
            >
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurMission;
