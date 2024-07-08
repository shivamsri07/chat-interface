"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-4 mb-4 w-full overflow-y-auto">
        <div className="p-2 bg-gray-100">How can I help you?</div>
        {messages.map((message, index) => {
          return (
            <div
              className={cn(
                message.role === "user" ? "bg-none" : "bg-gray-100",
                "p-2"
              )}
              key={index}
            >
              {message.content}
            </div>
          );
        })}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 mt-auto absolute left-0 right-0 bottom-0"
      >
        <Input className="w-full" onChange={handleInputChange} value={input} />
        <Button>Submit</Button>
      </form>
    </section>
  );
}
