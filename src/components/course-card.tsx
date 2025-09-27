import Image from 'next/image';
import Link from 'next/link';
import { Clock, User, BarChart, Gem } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Course } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';

type CourseCardProps = {
  course: Course;
  className?: string;
};

export function CourseCard({ course, className }: CourseCardProps) {
  const thumbnail = PlaceHolderImages.find((img) => img.id === course.thumbnailId);

  return (
    <Card className={cn('flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300', className)}>
      <CardHeader className="p-0 relative">
        <Link href={`/courses/${course.id}`}>
          {thumbnail && (
            <Image
              src={thumbnail.imageUrl}
              alt={thumbnail.description}
              width={600}
              height={400}
              className="object-cover w-full h-48"
              data-ai-hint={thumbnail.imageHint}
            />
          )}
          <div className="absolute top-2 right-2">
            {course.isPremium ? (
              <Badge className="bg-accent text-accent-foreground flex items-center gap-1">
                <Gem className="w-3 h-3" /> Premium
              </Badge>
            ) : (
              <Badge variant="secondary">Free</Badge>
            )}
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2 font-headline">
          <Link href={`/courses/${course.id}`} className="hover:text-primary transition-colors">
            {course.title}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <User className="w-4 h-4 mr-2" />
          <span>{course.instructor}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 bg-card flex justify-between items-center">
        <div className="flex items-center text-sm text-muted-foreground space-x-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1.5" />
              <span>{course.duration} hrs</span>
            </div>
            <div className="flex items-center">
              <BarChart className="w-4 h-4 mr-1.5" />
              <span>{course.lessons.length} lessons</span>
            </div>
        </div>
        <Button asChild size="sm" variant="outline">
          <Link href={`/courses/${course.id}`}>View Course</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
