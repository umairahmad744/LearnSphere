'use server';

/**
 * @fileOverview AI-powered student response assessment flow.
 *
 * - assessStudentResponses - A function that assesses student responses and provides scores.
 * - AssessStudentResponsesInput - The input type for the assessStudentResponses function.
 * - AssessStudentResponsesOutput - The return type for the assessStudentResponses function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssessStudentResponsesInputSchema = z.object({
  question: z.string().describe('The quiz question.'),
  studentResponse: z.string().describe('The student\'s answer to the question.'),
  correctAnswer: z.string().describe('The correct answer to the question.'),
  maxScore: z.number().describe('The maximum possible score for the question.'),
});
export type AssessStudentResponsesInput = z.infer<typeof AssessStudentResponsesInputSchema>;

const AssessStudentResponsesOutputSchema = z.object({
  score: z.number().describe('The score awarded to the student, between 0 and maxScore.'),
  feedback: z.string().describe('Feedback on the student\'s answer, explaining the score.'),
});
export type AssessStudentResponsesOutput = z.infer<typeof AssessStudentResponsesOutputSchema>;

export async function assessStudentResponses(input: AssessStudentResponsesInput): Promise<AssessStudentResponsesOutput> {
  return assessStudentResponsesFlow(input);
}

const assessStudentResponsesPrompt = ai.definePrompt({
  name: 'assessStudentResponsesPrompt',
  input: {schema: AssessStudentResponsesInputSchema},
  output: {schema: AssessStudentResponsesOutputSchema},
  prompt: `You are an AI-powered quiz grader. You will be provided a question, a student's response, the correct answer, and the maximum possible score for the question. You must assess the student's response and provide a score and feedback.

Question: {{{question}}}
Student's Response: {{{studentResponse}}}
Correct Answer: {{{correctAnswer}}}
Max Score: {{{maxScore}}}

Provide a score between 0 and {{{maxScore}}} and feedback explaining the score.
`,
});

const assessStudentResponsesFlow = ai.defineFlow(
  {
    name: 'assessStudentResponsesFlow',
    inputSchema: AssessStudentResponsesInputSchema,
    outputSchema: AssessStudentResponsesOutputSchema,
  },
  async input => {
    const {output} = await assessStudentResponsesPrompt(input);
    return output!;
  }
);
