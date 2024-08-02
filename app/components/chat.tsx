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
    <section className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto mb-4 pb-4">
        <div className="flex flex-col gap-4">
          <div className="p-2 bg-gray-100">How can I help you?</div>
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                message.role === "user" ? "bg-none" : "bg-gray-100",
                "p-2"
              )}
            >
              {message.content}
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-auto">
        <Input className="flex-1" onChange={handleInputChange} value={input} />
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
}