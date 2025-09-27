import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, User, BarChart, PlayCircle, Lock, Gem } from 'lucide-react';
import { courses } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { VideoPlayer } from '@/components/video-player';
import { CommentSection } from '@/components/comment-section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function CourseDetailPage({ params }: { params: { courseId: string } }) {
  const course = courses.find((c) => c.id === params.courseId);

  if (!course) {
    notFound();
  }

  const thumbnail = PlaceHolderImages.find((img) => img.id === course.thumbnailId);

  return (
    <div className="bg-background">
      <header className="bg-card py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-4">
              {course.isPremium && <Badge className="bg-accent text-accent-foreground">Premium Course</Badge>}
              <h1 className="text-4xl font-extrabold font-headline">{course.title}</h1>
              <p className="text-lg text-muted-foreground">{course.description}</p>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center"><User className="w-4 h-4 mr-2" /> By {course.instructor}</div>
                <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {course.duration} hours</div>
                <div className="flex items-center"><BarChart className="w-4 h-4 mr-2" /> {course.lessons.length} lessons</div>
              </div>
            </div>
            {thumbnail && (
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image src={thumbnail.imageUrl} alt={thumbnail.description} fill className="object-cover" />
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 font-headline">Course Content</h2>
            <VideoPlayer videoUrl={course.lessons[0].videoUrl} />
            <div className="mt-8">
              <CommentSection />
            </div>
          </div>
          <aside>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Lessons</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible defaultValue="item-0">
                  {course.lessons.map((lesson, index) => (
                    <AccordionItem key={lesson.id} value={`item-${index}`} className="border-b-0">
                      <div className="flex justify-between items-center p-3 rounded-md hover:bg-muted/50 transition-colors">
                        <div className="flex items-center">
                          {lesson.isFree ? (
                            <PlayCircle className="w-5 h-5 mr-3 text-primary" />
                          ) : (
                            <Lock className="w-5 h-5 mr-3 text-muted-foreground" />
                          )}
                          <div>
                            <p className="font-medium">{lesson.title}</p>
                            <p className="text-xs text-muted-foreground">{lesson.duration} mins</p>
                          </div>
                        </div>
                      </div>
                      {!lesson.isFree && !course.isPremium && (
                        <AccordionContent>
                           <div className="p-4 my-2 border rounded-lg bg-secondary/50">
                                <p className="text-sm font-semibold flex items-center gap-2"><Gem className="w-4 h-4 text-accent"/>This is a premium lesson.</p>
                                <p className="text-sm text-muted-foreground mt-1">Upgrade to a premium membership to access all lessons, quizzes, and get a certificate.</p>
                                <Button asChild size="sm" className="mt-3 bg-accent hover:bg-accent/90">
                                    <Link href="/pricing">Upgrade Now</Link>
                                </Button>
                           </div>
                        </AccordionContent>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
                {course.isPremium && (
                    <div className="mt-6">
                        <Button className="w-full" asChild>
                            <Link href={`/quiz/${course.id}`}>Take Final Quiz</Link>
                        </Button>
                    </div>
                )}
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
