
import React from "react";

interface DemoHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

const DemoHeader: React.FC<DemoHeaderProps> = ({ title, subtitle, badge }) => {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-blue text-2xl font-bold">{title}</h1>
        <div className="flex items-center gap-6">
          {subtitle && <span className="text-navy">{subtitle}</span>}
          {badge && <span className="bg-blue/10 text-blue py-1 px-3 rounded-md font-medium">{badge}</span>}
        </div>
      </div>
    </header>
  );
};

export default DemoHeader;
