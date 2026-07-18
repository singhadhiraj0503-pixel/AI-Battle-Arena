import { ArrowUp } from "lucide-react";

export default function SendButton() {
  return (
    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:scale-105 hover:bg-slate-800">
      <ArrowUp size={22} />
    </button>
  );
}
