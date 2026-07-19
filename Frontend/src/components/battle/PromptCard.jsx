import { User } from "lucide-react";

export default function PromptCard({ prompt }) {
  return (
    <div className="mb-8">
      {/* User Label */}

      <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
        <User size={15} />

        <span>You</span>
      </div>

      {/* Prompt */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-lg leading-8">{prompt}</p>
      </div>
    </div>
  );
}
