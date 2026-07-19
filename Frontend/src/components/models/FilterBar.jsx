import { ArrowDownAZ, Trophy, Timer, Star } from "lucide-react";

const filters = [
  {
    id: "rating",
    label: "Rating",
    icon: Star,
  },
  {
    id: "wins",
    label: "Wins",
    icon: Trophy,
  },
  {
    id: "speed",
    label: "Speed",
    icon: Timer,
  },
  {
    id: "alphabetical",
    label: "A-Z",
    icon: ArrowDownAZ,
  },
];

export default function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => {
        const Icon = filter.icon;

        const active = activeFilter === filter.id;

        return (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-200
  
              ${
                active
                  ? "border-indigo-600 bg-indigo-600 text-white shadow-md"
                  : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:bg-indigo-50"
              }`}
          >
            <Icon size={16} />

            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
