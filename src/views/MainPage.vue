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
            v-bind:isMainPage="true"
            v-on:openFollowers="handlerFollowers"
            v-on:openFollowing="handlerFollowing"
          />
        </div>
        <div class="column col-8">
          <div class="panel">
            <div class="panel-body" style="padding: 20px">
              <MindForm v-on:postMind="postMind" />

              <div style="margin-top:20px">
                <Mind v-for="mind in this.minds" :item="mind" />
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
import Mind from "../components/Mind";
import Panel from "../components/Panel";
import MindForm from "../components/MindForm";
import Navbar from "../components/Navbar";

export default {
  data() {
    return {
      minds: [],
      user: {},
      mindText: "",
      isModelActive: false,
      followers: [],
      following: [],
    };
  },

  async mounted() {
    this.updateData();
  },

  watch: {},

  methods: {
    async postMind(mind) {
      const data = { body: mind };
      console.log(mind);
      const result = await this.$store.dispatch("postMind", data);
      console.log(result);
      this.updateData();
    },

    async updateData() {
      console.log("updateUser");
      this.minds = (await this.$store.dispatch("getFollowingPost")).data;
      this.user = (await this.$store.dispatch("getAuthUserInfo")).data;
    },

    async handlerFollowers() {
      this.following = []
      this.isModelActive = true;
      this.followers = (
        await this.$store.dispatch("getFollowers", { userId: this.user.id })
      ).data;
      console.log(this.followers);
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
  components: { Mind, Panel, MindForm, Navbar }
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