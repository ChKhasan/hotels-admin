export default function ({ redirect, $axios,store }) {
  try {
    $axios.$get(`/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    }).then(data => {
      store.commit('profileInfo',data?.data)
    });

  } catch (e) {
    localStorage.removeItem("auth_token");
    redirect("/admin/login");
  }
}
