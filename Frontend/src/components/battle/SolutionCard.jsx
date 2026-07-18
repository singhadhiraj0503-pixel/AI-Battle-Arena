import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Bot, Trophy } from "lucide-react";

import Card from "../common/Card";
import ScoreBadge from "./ScoreBadge";

export default function SolutionCard({
  model,
  score,
  content,
  winner = false,
}) {
  return (
    <Card
      className={`relative h-full ${
        winner ? "border-2 border-emerald-500" : ""
      }`}
    >
      {/* Winner Ribbon */}

      {winner && (
        <div className="absolute right-6 top-6">
          <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            <Trophy size={16} />
            Winner
          </div>
        </div>
      )}

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
            <Bot size={26} />
          </div>

          <div>
            <h2 className="text-xl font-bold">{model}</h2>

            <p className="text-sm text-slate-500">AI Response</p>
          </div>
        </div>

        <ScoreBadge score={score} />
      </div>

      {/* Markdown */}

      <article
        className="
          prose
          prose-slate
          max-w-none
          prose-pre:rounded-xl
          prose-pre:bg-slate-900
          prose-code:before:hidden
          prose-code:after:hidden
        "
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </Card>
  );
}
