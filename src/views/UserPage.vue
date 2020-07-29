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
            v-on:openFollowers="handlerFollowers"
            v-on:openFollowing="handlerFollowing"
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

      <div class="modal" v-bind:class="{active:isModelActive}" id="modal-id">
        <!-- вывести в отдельный компонент -->
        <a href="#close" class="modal-overlay" aria-label="Close"></a>
        <div class="modal-container">
          <div class="modal-header">
            <a
              href="#close"
              v-on:click="closeModal"
              class="btn btn-clear float-right"
              aria-label="Close"
            ></a>
            <div class="modal-title h5">Modal title</div>
          </div>
          <div class="modal-body">
            <div class="content">
              <div>

                <div class="tile" v-for="f in this.following">
                  <div class="tile-icon">
                    <div class="example-tile-icon">
                      <i class="icon icon-file centered"></i>
                    </div>
                  </div>
                  <div class="tile-content">
                    <p class="tile-title">{{f.firstname}} {{f.lastname}}</p>
                    <p
                      class="tile-subtitle"
                    >{{f.username}}
                    <hr>
                    </p>
                  </div>
                </div>

                <div class="tile" v-for="f in this.followers">
                  <div class="tile-icon">
                    <div class="example-tile-icon">
                      <i class="icon icon-file centered"></i>
                    </div>
                  </div>
                  <div class="tile-content">
                    <p class="tile-title">{{f.firstname}} {{f.lastname}}</p>
                    <p
                      class="tile-subtitle"
                    >{{f.username}}
                    <hr>
                    </p>
                  </div>
                </div>

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
        following: [],
        followers: [],

      },
      isModelActive: false,
      following:[],
      followers: [],

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

    async handlerFollowers() {
      this.following = []
      this.isModelActive = true;
      this.followers = (
        await this.$store.dispatch("getFollowers", { userId: this.user.id })
      ).data;
    },

    async handlerFollowing(){
      this.followers = []
      this.isModelActive = true
      this.following = (await this.$store.dispatch('getFollowing', {userId: this.user.id})).data
    },

    closeModal() {
      this.isModelActive = false;
    }
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