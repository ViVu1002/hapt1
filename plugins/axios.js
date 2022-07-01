export default function({ $axios, store, redirect }) {
  $axios.onRequest(function(config) {
    if (store.state.token) {
      config.headers.common["token"] = store.state.token;
    } else {
      config.headers.common["token"] = "";
    }
  });
  $axios.onError(error => {
    if (error.response.status === 403) {
      redirect("/err/403");
    }
  });
}
