
import { ExternalLink, TrendingUp, DollarSign, LineChart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const InvestmentOpportunities = () => {
  const opportunities = [
    {
      title: "Residential Development",
      description: "Join our residential property development projects with high appreciation potential in prime locations.",
      icon: <TrendingUp className="h-8 w-8 text-qatken-blue" />,
      roi: "12-15%"
    },
    {
      title: "Commercial Real Estate",
      description: "Invest in commercial properties with stable long-term rental income and capital appreciation.",
      icon: <DollarSign className="h-8 w-8 text-qatken-blue" />,
      roi: "8-10%"
    },
    {
      title: "REITs & Funds",
      description: "Diversify your portfolio with our carefully selected real estate investment trusts and property funds.",
      icon: <LineChart className="h-8 w-8 text-qatken-blue" />,
      roi: "7-9%"
    },
    {
      title: "Special Opportunities",
      description: "Access exclusive distressed property deals and unique investment opportunities with high returns.",
      icon: <Zap className="h-8 w-8 text-qatken-blue" />,
      roi: "15-20%"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Investment Opportunities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover high-yield real estate investment opportunities curated by our expert team to help you build wealth through property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {opportunity.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
              <p className="text-gray-600 mb-4">{opportunity.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-qatken-blue">ROI: {opportunity.roi}</span>
                <Link to="/buy/ongoing" className="text-qatken-blue hover:underline flex items-center">
                  Learn more <ExternalLink size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-qatken-blue hover:bg-qatken-blue/90">
            <Link to="/buy">Browse All Investment Properties</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;
