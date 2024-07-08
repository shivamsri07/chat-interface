import Image from "next/image"
import Chat from "./components/chat"

export default function Home() {
  return (
    <main className="h-full relative mx-auto w-11/12 max-w-4xl">
      <h1 className="text-center mb-6">Chat page</h1>
      <Chat />
    </main>
  )
}
