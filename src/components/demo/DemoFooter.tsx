
import React from "react";
import { Link } from "react-router-dom";
import { InfoIcon } from "lucide-react";

interface DemoFooterProps {
  copyright?: string;
  info?: string;
}

const DemoFooter: React.FC<DemoFooterProps> = ({ 
  copyright = "© 2025 TutorAnalytics Dashboard", 
  info = "Based on analysis of 50 trial lessons" 
}) => {
  return (
    <footer className="border-t border-border bg-gray-50">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-sm text-navy/60">{copyright}</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <InfoIcon className="h-4 w-4 text-blue/70" />
            <p className="text-sm text-navy/60">{info}</p>
          </div>
          <Link to="/" className="text-sm text-blue hover:underline">Back to Homepage</Link>
        </div>
      </div>
    </footer>
  );
};

export default DemoFooter;
