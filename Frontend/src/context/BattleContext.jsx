import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import battleService from "../services/battle.service";

const BattleContext = createContext(null);

export function BattleProvider({ children }) {
  const [battle, setBattle] = useState(null);

  const [history, setHistory] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  /**
   * Create New Battle
   */

  const createBattle = useCallback(async (problem) => {
    try {
      setLoading(true);
      setError(null);

      const data = await battleService.create(problem);

      setBattle(data);

      setHistory((prev) => [data, ...prev]);

      return data;
    } catch (err) {
      console.error(err);

      setError(err.message || "Failed to generate battle.");

      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Get Battle
   */

  const fetchBattle = useCallback(async (id) => {
    try {
      setLoading(true);

      const data = await battleService.get(id);

      setBattle(data);

      return data;
    } catch (err) {
      setError(err.message);

      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Battle History
   */

  const fetchHistory = useCallback(async () => {
    try {
      setLoading(true);

      const data = await battleService.history();

      setHistory(data);

      return data;
    } catch (err) {
      setError(err.message);

      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Clear Current Battle
   */

  const clearBattle = () => {
    setBattle(null);
  };

  /**
   * Clear Error
   */

  const clearError = () => {
    setError(null);
  };

  const value = useMemo(
    () => ({
      battle,

      history,

      loading,

      error,

      createBattle,

      fetchBattle,

      fetchHistory,

      clearBattle,

      clearError,
    }),
    [battle, history, loading, error, createBattle, fetchBattle, fetchHistory],
  );

  return (
    <BattleContext.Provider value={value}>{children}</BattleContext.Provider>
  );
}

export function useBattleContext() {
  const context = useContext(BattleContext);

  if (!context) {
    throw new Error("useBattleContext must be used inside BattleProvider.");
  }

  return context;
}
