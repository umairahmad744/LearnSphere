import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, PlayCircle, Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CourseCard } from '@/components/course-card';
import { courses } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const featuredCourses = courses.slice(0, 3);
const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');

const benefits = [
  {
    title: 'Expert-Led Courses',
    description: 'Learn from industry professionals with real-world experience.',
    icon: <BookOpen className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Interactive Learning',
    description: 'Engage with content through quizzes and assignments, with AI-powered feedback.',
    icon: <PlayCircle className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Flexible & Accessible',
    description: 'Learn at your own pace, anytime, anywhere, on any device.',
    icon: <Star className="w-8 h-8 text-primary" />,
  },
];

const testimonials = [
  {
    name: 'Sarah J.',
    role: 'Web Developer',
    quote: "LearnSphere's courses are top-notch. The premium content helped me level up my skills and land a better job. The interactive quizzes are a game-changer!",
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Michael B.',
    role: 'Student',
    quote: 'The free introductory videos were a great way to start. I quickly upgraded to premium to get full access, and it was the best decision for my education.',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 bg-card overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-headline">
              Unlock Your Potential with <span className="text-primary">LearnSphere</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Explore expert-led courses, from free introductory lessons to premium in-depth tutorials. Start your learning journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/courses">
                  Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-96">
            {heroImage && (
               <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover rounded-xl shadow-2xl"
                data-ai-hint={heroImage.imageHint}
              />
            )}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured Courses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a glimpse of our most popular courses, crafted by experts to give you the best learning experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-lg text-primary">
              <Link href="/courses">
                View All Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose LearnSphere?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide a comprehensive and engaging learning environment designed for success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex items-center justify-center mb-4">
                  {benefit.icon}
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Students Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card p-6 shadow-lg">
                <CardContent className="flex flex-col items-center text-center">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full mb-4 border-4 border-primary/50"
                  />
                  <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
