'use server';

/**
 * @fileOverview AI-powered product search for agricultural needs.
 *
 * - aiProductSearch - A function that accepts a text prompt and returns relevant product listings.
 * - AiProductSearchInput - The input type for the aiProductSearch function.
 * - AiProductSearchOutput - The return type for the aiProductSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiProductSearchInputSchema = z.object({
  prompt: z.string().describe('A text prompt describing agricultural needs (e.g., tractor for small farm, efficient irrigation system).'),
});
export type AiProductSearchInput = z.infer<typeof AiProductSearchInputSchema>;

const AiProductSearchOutputSchema = z.object({
  products: z.array(z.string()).describe('A list of relevant product listings based on the prompt.'),
});
export type AiProductSearchOutput = z.infer<typeof AiProductSearchOutputSchema>;

export async function aiProductSearch(input: AiProductSearchInput): Promise<AiProductSearchOutput> {
  return aiProductSearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiProductSearchPrompt',
  input: {schema: AiProductSearchInputSchema},
  output: {schema: AiProductSearchOutputSchema},
  prompt: `You are an AI assistant specializing in agricultural products.

  Based on the user's prompt, provide a list of relevant product listings.

  Prompt: {{{prompt}}}

  Products:`, // Expect a list of product names as output
});

const aiProductSearchFlow = ai.defineFlow(
  {
    name: 'aiProductSearchFlow',
    inputSchema: AiProductSearchInputSchema,
    outputSchema: AiProductSearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    // Ideally, here you would integrate with a real product catalog or database.
    // For this example, we're just returning the AI-generated product list.
    return {products: output?.products || []};
  }
);
