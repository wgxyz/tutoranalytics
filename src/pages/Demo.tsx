
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { AlertTriangle, Clock, BarChart3, MessageSquare, CheckSquare, Award, Users } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Demo = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Data for Key Conversion Drivers chart
  const keyConversionData = [
    {
      name: "Thoughtful Questions",
      value: 82,
    },
    {
      name: "Active Interaction",
      value: 58,
    },
    {
      name: "Student Speak Time",
      value: 30,
    },
  ];

  // Data for Speaking Time Distribution
  const speakingTimeData = [
    { name: "Tutor", value: 70, color: "#1d9bf0" },
    { name: "Student", value: 30, color: "#4ade80" },
  ];

  // Data for Qualitative Scores
  const qualitativeScoresData = [
    {
      name: "Professionalism",
      score: 8.6,
    },
    {
      name: "Friendliness",
      score: 9.2,
    },
    {
      name: "Student engagement",
      score: 7.1,
    },
  ];

  // Data for Key Elements Presence
  const keyElementsData = [
    {
      name: "Introduced themselves",
      percentage: 95,
    },
    {
      name: "Said goodbye",
      percentage: 88,
    },
    {
      name: "Asked if student liked lesson",
      percentage: 40,
    },
    {
      name: "Engaged in reasoning",
      percentage: 60,
    },
  ];

  // Data for Detailed Metrics
  const detailedMetricsData = [
    { metric: "Introduction", result: "100% of tutors", impact: "Medium" },
    { metric: "Proper Closing", result: "90% of tutors", impact: "Medium" },
    { metric: "Satisfaction Check", result: "Only 40% of tutors", impact: "High" },
    { metric: "Reasoning-based Interaction", result: "60% of lessons", impact: "Very High" },
    { metric: "Tutor Speaking Time", result: "70% of lesson", impact: "Negative" },
    { metric: "Student Speaking Time", result: "30% of lesson", impact: "Positive (needs increase)" },
  ];

  // Sample tutors data
  const tutorsData = [
    {
      id: 1,
      name: "Sarah Johnson",
      subject: "Mathematics",
      conversion: 82,
      studentSpeakTime: 42,
      engagement: 9.1,
      strengths: ["Clear explanations", "Patient approach", "Engaging questions"],
      improvements: ["Reduce speaking time", "Check for understanding more frequently"],
      riskLevel: "low"
    },
    {
      id: 2,
      name: "Michael Chen",
      subject: "Physics",
      conversion: 75,
      studentSpeakTime: 35,
      engagement: 8.3,
      strengths: ["Deep subject knowledge", "Real-world examples", "Structured lessons"],
      improvements: ["Increase student participation", "Simplify complex concepts"],
      riskLevel: "medium"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      subject: "Chemistry",
      conversion: 68,
      studentSpeakTime: 28,
      engagement: 7.4,
      strengths: ["Enthusiasm", "Well-prepared materials"],
      improvements: ["Allow more student exploration", "Reduce lecture portions", "More interactive elements"],
      riskLevel: "high"
    },
    {
      id: 4,
      name: "David Wilson",
      subject: "English Literature",
      conversion: 91,
      studentSpeakTime: 48,
      engagement: 9.6,
      strengths: ["Discussion-based approach", "Critical thinking focus", "Personalized feedback"],
      improvements: ["More structured note-taking guidance"],
      riskLevel: "low"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-blue text-2xl font-bold">TutorAnalytics</h1>
          <div className="flex items-center gap-6">
            <span className="text-navy">Trial Lesson Conversion Analysis</span>
            <span className="bg-blue/10 text-blue py-1 px-3 rounded-md font-medium">50 Lessons Analyzed</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-transparent border-b w-full justify-start p-0 h-auto mb-8">
            <TabsTrigger 
              value="overview" 
              className={`rounded-t-lg px-8 py-3 data-[state=active]:bg-blue data-[state=active]:text-white transition-colors ${activeTab === "overview" ? "bg-blue text-white" : "bg-white text-navy"}`}
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="detailed-metrics" 
              className={`rounded-t-lg px-8 py-3 data-[state=active]:bg-blue data-[state=active]:text-white transition-colors ${activeTab === "detailed-metrics" ? "bg-blue text-white" : "bg-white text-navy"}`}
            >
              Detailed Metrics
            </TabsTrigger>
            <TabsTrigger 
              value="tutors" 
              className={`rounded-t-lg px-8 py-3 data-[state=active]:bg-blue data-[state=active]:text-white transition-colors ${activeTab === "tutors" ? "bg-blue text-white" : "bg-white text-navy"}`}
            >
              Tutors Assessment
            </TabsTrigger>
            <TabsTrigger 
              value="alerts" 
              className={`rounded-t-lg px-8 py-3 data-[state=active]:bg-blue data-[state=active]:text-white transition-colors ${activeTab === "alerts" ? "bg-blue text-white" : "bg-white text-navy"}`}
            >
              Alerts
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab Content */}
          <TabsContent value="overview" className="space-y-8">
            {/* Key Conversion Drivers */}
            <Card className="shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-blue" />
                  <h2 className="text-lg font-semibold text-navy">Key Conversion Drivers</h2>
                </div>
                
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={keyConversionData}
                      layout="vertical"
                      margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                      <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                      <YAxis type="category" dataKey="name" tick={{ fill: '#0c2244' }} width={120} />
                      <Tooltip formatter={(value) => [`${value}%`, 'Value']} />
                      <Bar dataKey="value" fill="#9b87f5" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-4 bg-blue/10 p-4 rounded-md text-navy">
                  <p>Lessons with higher student interaction showed significantly better conversion rates. Focus on engagement!</p>
                </div>
              </CardContent>
            </Card>

            {/* Speaking Time Distribution */}
            <Card className="shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-5 h-5 text-blue" />
                  <h2 className="text-lg font-semibold text-navy">Speaking Time Distribution</h2>
                </div>
                
                <div className="h-72 flex justify-center items-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={speakingTimeData}
                        cx="50%"
                        cy="50%"
                        innerRadius={0}
                        outerRadius={100}
                        fill="#8884d8"
                        paddingAngle={0}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {speakingTimeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-4 bg-yellow/20 p-4 rounded-md text-navy">
                  <p>Tutors speak 70% of the time. Aim for more balanced interaction to improve engagement.</p>
                </div>
              </CardContent>
            </Card>

            {/* Qualitative Scores */}
            <Card className="shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-blue" />
                  <h2 className="text-lg font-semibold text-navy">Qualitative Scores</h2>
                </div>
                
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={qualitativeScoresData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis 
                        dataKey="name" 
                        tick={{ fill: '#0c2244' }}
                        angle={0}
                        textAnchor="middle"
                        interval={0}
                      />
                      <YAxis domain={[0, 10]} />
                      <Tooltip formatter={(value) => [value, 'Score']} />
                      <Bar dataKey="score" fill="#9b87f5" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-4 bg-lightgray p-4 rounded-md text-navy">
                  <p>Tutors score high on friendliness (9.2) and professionalism (8.6), but student engagement (7.1) has room for improvement.</p>
                </div>
              </CardContent>
            </Card>

            {/* Key Elements Presence */}
            <Card className="shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckSquare className="w-5 h-5 text-blue" />
                  <h2 className="text-lg font-semibold text-navy">Key Elements Presence</h2>
                </div>
                
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={keyElementsData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis 
                        dataKey="name" 
                        tick={{ fill: '#0c2244' }}
                        angle={0} 
                        textAnchor="middle"
                        height={60}
                        interval={0}
                      />
                      <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                      <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                      <Bar dataKey="percentage" fill="#9b87f5" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-4 bg-red-100 p-4 rounded-md text-red-700">
                  <p>Only 40% of tutors asked if students liked the lesson. This is a critical checkpoint for gauging satisfaction.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Detailed Metrics Tab Content */}
          <TabsContent value="detailed-metrics" className="space-y-8">
            <Card className="shadow-sm">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-6 text-navy">Detailed Metrics Analysis</h2>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3 text-navy font-semibold">METRIC</TableHead>
                      <TableHead className="w-1/3 text-navy font-semibold">RESULT</TableHead>
                      <TableHead className="w-1/3 text-navy font-semibold">IMPACT ON CONVERSION</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {detailedMetricsData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.metric}</TableCell>
                        <TableCell>{item.result}</TableCell>
                        <TableCell>
                          <span className={`${
                            item.impact === "Very High" ? "text-green-600" :
                            item.impact === "High" ? "text-green-500" :
                            item.impact === "Medium" ? "text-blue" :
                            item.impact === "Negative" ? "text-red-500" :
                            item.impact.includes("Positive") ? "text-green-500" : ""
                          }`}>
                            {item.impact}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tutors Assessment Tab Content */}
          <TabsContent value="tutors" className="space-y-8">
            <Card className="shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-6">
                  <Users className="w-5 h-5 text-blue" />
                  <h2 className="text-xl font-semibold text-navy">Tutor Performance Analysis</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tutorsData.map((tutor) => (
                    <Card key={tutor.id} className={`shadow-sm border-l-4 ${
                      tutor.riskLevel === "low" ? "border-l-green-500" :
                      tutor.riskLevel === "medium" ? "border-l-yellow-500" :
                      "border-l-red-500"
                    }`}>
                      <CardContent className="p-5">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-navy">{tutor.name}</h3>
                            <p className="text-sm text-gray-600">{tutor.subject}</p>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                            tutor.riskLevel === "low" ? "bg-green-100 text-green-800" :
                            tutor.riskLevel === "medium" ? "bg-yellow-100 text-yellow-800" :
                            "bg-red-100 text-red-800"
                          }`}>
                            {tutor.riskLevel === "low" ? "High Performer" :
                             tutor.riskLevel === "medium" ? "Average" :
                             "Needs Attention"}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mb-5">
                          <div className="bg-blue/5 p-3 rounded-lg">
                            <p className="text-sm text-gray-500">Conversion</p>
                            <p className="text-2xl font-bold text-navy">{tutor.conversion}%</p>
                          </div>
                          <div className="bg-blue/5 p-3 rounded-lg">
                            <p className="text-sm text-gray-500">Student Time</p>
                            <p className="text-2xl font-bold text-navy">{tutor.studentSpeakTime}%</p>
                          </div>
                          <div className="bg-blue/5 p-3 rounded-lg">
                            <p className="text-sm text-gray-500">Engagement</p>
                            <p className="text-2xl font-bold text-navy">{tutor.engagement}</p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                            <Award className="w-4 h-4 text-green-600 mr-1" />
                            Strengths
                          </h4>
                          <ul className="pl-6 list-disc text-sm text-navy">
                            {tutor.strengths.map((strength, idx) => (
                              <li key={idx}>{strength}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                            <AlertTriangle className="w-4 h-4 text-orange-500 mr-1" />
                            Areas for Improvement
                          </h4>
                          <ul className="pl-6 list-disc text-sm text-navy">
                            {tutor.improvements.map((improvement, idx) => (
                              <li key={idx}>{improvement}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Alerts Tab Content */}
          <TabsContent value="alerts" className="space-y-8">
            {/* Script Skipping Alert */}
            <Card className="shadow-sm border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-500">Script Skipping</h3>
                    <p className="text-2xl font-bold mt-2 mb-1 text-navy">3 tutors</p>
                    <p className="text-gray-600 mb-4">consistently skipped the school's trial script</p>
                    <p className="font-medium text-navy">Recommendation: Reinforce script importance in tutor training</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Missing Interaction Alert */}
            <Card className="shadow-sm border-l-4 border-l-orange-500">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-orange-500">Missing Interaction</h3>
                    <p className="text-2xl font-bold mt-2 mb-1 text-navy">2 lessons</p>
                    <p className="text-gray-600 mb-4">lacked basic student interaction checkpoints</p>
                    <p className="font-medium text-navy">Recommendation: Provide checkpoint templates for tutors</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Punctuality Issues Alert */}
            <Card className="shadow-sm border-l-4 border-l-yellow-500">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-500">Punctuality Issues</h3>
                    <p className="text-2xl font-bold mt-2 mb-1 text-navy">10 instances</p>
                    <p className="text-gray-600 mb-4">where tutors joined the trial lesson late</p>
                    <p className="font-medium text-navy">Recommendation: Set up calendar reminders 5 min before lessons</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-gray-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <p className="text-sm text-navy/60">© 2025 TutorAnalytics Dashboard</p>
          <p className="text-sm text-navy/60">Based on analysis of 50 trial lessons</p>
        </div>
      </footer>
    </div>
  );
};

export default Demo;
