import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    async login({}, data) {
      console.log("store");
      console.log(data);
      return await axios.post("/api/auth/login/", data);
    },

    async getFollowingPost({}, data) {
      return await axios.get("/api/content/getfollowingpost", {
        headers: { token: localStorage.getItem("token") },
      });
    },

    async getAuthUserInfo({}, data) {
      return await axios.get("/api/content/getauthuserinfo", {
        headers: { token: localStorage.getItem("token") },
      });
    },

    async postMind({}, data) {
      return await axios.post("/api/content/postmind", data, {
        headers: { token: localStorage.getItem("token") },
      });
    },

    async getMindsByUserId({}, data) {
      return await axios.post("/api/content/getmindsbyuserid", data, {
        headers: { token: localStorage.getItem("token") },
      });
    },

    async getUserInfo({}, data) {
      return await axios.post("/api/content/getuserinfo", data, {
        headers: { token: localStorage.getItem("token") },
      });
    },

    async getRelation({}, data) {
      return await axios.post("/api/content/getrelation", data, {
        headers: { token: localStorage.getItem("token") },
      });
    },

    async followToUser({}, data) {
      return await axios.post("/api/content/followtouser", data, {
        headers: { token: localStorage.getItem("token") },
      });
    },

    async getFollowers({}, data){
      return await axios.post('/api/content/getfollowers', data, {
        headers: {token: localStorage.getItem('token')}
      })
    },

    async getFollowing({}, data){
      return await axios.post('/api/content/getfollowing', data, {
        headers: {token: localStorage.getItem('token')}
      })
    },

    async createChat({}, data){
      return await axios.post('/api/content/createchat', data, {
        headers: {token: localStorage.getItem('token')}
      })
    },

    async loadMessages({}, data){
      return await axios.post('/api/content/loadmessages', data, {
        headers: {token: localStorage.getItem('token')}
      })
    },

    async writeMessage({}, data){
      return await axios.post('/api/content/writemessage', data, {
        headers: {token: localStorage.getItem('token')}
      })
    },

    async loadChats({}, data){
      return await axios.post('/api/content/loadchats', data, {
        headers: {token: localStorage.getItem('token')}
      })
    }
  },
});
