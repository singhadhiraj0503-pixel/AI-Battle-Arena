import { Trophy, Clock3, Brain, Medal } from "lucide-react";

export default function ModelCard({ model }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100">
            <Brain size={26} className="text-indigo-600" />
          </div>

          <div>
            <h2 className="text-xl font-bold">{model.name}</h2>

            <p className="text-sm text-slate-500">{model.provider}</p>
          </div>
        </div>

        {model.rank === 1 && (
          <div className="rounded-full bg-yellow-100 p-2">
            <Medal size={18} className="text-yellow-600" />
          </div>
        )}
      </div>

      {/* Stats */}

      <div className="mt-8 grid grid-cols-2 gap-5">
        <div className="rounded-2xl bg-slate-50 p-4">
          <div className="flex items-center gap-2 text-slate-500">
            <Trophy size={16} />

            <span className="text-sm">Win Rate</span>
          </div>

          <p className="mt-2 text-2xl font-bold">{model.winRate}%</p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <div className="flex items-center gap-2 text-slate-500">
            <Clock3 size={16} />

            <span className="text-sm">Avg Time</span>
          </div>

          <p className="mt-2 text-2xl font-bold">{model.avgTime}s</p>
        </div>
      </div>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5">
        <div>
          <p className="text-sm text-slate-500">Battles</p>

          <p className="font-semibold">{model.totalBattles}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Score</p>

          <p className="font-semibold text-indigo-600">{model.rating}/10</p>
        </div>
      </div>
    </div>
  );
}
