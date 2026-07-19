import { useMemo, useState } from "react";
import { Brain, Trophy, Timer } from "lucide-react";

import SearchInput from "./SearchInput";
import FilterBar from "./FilterBar";
import StatCard from "./StatCard";
import ModelCard from "./ModelCard";
import ModelTable from "./ModelTable";

const models = [
  {
    rank: 1,
    name: "Mistral Large",
    provider: "Mistral AI",
    rating: 9.4,
    winRate: 91,
    avgTime: 2.8,
    totalBattles: 421,
  },
  {
    rank: 2,
    name: "Cohere Command R+",
    provider: "Cohere",
    rating: 8.9,
    winRate: 84,
    avgTime: 3.1,
    totalBattles: 398,
  },
  {
    rank: 3,
    name: "GPT-4.1",
    provider: "OpenAI",
    rating: 9.2,
    winRate: 89,
    avgTime: 2.5,
    totalBattles: 376,
  },
  {
    rank: 4,
    name: "Claude Sonnet",
    provider: "Anthropic",
    rating: 8.8,
    winRate: 81,
    avgTime: 2.9,
    totalBattles: 355,
  },
];

export default function Leaderboard() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("rating");

  const filteredModels = useMemo(() => {
    let result = [...models];

    if (search.trim()) {
      result = result.filter(
        (model) =>
          model.name.toLowerCase().includes(search.toLowerCase()) ||
          model.provider.toLowerCase().includes(search.toLowerCase()),
      );
    }

    switch (filter) {
      case "wins":
        result.sort((a, b) => b.winRate - a.winRate);
        break;

      case "speed":
        result.sort((a, b) => a.avgTime - b.avgTime);
        break;

      case "alphabetical":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;

      default:
        result.sort((a, b) => b.rating - a.rating);
    }

    return result.map((model, index) => ({
      ...model,
      rank: index + 1,
    }));
  }, [search, filter]);

  const topModel = filteredModels[0];

  const avgRating =
    filteredModels.length > 0
      ? (
          filteredModels.reduce((sum, model) => sum + model.rating, 0) /
          filteredModels.length
        ).toFixed(1)
      : 0;

  const fastestModel =
    filteredModels.length > 0
      ? [...filteredModels].sort((a, b) => a.avgTime - b.avgTime)[0]
      : null;

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-6 py-10">
      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold">AI Model Leaderboard</h1>

        <p className="mt-2 text-slate-500">
          Compare performance of AI models across all battles.
        </p>
      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-3">
        <StatCard
          title="Total Models"
          value={filteredModels.length}
          subtitle="Currently ranked"
          icon={Brain}
          color="indigo"
        />

        <StatCard
          title="Highest Rated"
          value={topModel?.name || "--"}
          subtitle={`${topModel?.rating || "--"}/10`}
          icon={Trophy}
          color="emerald"
        />

        <StatCard
          title="Average Rating"
          value={avgRating}
          subtitle={fastestModel ? `Fastest: ${fastestModel.name}` : ""}
          icon={Timer}
          color="amber"
        />
      </div>

      {/* Search + Filter */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <SearchInput value={search} onChange={setSearch} />

        <FilterBar activeFilter={filter} onFilterChange={setFilter} />
      </div>

      {/* Top Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredModels.slice(0, 3).map((model) => (
          <ModelCard key={model.name} model={model} />
        ))}
      </div>

      {/* Leaderboard Table */}

      <ModelTable models={filteredModels} />
    </div>
  );
}
