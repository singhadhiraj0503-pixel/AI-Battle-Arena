import { ArrowUp } from "lucide-react";

export default function SendButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition hover:bg-slate-800"
    >
      <ArrowUp size={22} />
    </button>
  );
}
