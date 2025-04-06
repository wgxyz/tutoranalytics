
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('email_signups')
        .insert({ email: email.trim() });
        
      if (error) {
        if (error.code === '23505') {
          toast.error("This email has already been registered");
        } else {
          toast.error("Error saving your email. Please try again.");
          console.error("Error inserting email:", error);
        }
      } else {
        toast.success("Thank you for your interest! We'll be in touch soon.");
        setEmail("");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-navy text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Your Tutoring Business?</h2>
          <p className="text-lg text-white/80 mb-10">
            Join our early access program and be among the first to experience the power of TutorAnalytics.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-full py-6 px-6 text-navy bg-white border-0 shadow-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="rounded-full py-6 px-8 bg-yellow text-navy hover:bg-yellow/90 hover:text-navy shadow-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Get Started"}
              </Button>
            </div>
          </form>
          
          <p className="text-sm text-white/60 mt-4">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
