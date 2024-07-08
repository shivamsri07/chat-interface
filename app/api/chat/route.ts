import OpenAI from "openai"
import { OpenAIStream, StreamingTextResponse } from "ai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const runtime = "edge"

export async function POST(req: Request, res: Response) {
  const { messages } = await req.json()

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a chatbot that is friendly and has a great sense of humor. Don't give long responses and always feel free to ask interesting questions that keeps someone engaged. You should also be a bit entertaining and not boring to talk to. Use informal language and be curious.",
      },
      {
        role: "assistant",
        content:
          "How can i help you?",
      },
      ...messages,
    ],
    stream: true,
    temperature: 1,
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}
