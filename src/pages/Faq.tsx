
import { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

// FAQ categories and items
const faqCategories = [
  {
    id: 'buying',
    label: 'Buying Property',
    items: [
      {
        question: 'What is the process of buying a property through Qatken Properties?',
        answer: 'The process typically involves property viewing, making an offer, signing a sale agreement, conducting due diligence, securing financing if needed, and completing the transaction with the transfer of ownership. Our agents will guide you through each step.'
      },
      {
        question: 'How do I know if a property is a good investment?',
        answer: 'A good investment property typically has factors like location in a growing area, potential for appreciation, good rental yield (if renting out), proximity to amenities, and structural integrity. Our property advisors can help assess the investment potential based on your goals.'
      },
      {
        question: 'What documents do I need when buying a property?',
        answer: 'You\'ll typically need identification documents, proof of income, bank statements, tax returns, and possibly additional documents depending on the property and financing arrangements. Our team will provide a specific checklist for your situation.'
      },
      {
        question: 'Can you help me secure financing for my property purchase?',
        answer: 'Yes, we partner with various financial institutions and can help connect you with mortgage providers offering competitive rates. Our finance advisors can assist in finding the right financing solution based on your financial situation.'
      }
    ]
  },
  {
    id: 'selling',
    label: 'Selling Property',
    items: [
      {
        question: 'How does Qatken Properties determine the selling price for my property?',
        answer: 'We conduct a comprehensive market analysis, evaluating comparable properties in your area, the condition of your property, market trends, and unique selling points to arrive at a competitive and realistic price.'
      },
      {
        question: 'What can I do to prepare my property for sale?',
        answer: 'Consider decluttering, minor repairs, deep cleaning, and possibly staging your property. First impressions matter, and a well-presented property attracts more interest and potentially higher offers. Our agents can provide specific recommendations for your property.'
      },
      {
        question: 'How long will it take to sell my property?',
        answer: 'The timeline varies based on market conditions, property type, location, pricing, and condition. On average, properties sell within 3-6 months, but this can be shorter or longer. Our goal is to sell at the best price in a reasonable timeframe.'
      },
      {
        question: 'What fees are involved in selling my property?',
        answer: 'Typical fees include our agency commission, legal fees, and possibly taxes depending on your location and the property value. We provide a clear breakdown of all costs upfront so there are no surprises.'
      }
    ]
  },
  {
    id: 'renting',
    label: 'Renting Property',
    items: [
      {
        question: 'What is the difference between furnished and unfurnished rentals?',
        answer: 'Furnished rentals come with essential furniture and appliances, allowing you to move in with minimal additional purchases. Unfurnished properties provide just the basic fixtures, requiring you to bring your own furniture. The rental price typically reflects this difference.'
      },
      {
        question: 'How much is the security deposit, and when will I get it back?',
        answer: 'The security deposit is usually equivalent to one or two months\' rent. It\'s refundable at the end of your lease, minus any deductions for damages beyond normal wear and tear or unpaid rent. The exact terms will be outlined in your lease agreement.'
      },
      {
        question: 'What is the typical lease duration for rental properties?',
        answer: 'Standard residential leases are typically 12 months, though we offer flexible terms including 6-month and 24-month options depending on the property and landlord preferences. Commercial leases often have longer terms, usually 3-5 years.'
      },
      {
        question: 'Can I make modifications to a rental property?',
        answer: 'Minor decorative changes like hanging pictures are usually permitted, but significant alterations require landlord approval. Always check your lease agreement and consult with your property manager before making any structural or permanent changes.'
      }
    ]
  },
  {
    id: 'general',
    label: 'General Questions',
    items: [
      {
        question: 'What areas does Qatken Properties serve?',
        answer: 'We operate throughout major urban and suburban areas in our region, with a particular focus on premium residential neighborhoods and commercial districts. Our portfolio includes properties in city centers, waterfront locations, gated communities, and emerging growth areas.'
      },
      {
        question: 'How do I schedule a property viewing?',
        answer: 'You can request a viewing through our website, by emailing info@qatkenproperties.com, or by calling our office at +123 456 7890. We accommodate both in-person and virtual viewings to suit your schedule and preferences.'
      },
      {
        question: 'What sets Qatken Properties apart from other real estate companies?',
        answer: 'Our combination of industry expertise, personalized service, extensive market knowledge, and commitment to transparent communication distinguishes us. We take pride in building long-term relationships with clients and finding solutions that truly meet their needs.'
      },
      {
        question: 'Do you handle commercial properties as well as residential?',
        answer: 'Yes, we have dedicated teams specializing in both residential and commercial real estate. Our commercial division handles office spaces, retail locations, industrial properties, and land for development, providing comprehensive services for business property needs.'
      }
    ]
  }
];

const FAQItem = ({ question, answer, isOpen, toggleOpen }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  toggleOpen: () => void;
}) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-5 px-4 text-left hover:bg-gray-50 focus:outline-none transition-colors"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-qatken-blue" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 px-4",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState('buying');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (categoryId: string, index: number) => {
    const itemKey = `${categoryId}-${index}`;
    setOpenItems(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));
  };

  const isItemOpen = (categoryId: string, index: number) => {
    const itemKey = `${categoryId}-${index}`;
    return !!openItems[itemKey];
  };

  // Filter FAQs based on search term
  const filteredFAQs = searchTerm
    ? faqCategories.map(category => ({
        ...category,
        items: category.items.filter(
          item =>
            item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchTerm.toLowerCase())
        ),
        filtered: true
      })).filter(category => category.items.length > 0)
    : faqCategories;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Page Header */}
        <section className="bg-qatken-blue text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-lg opacity-90 mb-6">
                Find answers to common questions about buying, selling, and renting properties with Qatken Properties.
              </p>
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input 
                  type="text" 
                  placeholder="Search for answers..." 
                  className="pl-10 py-6 bg-white text-gray-900 border-none focus:ring-2 focus:ring-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {searchTerm ? (
              // Search Results
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Search Results for "{searchTerm}"
                </h2>
                {filteredFAQs.length > 0 ? (
                  filteredFAQs.map(category => (
                    <div key={category.id} className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">{category.label}</h3>
                      <div className="bg-white rounded-lg shadow overflow-hidden">
                        {category.items.map((item, index) => (
                          <FAQItem 
                            key={index} 
                            question={item.question} 
                            answer={item.answer} 
                            isOpen={isItemOpen(category.id, index)}
                            toggleOpen={() => toggleItem(category.id, index)}
                          />
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 text-lg">No results found. Please try a different search term.</p>
                  </div>
                )}
              </div>
            ) : (
              // Category based view
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Category Navigation */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg shadow overflow-hidden sticky top-28">
                    <div className="p-4 bg-qatken-blue text-white">
                      <h3 className="text-lg font-medium">Categories</h3>
                    </div>
                    <nav className="p-2">
                      {faqCategories.map(category => (
                        <button
                          key={category.id}
                          className={cn(
                            "w-full text-left px-4 py-3 rounded-md transition-colors",
                            activeCategory === category.id
                              ? "bg-qatken-blue/10 text-qatken-blue font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          )}
                          onClick={() => setActiveCategory(category.id)}
                        >
                          {category.label}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* FAQ Content */}
                <div className="lg:col-span-3">
                  {faqCategories.find(cat => cat.id === activeCategory)?.items.length ? (
                    <>
                      <h2 className="text-2xl font-bold mb-6 text-gray-900">
                        {faqCategories.find(cat => cat.id === activeCategory)?.label}
                      </h2>
                      <div className="bg-white rounded-lg shadow overflow-hidden">
                        {faqCategories
                          .find(cat => cat.id === activeCategory)
                          ?.items.map((item, index) => (
                            <FAQItem 
                              key={index} 
                              question={item.question} 
                              answer={item.answer} 
                              isOpen={isItemOpen(activeCategory, index)}
                              toggleOpen={() => toggleItem(activeCategory, index)}
                            />
                          ))}
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 text-lg">No FAQs available for this category.</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Couldn't Find Your Answer?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you couldn't find the information you're looking for, our team is ready to assist you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+1234567890" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-qatken-blue hover:bg-qatken-blue/90"
              >
                Call Us
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-qatken-blue bg-white hover:bg-gray-50"
              >
                Contact Form
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Faq;
