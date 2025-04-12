
import React from "react";

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
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <p className="text-sm text-navy/60">{copyright}</p>
        <p className="text-sm text-navy/60">{info}</p>
      </div>
    </footer>
  );
};

export default DemoFooter;
