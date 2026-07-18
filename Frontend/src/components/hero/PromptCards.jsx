import { Code2, BookOpen, Lightbulb, Cpu } from "lucide-react";

const cards = [
  {
    title: "Code & Debug",
    description: "Write a Python script for a FastAPI backend with Redis...",
    icon: Code2,
  },

  {
    title: "Synthesize Info",
    description:
      "Summarize this research paper on Transformer architectures...",
    icon: BookOpen,
  },

  {
    title: "Ideate & Brainstorm",
    description: "Generate 10 unique product names for a developer tool...",
    icon: Lightbulb,
  },

  {
    title: "System Design",
    description: "Compare microservices vs monolith for a high traffic app...",
    icon: Cpu,
  },
];

export default function PromptCards() {
  return (
    <section className="mt-16">
      <div className="grid grid-cols-2 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <button
              key={card.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg"
            >
              <div className="flex gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 transition group-hover:bg-black">
                  <Icon size={24} className="group-hover:text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{card.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {card.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
