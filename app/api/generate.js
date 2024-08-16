import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const systemPrompt = `
You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
Both front and back should be one sentence long.
You should return in the following JSON format:
{
  "flashcards":[
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}
`;

export async function POST(req) {
    try {
        // Initialize OpenAI client
        const openai = new OpenAI();
        const data = await req.text();

        // Generate flashcards using OpenAI API
        const completion = await openai.chat.completions.create({
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: data },
            ],
            model: 'gpt-4o',
            response_format: { type: 'json_object' },
        });

        // Parse and return the flashcards
        const flashcards = JSON.parse(completion.choices[0].message.content);
        return NextResponse.json(flashcards.flashcards);

    } catch (error) {
        // Log the error and return a JSON error response
        console.error('Error generating flashcards:', error);
        return NextResponse.json({ error: { message: error.message } }, { status: 500 });
    }
}
