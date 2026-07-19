import SkeletonJudge from "./SkeletonJudge";
import SkeletonSolution from "./SkeletonSolution";
import SolutionCard from "./SolutionCard";

export default function BattleLoading({ battle }) {
  if (!battle) return null;

  switch (battle.status) {
    case "generating_models":
      return (
        <div className="space-y-10">
          <div className="grid grid-cols-2 gap-8">
            <SkeletonSolution model="Mistral AI" />
            <SkeletonSolution model="Cohere AI" />
          </div>

          <SkeletonJudge />
        </div>
      );

    case "judging":
      return (
        <div className="space-y-10">
          <div className="grid grid-cols-2 gap-8">
            <SolutionCard
              model="Mistral AI"
              score={battle.solution_1_score}
              content={battle.solution_1}
              winner={false}
            />

            <SolutionCard
              model="Cohere AI"
              score={battle.solution_2_score}
              content={battle.solution_2}
              winner={false}
            />
          </div>

          <SkeletonJudge />
        </div>
      );

    default:
      return null;
  }
}
