// import "./App.css";

// import MainLayout from "../components/layout/MainLayout";

// import HeroSection from "../components/hero/HeroSection";
// import PromptCards from "../components/hero/PromptCards";
// import PromptInput from "../components/input/PromptInput";

// function App() {
//   return (
//     <MainLayout>
//       <section className="flex min-h-full flex-col items-center justify-center px-20 py-12">
//         <HeroSection />

//         <PromptCards />

//         <PromptInput />
//       </section>
//     </MainLayout>
//   );
// }

// export default App;

import { useState } from "react";

import "./App.css";

import MainLayout from "../components/layout/MainLayout";

import HeroSection from "../components/hero/HeroSection";
import PromptCards from "../components/hero/PromptCards";
import PromptInput from "../components/input/PromptInput";

import BattleCard from "../components/battle/BattleCard";

function App() {
  const [battle, setBattle] = useState(null);

  const dummyBattle = {
    problem: "Write a factorial function in Python.",

    solution_1: `
## Recursive Solution

\`\`\`python
def factorial(n):
    return 1 if n==0 else n*factorial(n-1)
\`\`\`
`,

    solution_2: `
## Iterative Solution

\`\`\`python
def factorial(n):
    result = 1

    for(let i=2;i<=n;i++){

        result*=i;

    }

    return result;
\`\`\`
`,

    judge: {
      solution_1_score: 8.4,
      solution_2_score: 9.2,
      solution_1_reasoning: "Simple but recursive.",
      solution_2_reasoning: "More efficient.",
    },
  };

  return (
    <MainLayout>
      {battle ? (
        <div className="mx-auto max-w-7xl px-10 py-12">
          <BattleCard battle={battle} />
        </div>
      ) : (
        <section className="flex min-h-full flex-col items-center justify-center px-20 py-12">
          <HeroSection />

          <PromptCards />

          <PromptInput />

          <button
            className="mt-10 rounded-xl bg-black px-6 py-3 text-white"
            onClick={() => setBattle(dummyBattle)}
          >
            Show Battle
          </button>
        </section>
      )}
    </MainLayout>
  );
}

export default App;
