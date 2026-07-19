import { Sparkles } from "lucide-react";

export default function BattleHeader({ loading }) {
  return (
    <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-4">
      <div className="flex items-center gap-3">
        <Sparkles size={20} className="text-indigo-600" />

        <h2 className="text-xl font-bold tracking-wide uppercase">
          {loading ? "Battle In Progress" : "Battle Analysis"}
        </h2>
      </div>

      {loading && (
        <p className="text-sm text-slate-500">Tokens/sec: Calculating...</p>
      )}
    </div>
  );
}
