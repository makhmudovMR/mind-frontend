<template>
  <div>
    <div class="my_container">
      <div class="columns">
        <div class="column col-12">
          <Navbar />
        </div>
      </div>

      <div class="poster" style="margin-top:20px">
        <h3>The Poster</h3>
        <h6>Always here...</h6>
      </div>

      <div class="columns" style="margin-top:10px">
        <div class="column col-4">
          <Panel
            v-bind:user="this.user"
            v-bind:followed="this.followed"
            v-on:updateData="updateData"
          />
        </div>
        <div class="column col-8">
          <div class="panel">
            <div class="panel-body" style="padding: 20px">
              <div style="margin-top:20px">
                <Mind v-for="mind in this.userMinds" v-bind:item="mind" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {
    Panel: () => import("../components/Panel"),
    Mind: () => import("../components/Mind"),
    Navbar: () => import("../components/Navbar"),
  },

  props: ["userId"],

  data() {
    return {
      user: {
        firstname: "null",
        lastname: "null",
        followingLength: "null",
        followerLength: "null",
      },

      userMinds: [],

      followed: null,
    };
  },

  async mounted() {
    this.userMinds = (
      await this.$store.dispatch("getMindsByUserId", { userId: this.userId })
    ).data;

    this.user = (
      await this.$store.dispatch("getUserInfo", { userId: this.userId })
    ).data;

    this.followed = (
      await this.$store.dispatch("getRelation", {
        userId: this.userId,
      })
    ).data;
    console.log("laky", this.relation);
  },

  methods: {
    async updateData() {
      this.userMinds = (
        await this.$store.dispatch("getMindsByUserId", { userId: this.userId })
      ).data;

      this.user = (
        await this.$store.dispatch("getUserInfo", { userId: this.userId })
      ).data;

      this.followed = (
        await this.$store.dispatch("getRelation", {
          userId: this.userId,
        })
      ).data;
    },
  },
};
</script>

<style>
.poster h3,
.poster h6 {
  color: white;
}

.poster {
  padding: 20px;
  min-height: 100px;
  max-height: 120px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    39deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(67, 5, 170, 1) 50%,
    rgba(6, 221, 249, 1) 100%
  );
}

.my_container {
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .my_container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .my_container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .my_container {
    width: 1170px;
  }
}
</style>