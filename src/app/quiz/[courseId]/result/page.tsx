"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import QuizResult from "@/components/quiz-result";
import type { AssessedQuestion } from "@/lib/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { courses } from "@/lib/placeholder-data";

function ResultSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-12 w-1/2" />
      <Skeleton className="h-8 w-1/4" />
      <div className="space-y-6 pt-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ResultPage() {
  const [result, setResult] = useState<AssessedQuestion[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const params = useParams();
  const courseId = params.courseId as string;

  useEffect(() => {
    const storedResult = sessionStorage.getItem('quizResult');
    if (storedResult) {
      setResult(JSON.parse(storedResult));
      sessionStorage.removeItem('quizResult');
    } else {
      // If no result found, maybe redirect to quiz page or dashboard
      router.replace(`/courses/${courseId}`);
    }
    setIsLoading(false);
  }, [router, courseId]);

  const course = courses.find((c) => c.id === courseId);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold font-headline">
              Quiz Results: {course?.title || 'Quiz'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading && <ResultSkeleton />}
            {!isLoading && result && <QuizResult result={result} />}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
