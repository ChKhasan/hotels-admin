export const actions = {
  async getAddServices({}, payload) {
    const res = await this.$axios.$get(`/additional_services`, {
      params: payload,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async getAddServicesById({}, id) {
    const res = await this.$axios.$get(`/additional_services/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async deleteAddServices({}, id) {
    const res = await this.$axios.$delete(`/additional_services/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
  async editAddServices({}, payload) {
    const res = await this.$axios.$put(
      `/additional_services/${payload.id}`,
      payload.data,
      {
        params: { ...payload.params },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      }
    );
    return res;
  },

  async postAddServices({}, payload) {
    const res = await this.$axios.$post(`/additional_services`, payload.data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
    return res;
  },
};
