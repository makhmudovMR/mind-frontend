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
          <Panel v-bind:user="this.user" />
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
      mindText: '',
    };
  },

  async mounted() {
    this.updateData();
  },

  watch: {

  },

  methods: {
    async postMind(mind){
      const data = {body:mind}
      console.log(mind);
      const result = await this.$store.dispatch('postMind', data)
      console.log(result);
      this.updateData();
    },

    async updateData(){
      console.log('updateUser');
      this.minds = (await this.$store.dispatch("getFollowingPost")).data;
      this.user = (await this.$store.dispatch("getAuthUserInfo")).data;
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