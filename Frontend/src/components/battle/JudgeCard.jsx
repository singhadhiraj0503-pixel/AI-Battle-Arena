import { Scale, CheckCircle2, Trophy } from "lucide-react";

import Card from "../common/Card";
import ScoreBadge from "./ScoreBadge";
import WinnerBadge from "./WinnerBadge";

export default function JudgeCard({ judge }) {
  if (!judge) return null;

  const {
    solution_1_score,
    solution_2_score,
    solution_1_reasoning,
    solution_2_reasoning,
  } = judge;

  const winner =
    solution_1_score > solution_2_score
      ? "Mistral AI"
      : solution_2_score > solution_1_score
        ? "Cohere AI"
        : "Tie";

  const scoreDifference = Math.abs(solution_1_score - solution_2_score).toFixed(
    1,
  );

  return (
    <Card className="overflow-hidden">
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100">
            <Scale size={26} className="text-indigo-600" />
          </div>

          <div>
            <h2 className="text-2xl font-bold">Judge Recommendation</h2>

            <p className="text-sm text-slate-500">Gemini Evaluation</p>
          </div>
        </div>

        <WinnerBadge winner={winner} />
      </div>

      {/* Winner Card */}

      <div className="mb-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <div className="flex items-center gap-3">
          <Trophy size={24} className="text-emerald-600" />

          <div>
            <h3 className="text-xl font-bold text-emerald-700">{winner}</h3>

            <p className="text-sm text-emerald-600">Overall Winner</p>
          </div>
        </div>
      </div>

      {/* Scores */}

      <div className="mb-10 grid grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-200 p-6">
          <p className="mb-4 text-sm text-slate-500">Mistral AI</p>

          <ScoreBadge score={solution_1_score} />
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <p className="mb-4 text-sm text-slate-500">Cohere AI</p>

          <ScoreBadge score={solution_2_score} />
        </div>
      </div>

      {/* Comparison */}

      <div className="mb-10 rounded-2xl bg-slate-50 p-6">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
          <CheckCircle2 size={18} className="text-indigo-600" />
          Quick Comparison
        </h3>

        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-slate-500">Winner</p>

            <p className="mt-2 font-semibold">{winner}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Margin</p>

            <p className="mt-2 font-semibold">{scoreDifference}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Confidence</p>

            <p className="mt-2 font-semibold">High</p>
          </div>
        </div>
      </div>

      {/* Analysis */}

      <div className="space-y-8">
        <div>
          <h3 className="mb-3 text-lg font-semibold">
            Why Mistral scored this way
          </h3>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 leading-8">
            {solution_1_reasoning}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">
            Why Cohere scored this way
          </h3>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 leading-8">
            {solution_2_reasoning}
          </div>
        </div>
      </div>
    </Card>
  );
}
