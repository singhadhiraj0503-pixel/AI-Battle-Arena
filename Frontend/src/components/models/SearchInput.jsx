import { Search, X } from "lucide-react";

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search AI models...",
}) {
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white
          py-3
          pl-12
          pr-12
          text-sm
          outline-none
          transition-all
          focus:border-indigo-500
          focus:ring-4
          focus:ring-indigo-100
        "
      />

      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 transition hover:bg-slate-100"
        >
          <X size={16} className="text-slate-500" />
        </button>
      )}
    </div>
  );
}
