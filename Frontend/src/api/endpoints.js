const ENDPOINTS = {
  // Battle APIs
  CREATE_BATTLE: "/use-graph",
  GET_BATTLE: (id) => `/battle/${id}`,
  GET_BATTLE_HISTORY: "/battle/history",

  // Models APIs
  GET_MODELS: "/models",
  GET_MODEL: (id) => `/models/${id}`,
};

export default ENDPOINTS;
