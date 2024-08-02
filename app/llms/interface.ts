import { ChatCompletionUserMessageParam } from 'openai/resources/index.mjs';
import { StreamingTextResponse } from "ai";

// easy to extend this to incorporate other models
export interface Model {
    modelName: string;
    generatePrompt(): string;
    getReply(message: ChatCompletionUserMessageParam[]): Promise<StreamingTextResponse>;
}
