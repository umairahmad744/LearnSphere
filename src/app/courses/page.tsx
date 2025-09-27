import { CourseCard } from '@/components/course-card';
import { courses } from '@/lib/placeholder-data';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input';

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">Our Courses</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse our extensive library of courses to find the perfect one to kickstart your learning journey.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-grow">
          <Input placeholder="Search for courses..." />
        </div>
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web-dev">Web Development</SelectItem>
              <SelectItem value="data-science">Data Science</SelectItem>
              <SelectItem value="design">Graphic Design</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="free">Free</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
