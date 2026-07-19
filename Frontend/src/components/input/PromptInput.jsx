import { useState } from "react";
import { Paperclip } from "lucide-react";
import SendButton from "./SendButton";

export default function PromptInput({ onSubmit }) {
  const [prompt, setPrompt] = useState("");

  async function handleSubmit() {
    if (!prompt.trim()) return;

    await onSubmit(prompt);

    setPrompt("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <section className="mt-24 w-full max-w-5xl">
      <div className="flex items-center rounded-full border border-slate-200 bg-white px-6 py-4 shadow-sm">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Compare models on a complex task..."
          className="flex-1 bg-transparent text-lg placeholder:text-slate-400 outline-none"
        />

        <button className="mr-4 rounded-full p-2 hover:bg-slate-100">
          <Paperclip size={20} />
        </button>

        <SendButton onClick={handleSubmit} />
      </div>
    </section>
  );
}
