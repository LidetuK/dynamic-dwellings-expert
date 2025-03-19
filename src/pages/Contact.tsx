
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        action: (
          <div className="h-8 w-8 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-green-500" />
          </div>
        ),
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="bg-qatken-blue text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg opacity-90">
                Get in touch with our team for any inquiries or to schedule a consultation. We're here to help with all your real estate needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Get In Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-qatken-blue/10 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-qatken-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Our Location</h3>
                        <p className="text-gray-600 mt-1">
                          123 Real Estate Avenue<br />
                          City Center, Country
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-qatken-blue/10 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-qatken-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone Number</h3>
                        <p className="text-gray-600 mt-1">
                          <a href="tel:+1234567890" className="hover:text-qatken-blue transition-colors">
                            +123 456 7890
                          </a><br />
                          <a href="tel:+1234567891" className="hover:text-qatken-blue transition-colors">
                            +123 456 7891
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-qatken-blue/10 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-qatken-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email Address</h3>
                        <p className="text-gray-600 mt-1">
                          <a href="mailto:info@qatkenproperties.com" className="hover:text-qatken-blue transition-colors">
                            info@qatkenproperties.com
                          </a><br />
                          <a href="mailto:sales@qatkenproperties.com" className="hover:text-qatken-blue transition-colors">
                            sales@qatkenproperties.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-qatken-blue/10 p-3 rounded-full mr-4">
                        <Clock className="h-6 w-6 text-qatken-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Office Hours</h3>
                        <p className="text-gray-600 mt-1">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Media */}
                  <div className="mt-8">
                    <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
                    <div className="flex space-x-3">
                      <a 
                        href="#" 
                        className="bg-qatken-blue/10 p-3 rounded-full hover:bg-qatken-blue hover:text-white transition-colors"
                        aria-label="Facebook"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="bg-qatken-blue/10 p-3 rounded-full hover:bg-qatken-blue hover:text-white transition-colors"
                        aria-label="Twitter"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="bg-qatken-blue/10 p-3 rounded-full hover:bg-qatken-blue hover:text-white transition-colors"
                        aria-label="Instagram"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="bg-qatken-blue/10 p-3 rounded-full hover:bg-qatken-blue hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Send a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+123 456 7890"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full h-10 px-3 py-2 bg-white border border-gray-200 rounded-md focus:ring-qatken-blue focus:border-qatken-blue"
                        >
                          <option value="" disabled>Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="buying">Property Purchase</option>
                          <option value="selling">Property Sale</option>
                          <option value="renting">Property Rental</option>
                          <option value="valuation">Property Valuation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="How can we help you?"
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="bg-qatken-blue hover:bg-qatken-blue/90"
                      >
                        {isSubmitting ? (
                          <>
                            <svg 
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
                              xmlns="http://www.w3.org/2000/svg" 
                              fill="none" 
                              viewBox="0 0 24 24"
                            >
                              <circle 
                                className="opacity-25" 
                                cx="12" 
                                cy="12" 
                                r="10" 
                                stroke="currentColor" 
                                strokeWidth="4"
                              ></circle>
                              <path 
                                className="opacity-75" 
                                fill="currentColor" 
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" /> Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7799726767444!2d36.7831046!3d-1.2982317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f109be5eb1417%3A0xf5e2b028f698b066!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1625772931544!5m2!1sen!2sus" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Office Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
