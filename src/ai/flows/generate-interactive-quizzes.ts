// src/ai/flows/generate-interactive-quizzes.ts
'use server';
/**
 * @fileOverview Automatically generate quizzes for the premium video content using AI.
 *
 * - generateInteractiveQuizzes - A function that handles the quiz generation process.
 * - GenerateInteractiveQuizzesInput - The input type for the generateInteractiveQuizzes function.
 * - GenerateInteractiveQuizzesOutput - The return type for the generateInteractiveQuizzes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInteractiveQuizzesInputSchema = z.object({
  videoContent: z
    .string()
    .describe('The content of the video for which to generate quizzes.'),
  topic: z.string().describe('The topic of the video content.'),
  numberOfQuestions: z
    .number()
    .min(1)
    .max(10)
    .default(5)
    .describe('The number of quiz questions to generate.'),
});
export type GenerateInteractiveQuizzesInput =
  z.infer<typeof GenerateInteractiveQuizzesInputSchema>;

const GenerateInteractiveQuizzesOutputSchema = z.object({
  quiz: z.array(
    z.object({
      question: z.string().describe('The quiz question.'),
      options: z.array(z.string()).describe('The possible answers.'),
      correctAnswerIndex: z
        .number()
        .int()
        .min(0)
        .describe('The index of the correct answer in the options array.'),
    })
  ).describe('The generated quiz questions.'),
});
export type GenerateInteractiveQuizzesOutput =
  z.infer<typeof GenerateInteractiveQuizzesOutputSchema>;

export async function generateInteractiveQuizzes(
  input: GenerateInteractiveQuizzesInput
): Promise<GenerateInteractiveQuizzesOutput> {
  return generateInteractiveQuizzesFlow(input);
}

const generateInteractiveQuizzesPrompt = ai.definePrompt({
  name: 'generateInteractiveQuizzesPrompt',
  input: {schema: GenerateInteractiveQuizzesInputSchema},
  output: {schema: GenerateInteractiveQuizzesOutputSchema},
  prompt: `You are an expert teacher who can create engaging quizzes to
  test students' understanding of the material. Generate {{numberOfQuestions}}
  quiz questions based on the following video content about {{topic}}:

  Video Content:
  {{videoContent}}

  Each question should have 4 options, and clearly indicate the index of the
  correct answer.

  The output should be a JSON array of question objects. Each question object
  should have the following fields:
  - question (string): The quiz question.
  - options (string[]): An array of 4 possible answers.
  - correctAnswerIndex (number): The index of the correct answer in the
    options array.

  Ensure that the questions are relevant to the video content and that the
  correct answers are accurate.
  Make the quizzes fun and engaging.
  `,
});

const generateInteractiveQuizzesFlow = ai.defineFlow(
  {
    name: 'generateInteractiveQuizzesFlow',
    inputSchema: GenerateInteractiveQuizzesInputSchema,
    outputSchema: GenerateInteractiveQuizzesOutputSchema,
  },
  async input => {
    const {output} = await generateInteractiveQuizzesPrompt(input);
    return output!;
  }
);
