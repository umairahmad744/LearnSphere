"use server";

import { generateInteractiveQuizzes } from "@/ai/flows/generate-interactive-quizzes";
import { assessStudentResponses } from "@/ai/flows/assess-student-responses";
import { courses } from "@/lib/placeholder-data";
import { z } from "zod";

export async function generateQuizAction(courseId: string) {
  const course = courses.find((c) => c.id === courseId);
  if (!course || !course.isPremium) {
    throw new Error("Premium course not found.");
  }

  const quiz = await generateInteractiveQuizzes({
    videoContent: course.videoTranscript,
    topic: course.title,
    numberOfQuestions: 5,
  });

  return quiz;
}

const answerSchema = z.object({
  question: z.string(),
  studentResponse: z.string(),
  correctAnswer: z.string(),
  maxScore: z.number(),
});

const assessmentPayloadSchema = z.object({
    answers: z.array(answerSchema)
});

export type AssessedQuestion = {
  question: string;
  studentResponse: string;
  score: number;
  feedback: string;
  correctAnswer: string;
};

export async function assessQuizAction(payload: z.infer<typeof assessmentPayloadSchema>): Promise<AssessedQuestion[]> {
  const validatedPayload = assessmentPayloadSchema.safeParse(payload);
  if (!validatedPayload.success) {
    throw new Error("Invalid payload for assessment.");
  }
  
  const assessments = await Promise.all(
    validatedPayload.data.answers.map(async (answer) => {
      const result = await assessStudentResponses(answer);
      return {
        question: answer.question,
        studentResponse: answer.studentResponse,
        score: result.score,
        feedback: result.feedback,
        correctAnswer: answer.correctAnswer,
      };
    })
  );

  return assessments;
}
