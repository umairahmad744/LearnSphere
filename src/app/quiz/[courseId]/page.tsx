import { notFound } from "next/navigation";
import { courses } from "@/lib/placeholder-data";
import { generateQuizAction } from "@/lib/actions";
import QuizForm from "@/components/quiz-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default async function QuizPage({ params }: { params: { courseId: string } }) {
  const course = courses.find((c) => c.id === params.courseId);

  if (!course || !course.isPremium) {
    notFound();
  }

  let quizData;
  let error;
  try {
    quizData = await generateQuizAction(params.courseId);
  } catch (e) {
    error = e instanceof Error ? e.message : "An unknown error occurred.";
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold font-headline">
              Quiz: {course.title}
            </CardTitle>
            <CardDescription>
              Test your knowledge on this course. Good luck!
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Error Generating Quiz</AlertTitle>
                <AlertDescription>
                  There was an issue creating the quiz. Please try again later.
                  <p className="text-xs mt-2">{error}</p>
                </AlertDescription>
              </Alert>
            )}
            {quizData && <QuizForm quizData={quizData} courseId={course.id} />}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
