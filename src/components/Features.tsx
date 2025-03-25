
import { useState, useEffect } from "react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Automated Transcription",
    description: "Advanced speech-to-text technology accurately transcribes every lesson, capturing valuable teacher-student interactions.",
    icon: "💬"
  },
  {
    id: 2,
    title: "Sentiment Analysis",
    description: "Measure student engagement and emotional response to different teaching approaches and content delivery.",
    icon: "📊"
  },
  {
    id: 3,
    title: "Quality Metrics",
    description: "Track key performance indicators like question frequency, response clarity, and student participation.",
    icon: "📈"
  },
  {
    id: 4,
    title: "Personalized Feedback",
    description: "Generate actionable insights for tutors to improve their teaching effectiveness and student connection.",
    icon: "🎯"
  },
  {
    id: 5,
    title: "Visual Reports",
    description: "Beautiful, easy-to-understand dashboards that highlight strengths and areas for improvement.",
    icon: "📱"
  },
  {
    id: 6,
    title: "Privacy Focused",
    description: "Secure, compliant data handling with options to anonymize student information while retaining valuable insights.",
    icon: "🔒"
  }
];

const Features = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-id'));
            if (!visibleItems.includes(id)) {
              setVisibleItems(prev => [...prev, id]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.feature-item').forEach(item => {
      observer.observe(item);
    });
    
    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="subtle-text text-primary mb-3">What We Offer</p>
          <h2 className="heading-lg mb-6">Cutting-Edge Features for Better Tutoring</h2>
          <p className="text-lg text-muted-foreground">
            Our AI-powered platform provides comprehensive analysis tools designed specifically for tutoring services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              data-id={feature.id}
              className={`feature-item glass-card p-8 transition-all duration-500 ease-out ${
                visibleItems.includes(feature.id) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
            >
              <div className="text-4xl mb-5">{feature.icon}</div>
              <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
