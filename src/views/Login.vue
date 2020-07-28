<template>
  <div>
    <!-- gapless columns -->
    <div class="columns col-gapless height">
      <div class="column col-6 gradient" style="display: flex">
        <div class="container" style="margin:auto">
          <center>
            <h1 style="color:white">
              <b>The Mind</b>
            </h1>
            <small style="color: rgba(255,255,255,0.8); ">Write some of your minds ...</small>
          </center>
        </div>
      </div>
      <div class="column col-6" style="display: flex">
        <!-- form input control -->
        <div class="login_block" style="margin:auto">
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
          <div class="form-group">
            <a href=''>Registration</a> | <a href=''>Forgot password?</a>
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
      const result = await this.$store.dispatch("login", {
        username: this.username,
        password: this.password
      });
      localStorage.setItem("token", result.data.accessToken);
      this.$router.push("/mainpage");
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
  vertical-align: middle;
  display: table-cell;
}
</style>