
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Award, Users } from "lucide-react";

// Sample tutors data
const tutorsData = [
  {
    id: 1,
    name: "Sarah Johnson",
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
    conversion: 91,
    studentSpeakTime: 48,
    engagement: 9.6,
    strengths: ["Discussion-based approach", "Critical thinking focus", "Personalized feedback"],
    improvements: ["More structured note-taking guidance"],
    riskLevel: "low"
  },
];

const TutorsTab = () => {
  const isMobile = useIsMobile();

  return (
    <div className="space-y-8">
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-5 h-5 text-blue" />
            <h2 className="text-xl font-semibold text-navy">Tutor Performance Analysis</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {tutorsData.map((tutor) => (
              <Card key={tutor.id} className={`shadow-sm border-l-4 ${
                tutor.riskLevel === "low" ? "border-l-green-500" :
                tutor.riskLevel === "medium" ? "border-l-yellow-500" :
                "border-l-red-500"
              }`}>
                <CardContent className={`p-5 ${isMobile ? 'text-sm' : ''}`}>
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-navy">{tutor.name}</h3>
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
                  
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-5">
                    <div className="bg-blue/5 p-2 sm:p-3 rounded-lg">
                      <p className={`text-gray-500 ${isMobile ? 'text-xs' : 'text-sm'}`}>Conversion</p>
                      <p className={`font-bold text-navy ${isMobile ? 'text-xl' : 'text-2xl'}`}>{tutor.conversion}%</p>
                    </div>
                    <div className="bg-blue/5 p-2 sm:p-3 rounded-lg">
                      <p className={`text-gray-500 ${isMobile ? 'text-xs' : 'text-sm'}`}>Student Time</p>
                      <p className={`font-bold text-navy ${isMobile ? 'text-xl' : 'text-2xl'}`}>{tutor.studentSpeakTime}%</p>
                    </div>
                    <div className="bg-blue/5 p-2 sm:p-3 rounded-lg">
                      <p className={`text-gray-500 ${isMobile ? 'text-xs' : 'text-sm'}`}>Engagement</p>
                      <p className={`font-bold text-navy ${isMobile ? 'text-xl' : 'text-2xl'}`}>{tutor.engagement}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className={`font-medium text-gray-700 mb-1 flex items-center ${isMobile ? 'text-xs' : 'text-sm'}`}>
                      <Award className="w-4 h-4 text-green-600 mr-1" />
                      Strengths
                    </h4>
                    <ul className={`pl-6 list-disc text-navy ${isMobile ? 'text-xs' : 'text-sm'}`}>
                      {tutor.strengths.map((strength, idx) => (
                        <li key={idx}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className={`font-medium text-gray-700 mb-1 flex items-center ${isMobile ? 'text-xs' : 'text-sm'}`}>
                      <AlertTriangle className="w-4 h-4 text-orange-500 mr-1" />
                      Areas for Improvement
                    </h4>
                    <ul className={`pl-6 list-disc text-navy ${isMobile ? 'text-xs' : 'text-sm'}`}>
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
    </div>
  );
};

export default TutorsTab;
