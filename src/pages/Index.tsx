
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <section className="bg-primary text-white text-center py-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to improve your tutoring sessions?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Sign up today and start getting AI-powered insights into your tutoring sessions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Sign Up
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" className="text-white hover:bg-white hover:text-primary">
                Log In
              </Button>
            </Link>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
