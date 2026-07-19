import {
  Brain,
  GitCompare,
  Trophy,
  // GitHub,
  Globe,
  Code2,
  Sparkles,
} from "lucide-react";

import MainLayout from "../components/layout/MainLayout";

export default function AboutPage() {
  const features = [
    {
      icon: GitCompare,
      title: "AI Battles",
      description:
        "Compare answers from multiple Large Language Models side-by-side.",
    },
    {
      icon: Brain,
      title: "Neural Judge",
      description:
        "Gemini evaluates every response and scores each model objectively.",
    },
    {
      icon: Trophy,
      title: "Leaderboard",
      description:
        "Track model rankings using win rate, average score and response speed.",
    },
  ];

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-8 py-12">
        {/* Hero */}

        <section className="text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-indigo-100">
            <Sparkles size={42} className="text-indigo-600" />
          </div>

          <h1 className="mt-8 text-5xl font-bold tracking-tight">
            AI Battle Arena
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
            AI Battle Arena lets you compare answers from multiple AI models in
            real time. Every battle is evaluated by an AI Judge that scores each
            response for correctness, clarity, efficiency and reasoning.
          </p>
        </section>

        {/* Features */}

        <section className="mt-20">
          <h2 className="mb-10 text-3xl font-bold">Features</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100">
                    <Icon size={26} className="text-indigo-600" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Models */}

        <section className="mt-20">
          <h2 className="mb-10 text-3xl font-bold">Supported Models</h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {["Mistral AI", "Cohere", "OpenAI", "Gemini Judge"].map((model) => (
              <div
                key={model}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <Brain size={34} className="mx-auto text-indigo-600" />

                <h3 className="mt-4 font-semibold">{model}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}

        <section className="mt-20 rounded-3xl bg-slate-900 p-10 text-white">
          <h2 className="text-3xl font-bold">Built With</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {["React", "Tailwind CSS", "Node.js", "LangGraph"].map((tech) => (
              <div
                key={tech}
                className="rounded-2xl bg-slate-800 p-5 text-center"
              >
                <Code2 size={28} className="mx-auto text-indigo-400" />

                <p className="mt-3 font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}

        <section className="mt-20 rounded-3xl border border-slate-200 bg-white p-10 text-center">
          <Globe size={36} className="mx-auto text-slate-700" />

          <h2 className="mt-5 text-2xl font-bold">Open Source Project</h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            AI Battle Arena is built to explore, compare and evaluate multiple
            AI models through an interactive and transparent interface.
          </p>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
          >
            View on GitHub
          </a>
        </section>
      </div>
    </MainLayout>
  );
}
