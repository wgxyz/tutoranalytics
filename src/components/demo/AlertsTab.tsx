
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Clock } from "lucide-react";

const AlertsTab = () => {
  return (
    <div className="space-y-8">
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
    </div>
  );
};

export default AlertsTab;
