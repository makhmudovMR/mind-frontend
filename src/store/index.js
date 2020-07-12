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
      axios.post('localhost:3000/auth/login/', {username: 'user1', password:'123'}).then(result => {
        console.log(result);
      }, 
      err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
