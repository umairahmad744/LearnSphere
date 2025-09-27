"use client";

import type { AssessedQuestion } from "@/lib/actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, Info, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

type QuizResultProps = {
  result: AssessedQuestion[];
};

export default function QuizResult({ result }: QuizResultProps) {
  const params = useParams();
  const totalScore = result.reduce((acc, r) => acc + r.score, 0);
  const maxScore = result.length * 10;
  const percentage = Math.round((totalScore / maxScore) * 100);

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-green-500";
    if (score >= 5) return "text-yellow-500";
    return "text-red-500";
  };
  
  return (
    <div className="space-y-8">
      <Card className="text-center bg-muted/30">
        <CardHeader>
          <CardTitle className="text-2xl">Your Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-6xl font-bold text-primary">{percentage}%</div>
          <p className="text-muted-foreground mt-2">You scored {totalScore} out of {maxScore}</p>
          <Progress value={percentage} className="mt-4" />
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold font-headline">Detailed Breakdown</h2>

      <div className="space-y-6">
        {result.map((item, index) => (
          <Card key={index} className={item.score > 0 ? 'border-green-500/50' : 'border-red-500/50'}>
            <CardHeader>
              <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">Question {index + 1}</CardTitle>
                    <CardDescription className="pt-2">{item.question}</CardDescription>
                  </div>
                  <div className={`font-bold text-lg ${getScoreColor(item.score)} flex items-center gap-1`}>
                    <Star className="w-5 h-5" />
                    {item.score}/10
                  </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 border rounded-md bg-background flex items-start gap-3">
                {item.score === 10 ? (
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                ) : (
                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                )}
                <div>
                    <p className="font-semibold">Your answer:</p>
                    <p className="text-muted-foreground">{item.studentResponse}</p>
                </div>
              </div>
              {item.score < 10 && (
                <div className="p-3 border rounded-md bg-green-500/10 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-700">Correct answer:</p>
                    <p className="text-green-600">{item.correctAnswer}</p>
                  </div>
                </div>
              )}
              <Separator />
               <div className="p-3 border rounded-md bg-blue-500/10 flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-700">AI Feedback:</p>
                    <p className="text-blue-600">{item.feedback}</p>
                  </div>
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-8 space-x-4">
          <Button variant="outline" asChild><Link href={`/courses/${params.courseId}`}>Review Course</Link></Button>
          <Button asChild><Link href="/dashboard">Back to Dashboard</Link></Button>
      </div>
    </div>
  );
}
