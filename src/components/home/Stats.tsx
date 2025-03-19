
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface StatsProps {
  className?: string;
}

const Stats = ({ className }: StatsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const statistics = [
    { value: 500, label: "Properties Sold", suffix: "+", startValue: 0 },
    { value: 1200, label: "Happy Clients", suffix: "+", startValue: 0 },
    { value: 15, label: "Years of Experience", suffix: "", startValue: 0 },
    { value: 98, label: "Client Satisfaction", suffix: "%", startValue: 0 }
  ];
  
  const [counts, setCounts] = useState(statistics.map(stat => stat.startValue));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => {
      if (statsElement) observer.unobserve(statsElement);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // ms
    const frameDuration = 1000 / 60; // 60 fps
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    const timerId = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const updatedCounts = statistics.map((stat, index) => {
        return Math.floor(progress * (stat.value - stat.startValue) + stat.startValue);
      });
      
      setCounts(updatedCounts);
      
      if (frame === totalFrames) {
        clearInterval(timerId);
      }
    }, frameDuration);
    
    return () => clearInterval(timerId);
  }, [isVisible]);

  return (
    <section 
      id="stats-section"
      className={cn(
        "py-16 bg-qatken-blue text-white",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Success in Numbers</h2>
          <p className="text-lg opacity-90">
            We take pride in our achievements and the trust our clients place in us.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 flex justify-center items-baseline">
                <span>{counts[index]}</span>
                <span className="text-qatken-orange">{stat.suffix}</span>
              </div>
              <p className="text-lg opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
