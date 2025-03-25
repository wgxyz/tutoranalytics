
import { useState, useEffect, useRef } from "react";

interface Step {
  id: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Record Tutoring Sessions",
    description: "Easily record one-on-one or group tutoring sessions with our simple, privacy-focused recording tools."
  },
  {
    id: 2,
    title: "AI Transcription & Analysis",
    description: "Our platform automatically transcribes the session and analyzes the interaction patterns, teaching techniques, and student engagement."
  },
  {
    id: 3,
    title: "Review Comprehensive Insights",
    description: "Receive detailed reports highlighting strengths, opportunities for improvement, and specific action items."
  },
  {
    id: 4,
    title: "Implement Targeted Improvements",
    description: "Use the AI-generated recommendations to coach tutors and enhance the quality of future sessions."
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev % steps.length) + 1);
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="py-20 lg:py-28 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="subtle-text text-primary mb-3">The Process</p>
          <h2 className="heading-lg mb-6">How TutorInsight Works</h2>
          <p className="text-lg text-muted-foreground">
            Our streamlined process turns tutoring sessions into actionable insights with minimal effort.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:translate-x-[-1px]"></div>
            
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse text-right' : ''
                }`}
              >
                {/* Step circle */}
                <div className="flex items-center justify-center z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-all duration-300 ${
                      activeStep === step.id 
                        ? 'bg-primary text-white scale-110 shadow-lg' 
                        : 'bg-white text-primary border-2 border-primary'
                    }`}
                  >
                    {step.id}
                  </div>
                </div>
                
                {/* Content */}
                <div 
                  className={`w-full md:w-[calc(50%-3rem)] glass-card p-8 transition-all duration-500 ${
                    activeStep === step.id 
                      ? 'opacity-100 scale-105 shadow-lg' 
                      : 'opacity-80 scale-100'
                  }`}
                >
                  <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {/* Empty div for alignment */}
                <div className="hidden md:block w-[calc(50%-3rem)]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
