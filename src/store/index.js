import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async login({}, data){
      console.log(data)
      return await axios.post("http://localhost:3000/auth/login/", data)
    }
  },
  modules: {
  }
})
