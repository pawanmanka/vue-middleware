import { createStore } from "vuex";

export default createStore({
  state: {
    auth:null
  },
  getters: {
      isAuth(state) {
          return state.auth
      }
  },
  mutations: {
    loginAuth(state){
        state.auth= {
          "name":"sam Will",
          "_role":"admin"
        }
    },
    logout(state){
        state.auth= null
    }
  },
  actions: {},
  modules: {},
});
