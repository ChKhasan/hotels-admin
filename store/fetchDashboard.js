export const actions = {
  async getDashboard({},) {
    return await this.$axios.$get(`/dashboard`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    });
  },
};
