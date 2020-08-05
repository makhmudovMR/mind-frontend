<template>
  <ul class="menu">
    <li class="menu-item">
      <label>{{user.firstname}} {{user.lastname}}</label>
    </li>
    <li class="divider"></li>
    <!-- menu header text -->
    <li class="menu-item">
      <a href="#">
        <i class="icon icon-link"></i>
        Settings
      </a>
    </li>
    <li class="menu-item">
      <a href="#" v-on:click="emitFollowing">Following</a>
      <div class="menu-badge">
        <label class="label">{{user.followingLength}}</label>
      </div>
    </li>
    <li class="menu-item">
      <a href="#" v-on:click="emitFollowers">Followers</a>
      <div class="menu-badge">
        <label class="label">{{user.followerLength}}</label>
      </div>
    </li>
    <li v-if="!isMainPage">
      <button class="btn btn-primary" v-if="followed" v-on:click="buttonHandler">Followed</button>
      <button class="btn" v-else v-on:click="buttonHandler">Follow</button>
      &nbsp;
      <button class="btn btn-success" v-if="followed" v-on:click="chatHandler">Chat</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["user", "isMainPage", "followed"],

  methods: {
    buttonHandler() {
      console.log("test");
      this.$store.dispatch("followToUser", { userId: this.user.id });
      this.$emit("updateData");
    },

    chatHandler(){
      this.$emit('createChat');
    },

    emitFollowers(){
      this.$emit('openFollowers');
    },

    emitFollowing(){
      this.$emit('openFollowing')
    }
  },
};
</script>