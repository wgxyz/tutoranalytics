
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { BookOpen, GraduationCap, Users, BarChart2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

interface Stats {
  lessons: number;
  students: number;
  tutors: number;
  analyzed: number;
}

const Dashboard = () => {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: async () => {
      const fetchLessons = supabase.from('lessons').select('*', { count: 'exact', head: true });
      const fetchStudents = supabase.from('students').select('*', { count: 'exact', head: true });
      const fetchTutors = supabase.from('tutors').select('*', { count: 'exact', head: true });
      const fetchAnalyzed = supabase.from('lessons').select('*', { count: 'exact', head: true }).eq('status', 'analyzed');

      const [lessons, students, tutors, analyzed] = await Promise.all([
        fetchLessons,
        fetchStudents,
        fetchTutors,
        fetchAnalyzed
      ]);

      return {
        lessons: lessons.count || 0,
        students: students.count || 0,
        tutors: tutors.count || 0,
        analyzed: analyzed.count || 0
      };
    }
  });

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-[80vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Lessons
              </CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.lessons || 0}</div>
              <p className="text-xs text-muted-foreground">
                Recorded lessons in the system
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Students
              </CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.students || 0}</div>
              <p className="text-xs text-muted-foreground">
                Active students
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Tutors
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.tutors || 0}</div>
              <p className="text-xs text-muted-foreground">
                Active tutors
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Analyzed Lessons
              </CardTitle>
              <BarChart2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.analyzed || 0}</div>
              <p className="text-xs text-muted-foreground">
                Lessons with AI analysis
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">Get Started</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Add Your Organization</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Start by setting up your tutoring organization profile with details about your school or tutoring service.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Add Tutors & Students</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Register your tutors and students to start tracking their lessons and performance analytics.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Record Lessons</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                Add lessons, upload recordings, and let our AI analyze teaching effectiveness and student engagement.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
