import Card from "../common/Card";

import SolutionCard from "./SolutionCard";
import JudgeCard from "./JudgeCard";

// const battle = {
//   problem: "Write a factorial function in Python.",

//   solution_1: `
//         ## Recursive Solution

//         \`\`\`python
//         def factorial(n):
//             return 1 if n == 0 else n * factorial(n-1)
//         \`\`\`
//         `,

//   solution_2: `
//         ## Iterative Solution

//         \`\`\`python
//         def factorial(n):
//             ans = 1

//             for i in range(2,n+1):
//                 ans *= i

//             return ans
//         \`\`\`
//         `,

//   judge: {
//     solution_1_score: 8.6,

//     solution_2_score: 9.3,

//     solution_1_reasoning:
//       "Readable and elegant but recursion can overflow for large inputs.",

//     solution_2_reasoning:
//       "Efficient, scalable and avoids recursion depth issues.",
//   },
// };

export default function BattleCard({ battle }) {
  const winner =
    battle.judge.solution_1_score >= battle.judge.solution_2_score ? 1 : 2;

  return (
    <div className="space-y-8">
      {/* Problem */}

      <Card>
        <p className="mb-2 text-sm uppercase tracking-widest text-slate-500">
          Problem
        </p>

        <h2 className="text-3xl font-bold leading-relaxed">{battle.problem}</h2>
      </Card>

      {/* Solutions */}

      <div className="grid grid-cols-2 gap-8">
        <SolutionCard
          model="Mistral AI"
          score={battle.judge.solution_1_score}
          content={battle.solution_1}
          winner={winner === 1}
        />

        <SolutionCard
          model="Cohere AI"
          score={battle.judge.solution_2_score}
          content={battle.solution_2}
          winner={winner === 2}
        />
      </div>

      {/* Judge */}

      <JudgeCard judge={battle.judge} />
    </div>
  );
}
