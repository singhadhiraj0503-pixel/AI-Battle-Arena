import { LoaderCircle } from "lucide-react";

export default function Loader({ text = "Generating response..." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16">
      <LoaderCircle size={42} className="animate-spin text-indigo-600" />

      <p className="text-slate-500 font-medium">{text}</p>
    </div>
  );
}
