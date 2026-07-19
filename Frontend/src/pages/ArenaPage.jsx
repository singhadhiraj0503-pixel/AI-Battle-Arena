import useBattle from "../hooks/useBattle";

import MainLayout from "../components/layout/MainLayout";

import HeroSection from "../components/hero/HeroSection";
import PromptCards from "../components/hero/PromptCards";
import PromptInput from "../components/input/PromptInput";

import BattleCard from "../components/battle/BattleCard";
import BattleLoading from "../components/battle/BattleLoading";

export default function ArenaPage() {
  // const { battles, loading, sendPrompt } = useBattle();
  const { battle, loading, error, createBattle } = useBattle();

  async function handleSubmit(prompt) {
    await createBattle(prompt);
  }

  return (
    <MainLayout>
      <div className="mx-auto w-full max-w-7xl px-8 py-10">
        {/* Landing Screen */}

        {!battle && !loading && (
          <>
            <HeroSection />

            <div className="mt-10">
              <PromptCards />
            </div>
          </>
        )}

        {/* Existing Battles */}

        {battle && (
          <div className="space-y-12">
            <BattleCard battle={battle} />
          </div>
        )}

        {/* Loading */}

        {loading && (
          <div className="mt-12">
            <BattleLoading
              battle={{
                status: "generating_models",
              }}
            />
          </div>
        )}

        {/* Prompt */}

        <div className="mt-16 sticky bottom-8">
          <PromptInput onSubmit={handleSubmit} />
        </div>
      </div>
    </MainLayout>
  );
}
