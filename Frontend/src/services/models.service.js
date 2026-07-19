import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

const modelsService = {
  async getModels() {
    const { data } = await api.get(ENDPOINTS.GET_MODELS);
    return data;
  },

  async getModel(id) {
    const { data } = await api.get(ENDPOINTS.GET_MODEL(id));
    return data;
  },
};

export default modelsService;
