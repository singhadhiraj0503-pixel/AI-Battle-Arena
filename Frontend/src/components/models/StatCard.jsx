import { ArrowUpRight } from "lucide-react";

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  color = "indigo",
}) {
  const colors = {
    indigo: "bg-indigo-100 text-indigo-600",
    emerald: "bg-emerald-100 text-emerald-600",
    amber: "bg-amber-100 text-amber-600",
    rose: "bg-rose-100 text-rose-600",
    sky: "bg-sky-100 text-sky-600",
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
            colors[color] || colors.indigo
          }`}
        >
          {Icon && <Icon size={24} />}
        </div>

        <ArrowUpRight size={18} className="text-slate-400" />
      </div>

      <div className="mt-6">
        <p className="text-sm text-slate-500">{title}</p>

        <h2 className="mt-2 text-3xl font-bold">{value}</h2>

        {subtitle && <p className="mt-2 text-sm text-slate-500">{subtitle}</p>}
      </div>
    </div>
  );
}
