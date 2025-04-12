
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

// Data for Detailed Metrics
const detailedMetricsData = [
  { metric: "Introduction", result: "100% of tutors", impact: "Medium" },
  { metric: "Proper Closing", result: "90% of tutors", impact: "Medium" },
  { metric: "Satisfaction Check", result: "Only 40% of tutors", impact: "High" },
  { metric: "Reasoning-based Interaction", result: "60% of lessons", impact: "Very High" },
  { metric: "Tutor Speaking Time", result: "70% of lesson", impact: "Negative" },
  { metric: "Student Speaking Time", result: "30% of lesson", impact: "Positive (needs increase)" },
];

const DetailedMetricsTab = () => {
  return (
    <div className="space-y-8">
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
    </div>
  );
};

export default DetailedMetricsTab;
