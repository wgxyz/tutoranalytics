
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Presentation, ArrowRightCircle } from "lucide-react";

const DemoSection = () => {
  return (
    <section id="demo" className="py-20 bg-blue/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="heading-lg mb-4 text-navy">See TutorAnalytics in Action</h2>
            <p className="text-lg text-navy/80 mb-6">
              Experience how TutorAnalytics transforms tutoring data into actionable insights. 
              Our interactive demo showcases real-time analytics, tutor performance metrics, 
              and conversion rate optimization tools.
            </p>
            <Link to="/demo">
              <Button 
                className="group rounded-full px-6 py-6 shadow-md bg-blue hover:bg-blue/90 text-white flex items-center gap-2"
              >
                <Presentation className="w-5 h-5" />
                <span>View Interactive Demo</span>
                <ArrowRightCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="w-full md:w-1/2 p-4 bg-white rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-12 bg-gray-50 border-b flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4 text-sm font-medium text-gray-500">TutorAnalytics Demo</div>
            </div>
            
            <div className="pt-12 pb-4">
              <div className="overflow-hidden rounded-lg relative">
                <img 
                  src="/lovable-uploads/1e575038-a793-4777-8ae6-1e3d29b8d3d3.png" 
                  alt="TutorAnalytics Demo Dashboard" 
                  className="w-full h-auto object-cover border"
                  style={{ height: "300px" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 p-4 rounded-lg shadow-lg backdrop-blur-sm">
                    <Link to="/demo" className="inline-block">
                      <Button variant="outline" className="bg-blue text-white border-none hover:bg-blue/90">
                        Try Interactive Dashboard
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
