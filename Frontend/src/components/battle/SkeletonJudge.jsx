import { Scale, LoaderCircle } from "lucide-react";

export default function SkeletonJudge() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm animate-pulse">
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100">
            <Scale size={24} className="text-indigo-600" />
          </div>

          <div>
            <div className="h-5 w-44 rounded bg-slate-200"></div>

            <div className="mt-2 h-3 w-32 rounded bg-slate-200"></div>
          </div>
        </div>

        <LoaderCircle size={22} className="animate-spin text-indigo-600" />
      </div>

      {/* Status */}

      <div className="rounded-2xl bg-indigo-50 p-6">
        <h3 className="font-semibold text-indigo-700">
          Neural Judge is evaluating...
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          Comparing correctness, readability, performance and overall quality.
        </p>
      </div>

      {/* Fake Metrics */}

      <div className="mt-8 grid grid-cols-3 gap-5">
        {[1, 2, 3].map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 p-5">
            <div className="h-4 w-20 rounded bg-slate-200"></div>

            <div className="mt-5 h-8 w-16 rounded bg-slate-200"></div>
          </div>
        ))}
      </div>

      {/* Fake Analysis */}

      <div className="mt-8 space-y-4">
        <div className="h-4 w-full rounded bg-slate-200"></div>

        <div className="h-4 w-11/12 rounded bg-slate-200"></div>

        <div className="h-4 w-4/5 rounded bg-slate-200"></div>

        <div className="h-4 w-full rounded bg-slate-200"></div>

        <div className="h-4 w-3/4 rounded bg-slate-200"></div>
      </div>

      {/* Footer */}

      <div className="mt-10 flex items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4">
        <LoaderCircle size={18} className="animate-spin text-indigo-600" />

        <span className="text-sm text-slate-500">
          Waiting for final verdict...
        </span>
      </div>
    </div>
  );
}
