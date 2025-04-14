
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DemoHeader from "../components/demo/DemoHeader";
import DemoFooter from "../components/demo/DemoFooter";
import OverviewTab from "../components/demo/OverviewTab";
import DetailedMetricsTab from "../components/demo/DetailedMetricsTab";
import TutorsTab from "../components/demo/TutorsTab";
import AlertsTab from "../components/demo/AlertsTab";
import { useIsMobile } from "@/hooks/use-mobile";

const Demo = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <DemoHeader 
        title="TutorAnalytics" 
        subtitle="Trial Lesson Conversion Analysis" 
        badge="50 Lessons Analyzed" 
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className={`bg-transparent border-b w-full justify-start p-0 h-auto mb-8 ${isMobile ? 'flex-wrap gap-2' : ''}`}>
            <TabsTrigger 
              value="overview" 
              className={`rounded-t-lg ${isMobile ? 'px-4 py-2 text-sm flex-1' : 'px-8 py-3'} data-[state=active]:bg-blue data-[state=active]:text-white transition-colors ${activeTab === "overview" ? "bg-blue text-white" : "bg-white text-navy"}`}
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="detailed-metrics" 
              className={`rounded-t-lg ${isMobile ? 'px-4 py-2 text-sm flex-1' : 'px-8 py-3'} data-[state=active]:bg-blue data-[state=active]:text-white transition-colors ${activeTab === "detailed-metrics" ? "bg-blue text-white" : "bg-white text-navy"}`}
            >
              {isMobile ? "Metrics" : "Detailed Metrics"}
            </TabsTrigger>
            <TabsTrigger 
              value="tutors" 
              className={`rounded-t-lg ${isMobile ? 'px-4 py-2 text-sm flex-1' : 'px-8 py-3'} data-[state=active]:bg-blue data-[state=active]:text-white transition-colors ${activeTab === "tutors" ? "bg-blue text-white" : "bg-white text-navy"}`}
            >
              Tutors
            </TabsTrigger>
            <TabsTrigger 
              value="alerts" 
              className={`rounded-t-lg ${isMobile ? 'px-4 py-2 text-sm flex-1' : 'px-8 py-3'} data-[state=active]:bg-blue data-[state=active]:text-white transition-colors ${activeTab === "alerts" ? "bg-blue text-white" : "bg-white text-navy"}`}
            >
              Alerts
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <TabsContent value="overview">
            <OverviewTab />
          </TabsContent>

          <TabsContent value="detailed-metrics">
            <DetailedMetricsTab />
          </TabsContent>

          <TabsContent value="tutors">
            <TutorsTab />
          </TabsContent>

          <TabsContent value="alerts">
            <AlertsTab />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <DemoFooter />
    </div>
  );
};

export default Demo;
