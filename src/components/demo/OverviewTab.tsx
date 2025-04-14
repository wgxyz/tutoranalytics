
import { useIsMobile } from "@/hooks/use-mobile";
import { BarChart3, MessageSquare, CheckSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
  Legend,
} from "recharts";

// Data for Key Conversion Drivers chart
const keyConversionData = [
  {
    name: "Student Speak Time",
    value: 66,
  },
  {
    name: "Active Interaction",
    value: 80,
  },
  {
    name: "Thoughtful Questions",
    value: 50,
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

const OverviewTab = () => {
  const isMobile = useIsMobile();

  return (
    <div className="space-y-8">
      {/* Key Conversion Drivers */}
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-blue" />
            <h2 className="text-lg font-semibold text-navy">Key Conversion Drivers</h2>
          </div>
          
          <div className={isMobile ? "h-60" : "h-72"}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={keyConversionData}
                layout="vertical"
                margin={isMobile ? { top: 20, right: 20, left: 80, bottom: 5 } : { top: 20, right: 30, left: 120, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  tick={{ fill: '#0c2244' }} 
                  width={isMobile ? 80 : 120}
                  fontSize={isMobile ? 10 : 12}
                />
                <Tooltip formatter={(value) => [`${value}%`, 'Value']} />
                <Bar dataKey="value" fill="#9b87f5" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 bg-blue/10 p-4 rounded-md text-navy">
            <p className={isMobile ? "text-sm" : ""}>Lessons with higher student interaction showed significantly better conversion rates. Focus on engagement!</p>
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
          
          <div className={isMobile ? "h-60" : "h-72"}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={speakingTimeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={isMobile ? 70 : 100}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                  label={isMobile ? false : ({ name, value }) => `${name}: ${value}%`}
                >
                  {speakingTimeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                {isMobile && <Legend />}
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 bg-yellow/20 p-4 rounded-md text-navy">
            <p className={isMobile ? "text-sm" : ""}>Tutors speak 70% of the time. Aim for more balanced interaction to improve engagement.</p>
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
          
          <div className={isMobile ? "h-60" : "h-72"}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={qualitativeScoresData}
                margin={isMobile ? { top: 20, right: 20, left: 10, bottom: 30 } : { top: 20, right: 30, left: 20, bottom: 40 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#0c2244' }}
                  angle={isMobile ? -45 : 0}
                  textAnchor={isMobile ? "end" : "middle"}
                  height={isMobile ? 50 : 40}
                  interval={0}
                  fontSize={isMobile ? 10 : 12}
                />
                <YAxis domain={[0, 10]} />
                <Tooltip formatter={(value) => [value, 'Score']} />
                <Bar dataKey="score" fill="#9b87f5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 bg-lightgray p-4 rounded-md text-navy">
            <p className={isMobile ? "text-sm" : ""}>Tutors score high on friendliness (9.2) and professionalism (8.6), but student engagement (7.1) has room for improvement.</p>
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
          
          <div className={isMobile ? "h-60" : "h-72"}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={keyElementsData}
                margin={isMobile ? { top: 20, right: 20, left: 10, bottom: 60 } : { top: 20, right: 30, left: 20, bottom: 40 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#0c2244' }}
                  angle={isMobile ? -45 : 0}
                  textAnchor={isMobile ? "end" : "middle"}
                  height={isMobile ? 60 : 60}
                  interval={0}
                  fontSize={isMobile ? 10 : 12}
                />
                <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                <Bar dataKey="percentage" fill="#9b87f5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 bg-red-100 p-4 rounded-md text-red-700">
            <p className={isMobile ? "text-sm" : ""}>Only 40% of tutors asked if students liked the lesson. This is a critical checkpoint for gauging satisfaction.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OverviewTab;
