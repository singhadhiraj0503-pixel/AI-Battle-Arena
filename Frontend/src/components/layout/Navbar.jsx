import { Moon, History, Settings, UserCircle2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full flex h-16 items-center justify-around gap-150 border-b border-slate-200 bg-white px-8">
      {/* Left */}

      <div className="flex items-center gap-10">
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
        <Moon size={20} className="hover:cursor-pointer" />

        <History size={20} className="hover:cursor-pointer" />

        <Settings size={20} className="hover:cursor-pointer" />

        <UserCircle2 size={28} className="hover:cursor-pointer" />
      </div>
    </header>
  );
}
