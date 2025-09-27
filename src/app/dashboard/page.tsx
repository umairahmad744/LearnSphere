import Link from 'next/link';
import { CourseCard } from '@/components/course-card';
import { courses, user } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Activity, BookOpen, CheckCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function DashboardPage() {
  const enrolledCourses = courses.filter(course => user.enrolledCourses.includes(course.id));

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex items-center gap-4 mb-8">
        <Avatar className="h-20 w-20">
          <AvatarImage src="https://i.pravatar.cc/150?img=5" alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold font-headline">Welcome back, {user.name}!</h1>
          <p className="text-muted-foreground">Let's continue your learning journey.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 font-headline flex items-center gap-2"><BookOpen className="w-6 h-6 text-primary"/>My Courses</h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
            {enrolledCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary"/>Recent Grades</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead className="text-right">Grade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {user.grades.map((g, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        <Link href={`/courses/${g.courseId}`} className="hover:underline">{g.courseTitle}</Link>
                        <Progress value={parseInt(g.completed)} className="h-2 mt-1" />
                        </TableCell>
                      <TableCell className="text-right">
                        <Badge variant={g.grade.startsWith('A') ? 'default' : 'secondary'} className="bg-primary/20 text-primary-foreground">{g.grade}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Activity className="w-5 h-5 text-primary"/>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {user.recentActivity.map((activity, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      {activity.type === 'comment' && <Activity className="w-4 h-4 text-primary" />}
                      {activity.type === 'quiz' && <CheckCircle className="w-4 h-4 text-primary" />}
                      {activity.type === 'lesson' && <BookOpen className="w-4 h-4 text-primary" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{activity.details}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
