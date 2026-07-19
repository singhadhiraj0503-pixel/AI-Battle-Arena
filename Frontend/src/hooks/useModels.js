import { useEffect, useState } from "react";

import modelsService from "../services/models.service";

export default function useModels(autoFetch = true) {
  const [models, setModels] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  async function fetchModels() {
    try {
      setLoading(true);
      setError(null);

      const data = await modelsService.getModels();

      setModels(data);

      return data;
    } catch (err) {
      console.error(err);

      setError(err.message || "Failed to fetch models.");

      return [];
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (autoFetch) {
      fetchModels();
    }
  }, [autoFetch]);

  return {
    models,

    loading,

    error,

    fetchModels,
  };
}
