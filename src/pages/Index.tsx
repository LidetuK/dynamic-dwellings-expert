
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import Services from '@/components/home/Services';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Animation for elements on scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        
        <div className="animate-on-scroll">
          <FeaturedProperties />
        </div>
        
        <div className="animate-on-scroll">
          <Services />
        </div>
        
        <div className="animate-on-scroll">
          <CallToAction />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
