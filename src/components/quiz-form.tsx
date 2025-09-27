"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GenerateInteractiveQuizzesOutput } from "@/ai/flows/generate-interactive-quizzes";
import { assessQuizAction } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type QuizFormProps = {
  quizData: GenerateInteractiveQuizzesOutput;
  courseId: string;
};

export default function QuizForm({ quizData, courseId }: QuizFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswerChange = (questionIndex: number, optionIndex: number) => {
    setAnswers({
      ...answers,
      [questionIndex]: quizData.quiz[questionIndex].options[optionIndex],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(answers).length !== quizData.quiz.length) {
      toast({
        title: "Incomplete Quiz",
        description: "Please answer all questions before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const assessmentPayload = {
        answers: quizData.quiz.map((q, index) => ({
          question: q.question,
          studentResponse: answers[index],
          correctAnswer: q.options[q.correctAnswerIndex],
          maxScore: 10,
        })),
      };

      const result = await assessQuizAction(assessmentPayload);

      sessionStorage.setItem('quizResult', JSON.stringify(result));
      router.push(`/quiz/${courseId}/result`);

    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an error submitting your quiz. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {quizData.quiz.map((question, qIndex) => (
        <Card key={qIndex} className="bg-muted/30">
          <CardHeader>
            <CardTitle>Question {qIndex + 1}</CardTitle>
            <CardDescription className="text-lg pt-2">{question.question}</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup onValueChange={(value) => handleAnswerChange(qIndex, parseInt(value))}>
              <div className="space-y-4">
                {question.options.map((option, oIndex) => (
                  <div key={oIndex} className="flex items-center space-x-3 p-3 rounded-lg border bg-background hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value={String(oIndex)} id={`q${qIndex}o${oIndex}`} />
                    <Label htmlFor={`q${qIndex}o${oIndex}`} className="flex-1 cursor-pointer text-base">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
      ))}
      <div className="flex justify-end">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Grading...
            </>
          ) : (
            'Submit Quiz'
          )}
        </Button>
      </div>
    </form>
  );
}
