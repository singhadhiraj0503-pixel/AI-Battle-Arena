import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

const battleService = {
  async create(problem) {
    const { data } = await api.post(ENDPOINTS.CREATE_BATTLE, { problem });

    return data;
  },

  async get(id) {
    const { data } = await api.get(ENDPOINTS.GET_BATTLE(id));

    return data;
  },

  async history() {
    const { data } = await api.get(ENDPOINTS.GET_BATTLE_HISTORY);

    return data;
  },
};

export default battleService;
