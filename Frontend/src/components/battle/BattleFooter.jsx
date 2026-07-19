import { Clock3, Cpu, MessageSquare } from "lucide-react";

export default function BattleFooter({ battle }) {
  if (!battle) return null;

  return (
    <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <div className="grid grid-cols-3 gap-6">
        {/* Tokens */}

        <div className="flex items-center gap-3">
          <Cpu size={20} className="text-indigo-600" />

          <div>
            <p className="text-sm text-slate-500">Models</p>

            <p className="font-semibold">Mistral • Cohere</p>
          </div>
        </div>

        {/* Messages */}

        <div className="flex items-center gap-3">
          <MessageSquare size={20} className="text-indigo-600" />

          <div>
            <p className="text-sm text-slate-500">Responses</p>

            <p className="font-semibold">2 AI Models</p>
          </div>
        </div>

        {/* Time */}

        <div className="flex items-center gap-3">
          <Clock3 size={20} className="text-indigo-600" />

          <div>
            <p className="text-sm text-slate-500">Completed In</p>

            <p className="font-semibold">{battle.duration || "--"} sec</p>
          </div>
        </div>
      </div>
    </div>
  );
}
