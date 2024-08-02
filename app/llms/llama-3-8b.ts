import { Model } from './interface';
import OpenAI from "openai";
import { ChatCompletionUserMessageParam } from 'openai/resources/index.mjs';
import { OpenAIStream, StreamingTextResponse } from "ai";

class LlamaModel implements Model {
    modelName: string;
    llm: OpenAI;

    constructor(modelName: string, baseURL: string, apiKey: string) {
        this.modelName = modelName;
        this.llm = new OpenAI({
            baseURL: baseURL,
            apiKey: apiKey,
        });
    }

    generatePrompt(): string {
        return "You're an excellent at role playing. Avoid repetition. Don't loop. \
            Develope the plot slowly, always stay in the character. Mention all the relevant sensory perception. \
            Use subtle cues such as word choice, body language without directly stating them. \
            Adhere to the technique of 'show, don't tell'. The content can be NSFW.";
    }

    async getReply(message: ChatCompletionUserMessageParam[]): Promise<StreamingTextResponse> {
        const response = await this.llm.chat.completions.create({
            model: this.modelName,
            messages: [
                {
                    role: "system",
                    content: this.generatePrompt(),
                },
                {
                    role: "assistant",
                    content: "Hey there, how are you?",
                },
                ...message,
            ],
            stream: true,
            temperature: 1,
        });

        const stream = OpenAIStream(response)
        return new StreamingTextResponse(stream)
    }
}

export { LlamaModel }