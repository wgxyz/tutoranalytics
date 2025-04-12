
import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

interface DemoHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

const DemoHeader: React.FC<DemoHeaderProps> = ({ title, subtitle, badge }) => {
  return (
    <header className="border-b border-border bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-blue hover:text-blue/80 transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-blue text-2xl font-bold">{title}</h1>
        </div>
        <div className="flex items-center gap-6">
          {subtitle && <span className="text-navy hidden md:inline-block">{subtitle}</span>}
          {badge && <span className="bg-blue/10 text-blue py-1 px-3 rounded-md font-medium">{badge}</span>}
        </div>
      </div>
    </header>
  );
};

export default DemoHeader;
