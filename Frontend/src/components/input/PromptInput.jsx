import { Paperclip } from "lucide-react";
import SendButton from "./SendButton";

export default function PromptInput() {
  return (
    <section className="mt-24 w-full max-w-5xl">
      <div className="flex items-center rounded-full border border-slate-200 bg-white px-6 py-4 shadow-sm">
        <input
          type="text"
          placeholder="Compare models on a complex task..."
          className="flex-1 bg-transparent text-lg placeholder:text-slate-400"
        />

        <button className="mr-4 rounded-full p-2 transition hover:bg-slate-100">
          <Paperclip size={20} />
        </button>

        <SendButton />
      </div>

      <p className="mt-5 text-center text-sm text-slate-500">
        Powered by state-of-the-art LLMs. Models can make mistakes.
      </p>
    </section>
  );
}
