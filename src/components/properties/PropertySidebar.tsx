
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Property } from '@/data/properties';

interface PropertySidebarProps {
  property: Property;
}

const PropertySidebar = ({ property }: PropertySidebarProps) => {
  return (
    <div className="col-span-1">
      {/* Contact Agent */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4">Contact Agent</h3>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                alt="Agent"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold">John Doe</h4>
              <p className="text-sm text-gray-500">Real Estate Agent</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qatken-blue"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qatken-blue"
              />
            </div>
            <div className="relative">
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qatken-blue"
              />
            </div>
            <div className="relative">
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qatken-blue"
                defaultValue={`I'm interested in ${property.title}. Please contact me with more information.`}
              />
            </div>
            <Button className="w-full bg-qatken-blue hover:bg-qatken-blue/90">
              Send Message
            </Button>
            <Button variant="outline" className="w-full">
              Call Agent
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Property Document */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4">Property Document</h3>
          <Button variant="outline" className="w-full flex items-center justify-center">
            <Download size={18} className="mr-2" />
            Download Brochure
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertySidebar;
