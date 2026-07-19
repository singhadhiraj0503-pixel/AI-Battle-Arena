import { Trophy, Clock3, Star, Brain, Medal } from "lucide-react";

export default function ModelTable({ models = [] }) {
  if (!models.length) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <Brain size={42} className="mx-auto mb-4 text-slate-300" />

        <h2 className="text-xl font-semibold">No Models Found</h2>

        <p className="mt-2 text-slate-500">
          Try changing your search or filter.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}

      <div className="border-b border-slate-200 bg-slate-50 px-8 py-5">
        <h2 className="text-2xl font-bold">Leaderboard Rankings</h2>

        <p className="mt-1 text-sm text-slate-500">
          Live performance comparison of AI models.
        </p>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Rank
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Model
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                Rating
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                Win Rate
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                Avg Time
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                Battles
              </th>
            </tr>
          </thead>

          <tbody>
            {models.map((model) => (
              <tr
                key={model.name}
                className="border-t border-slate-100 transition hover:bg-slate-50"
              >
                {/* Rank */}

                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    {model.rank === 1 ? (
                      <Medal size={20} className="text-yellow-500" />
                    ) : model.rank === 2 ? (
                      <Medal size={20} className="text-slate-400" />
                    ) : model.rank === 3 ? (
                      <Medal size={20} className="text-amber-700" />
                    ) : (
                      <span className="font-semibold">#{model.rank}</span>
                    )}
                  </div>
                </td>

                {/* Model */}

                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
                      <Brain size={22} className="text-indigo-600" />
                    </div>

                    <div>
                      <h3 className="font-semibold">{model.name}</h3>

                      <p className="text-sm text-slate-500">{model.provider}</p>
                    </div>
                  </div>
                </td>

                {/* Rating */}

                <td className="px-6 py-5 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-2">
                    <Star
                      size={15}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="font-semibold">{model.rating}</span>
                  </div>
                </td>

                {/* Win Rate */}

                <td className="px-6 py-5 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2">
                    <Trophy size={15} className="text-emerald-600" />

                    <span className="font-semibold text-emerald-700">
                      {model.winRate}%
                    </span>
                  </div>
                </td>

                {/* Time */}

                <td className="px-6 py-5 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-2">
                    <Clock3 size={15} className="text-orange-600" />

                    <span className="font-semibold text-orange-700">
                      {model.avgTime}s
                    </span>
                  </div>
                </td>

                {/* Battles */}

                <td className="px-6 py-5 text-center">
                  <span className="rounded-full bg-slate-100 px-4 py-2 font-semibold">
                    {model.totalBattles}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
