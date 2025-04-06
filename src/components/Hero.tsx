
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 lg:pt-36 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-lightgray to-white -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-yellow/20 rounded-full blur-3xl -z-10" />
      
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`transition-all duration-700 delay-100 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="subtle-text text-blue mb-4">Revolutionizing Tutoring Quality</p>
            <h1 className="heading-xl mb-6 text-navy">
              AI-Powered Analysis for
              <br />
              <span className="text-blue">Tutoring Excellence</span>
            </h1>
            <p className="text-xl text-navy/80 mb-8 max-w-2xl mx-auto">
              Record lessons, analyze tutor-student interactions, and gain insights to improve 
              educational outcomes and ensure teaching quality.
            </p>
          </div>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-base shadow-lg bg-blue hover:bg-blue/90 text-white"
              onClick={scrollToContact}
            >
              Request a Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 py-6 text-base border-2 border-navy text-navy hover:bg-navy/5"
              onClick={scrollToContact}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
