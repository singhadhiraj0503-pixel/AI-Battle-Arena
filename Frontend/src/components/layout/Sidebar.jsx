import {
  History,
  Bookmark,
  GitCompareArrows,
  FileText,
  CircleHelp,
} from "lucide-react";

const menuItems = [
  {
    title: "Recent Battles",
    icon: History,
    active: true,
  },
  {
    title: "Saved Prompts",
    icon: Bookmark,
  },
  {
    title: "Model Comparison",
    icon: GitCompareArrows,
  },
  {
    title: "Research Papers",
    icon: FileText,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex w-72 flex-col border-r border-slate-200 bg-white">
      {/* Top */}

      <div className="p-7">
        <h2 className="text-2xl font-bold tracking-tight">ARENA TOOLS</h2>

        <p className="mt-1 text-sm text-slate-500">V2.4.0-beta</p>
      </div>

      {/* Menu */}

      <div className="flex-1 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className={`mb-3 flex w-full items-center gap-4 rounded-xl px-4 py-4 transition
                ${
                  item.active
                    ? "bg-indigo-100 text-indigo-700"
                    : "hover:bg-slate-100"
                }`}
            >
              <Icon size={20} />

              {item.title}
            </button>
          );
        })}
      </div>

      {/* Upgrade */}

      <div className="p-5">
        <button className="w-full rounded-xl bg-black py-4 font-medium text-white transition hover:bg-slate-800">
          Upgrade to Pro
        </button>
      </div>

      {/* Bottom */}

      <div className="border-t p-5">
        <button className="mb-3 flex items-center gap-3 text-slate-500 hover:text-black">
          <CircleHelp size={18} />
          Docs
        </button>

        <button className="flex items-center gap-3 text-slate-500 hover:text-black">
          <CircleHelp size={18} />
          Support
        </button>
      </div>
    </aside>
  );
}
