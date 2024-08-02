import { LlamaModel } from "@/app/llms/llama-3-8b";


export const runtime = "edge"

export async function POST(req: Request, res: Response) {
  const { messages } = await req.json()

  const llm = new LlamaModel(
    "meta-llama/Meta-Llama-3-8B-Instruct",
    "https://api.runpod.ai/v2/vllm-ckm8jlxqtvv7nj/openai/v1",
    process.env.OPENAI_API_KEY,
  )

  const response = await llm.getReply(messages)

  return response

}

