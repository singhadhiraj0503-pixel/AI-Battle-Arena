import PromptCard from "./PromptCard";
import BattleHeader from "./BattleHeader";

import SolutionCard from "./SolutionCard";
import JudgeCard from "./JudgeCard";

import BattleLoading from "./BattleLoading";
import BattleFooter from "./BattleFooter";

export default function BattleCard({ battle }) {
  if (!battle) return null;

  return (
    <>
      {/* Solutions */}

      <div className="grid grid-cols-2 gap-8">
        <SolutionCard
          model="Mistral AI"
          score={battle.judge.solution_1_score}
          content={battle.solution_1}
          winner={battle.judge.solution_1_score > battle.judge.solution_2_score}
        />

        <SolutionCard
          model="Cohere AI"
          score={battle.judge.solution_2_score}
          content={battle.solution_2}
          winner={battle.judge.solution_2_score > battle.judge.solution_1_score}
        />
      </div>

      {/* Judge */}

      <div className="mt-10">
        <JudgeCard judge={battle.judge} />
      </div>

      {/* Footer */}

      <BattleFooterr battle={battle} />
    </>
  );
}
