<template>
  <div>
    <ul class="tab">
      <li class="tab-item active">
        <router-link to="/mainpage">Home</router-link>
      </li>
      <li class="tab-item">
        <a href="#">Notification</a>
      </li>
      <li class="tab-item">
        <a href="#">News</a>
      </li>
      <li class="tab-item tab-action">
        <div class="input-group input-inline">
          <input class="form-input input-sm" type="text" />
          <button class="btn btn-primary btn-sm input-group-btn">Search</button>
        </div>
      </li>
      <li class="tab-item tab-action">
        <button v-on:click="logout">Logout</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>