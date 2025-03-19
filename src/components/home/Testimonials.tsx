
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialsProps {
  className?: string;
}

const Testimonials = ({ className }: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "Working with Qatken Properties was absolutely seamless. They understood our needs and found us our dream home within our budget. Their customer service was exceptional throughout the entire process.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Real Estate Investor",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "As an investor, I've worked with many real estate firms, but Qatken Properties stands out for their market knowledge and professionalism. They've helped me acquire multiple high-performing properties over the last three years.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "First-time Buyer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "Being a first-time homebuyer was intimidating, but the team at Qatken Properties guided me through every step. Their patience and expertise made what could have been a stressful experience into an exciting journey.",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className={cn("py-16 bg-white", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from some of our satisfied clients about their experience with Qatken Properties.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
                    <Quote className="text-qatken-blue mb-6 h-12 w-12" />
                    <p className="text-lg mb-8 text-gray-700 italic">"{testimonial.quote}"</p>
                    <div className="mt-auto">
                      <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border-2 border-qatken-blue">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-qatken-blue">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md text-qatken-blue hover:bg-qatken-blue hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md text-qatken-blue hover:bg-qatken-blue hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 mx-1 rounded-full transition-all",
                activeIndex === index 
                  ? "bg-qatken-blue" 
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
