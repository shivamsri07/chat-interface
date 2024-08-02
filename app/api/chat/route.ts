import { LlamaModel } from "@/app/llms/llama-3-8b";


export const runtime = "edge"

export async function POST(req: Request, res: Response) {
  const { messages } = await req.json()

  const llm = new LlamaModel(
    "meta-llama/Meta-Llama-3-8B-Instruct",
    process.env.BASE_URL,
    process.env.OPENAI_API_KEY
  )

  const response = await llm.getReply(messages)

  return response

}

