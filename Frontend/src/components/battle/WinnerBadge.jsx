import { Trophy } from "lucide-react";

export default function WinnerBadge({ winner }) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        bg-emerald-100
        px-5
        py-2
        text-sm
        font-semibold
        text-emerald-700
      "
    >
      <Trophy size={18} />
      Winner
      <span className="font-bold">{winner}</span>
    </div>
  );
}
