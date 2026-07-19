import MainLayout from "../components/layout/MainLayout";
import Leaderboard from "../components/models/Leaderboard";

import useModels from "../hooks/useModels";

// Later replace this with:
// import { getModelLeaderboard } from "../services/models.service";

export default function ModelsPage() {
  const { models, loading, error } = useModels();

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-8 py-10">
        {/* Page Header */}

        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">
            AI Model Comparison
          </h1>

          <p className="mt-3 max-w-3xl text-slate-500">
            Compare every AI model that has participated in battles. Rankings
            are calculated using overall score, win rate, response quality, and
            average response time.
          </p>
        </div>

        {/* Loading */}

        {loading ? (
          <div className="space-y-6">
            <div className="h-12 w-72 animate-pulse rounded-xl bg-slate-200"></div>

            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-40 animate-pulse rounded-3xl bg-slate-200"
                />
              ))}
            </div>

            <div className="h-[500px] animate-pulse rounded-3xl bg-slate-200"></div>
          </div>
        ) : (
          <Leaderboard />
        )}
      </div>
    </MainLayout>
  );
}
