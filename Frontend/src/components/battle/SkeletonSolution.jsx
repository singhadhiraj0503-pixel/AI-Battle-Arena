export default function SkeletonSolution({ model = "AI Model" }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm animate-pulse">
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-slate-200"></div>

          <div>
            <div className="h-4 w-40 rounded bg-slate-200"></div>

            <div className="mt-2 h-3 w-28 rounded bg-slate-200"></div>
          </div>
        </div>

        <div className="h-8 w-20 rounded-full bg-slate-200"></div>
      </div>

      {/* Fake markdown */}

      <div className="space-y-4">
        <div className="h-4 w-2/3 rounded bg-slate-200"></div>

        <div className="h-4 w-full rounded bg-slate-200"></div>

        <div className="h-4 w-5/6 rounded bg-slate-200"></div>

        <div className="h-44 rounded-2xl bg-slate-900"></div>

        <div className="h-4 w-full rounded bg-slate-200"></div>

        <div className="h-4 w-3/4 rounded bg-slate-200"></div>
      </div>
    </div>
  );
}
