import { Moon, History, Settings, UserCircle2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8">
      {/* Left */}

      <div className="flex items-center gap-10">
        <h1 className="text-2xl font-bold tracking-tight">AI Battle Arena</h1>

        <nav className="flex gap-8 text-sm">
          <button className="border-b-2 border-black pb-1 font-medium">
            Arena
          </button>

          <button className="text-slate-500 hover:text-black transition">
            Leaderboard
          </button>

          <button className="text-slate-500 hover:text-black transition">
            Models
          </button>

          <button className="text-slate-500 hover:text-black transition">
            About
          </button>
        </nav>
      </div>

      {/* Right */}

      <div className="flex items-center gap-6">
        <Moon size={20} />

        <History size={20} />

        <Settings size={20} />

        <UserCircle2 size={32} />
      </div>
    </header>
  );
}
