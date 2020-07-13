<template>
  <div>
    <!-- gapless columns -->
    <div class="columns col-gapless height">
      <div class="column col-6 gradient">col-6</div>
      <div class="column col-6">
        <!-- form input control -->
        <div class="login_block">
          <h1>Login</h1>
          <div class="form-group">
            <label class="form-label" for="input-example-1">Name</label>
            <input class="form-input" v-model="username" type="text" placeholder="Name" />
          </div>
          <div class="form-group">
            <label class="form-label" for="input-example-1">Password</label>
            <input class="form-input" v-model="password" type="password" placeholder="Password" />
          </div>
          <div class="form-group">
            <button class="btn btn-primary" v-on:click="login()">login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },

  methods: {
    async login() {
      console.log(this.username);
      console.log(this.password);
      const result = await this.$store.dispatch('login', {username: this.username, password:this.password});
      localStorage.setItem('token', result.data.accessToken);
      this.$router.push('/mainpage');
      console.log(result);
    }
  }
};
</script>

<style scoped>
.gradient {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    39deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(43, 43, 131, 1) 39%,
    rgba(6, 88, 249, 1) 100%
  );
}

.height {
  height: 100vh;
}

.login_block {
  max-width: 500px;
  min-width: 300px;
  margin: auto;
}
</style>